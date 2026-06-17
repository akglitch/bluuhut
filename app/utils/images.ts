/**
 * Curated, verified Unsplash imagery for the glass/blur visual layer.
 * All IDs HEAD-checked (HTTP 200). `img()` builds a sized, compressed URL.
 */
const BASE = "https://images.unsplash.com/photo-";

export function img(id: string, w = 1600, q = 70) {
  return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  circuit: "1518770660439-4636190af475", // macro circuit board — cobalt tech
  network: "1558494949-ef010cbdcc31", // server / network cabling
  serverRoom: "1497435334941-8c899ee9e8e9", // data-centre racks
  engineer: "1581091226825-a6a2a5aee158", // technician at work
  industrial: "1581092160562-40aa08e78837", // industrial / robotics
  tower: "1542013936693-884638332954", // telecom / structure
  grid: "1473341304170-971dccb5ac1e", // infrastructure lines
  abstractBlue: "1605810230434-7631ac76ec81", // abstract blue tech
};
