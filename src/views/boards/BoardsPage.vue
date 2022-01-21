<template>
  <board-create-dialog v-model="createDialogVisible"/>

  <div class="mt-14 flex flex-auto container mx-auto flex flex-col gap-5">
    <div class="flex items-center justify-between">
      <p class="font-medium text-xl">Your boards</p>
      <menuable tooltip centered>
        <template v-slot:activator="{on}">
          <trello-button v-on="on" label="Create board" append-icon="plus" color="primary" @click="createDialogVisible = true"/>
        </template>
        You used 1 of 2 free boards.
      </menuable>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <router-link to="/board/sdfj" v-for="i in 5" :key="i">
        <board-cover/>
      </router-link>
    </div>
  </div>
</template>

<script>
import BoardCover from "./BoardCover.vue";
import TrelloButton from "../../components/form/TrelloButton.vue";
import Menuable from "../../components/util/Menuable.vue";
import TrelloDialog from "../../components/util/TrelloDialog.vue";
import BoardCreateDialog from "../../components/util/BoardCreateDialog.vue";

export default {
  name: "BoardsPage",
  components: {BoardCreateDialog, TrelloDialog, Menuable, TrelloButton, BoardCover},
  data() {
    return {
      createDialogVisible: false
    }
  }
}
</script>

<style scoped>

</style>
