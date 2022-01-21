<template>
  <backdrop :visible="modelValue"/>

  <transition name="slide-in-bottom">
    <div class="z-50 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center" v-if="modelValue">
      <div class="p-5 bg-white border shadow rounded-lg w-1/4 flex flex-col gap-5">
        <div class="flex justify-between">
          <p class="font-bold text-xl">{{ title }}</p>
          <mdicon name="close" class="cursor-pointer" @click="close"/>
        </div>
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import Backdrop from "./Backdrop.vue";
import BoardVisibilityInput from "../form/BoardVisibilityInput.vue";
import TextField from "../form/TextField.vue";
import TrelloButton from "../form/TrelloButton.vue";
import ImageInputField from "../form/ImageInputField.vue";

export default {
  name: "TrelloDialog",
  components: {ImageInputField, TrelloButton, TextField, BoardVisibilityInput, Backdrop},
  props: {
    title: String,
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    create() {
      this.close()
    },
    close() {
      this.$emit('update:modelValue', false);
    },
  }
}
</script>

<style scoped>

</style>
