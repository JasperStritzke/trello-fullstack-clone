<template>
  <trello-dialog :model-value="modelValue" @update:modelValue="close">
    <template v-slot:title>
      <img
          draggable="false" :src="cover" alt="cover" ref="coverImage"
          class="board-cover-image border rounded-lg"
          :style="{display: cover !== undefined? 'inline-block' : 'none'}"
      />
    </template>

    <text-field placeholder="Add board title" class="w-full" v-model="title" :invalid="!valid"/>
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
    },
    editMode: {
      type: Boolean,
      default: false,
    },
    boardModel: {
      type: Object,
      default: {
        cover: undefined,
        title: "",
        visibility: "Private"
      }
    }
  },
  data() {
    return {
      visibility: "Private",
      cover: undefined,
      title: "",
      valid: true,
    }
  },
  mounted() {
    this.visibility = this.boardModel.visibility
    this.cover = this.boardModel.cover
    this.title = this.boardModel.title
  },
  methods: {
    create() {
      this.valid = this.cover && this.title && this.title.length >= 3 && this.title.length <= 30

      if (this.valid) {
        this.close()
      }
    },
    close() {
      this.$emit('update:modelValue', false);
      this.resetForm()
    },
    resetForm() {
      this.cover = undefined;
      this.title = ""
      this.valid = true
      this.visibility = "Private"
    },
    async updateCover(e) {
      const files = e.target.files;

      const file = files[0];

      this.cover = await createImage(file);
    }
  }
}
</script>

<style scoped>

</style>
