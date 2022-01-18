<template>
  <!-- Top bar -->
  <board-menu v-model="menuShown"/>
  <div class="flex justify-between flex-col lg:flex-row gap-5">
    <div class="flex gap-5 flex-row lg:flex-row">
      <menuable activate-only-on-click>
        <template v-slot:activator="{on}">
          <trello-button v-on="on" :label="visibility" :append-icon="icon" class="w-32"/>
        </template>

        <template v-slot:default="{close}">
          <dropdown-menu title="Visibility" description="Choose who can view this board.">
            <div class="flex flex-col gap-2 transition-all duration-100">
              <visibility-setting
                  title="Public" description="Anyone on the internet can view this board."
                  icon="earth" @click="visibility = 'Public'; close()"
              />
              <visibility-setting
                  title="Private" description="Only members can view the board."
                  icon="lock"
                  @click="visibility = 'Private'; close()"
              />
            </div>
          </dropdown-menu>
        </template>
      </menuable>
      <avatar
          v-for="i in 5" :key="i"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          size="40"
      />
      <menuable activate-only-on-click ignore-max-width>
        <template v-slot:activator="{on}">
          <trello-button v-on="on" append-icon="plus" color="gray" rounded="xl" only-icon/>
        </template>
        <dropdown-menu title="Titel" description="Eine etwas längere Beschreibung">
        </dropdown-menu>
      </menuable>
    </div>
    <trello-button label="Show menu" append-icon="dots-horizontal" @click="menuShown = true"/>
  </div>

  <background>
    <div class="selectable">
      <p>Finished 🚀</p>
    </div>
  </background>
</template>

<script>
import TrelloButton from "../../components/form/TrelloButton.vue";
import Avatar from "../../components/media/Avatar.vue";
import Background from "../../components/layout/Background.vue";
import Menuable from "../../components/util/Menuable.vue";
import DropdownMenu from "../../components/util/DropdownMenu.vue";
import VisibilitySetting from "../../components/util/VisibilitySetting.vue";
import BoardMenu from "./BoardMenu.vue";

export default {
  name: "Home",
  components: {BoardMenu, VisibilitySetting, DropdownMenu, Menuable, Background, TrelloButton, Avatar},
  data() {
    return {
      visibility: "Private",
      menuShown: false,
    }
  },
  computed: {
    icon() {
      return this.visibility === "Private" ? "lock" : "earth"
    }
  }
}
</script>

<style scoped>

</style>
