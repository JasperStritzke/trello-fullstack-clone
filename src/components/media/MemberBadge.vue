<template>
  <div class="flex justify-between items-center w-full">
    <div class="flex items-center gap-5">
      <avatar
          :src="avatarUrl"
          size="35"
      />
      <div class="flex flex-col">
        <span class="text-sm font-medium text-gray-800">{{ name }}</span>
        <span class="text-xs text-gray-500 tracking-tight" v-if="date">
          {{ date }}
        </span>
      </div>
    </div>
    <slot name="prepend">
      <p class="tacking-tight text-sm text-gray-400">Owner</p>
    </slot>
  </div>
</template>

<script lang="ts">
import Avatar from "./Avatar.vue";

export default {
  components: {Avatar},
  props: ['date', 'name', 'avatarUrl']
}
</script>

<style scoped>

</style>
