import React from "react";

export interface CardProps {
  banner?: string;
  game_code?: string;
  game_name?: string;
  id?: number;
  lang?: string;
  providerCode?: string;
  sort?: number;
  status?: number;
}

export interface ProgressBarProps {
  current: number;
  total: number;
}

export interface LoadMoreProps {
  setGameCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface CardsProps {
  title: string;
}