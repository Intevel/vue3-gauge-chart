<script setup lang="ts">
import { ref } from "vue";
import { GaugeMeter, GaugeMeterOptions } from ".";

const options: GaugeMeterOptions = {
  areaWidth: 600,
  hasNeedle: true,
  needleColor: "black",
  arcColors: ["rgb(255, 84, 84)", "rgb(239, 214, 19)", "rgb(61, 204, 91)"],
  arcDelimiters: [40, 60],
  rangeLabel: ["50", "300"],
  needleStartValue: 100,
  centralLabel: "Bar",
  needleValue: 100,
};
</script>

<template>
  <div>
    <GaugeMeter :options="options" />
  </div>
</template>
