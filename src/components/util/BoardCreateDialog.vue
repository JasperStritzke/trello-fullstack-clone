<template>
  <trello-dialog :model-value="modelValue" @update:modelValue="e => $emit('update:modelValue', e)" title="Create a board">
    <text-field placeholder="Add board title" class="w-full"/>
    <img src="" alt="cover" ref="coverImage"/>
    <div class="flex justify-between gap-3">
      <image-input-field ref="coverInput" @change="updateCover">
        <template v-slot:activator="{on}">
          <trello-button class="w-1/2" label="Select Cover" append-icon="image" v-on="on"/>
        </template>
      </image-input-field>

      <board-visibility-input v-model="visibility"/>
    </div>

    <div class="flex flex-row gap-3 mt-5">
      <div class="w-full"/>
      <input type="file" ref="yeet" style="display: none;"/>
      <trello-button label="Cancel" color="text" @click="close"/>
      <trello-button label="Create" append-icon="plus" color="primary" @click="create"/>
    </div>
  </trello-dialog>
</template>

<script>
import Backdrop from "./Backdrop.vue";
import BoardVisibilityInput from "../form/BoardVisibilityInput.vue";
import TextField from "../form/TextField.vue";
import TrelloButton from "../form/TrelloButton.vue";
import ImageInputField from "../form/ImageInputField.vue";
import {createImage} from "../../util/image.util";
import TrelloDialog from "./TrelloDialog.vue";

export default {
  name: "BoardCreateDialog",
  components: {TrelloDialog, ImageInputField, TrelloButton, TextField, BoardVisibilityInput, Backdrop},
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visibility: "Public"
    }
  },
  methods: {
    create() {
      this.close()

      console.log(this.$refs.yeet.files[0].name)
    },
    close() {
      this.$emit('update:modelValue', false);
    },
    async updateCover(e) {
      const files = e.target.files;

      const file = files[0];

      this.$refs.coverImage.src = await createImage(file);
    }
  }
}
</script>

<style scoped>

</style>
