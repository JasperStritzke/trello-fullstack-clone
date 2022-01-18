<template>
  <div ref="root">
    <slot name="activator" :on="{mouseenter, mouseleave, keypress: keypress, mouseup: mouseup}"/>
  </div>
  <teleport to="body">
    <transition name="slide-in-bottom">
      <div
          :ref="setMenuElement"
          v-if="tooltip" v-click-away="clickAway"
          class="absolute"
          :style="{top: `${top+offsetTop}px`, left: `${left+offsetLeft}px`, maxWidth: `${maxWidth}px`}"
      >
        <div :class=" {
      'bg-black px-2 bg-opacity-70 text-white w-fit p-1 rounded': props.tooltip}">
          <slot :close="close"/>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import {onMounted, ref, watchEffect} from "vue";

const root = ref(null)
const menuElement = ref(null)

function setMenuElement(e: any) {
  menuElement.value = e
}

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
  },
  centered: {
    type: Boolean,
    default: false
  }
})

if (props.centered) {
  watchEffect(() => {
    if (menuElement.value !== null) {
      const element = <unknown>root.value as HTMLElement
      const menu = <unknown>menuElement.value as HTMLElement

      offsetLeft.value = element.offsetWidth / 2 - menu.offsetWidth / 2
    }
  })
}

onMounted((() => {
  if (root.value === null) {
    return;
  }

  const element = root.value as HTMLElement;
  const rect = element.getBoundingClientRect();

  const width = props.ignoreMaxWidth ? maxWidth.value : element.offsetWidth * props.maxWidthFactor

  if (!props.ignoreMaxWidth) {
    maxWidth.value = width
  }

  top.value = rect.top + window.scrollY + element.offsetHeight + props.offset;
  left.value = rect.left
}))

let tooltip = ref(false)
let top = ref(60),
    offsetTop = ref(0)
let left = ref(60),
    offsetLeft = ref(props.centered ? -1 : 0)
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
