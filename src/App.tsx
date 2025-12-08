// src/App.tsx
import { useEffect, useState } from "react";
import { HomePage } from "./components/HomePage";
import { PracticePage } from "./components/PracticePage";
import { SettingsPage } from "./components/SettingsPage";
import { QuizPage } from "./components/QuizPage";
import { Category, TranslationPreference } from "./types";
import { initAdMob, showBottomBanner } from "./capacitor/admob";
import {
  requestNotificationPermission,
  scheduleDailyReminder,
} from "./capacitor/notifications";
import { LocalNotifications } from "@capacitor/local-notifications";
import { CATEGORIES } from "./data/categories";
import { Theme, getInitialTheme, applyTheme } from "./utils/theme";

type Screen = "home" | "practice" | "settings" | "quiz";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [screen, setScreen] = useState<Screen>("home");
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const [soundOn, setSoundOn] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("soundOn") !== "false"; // default true
  });

  // 🌍 NEW: translation preference
  const [translationPreference, setTranslationPreference] =
    useState<TranslationPreference>(() => {
      if (typeof window === "undefined") return "auto";
      const stored = localStorage.getItem("translationPreference");
      if (
        stored === "auto" ||
        stored === "fr" ||
        stored === "es" ||
        stored === "none"
      ) {
        return stored as TranslationPreference;
      }
      return "auto";
    });

  // persist sound
  useEffect(() => {
    localStorage.setItem("soundOn", String(soundOn));
  }, [soundOn]);

  // persist translation preference
  useEffect(() => {
    localStorage.setItem("translationPreference", translationPreference);
  }, [translationPreference]);

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
      const alreadyAsked = localStorage.getItem("notificationsAsked");
      const enabled = localStorage.getItem("notificationsOn") === "true";

      if (enabled) {
        await scheduleDailyReminder();
        return;
      }

      if (!alreadyAsked) {
        const perm = await requestNotificationPermission();
        localStorage.setItem("notificationsAsked", "true");

        if (perm.display === "granted") {
          localStorage.setItem("notificationsOn", "true");
          await scheduleDailyReminder();
        } else {
          localStorage.setItem("notificationsOn", "false");
        }
      }
    };

    setupNotifications();
  }, []);

  // Tap notification → open category in PRACTICE mode
  useEffect(() => {
    const subPromise = LocalNotifications.addListener(
      "localNotificationActionPerformed",
      (event) => {
        const categoryId = event.notification.extra?.categoryId;
        if (!categoryId) return;

        const cat = CATEGORIES.find((c) => c.id === categoryId);
        if (cat) {
          setCurrentCategory(cat);
          setScreen("practice");
        }
      }
    );

    return () => {
      subPromise.then((sub) => sub.remove());
    };
  }, []);

  // Theme
  useEffect(() => {
    applyTheme(theme);

    if (theme === "system" && typeof window !== "undefined") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }
  }, [theme]);

  // Navigation handlers
  const openPractice = (cat: Category) => {
    setCurrentCategory(cat);
    setScreen("practice");
  };

  const openQuiz = (cat: Category) => {
    setCurrentCategory(cat);
    setScreen("quiz");
  };

  const openSettings = () => {
    setScreen("settings");
  };

  const backToHome = () => {
    setScreen("home");
    // we keep currentCategory, no harm
  };

  return (
    <div className="w-full h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors">
      {/* Main content area */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-full bg-slate-50 dark:bg-slate-900 pt-safe pb-[72px]">
          {screen === "home" && (
            <HomePage
              onSelectCategory={openPractice}
              onOpenQuiz={openQuiz}
              onOpenSettings={openSettings}
            />
          )}

          {screen === "settings" && (
            <SettingsPage
              onBack={backToHome}
              theme={theme}
              onThemeChange={setTheme}
              soundOn={soundOn}
              onSoundChange={setSoundOn}
              translationPreference={translationPreference}
              onTranslationChange={setTranslationPreference}
            />
          )}

          {screen === "practice" && currentCategory && (
            <PracticePage
              category={currentCategory}
              onBack={backToHome}
              soundOn={soundOn}
              translationPreference={translationPreference}
            />
          )}

          {screen === "quiz" && currentCategory && (
            <QuizPage
              category={currentCategory}
              onBack={backToHome}
              soundOn={soundOn}
            />
          )}
        </div>
      </div>
    </div>
  );
}
