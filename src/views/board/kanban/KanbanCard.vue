<template>
  <div class="shadow bg-white rounded-lg p-3 flex flex-col gap-3 cursor-pointer relative select-none">
    <img alt="ye"
         src="https://images.unsplash.com/photo-1641919702567-e2efb46c8fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
         class="board-cover-image">
    <p class="selectable">{{ item.title }}</p>
    <div class="flex flex-row gap-3 overflow-x-auto w-full no-scroll-track"
         v-if="item.badges && item.badges.length > 0">
      <badge v-for="badge in item.badges" :key=badge.name :badge="badge"/>
    </div>
    <div class="flex justify-between items-center mt-3">
      <div class="flex gap-3 items-center" v-if="item.members.length > 0">
        <menuable tooltip v-for="member in members" :key="member.name">
          <template v-slot:activator="{on}">
            <avatar
                v-on="on"
                :src="member.avatarURL"
                size="40"
            />
          </template>
          {{ member.name }}
        </menuable>
        <p class="h-full pl-1 flex justify-center items-center text-gray-400 " v-if="membersCut !== -1">
          + {{ membersCut }}
        </p>
      </div>
      <div class="h-full flex items-center justify-center gap-2" v-if="item.comments > 0 || item.attachments > 0">
        <div class="text-gray-400 flex items-center gap-2" v-if="item.comments > 0">
          <mdicon name="message-text" size="18"/>
          <span>{{ item.comments }}</span>
        </div>
        <div class="text-gray-400 flex items-center gap-2" v-if="item.attachments > 0">
          <mdicon name="paperclip" size="18"/>
          <span>{{ item.attachments }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from "./Badge.vue";
import Avatar from "../../../components/media/Avatar.vue";
import TrelloButton from "../../../components/form/TrelloButton.vue";
import Menuable from "../../../components/util/Menuable.vue";

const maxMembersPerCard = 3;

export default {
  name: "KanbanCard",
  components: {Menuable, TrelloButton, Avatar, Badge},
  props: ["item"],
  computed: {
    members() {
      if (this.item.members.length <= maxMembersPerCard) {
        return this.item.members;
      }

      return this.item.members.slice(0, maxMembersPerCard)
    },
    membersCut() {
      return this.item.members.length > maxMembersPerCard ? this.item.members.length - maxMembersPerCard : -1
    }
  }
}
</script>

<style scoped>
.ghost {
  min-height: 5rem;
  @apply border border-dotted border-primary-500 border-2 ring-offset-8 ring-primary-600 h-full bg-primary-100
}

.sortable-chosen {
}

.ghost * {
  display: none;
}
</style>
