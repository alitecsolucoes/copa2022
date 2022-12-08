<script setup lang="ts">
import Groups from "@/components/Groups.vue";

import { useTeamsStore } from "@/stores/teams";

const teams = useTeamsStore();
</script>

<template>
  <div class="mx-auto w-full max-w-md pb-10">
    <!--    <pre>{{teams.teams}}</pre>-->
    <Groups :groups="teams.groups" />
  </div>
</template>

<style scoped></style>
