<template>
  <div class="index-bar">
    <div class="flex flex-col lg:flex-row gap-5 items-center">
      <div class="flex gap-5">
        <img src="../../assets/logo.svg" alt="Logo" width="32" height="32" draggable="false">
        <span class="font-medium text-xl">Trello</span>
        <span class="board-name" v-if="$route.params.id">IT-Software Board</span>
      </div>

      <divider vertical class="hidden lg:inline" v-if="$route.params.id"/>
      <divider class="inline lg:hidden" vv-if="$route.params.id"/>

      <router-link to="/" v-if="$route.params.id">
        <trello-button label="All boards" append-icon="dots-grid"/>
      </router-link>
    </div>

    <text-field placeholder="Search for activity..." prepend-icon="magnify"/>

    <div class="flex flex-row items-center gap-7 mr-5 justify-center mt-5 lg:mt-0">

      <div class="cursor-pointer flex flex-row items-center gap-3">
        <avatar
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            size="40"
        />
        <p class="font-medium text-lg whitespace-nowrap">Jasper S</p>
        <mdicon name="chevron-down" cursor-pointer size="24"/>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from "./Divider.vue";
import TextField from "../form/TextField.vue";
import TrelloButton from "../form/TrelloButton.vue";
import Avatar from "../media/Avatar.vue";

export default {
  components: {
    Avatar,
    TrelloButton,
    TextField,
    Divider,
  },
  computed() {

  }
}
</script>

<style scoped>
div.index-bar {
  @apply p-3 flex flex-col lg:flex-row justify-between shadow bg-white sticky top-0 bg-white z-50
}
</style>
