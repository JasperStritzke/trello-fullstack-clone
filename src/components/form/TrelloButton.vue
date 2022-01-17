<template>
  <button
      :class="{
        'btn-base': true, //Always include base
        [computedRounded]: true,
        ['btn-' + this.color]: !!this.color && !this.transparent,
        ['btn-only-icon']: this.onlyIcon
      }"
      v-bind="$attrs">
    <slot name="append">
      <mdicon v-if="appendIcon" :name="appendIcon" width="16"/>
    </slot>
    <slot name="content">
      {{ label }}
    </slot>
    <slot name="prepend">
      <mdicon v-if="prependIcon" :name="prependIcon" width="16"/>
    </slot>
  </button>
</template>

<script>
export default {
  name: "TrelloButton",
  props: {
    label: String,
    appendIcon: String,
    prependIcon: String,
    onlyIcon: [Boolean, false],
    rounded: {
      type: String,
      default: "md"
    },
    color: {
      type: String,
      default: "gray"
    },
    transparent: {type: Boolean, default: false},
  },
  computed: {
    //Purging purpose
    computedRounded() {
      switch (this.rounded) {
        case "sm":
          return "border-sm";
        case "normal":
          return "border";
        case "md":
          return "rounded-md";
        case "lg":
          return "rounded-lg"
        case "xl":
          return "rounded-xl"
        case "2xl":
          return "rounded-2xl"
        case "3xl":
          return "rounded-3xl"
        case "full":
          return "rounded-full"
        default:
          return "rounded-none"
      }
    },
  }
}
</script>
<style scoped>
.btn-base {
  @apply px-5 p-2 flex flex-row justify-center items-center justify-center gap-3 tracking-tight
}

.btn-gray {
  @apply bg-gray-100 text-gray-500 hover:bg-gray-200 active:bg-gray-300
}

.btn-primary {
  @apply bg-primary-100 text-white px-3 active:bg-primary-300 hover:bg-primary-200
}

.btn-only-icon {
  @apply px-3
}
</style>
