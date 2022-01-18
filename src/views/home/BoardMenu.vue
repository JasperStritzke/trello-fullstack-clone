<template>
  <transition name="slide-in-right">
    <div class="absolute right-0 top-0 bg-white h-full shadow-lg p-5 w-1/3 overflow-hidden rounded-l" v-if="modelValue">
      <div class="flex flex-row mb-2 text-gray-800 justify-between items-center">
        <p class="font-bold text-sm">IT-Software Board</p>
        <mdicon name="close" class="cursor-pointer" @click="$emit('update:modelValue', false)"/>
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

        <div class="flex flex-row text-gray-400 text-xs items-center mt-4 mb-3 justify-between">
          <div class="flex flex-row items-center gap-2">
            <mdicon name="file-document" size="16"/>
            <p class="tracking-tight">Description</p>
          </div>
          <trello-button label="Edit" append-icon="pencil" small color="gray"/>
        </div>

        <div class="max-h-1/2 overflow-y-auto">
          <div v-for="i in 1" :key="i">
            <p>Simple board to start on a project.</p>
            <br/>
            <p>Each list can hold items (cards) that represent ideas or tasks.</p>
            <br/>
            <p>There 4 lists here:</p>
            <br/>
            <p><b>* Backlog 🤔 :</b> Ideas are created here. Here people can describe the idea following three simple
              questions:
              Why you
              wish to do it, What it is, how can you do it.</p>

            <p><b> * In Progress📚:</b> Once the ideas is clearly defined, the task can move to #todo stage. Here the
              owner
              of
              the idea
              can move to #doing once s/he is ready. He can also wait a bit for other members to join.</p>
            <p><b>* In Review ⚙️:</b>On-going</p>
            <p><b>* Completed 🙌🏽**:</b> Finished</p>

            <p>You could add other lists like labels holding labels (with colors) in order to tag each card by a label
              if
              you
              wish.
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Divider from "../../components/layout/Divider.vue";
import MemberBadge from "../../components/media/MemberBadge.vue";
import TrelloButton from "../../components/form/TrelloButton.vue";

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  components: {MemberBadge, TrelloButton, Divider},
  methods: {}
}
</script>

<style scoped>

</style>
