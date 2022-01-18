<template>
  <div class="field-base">
    <div class="flex items-center" v-if="$slots.append || appendIcon">
      <slot name="append">
        <mdicon v-if="appendIcon" :name="appendIcon" class="text-gray-500" strokeWidth="2" width="18"/>
      </slot>
    </div>
    <div class="flex flex-col justify-center w-full">
      <slot name="default">
        Empty slot: default
      </slot>
      <slot name="message"/>
    </div>
    <div class="flex items-center" v-if="$slots.append || prependIcon">
      <slot name="prepend">
        <mdicon
            v-if="prependIcon" :name="prependIcon"
            strokeWidth="2" width="18"
            :class="{'text-gray-500 ': true, 'animate-spin': spin}"
        />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseField",
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    appendIcon: String,
    prependIcon: String,
    spin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
div.field-base {
  @apply px-5 p-2 flex flex-row justify-between items-center gap-3 tracking-tight rounded-xl border focus-within:shadow duration-75
}
</style>
