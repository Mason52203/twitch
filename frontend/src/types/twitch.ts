// Contract for game structural details displayed in the side selection panel
export interface Game {
  id: string;
  name: string;
  box_art_url: string;
}


// Contract for live resources dynamically mapped to the central layout grids
export interface TwitchItem {
  twitch_id: string;
  title: string;
  url?: string;
  thumbnail_url: string;
  broadcaster_name: string;
  game_id: string;
  item_type: "STREAM" | "VIDEO" | "CLIP";
}
