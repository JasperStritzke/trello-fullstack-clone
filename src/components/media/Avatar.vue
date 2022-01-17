<template>
  <slot>
    <img
        draggable="false"
        :src="src"
        alt="avatar" :width="size"
        class="rounded-xl shadow object-cover aspect-square"
    >
  </slot>
</template>

<script>
export default {
  name: "Avatar",
  props: ["src", "size"]
}
</script>

<style scoped>

</style>
