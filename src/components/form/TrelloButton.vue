<template>
  <button
      :class="{
        'btn-base': true, //Always include base
        [computedRounded]: true,
        ['btn-' + this.color]: !!this.color && !this.transparent,
        ['btn-only-icon']: this.onlyIcon,
        'btn-small': this.small,
        'btn-wide': this.wide
      }"
      v-bind="$attrs">
    <slot name="append">
      <mdicon v-if="appendIcon" :name="appendIcon" :width="iconSize"/>
    </slot>
    <slot name="content">
      {{ label }}
    </slot>
    <slot name="prepend">
      <mdicon v-if="prependIcon" :name="prependIcon" :width="iconSize"/>
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
    small: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false,
    },
    transparent: {type: Boolean, default: false},
  },
  computed: {
    iconSize() {
      return this.small ? 12 : 16
    },
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

.btn-small {
  @apply text-sm px-3 p-1
}

.btn-wide {
  @apply px-4
}

/* TEXT */
.btn-text {
  @apply text-gray-500 hover:bg-gray-100 active:bg-gray-200
}

/* GREEN */
.btn-green {
  @apply text-white bg-green-600 hover:bg-green-700 active:bg-green-800
}

/* GRAY */

.btn-gray {
  @apply bg-gray-100 text-gray-500 hover:bg-gray-200 active:bg-gray-300
}

.btn-gray-outline {
  @apply text-gray-500 border border-gray-500 hover:bg-gray-100 active:bg-gray-200
}

/* PRIMARY */
.btn-primary {
  @apply bg-primary-100 text-white px-3 active:bg-primary-300 hover:bg-primary-200
}

/* RED */

.btn-outline-red {
  @apply text-red-600 border border-red-600 hover:bg-red-100 active:bg-red-200
}

/* VARIANTS */
.btn-only-icon {
  @apply px-3
}
</style>
