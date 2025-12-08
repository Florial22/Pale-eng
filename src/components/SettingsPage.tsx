import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bell,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Languages,
} from "lucide-react";
import {
  requestNotificationPermission,
  scheduleDailyReminder,
  cancelDailyReminder,
} from "../capacitor/notifications";
import { Theme } from "../utils/theme";
import type { TranslationPreference } from "../types";

interface SettingsPageProps {
  onBack: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  soundOn: boolean;
  onSoundChange: (value: boolean) => void;

  // 🔤 NEW: translation preference props
  translationPreference: TranslationPreference;
  onTranslationChange: (value: TranslationPreference) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  onBack,
  theme,
  onThemeChange,
  soundOn,
  onSoundChange,
  translationPreference,
  onTranslationChange,
}) => {
  const [notificationsOn, setNotificationsOn] = useState(false);

  useEffect(() => {
    setNotificationsOn(localStorage.getItem("notificationsOn") === "true");
  }, []);

  // SOUND
  const toggleSound = () => {
    const newValue = !soundOn;
    onSoundChange(newValue);
    // localStorage is handled in App
  };

  // NOTIFICATIONS
  const toggleNotifications = async () => {
    const newValue = !notificationsOn;

    if (newValue) {
      const perm = await requestNotificationPermission();

      if (perm.display === "granted") {
        await scheduleDailyReminder();
        setNotificationsOn(true);
        localStorage.setItem("notificationsOn", "true");
      } else {
        alert("Notifications are disabled in system settings.");
        return;
      }
    } else {
      await cancelDailyReminder();
      setNotificationsOn(false);
      localStorage.setItem("notificationsOn", "false");
    }
  };

  const changeTheme = (val: Theme) => {
    onThemeChange(val);
    localStorage.setItem("theme", val);
  };

  const changeTranslationPref = (val: TranslationPreference) => {
    onTranslationChange(val);
    localStorage.setItem("translationPreference", val);
  };

  return (
    <div className="w-full h-full bg-slate-50 dark:bg-slate-900 flex flex-col">
      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-10 pt-safe bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-6 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 text-slate-700 dark:text-slate-100" />
        </button>

        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          Settings
        </h1>
      </div>

      {/* CONTENT */}
      <div className="mt-20 px-6 pb-20 space-y-8">
        {/* SOUND */}
        <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3">
            {soundOn ? (
              <Volume2 className="w-5 h-5 text-slate-700 dark:text-slate-100" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-500 dark:text-slate-300" />
            )}
            <span className="font-medium text-slate-800 dark:text-slate-100">
              Sound Effects
            </span>
          </div>
          <button
            onClick={toggleSound}
            className={`w-12 h-6 rounded-full transition ${
              soundOn ? "bg-indigo-500" : "bg-slate-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition ml-1 ${
                soundOn ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* NOTIFICATIONS */}
        <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-slate-700 dark:text-slate-100" />
            <span className="font-medium text-slate-800 dark:text-slate-100">
              Daily Reminder
            </span>
          </div>
          <button
            onClick={toggleNotifications}
            className={`w-12 h-6 rounded-full transition ${
              notificationsOn ? "bg-indigo-500" : "bg-slate-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition ml-1 ${
                notificationsOn ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* THEME */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Theme
          </h3>

          <div className="flex flex-col space-y-2">
            <button
              onClick={() => changeTheme("light")}
              className={`flex items-center gap-3 p-2 rounded-lg ${
                theme === "light"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              <Sun className="w-5 h-5" />
              Light
            </button>

            <button
              onClick={() => changeTheme("dark")}
              className={`flex items-center gap-3 p-2 rounded-lg ${
                theme === "dark"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              <Moon className="w-5 h-5" />
              Dark
            </button>

            <button
              onClick={() => changeTheme("system")}
              className={`flex items-center gap-3 p-2 rounded-lg ${
                theme === "system"
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              <Sun className="w-5 h-5" />
              System
            </button>
          </div>
        </div>

        {/* 🌐 TRANSLATION LANGUAGE */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
            <Languages className="w-4 h-4 text-slate-500 dark:text-slate-300" />
            Translation language
          </h3>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
            Choose languge translations appear on the back of your cards.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => changeTranslationPref("auto")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                translationPreference === "auto"
                  ? "bg-indigo-50 border-indigo-400 text-indigo-700"
                  : "bg-transparent border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200"
              }`}
            >
              Auto (device language)
            </button>

            <button
              onClick={() => changeTranslationPref("fr")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                translationPreference === "fr"
                  ? "bg-indigo-50 border-indigo-400 text-indigo-700"
                  : "bg-transparent border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200"
              }`}
            >
              Français
            </button>

            <button
              onClick={() => changeTranslationPref("es")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                translationPreference === "es"
                  ? "bg-indigo-50 border-indigo-400 text-indigo-700"
                  : "bg-transparent border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200"
              }`}
            >
              Español
            </button>

            <button
              onClick={() => changeTranslationPref("none")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                translationPreference === "none"
                  ? "bg-indigo-50 border-indigo-400 text-indigo-700"
                  : "bg-transparent border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200"
              }`}
            >
              No translation
            </button>
          </div>
        </div>

        {/* APP VERSION */}
        <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-12">
          Pale v1.1.0
        </p>
      </div>
    </div>
  );
};
