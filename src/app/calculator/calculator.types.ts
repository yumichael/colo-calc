export const LINE_LENGTH = 14;
export const LINE_HEIGHT = 5;

export enum AiType {
  Melee = '🗡️',
  Ranged = '🏹',
}

export const defaultAiType = AiType.Melee;

export interface Tile {
  id: number;
  value?: string;
  disabled?: boolean;
  aiType?: AiType;
  onClick?: (tile: Tile) => void;
  onAiChange?: (tile: Tile) => void;
}

export interface Party {
  name: string;
  prefix: string;
  size: number;
  tiles: Array<Tile>
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface TileDistance {
  tile: Tile;
  distance: number;
}