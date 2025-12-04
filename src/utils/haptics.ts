// src/utils/haptics.ts
import { Haptics, ImpactStyle } from '@capacitor/haptics';

export async function tapHaptic() {
  try {
    await Haptics.impact({ style: ImpactStyle.Light });
  } catch (err) {
    // On web / non-supported platforms, just ignore
    console.warn('Haptics not available', err);
  }
}
