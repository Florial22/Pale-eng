// src/capacitor/admob.ts
import { Capacitor } from "@capacitor/core";
import {
  AdMob,
  BannerAdSize,
  BannerAdPosition,
} from "@capacitor-community/admob";

const isIOS = Capacitor.getPlatform() === "ios";

// 🔹 Your real iOS ad units
const IOS_BANNER_ID = "ca-app-pub-7033641693735994/6176167746";
const IOS_INTERSTITIAL_ID = "ca-app-pub-7033641693735994/1183695518";

export async function initAdMob() {
  if (!isIOS) {
    console.log("🔕 AdMob disabled — non-iOS");
    return;
  }
  try {
    await AdMob.initialize();
    console.log("✅ AdMob initialized (iOS)");
  } catch (err) {
    console.warn("❌ AdMob init error:", err);
  }
}

export async function showBottomBanner() {
  if (!isIOS) {
    console.log("🔕 Banner disabled — non-iOS");
    return;
  }

  try {
    await AdMob.showBanner({
      adId: IOS_BANNER_ID,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
    });
    console.log("📢 iOS banner requested:", IOS_BANNER_ID);
  } catch (err) {
    console.warn("❌ Banner failed:", err);
  }
}

export async function hideBanner() {
  if (!isIOS) return;
  try {
    await AdMob.hideBanner();
  } catch (err) {
    console.warn("❌ Hide banner error:", err);
  }
}

// 🔹 Interstitial shown on demand (quiz exit / quiz finished)
export async function showInterstitialOnce() {
  if (!isIOS) {
    console.log("🔕 Interstitial disabled — non-iOS");
    return;
  }

  try {
    // 1) Load
    await AdMob.prepareInterstitial({
      adId: IOS_INTERSTITIAL_ID,
      // ⚠️ No isTesting here → real interstitial
    });

    // 2) Show
    await AdMob.showInterstitial();
    console.log("🎬 Interstitial shown:", IOS_INTERSTITIAL_ID);
  } catch (err) {
    console.warn("❌ Interstitial error:", err);
  }
}
