/**
 * @fileoverview This file defines the `Timeframe` interface, which represents the structure of a timeframe object in the application.
 * It includes properties for the current and previous values of a metric (e.g., hours worked, tasks completed).
 */

/**
 * @interface Timeframe
 * @description
 * Represents a timeframe object in the application. Each timeframe contains two key metrics:
 * - `current`: The value of the metric for the current duration (e.g., today, this week, this month).
 * - `previous`: The value of the metric for the previous duration (e.g., yesterday, last week, last month).
 */
export interface Timeframe {
  /**
   * @property {number} current
   * @description
   * The value of the metric for the current duration.
   * For example, if the timeframe is "daily," this represents the value for today.
   */
  current: number;

  /**
   * @property {number} previous
   * @description
   * The value of the metric for the previous duration.
   * For example, if the timeframe is "daily," this represents the value for yesterday.
   */
  previous: number;
}
