import { Timeframe } from './timeframe.model';

/**
 * @fileoverview This file defines the `Ticket` interface, which represents the structure of a ticket object in the application.
 * It includes properties such as the ticket title and timeframes for different durations (daily, weekly, monthly).
 */

/**
 * @interface Ticket
 * @description
 * Represents a ticket object in the application. Each ticket contains a title and timeframes for various durations.
 * The timeframes are categorized into daily, weekly, and monthly, each represented by a `Timeframe` object.
 */
export interface Ticket {
  /**
   * @property {string} title
   * @description
   * The title of the ticket. This provides a brief description or name for the ticket.
   */
  title: string;

  /**
   * @property {Object} timeframes
   * @description
   * An object containing timeframes for different durations. Each duration is represented by a `Timeframe` object.
   */
  timeframes: {
    /**
     * @property {Timeframe} daily
     * @description
     * Represents the timeframe data for a daily duration. This includes metrics such as hours worked, tasks completed, etc.
     */
    daily: Timeframe;

    /**
     * @property {Timeframe} weekly
     * @description
     * Represents the timeframe data for a weekly duration. This includes aggregated metrics over a week.
     */
    weekly: Timeframe;

    /**
     * @property {Timeframe} monthly
     * @description
     * Represents the timeframe data for a monthly duration. This includes aggregated metrics over a month.
     */
    monthly: Timeframe;
  };
}
