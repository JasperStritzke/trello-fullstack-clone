<template>
  <div class="column">
    <div class="flex justify-between cursor-move select-none">
      <div class="font-medium">{{ column.name }}</div>
      <menuable ignore-max-width activate-only-on-click>
        <template v-slot:activator="{on}">
          <mdicon v-on="on" name="dots-horizontal" class="cursor-pointer"/>
        </template>
        <template v-slot:default>
          <dropdown-menu basic>
            <div class="text-gray-500 flex flex-col gap-3 p-1 select-none">
              <p class="hover:text-gray-600 cursor-pointer">Rename</p>
              <hr/>
              <p class="hover:text-gray-600 cursor-pointer">Delete this list</p>
            </div>
          </dropdown-menu>
        </template>
      </menuable>
    </div>
    <hr/>

    <!-- Cards -->
    <draggable
        v-model="column.items" item-key="title" group="cards" v-if="column"
        class="flex flex-col gap-5 no-scroll-track -m-3 p-3" ghost-class="ghost"
    >
      <template #item="{element}">
        <kanban-card :item="element"/>
      </template>
    </draggable>

    <trello-button block label="Add another card" prepend-icon="plus" color="primary-invert"/>
  </div>
</template>

<script>
import draggable from "vuedraggable"
import TrelloButton from "../../../components/form/TrelloButton.vue";
import Menuable from "../../../components/util/Menuable.vue";
import DropdownMenu from "../../../components/util/DropdownMenu.vue";
import KanbanCard from "./KanbanCard.vue";

export default {
  name: "Column",
  components: {KanbanCard, DropdownMenu, Menuable, TrelloButton, draggable},
  props: ['column']
}
</script>

<style scoped>
div.column {
  width: 20rem;
  height: 100%;
  @apply h-full max-h-full flex-shrink-0 flex flex-col gap-5
}
</style>
