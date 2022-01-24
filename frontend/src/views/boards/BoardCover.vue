<template>
  <div class="bg-white shadow p-3 rounded-xl relative group">
    <trello-button append-icon="pencil" class="absolute -top-3 -right-3 shadow hidden group-hover:inline-block" only-icon @click="$emit('edit')"/>

    <div class="flex flex-col gap-3 cursor-pointer" @click="$emit('select')">
      <img alt="ye"
           src="https://images.unsplash.com/photo-1641919702567-e2efb46c8fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80"
           class="board-cover-image">
      <p class="font-medium tracking-tight text-lg">IT-Software Board</p>
      <div class="flex flex-row gap-3 items-center">
        <avatar
            v-for="i in 4" :key="i"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            size="40"
        />
        <p class="text-gray-400 tracking-tighter">+ 5 others</p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../../components/media/Avatar.vue";
import Menuable from "../../components/util/Menuable.vue";
import TrelloButton from "../../components/form/TrelloButton.vue";

export default {
  name: "BoardCover",
  components: {TrelloButton, Menuable, Avatar},
}
</script>

<style scoped>
</style>
