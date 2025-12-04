import { useEffect, useState } from 'react';
import { HomePage } from './components/HomePage';
import { PracticePage } from './components/PracticePage';
import { SettingsPage } from './components/SettingsPage';
import { Category } from './types';
import { initAdMob, showBottomBanner } from './capacitor/admob';
import { requestNotificationPermission, scheduleDailyReminder } from './capacitor/notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { CATEGORIES } from './data/categories';
import { Theme, getInitialTheme, applyTheme } from './utils/theme';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [soundOn, setSoundOn] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    // default = true unless explicitly "false"
    return localStorage.getItem('soundOn') !== 'false';
  });

  // keep soundOn in localStorage
  useEffect(() => {
    localStorage.setItem('soundOn', String(soundOn));
  }, [soundOn]);

  // Ads
  useEffect(() => {
    const setupAds = async () => {
      await initAdMob();
      await showBottomBanner();
    };
    setupAds();
  }, []);

  // Notifications (ON by default on first launch)
  useEffect(() => {
    const setupNotifications = async () => {
      const alreadyAsked = localStorage.getItem('notificationsAsked');
      const enabled = localStorage.getItem('notificationsOn') === 'true';

      if (enabled) {
        await scheduleDailyReminder();
        return;
      }

      if (!alreadyAsked) {
        const perm = await requestNotificationPermission();
        localStorage.setItem('notificationsAsked', 'true');

        if (perm.display === 'granted') {
          localStorage.setItem('notificationsOn', 'true');
          await scheduleDailyReminder();
        } else {
          localStorage.setItem('notificationsOn', 'false');
        }
      }
    };

    setupNotifications();
  }, []);

  // Tap notification → open category
  useEffect(() => {
    const subPromise = LocalNotifications.addListener(
      'localNotificationActionPerformed',
      (event) => {
        const categoryId = event.notification.extra?.categoryId;
        if (!categoryId) return;

        const cat = CATEGORIES.find((c) => c.id === categoryId);
        if (cat) setSelectedCategory(cat);
      }
    );

    return () => {
      subPromise.then((sub) => sub.remove());
    };
  }, []);

  // Theme
  useEffect(() => {
    applyTheme(theme);

    if (theme === 'system' && typeof window !== 'undefined') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme('system');
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }
  }, [theme]);

  return (
    <div className="w-full h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors">
      {/* Main content area */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-full bg-slate-50 dark:bg-slate-900 pt-safe pb-[72px]">
          {!selectedCategory ? (
            <HomePage onSelectCategory={setSelectedCategory} />
          ) : selectedCategory.id === 'settings' ? (
            <SettingsPage
              onBack={() => setSelectedCategory(null)}
              theme={theme}
              onThemeChange={setTheme}
              soundOn={soundOn}
              onSoundChange={setSoundOn}
            />
          ) : (
            <PracticePage
              category={selectedCategory}
              onBack={() => setSelectedCategory(null)}
              soundOn={soundOn}
            />
          )}
        </div>
      </div>
    </div>
  );
}
