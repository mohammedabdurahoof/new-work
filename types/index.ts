import React, { ReactNode } from "react";

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

export interface DrawCardProps {
  logoSrc: string;
  betAddress: string;
  betAmount: number;
  drawTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}


export interface PopularCardProps {
  area?: string;
  areaIconSrc: string;
  drawDate: string;
  drawTitle: string;
  topPrizeAmount: string;
}

export interface Winner {
  player: string;
  lottery: string;
  prize: string;
  avatarSrc: string;
  userName: string;
  lotteryName: string;
  priceAmount: string;
  priceIconSrc: string;
}

interface Lottery {
  order: number;
  name: string;
  iconSrc: string;
  nextDraw: string;
  amount: number;
}

export interface TopWinningProps {
  lotteries: Lottery[];
}

export interface LatestResultsTableProps {
  lotteryName: string;
  lotteryAreaIconSrc: string;
  lotteryDate: string;
  jackpotNumbers: number[];
}

export interface TabProps {
  order: number;
  desc: string;
  children: ReactNode;
  onClick: React.Dispatch<React.SetStateAction<number>>;
  tabIndex: number;
}

export interface CardsProps {
  title: string;
}