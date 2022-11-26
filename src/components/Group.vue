<script lang="ts" setup>
import {useTeamsStore} from "@/stores/teams";

const teams = useTeamsStore()

const props = defineProps<{
  group: { letter: string; teams: { name: string; flag: string }[] };
}>();

function group_image(): string {
  return `group-${props.group.letter.toLowerCase() || ""}.png`;
}

</script>

<template>
  <!--  <pre>{{props}}</pre>-->
  <div class="relative w-full">
    <img
        :src="`src/assets/images/groups/${group_image()}`"
        class="object-contain"
    />
    <div class="absolute inset-0">
      <div class="margin-top"></div>
      <div class="flex h-3/5 flex-col space-y-[2px]">
        <div
            v-for="team in props.group.teams"
            :key="team.name"
            class="mx-auto flex w-3/4 items-center team"
            :class="{ 'first' : team.first, 'second': team.second, 'out' : !team.first && !team.second}"
            @click="teams.select(team.name)"
        >
          <img
              :src="`src/assets/images/flags/${team.flag}`"
              class="w-1/3 object-contain"
          />
          <div class="font-qatar">{{ team.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.margin-top {
  height: 22%;
}

.team{
  @apply border-2 cursor-pointer;
}

.first{
  @apply border-[#873057];
}

.second{
  @apply border-[#873057] border-dotted;
}

.out {
  @apply border-transparent hover:border-yellow-500;
}

</style>
