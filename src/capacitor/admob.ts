// src/capacitor/admob.ts
import type { PluginListenerHandle } from '@capacitor/core';
import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  BannerAdSize,
  BannerAdPosition
} from '@capacitor-community/admob';

const isIOS = Capacitor.getPlatform() === "ios";

const IOS_BANNER_ID = "ca-app-pub-7033641693735994/6176167746";
// const IOS_INTERSTITIAL_ID = "ca-app-pub-7033641693735994/1183695518"; // 👈 not used for now

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
      isTesting: false, 
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

// 🚫 TEMPORARILY DISABLED FOR APP REVIEW
export async function showInterstitialOnce() {
  console.log("ℹ️ Interstitials temporarily disabled for App Store review.");
  return;
}
