import "./main.css";

console.log("Hello World!");

/**
 * # Core ideas
 *
 * - Animate defrag
 * - Options
 *  - HD size
 *  - HD speed
 *  - Theme
 *  - Sound on/off
 *  - Damage level
 *
 */

enum Theme {
  Win95 = "Win95",
  Dos = "Dos",
}

interface DefragOptions {
  hdSize: number;
  hdSpeed: number;
  theme: Theme;
  sound: boolean;
  damageLevel: number;
}

enum SectorState {
  Used = "User",
  Reading = "Reading",
  Bad = "Bad",
  Unused = "Unused",
  Writing = "Writing",
  Unmoved = "Unmoved",
}

const defaultOptions: DefragOptions = {
  hdSize: 10,
  hdSpeed: 7,
  theme: Theme.Dos,
  sound: true,
  damageLevel: 3,
};

export { type DefragOptions, defaultOptions, SectorState };
