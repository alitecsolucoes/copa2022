import { ref } from "vue";
import { defineStore } from "pinia";
import { Group, Groups, groups, Team, Teams } from "@/domain/groups";

export const useTeamsStore = defineStore("teams", () => {
  const teamGroups = ref<Groups>(
    groups.map((g: Group) => ({
      letter: g.letter,
      teams: g.teams.map((t) => ({
        ...t,
        id: t.name,
        first: false,
        second: false,
        group: g.letter,
      })),
    }))
  );

  const teams = ref<Teams>(
    teamGroups.value.reduce((r: Teams, g: Group) => {
      const all = g.teams;
      r.push(...all);
      return r;
    }, [])
  );

  const select = (id: string) => {
    const team = teams.value.find((t: Team) => t.name === id) || {
      name: "",
      flag: "",
    };

    const firstOfGroup = teams.value.find(
      (t: Team) => t.first && t.group === team.group
    );

    const secondOfGroup = teams.value.find(
      (t: Team) => t.second && t.group === team.group
    );

    if (firstOfGroup && secondOfGroup) {
      if (team.id === firstOfGroup.id || team.id === secondOfGroup.id) {
        firstOfGroup.first = false;
        firstOfGroup.second = true;
        secondOfGroup.first = true;
        secondOfGroup.second = false;
      } else {
        //firstOfGroup.first = false
        //team.first = true

        secondOfGroup.second = false;
        team.second = true;
      }
    } else {
      if (firstOfGroup && !secondOfGroup && team.id !== firstOfGroup.id) {
        team.second = true;
      } else {
        team.first = true;
      }
    }
  };

  return { groups: teamGroups, teams, select };
});
