<template>
  <div class="mt-14 flex flex-auto container mx-auto flex flex-col gap-5">
    <div class="flex items-center justify-between">
      <p class="font-medium text-xl">Your boards</p>
      <menuable tooltip centered>
        <template v-slot:activator="{on}">
          <trello-button v-on="on" label="Create board" append-icon="plus" color="primary"/>
        </template>
        You used 1 of 2 free boards.
      </menuable>
    </div>
    <div class="flex gap-5">
      <router-link to="/board/yeet">
        <board-cover/>
      </router-link>
    </div>
  </div>
</template>

<script>
import BoardCover from "./BoardCover.vue";
import TrelloButton from "../../components/form/TrelloButton.vue";
import Menuable from "../../components/util/Menuable.vue";

export default {
  name: "BoardsPage.vue",
  components: {Menuable, TrelloButton, BoardCover}
}
</script>

<style scoped>

</style>
