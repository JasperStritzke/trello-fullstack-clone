<template>
  <input class="hidden" type="file" ref="fileInput" @change="e => $emit('change', e)"/>
  <slot name="activator" :on="{click}" :get="{getFiles}"/>
</template>

<script>
export default {
  name: "ImageInputField",
  emits: ["change"],
  methods: {
    getFiles() {
      return this.$refs.fileInput.files
    },
    click() {
      this.$refs.fileInput.click()
    },
  }
}
</script>

<style scoped>

</style>
