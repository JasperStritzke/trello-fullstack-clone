<template>
  <div class="field-base">
    <div class="flex items-center" v-if="$slots.append || appendIcon">
      <slot name="append">
        <mdicon v-if="appendIcon" :name="appendIcon" class="text-gray-500" strokeWidth="2" width="16"/>
      </slot>
    </div>
    <div class="flex flex-col justify-center">
      <slot name="default">
        Empty slot: default
      </slot>
      <slot name="message"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseField",
  props: ["outlined", "appendIcon", "prependIcon", "valid"]
}
</script>

<style scoped>
div.field-base {
  @apply px-5 p-2 flex flex-row justify-center items-center justify-center gap-3 tracking-tight border rounded-xl focus-within:shadow
}
</style>
