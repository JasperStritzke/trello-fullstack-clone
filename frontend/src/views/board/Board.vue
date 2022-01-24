<template>
  <!-- Top bar -->
  <board-menu v-model="menuShown"/>
  <div class="flex justify-between flex-col lg:flex-row gap-5">
    <div class="flex gap-5 flex-row lg:flex-row">
      <board-visibility-input v-model="visibility"/>
      <avatar
          v-for="i in 5" :key="i"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          size="40"
      />
      <menuable activate-only-on-click ignore-max-width>
        <template v-slot:activator="{on}">
          <trello-button v-on="on" append-icon="plus" color="primary" rounded="xl" only-icon/>
        </template>
        <dropdown-menu title="Titel" description="Eine etwas längere Beschreibung">
        </dropdown-menu>
      </menuable>
    </div>
    <trello-button label="Show menu" append-icon="dots-horizontal" @click="menuShown = true"/>
  </div>

  <!-- TODO: Fix background clipping with too few cards-->
  <background>
    <draggable
        v-model="columns" item-key="name"
        class="flex bottom-0 h-full w-full overflow-x-auto gap-10 p-3 mb-5 h-min"
        @end="columnsRefs.forEach(ref => ref.recalculatePosition())" ghost-class="ghost-column"
        filter="input" :preventOnFilter="true"
    >
      <template v-slot:item="{element}">
        <column :column="element" :ref="setColumnRef"/>
      </template>
      <template v-slot:footer>
        <div style="width: 20rem">
          <menuable :max-width-factor="1" enforce-factor-width activate-only-on-click>
            <template v-slot:activator="{on}">
              <trello-button block prepend-icon="plus" label="Create list" color="primary-invert" v-on="on"/>
            </template>
            <template v-slot:default="{close}">
              <dropdown-menu basic>
                <div class="flex flex-col gap-3">
                  <text-field
                      placeholder="Name" append-icon="tag"
                      :invalid="createList.invalid" v-model="createList.title"
                  />
                  <trello-button
                      label="Create" color="primary" prepend-icon="plus" block rounded="xl"
                      @click="createNewList(close)"
                  />
                </div>
              </dropdown-menu>
            </template>
          </menuable>
        </div>
      </template>
    </draggable>
  </background>
</template>

<script>
import draggable from "vuedraggable"
import TrelloButton from "../../components/form/TrelloButton.vue";
import Avatar from "../../components/media/Avatar.vue";
import Background from "../../components/layout/Background.vue";
import Menuable from "../../components/util/Menuable.vue";
import DropdownMenu from "../../components/util/DropdownMenu.vue";
import BoardMenu from "./BoardMenu.vue";
import BoardVisibilityInput from "../../components/form/BoardVisibilityInput.vue";
import Column from "./kanban/Column.vue";
import TextField from "../../components/form/TextField.vue";

export default {
  name: "Board",
  components: {
    TextField,
    Column,
    BoardVisibilityInput,
    BoardMenu, DropdownMenu, Menuable, Background, TrelloButton, Avatar,
    draggable
  },
  methods: {
    createNewList(close) {
      if (!this.createList.title.length || this.createList.title.length >= 30) {
        this.createList.invalid = true;
        return;
      }

      this.createList.invalid = false;
      this.createList.title = "";
      close()
    },
    setColumnRef(el) {
      if (el) {
        this.columnsRefs.push(el)
      }
    }
  },
  beforeUpdate() {
    this.columnsRefs = [];
  },
  data() {
    return {
      visibility: "Private",
      menuShown: false,
      columnsRefs: [],

      createList: {
        title: "",
        invalid: false
      },

      columns: [
        {
          name: "Backlog 🤔",
          items: [
            {
              title: "Another one :)",
              badges: [],
              attachments: 0,
              comments: 1,
              progress: {
                value: 0.8,
                color: "#1D4ED8"
              },
              members: [
                {
                  name: "Jasper S",
                  avatarURL:
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                },
              ]
            },
            {
              title: "Final one",
              progress: {
                value: 1/3,
                color: '#9e33cd'
              },
              badges: [
                {
                  name: "Romy Oh Romy",
                  color: '#192f9c'
                }
              ],
              attachments: 0,
              comments: 0,
              members: []
            },
            {
              title: "Thats fucked up",
              badges: [],
              attachments: 0,
              comments: 0,
              members: []
            }
          ]
        },
        {
          name: "In Progress 📚",
          items: [
            {
              title: "Move anything 'ready' here :)",
              badges: [
                {name: "Technical", color: "#1D4ED8"},
                {name: "Design", color: "#219653"},
                {name: "Technical", color: "#1D4ED8"},
                {name: "Design", color: "#219653"},
                {name: "Technical", color: "#1D4ED8"},
                {name: "Design", color: "#219653"}
              ],
              attachments: 2,
              comments: 1,
              members: [
                {
                  name: "Jasper S",
                  avatarURL:
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                },
                {
                  name: "Jasper S",
                  avatarURL:
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                },
                {
                  name: "Jasper S",
                  avatarURL:
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                },
                {
                  name: "Jasper S",
                  avatarURL:
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                },
              ]
            }
          ]
        },
        {
          name: "Finished 🎉",
          items: [
            {
              title: "Another one hehe",
              badges: [{
                name: "MIB",
                color: "#000"
              }],
              attachments: 0,
              comments: 0,
              members: []
            }
          ],
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
