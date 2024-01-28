<template>
  <div class="vue-gauge-item" ref="gaugeChart"></div>
</template>

<script setup lang="ts">
import * as GaugeChart from "gauge-chart";
import { onMounted, ref, watch } from "vue";
import { GaugeMeterOptions } from "..";

const gaugeChart = ref<HTMLElement | null>(null);
const chart = ref<GaugeChart.GaugeInterface | null>(null);
const props = defineProps<{ options: GaugeMeterOptions }>();
const needleValue = ref(props.options.needleValue);

onMounted(() => {
  if (gaugeChart.value) {
    chart.value = GaugeChart.gaugeChart(
      gaugeChart.value,
      props.options.areaWidth,
      props.options
    );
  }
});

watch(needleValue, (value) => {
  if (chart.value) {
    chart.value.updateNeedle(value);
  }
});
</script>
