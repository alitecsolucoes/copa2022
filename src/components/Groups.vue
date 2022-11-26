<script setup lang="ts">
import Group from '@/components/Group.vue'
const props = defineProps<{
  groups: {
    letter: string,
    teams: {name: string, flag: string}[]
  }[]
}>()

</script>

<template>
<!--  <pre>{{groups}}</pre>-->
  <Group v-for="g in props.groups" :group="g" :key="g.letter"/>
</template>

<style scoped>
</style>
