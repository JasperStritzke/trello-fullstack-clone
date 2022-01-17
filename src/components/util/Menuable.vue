<template>
  <div ref="root">
    <slot name="activator" :on="{mouseenter, mouseleave, keypress: keypress, mouseup: mouseup}"/>
  </div>
  <transition name="slide-in">
    <div
        v-if="tooltip" v-click-away="clickAway"
        class="absolute"
        :style="{top: `${top}px`, left: `${left}px`, maxWidth: `${maxWidth}px`}"
    >
      <div :class="{'bg-opacity-70 bg-slate-900 text-white w-fit p-1 rounded': props.tooltip}">
        <slot :close="close"/>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";

const root = ref(null)

const props = defineProps({
  position: String,
  offset: {
    type: Number,
    default: 10
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  activateOnlyOnClick: {
    type: Boolean,
    default: false,
  },
  maxWidthFactor: {
    type: Number,
    default: 2.5
  },
  ignoreMaxWidth: {
    type: Boolean,
    default: false,
  },
  closeOnClick: {
    type: Boolean,
    default: true,
  }
})

onMounted((() => {
  if (root.value === null) {
    return;
  }

  const element = root.value as HTMLElement;
  const rect = element.getBoundingClientRect();

  if (!props.ignoreMaxWidth) {
    maxWidth.value = element.offsetWidth * props.maxWidthFactor
  }

  top.value = rect.top + window.scrollY + element.offsetHeight + props.offset;
  left.value = rect.left + (document.querySelector('#container')?.getBoundingClientRect().left || 0)
}))

let tooltip = ref(false)
let top = ref(60)
let left = ref(60)
let maxWidth = ref(99999)

function open() {
  tooltip.value = true;
}

function close() {
  tooltip.value = false
}

function mouseenter() {
  if (props.activateOnlyOnClick) return;
  open()
}

function mouseleave() {
  if (props.activateOnlyOnClick) return;
  close()
}

function clickAway() {
  if (props.closeOnClick) {
    close()
  }
}

function mouseup(e: MouseEvent) {
  if (props.activateOnlyOnClick && e.button === 0) {
    tooltip.value = !tooltip.value
  }
}

function keypress({code}: KeyboardEvent) {
  if (code === "Enter") {
    tooltip.value = !tooltip.value
  }
}
</script>
