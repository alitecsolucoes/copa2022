import {ref} from "vue";
import {defineStore} from "pinia";
import {groups} from '@/domain/groups'

export const useTeamsStore = defineStore('teams', () => {

    const teamGroups = ref(
        groups.map( (g) =>
            ({
                letter: g.letter,
                teams: g.teams.map( t => ({...t, id:t.name, first: false, second: false, group: g.letter}))
            })
        )
    )

    const teams = ref(teamGroups.value.reduce( (r:[], g) => {
        r.push(...g.teams)
        return r
    }, []));

    const select = (id:string) => {

        const team = teams.value.find( t => t.name === id)

        const firstOfGroup = teams.value.find( t => t.first && t.group === team.group )

        const secondOfGroup = teams.value.find( t => t.second && t.group === team.group )

        if (firstOfGroup && secondOfGroup){

            if (team.id === firstOfGroup.id || team.id === secondOfGroup.id){
                firstOfGroup.first = false
                firstOfGroup.second = true
                secondOfGroup.first = true
                secondOfGroup.second = false
            }else{
                //firstOfGroup.first = false
                //team.first = true

                secondOfGroup.second = false
                team.second = true
            }

        }else{
            if (firstOfGroup && !secondOfGroup && team.id !== firstOfGroup.id){
                team.second = true
            }else{
                team.first = true
            }
        }

    }

    return { groups: teamGroups, teams, select }
})