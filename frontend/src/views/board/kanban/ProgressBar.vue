<template>
  <div class="flex flex-col gap-2">
    <div class="bg-gray-200 rounded-full w-full overflow-hidden h-2">
      <div class="transition-all duration-50 h-full rounded-full"
           :style="{width: `${percentage*100}%`, backgroundColor: color}"></div>
    </div>
    <div class="flex justify-between font-medium tracking-tight">
      <p class="text-gray-500">Progress</p>
      <p>{{ Math.floor(percentage * 100) }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ['percentage', 'color']
}
</script>

<style scoped>

</style>
