# vue3-gauge-chart ⏲

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

⏲ Vue 3 wrapper around [gauge-chart](https://github.com/greetclock/gauge-chart) 

## Install

```sh

# Using npm
npm install vue3-gauge-chart

# Using yarn
yarn add vue3-gauge-chart
```

## Usage

```vue [example.vue]
<script setup lang="ts">
import { GaugeMeter, GaugeMeterOptions } from "vue3-gauge-chart";

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
```

## License

Published under MIT - Made with ❤️ by Conner Bachmann

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vue3-gauge-chart/latest.svg
[npm-version-href]: https://npmjs.com/package/vue3-gauge-chart
[npm-downloads-src]: https://img.shields.io/npm/dt/vue3-gauge-chart.svg
[npm-downloads-href]: https://npmjs.com/package/vue3-gauge-chart
[license-src]: https://img.shields.io/npm/l/vue3-gauge-chart.svg
[license-href]: https://npmjs.com/package/vue3-gauge-chart