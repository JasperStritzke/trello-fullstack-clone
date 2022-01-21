<template>
  <div class="bg-white shadow p-3 rounded-xl flex flex-col gap-3">
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
</template>

<script>
import Avatar from "../../components/media/Avatar.vue";
import Menuable from "../../components/util/Menuable.vue";

export default {
  name: "BoardCover",
  components: {Menuable, Avatar},
}
</script>

<style scoped>
</style>
