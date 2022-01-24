<template>
  <div class="relative">
    <div class="centered-loading">
      <div class="text-primary-600 animate-spin" v-if="!visible">
        <mdicon name="loading"/>
      </div>
    </div>
    <img
        draggable="false"
        :src="src"
        alt="avatar"
        :width="size"
        class="rounded-xl shadow object-cover aspect-square transition-all duration-50"
        :style="{opacity: visible ? 1 : 0}"
        @load="visible = true"
    >
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["src", "size"],
  data() {
    return {
      visible: false
    }
  }
}
</script>
<style scoped>
.centered-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
