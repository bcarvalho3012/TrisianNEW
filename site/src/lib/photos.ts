// Photo windows. A window shows its photograph once the file exists in src/assets/photos/;
// until then it shows coded daylight. Nothing else on the page changes either way.
import type { ImageMetadata } from 'astro';
import manifest from '../data/photos.json';

export type SlotId = keyof typeof manifest.slots;

const found = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const byName = new Map<string, ImageMetadata>();
for (const [file, mod] of Object.entries(found)) {
  byName.set(file.split('/').pop()!.replace(/\.[^.]+$/, ''), mod.default);
}

export const slotSpec = (slot: SlotId) => manifest.slots[slot];
export const photoFor = (slot: SlotId) => byName.get(manifest.slots[slot].file);
export const hasPhoto = (slot: SlotId) => byName.has(manifest.slots[slot].file);

/** The desk through the eras is shown as a set or not at all. */
const eraMap = manifest.eras as Record<string, SlotId>;
export const eraSlot = (year: string): SlotId | undefined => eraMap[year];
export const erasReady = Object.values(eraMap).every(hasPhoto);
