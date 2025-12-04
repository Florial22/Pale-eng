import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import { CATEGORIES } from "../data/categories";

/* ----------------------------------------------------
   Helper: Pick a random category
---------------------------------------------------- */
function getRandomCategory() {
  return CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
}

/* ----------------------------------------------------
   Permission (iOS only)
---------------------------------------------------- */
export async function requestNotificationPermission() {
  if (Capacitor.getPlatform() !== "ios") {
    console.log("🔕 Notifications ignored on Android");
    return { display: "granted" }; // fake success
  }

  return await LocalNotifications.requestPermissions();
}

/* ----------------------------------------------------
   Daily Reminder (iOS only)
---------------------------------------------------- */
export async function scheduleDailyReminder() {
  if (Capacitor.getPlatform() !== "ios") {
    console.log("🔕 Not scheduling: notifications disabled on Android");
    return;
  }

  // Clear previous
  await LocalNotifications.cancel({ notifications: [{ id: 1 }] });

  // Compute next 9am
  const now = new Date();
  const firstRun = new Date();
  firstRun.setHours(9, 0, 0, 0);

  if (firstRun <= now) {
    firstRun.setDate(firstRun.getDate() + 1);
  }

  const category = getRandomCategory();
  const body = `Ready for a quick word refresh? Your ${category.label} practice awaits!`;

  await LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: "Pale – Daily Practice",
        body,
        schedule: {
          at: firstRun,
          every: "day",
        },
        // iOS only sound
        sound: "pale_notification.caf",
        extra: { categoryId: category.id },
      },
    ],
  });

  console.log("📅 iOS daily reminder scheduled:", category.id);
}

/* ----------------------------------------------------
   Cancel Reminder (iOS only)
---------------------------------------------------- */
export async function cancelDailyReminder() {
  if (Capacitor.getPlatform() !== "ios") {
    console.log("🔕 Android: No notifications to cancel");
    return;
  }

  await LocalNotifications.cancel({ notifications: [{ id: 1 }] });
  console.log("❌ Daily reminder canceled (iOS)");
}
