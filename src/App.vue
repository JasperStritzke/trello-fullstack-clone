<template>
  <div class="h-full flex flex-col">
    <drawer/>
    <app-bar/>
    <div id="container" class="relative p-5 pb-0 mt-5 h-full flex flex-col">
      <router-view/>
    </div>
  </div>
</template>

<style>
</style>
<script>
import AppBar from "./components/layout/AppBar.vue";
import Drawer from "./components/layout/Drawer.vue";

export default {
  components: {Drawer, AppBar}
}
</script>
<style>
* {
  user-select: none;
}

.selectable {
  user-select: all;
}
</style>
