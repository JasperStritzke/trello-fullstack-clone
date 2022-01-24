<template>
  <div class="relative overflow-hidden rounded-full min-w-fit select-none">
    <div class="p-1 px-4 font-medium text-sm tracking-tight" :style="{color: badge.color}">
      {{ badge.name }}
    </div>
    <div class="absolute top-0 bottom-0 left-0 right-0 opacity-20" :style="{backgroundColor: badge.color}"/>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: ["badge"]
}
</script>
