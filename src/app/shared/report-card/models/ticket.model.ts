import { Timeframe } from './timeframe.model';

export interface Ticket {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}
