<template>
  <transition name="slide-in-right">
    <div
        class="z-10 fixed right-0 top-16 bg-white h-full shadow-lg p-5 w-1/3 xl:w-1/4 rounded-l flex flex-col overflow-y-scroll no-scroll-track"
        v-if="modelValue"
    >
      <div class="flex flex-row mb-2 text-gray-800 justify-between items-center">
        <p class="font-bold text-sm">IT-Software Board</p>
        <mdicon name="close" class="cursor-pointer pl-5" @click="$emit('update:modelValue', false)"/>
      </div>
      <divider/>
      <div>
        <div class="flex flex-row text-gray-400 text-xs gap-2 items-center mb-2 mt-3">
          <mdicon name="account-circle" size="16"/>
          <p class="tracking-tight">Owned by</p>
        </div>

        <member-badge
            name="Jasper S"
            date="since 24 July, 2020"
            avatar-url="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />

        <div class="flex flex-row text-gray-400 text-xs items-center mt-5 mb-5 justify-between">
          <div class="flex flex-row items-center gap-2">
            <mdicon name="file-document" size="16"/>
            <p class="tracking-tight">Description</p>
          </div>
          <div class="flex gap-2">
            <trello-button label="Save" color="green" small rounded="lg" wide v-if="desc.editable" @click="save"/>
            <trello-button
                :label="desc.editable ? 'Cancel' : 'Edit'"
                :append-icon="desc.editable ? 'close':'pencil'"
                small color="gray"
                @click="clickCancelOrEdit"/>
          </div>
        </div>

        <!-- Description -->
        <board-description
            :editable="desc.editable" v-model="desc.value"
            @click="enableEditingIfAllowed"
        />

        <div class="flex flex-row text-gray-400 text-xs gap-2 items-center mb-2 mt-5">
          <mdicon name="file-document" size="16"/>
          <p class="tracking-tight">Team</p>
        </div>

        <div class="flex flex-col gap-4 mt-5">
          <member-badge
              v-for="i in 5" :key="i"
              name="Jasper Yeet"
              avatar-url="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          >
            <template v-slot:prepend>
              <trello-button small color="outline-red" label="Remove"/>
            </template>
          </member-badge>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Divider from "../../components/layout/Divider.vue";
import MemberBadge from "../../components/media/MemberBadge.vue";
import TrelloButton from "../../components/form/TrelloButton.vue";
import BoardDescription from "./BoardDescription.vue";

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  components: {BoardDescription, MemberBadge, TrelloButton, Divider},
  data() {
    return {
      desc: {
        editable: false,
        value: {
          "type": "doc",
          "content": [{
            "type": "paragraph",
            "content": [{"type": "text", "text": "Add a description…"}]
          }]
        },
        snapshot: ""
      },
    }
  },
  methods: {
    clickCancelOrEdit() {
      if (!this.desc.editable) {
        this.desc.editable = true;
        this.desc.snapshot = this.desc.value;
        return;
      }

      this.desc.editable = false;
      this.desc.value = this.desc.snapshot;
      this.desc.snapshot = ""
    },
    enableEditingIfAllowed() {
      if (!this.desc.editable)
        this.clickCancelOrEdit()
    },
    save() {
      this.desc.editable = false;
      this.desc.snapshot = ""
    }
  }
}

const textFromFigma = {
  "type": "doc",
  "content": [{
    "type": "paragraph",
    "content": [{"type": "text", "text": "Simple board to start on a project."}]
  }, {
    "type": "paragraph",
    "content": [{"type": "text", "text": "Each list can hold items (cards) that represent ideas or tasks."}]
  }, {"type": "paragraph", "content": [{"type": "text", "text": "There 4 lists here:"}]}, {
    "type": "paragraph",
    "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "* Backlog 🤔 :"}, {
      "type": "text",
      "text": " Ideas are created here. Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it."
    }]
  }, {
    "type": "paragraph",
    "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "* In Progress📚:"}, {
      "type": "text",
      "text": " Once the ideas is clearly defined, the task can move to #todo stage. Here the owner of the idea can move to #doing once s/he is ready. He can also wait a bit for other members to join."
    }]
  }, {
    "type": "paragraph",
    "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "* In Review ⚙️:"}, {
      "type": "text",
      "text": "On-going"
    }]
  }, {
    "type": "paragraph",
    "content": [{"type": "text", "marks": [{"type": "bold"}], "text": "* Completed 🙌🏽**:"}, {
      "type": "text",
      "text": " Finished"
    }]
  }, {
    "type": "paragraph",
    "content": [{
      "type": "text",
      "text": "You could add other lists like labels holding labels (with colors) in order to tag each card by a label if you wish."
    }]
  }]
}
</script>

<style scoped>

</style>
