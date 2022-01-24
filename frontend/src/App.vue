<template>
  <div class="h-full flex flex-col">
    <drawer/>
    <app-bar/>
    <div
        id="container"
        :class="{'relative h-full flex flex-col p-5 pb-0': true, [$route.meta.backgroundClass || '']: true}"
    >
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
