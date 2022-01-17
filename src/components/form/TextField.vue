<template>
  <base-field v-bind="$props" class="custom-field">
    <input
        :placeholder="placeholder" class="outline-none"
        :value="modelValue" @input="e => $emit('update:modelValue', e)"
    />
  </base-field>
</template>

<script>

import BaseField from "../../components/form/BaseField.vue";

export default {
  name: "TextField",
  components: {BaseField},
  props: {
    modelValue: String,
    placeholder: String
  },
  extends: BaseField,
  emits: ['update:modelValue']
}
</script>

<style scoped>
</style>
