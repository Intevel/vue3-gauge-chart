export { default as GaugeMeter } from "./components/gauge-meter.vue";

// types not exported by gauge-chart
export interface GaugeMeterOptions {
  areaWidth: number;
  needleValue: number;
  needleColor: string;
  arcColors: string[];
  rangeLabel: string[];
  centralLabel: string;
  hasNeedle?: boolean;
  arcDelimiters?: number[];
  outerNeedle?: boolean;
  needleStartValue?: number;
  needleUpdateSpeed?: number;
  arcPadding?: number;
  arcPaddingColor?: string;
  arcLabels?: string[];
}
