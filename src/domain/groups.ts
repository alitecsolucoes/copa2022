interface Team {
  id?: string;
  name: string;
  flag: string;
  first?: boolean;
  second?: boolean;
  group?: string;
}
type Teams = Team[];

interface Group {
  letter: string;
  teams: Teams;
}
type Groups = Group[];

const teamsA: Teams = [
  {
    name: "Catar",
    flag: "a1-qatar.png",
  },
  {
    name: "Equador",
    flag: "a2-ecuador.png",
  },
  {
    name: "Senegal",
    flag: "a3-senegal.png",
  },
  {
    name: "Holanda",
    flag: "a4-netherlands.png",
  },
];

const teamsB: Teams = [
  {
    name: "Inglaterra",
    flag: "b1-england.png",
  },
  {
    name: "Irã",
    flag: "b2-ir-iran.png",
  },
  {
    name: "Estados Unidos",
    flag: "b3-usa.png",
  },
  {
    name: "País de Gales",
    flag: "b4-wales.png",
  },
];

const teamsC: Teams = [
  {
    name: "Argentina",
    flag: "c1-argentina.png",
  },
  {
    name: "Arábia Saudita",
    flag: "c2-saudi-arabia.png",
  },
  {
    name: "México",
    flag: "c3-mexico.png",
  },
  {
    name: "Polônia",
    flag: "c4-poland.png",
  },
];

const teamsD: Teams = [
  {
    name: "França",
    flag: "d1-france.png",
  },
  {
    name: "Austrália",
    flag: "d2-australia.png",
  },
  {
    name: "Dinamarca",
    flag: "d3-denmark.png",
  },
  {
    name: "Tunísia",
    flag: "d4-tunisia.png",
  },
];

const teamsE: Teams = [
  {
    name: "Espanha",
    flag: "e1-spain.png",
  },
  {
    name: "Costa Rica",
    flag: "e2-costa-rica.png",
  },
  {
    name: "Alemanha",
    flag: "e3-germany.png",
  },
  {
    name: "Japão",
    flag: "e4-japan.png",
  },
];

const teamsF: Teams = [
  {
    name: "Bélgica",
    flag: "f1-belgium.png",
  },
  {
    name: "Canada",
    flag: "f2-canada.png",
  },
  {
    name: "Marrocos",
    flag: "f3-morocco.png",
  },
  {
    name: "Croácia",
    flag: "f4-croatia.png",
  },
];

const teamsG: Teams = [
  {
    name: "Brasil",
    flag: "g1-brazil.png",
  },
  {
    name: "Sérvia",
    flag: "g2-serbia.png",
  },
  {
    name: "Suíça",
    flag: "g3-switzerland.png",
  },
  {
    name: "Camarões",
    flag: "g4-cameroon.png",
  },
];

const teamsH: Teams = [
  {
    name: "Portugal",
    flag: "h1-portugal.png",
  },
  {
    name: "Gana",
    flag: "h2-ghana.png",
  },
  {
    name: "Uruguai",
    flag: "h3-uruguay.png",
  },
  {
    name: "Coréia",
    flag: "h4-korea-republic.png",
  },
];

const groups: Groups = [
  {
    letter: "A",
    teams: teamsA,
  },
  {
    letter: "B",
    teams: teamsB,
  },
  {
    letter: "C",
    teams: teamsC,
  },
  {
    letter: "D",
    teams: teamsD,
  },
  {
    letter: "E",
    teams: teamsE,
  },
  {
    letter: "F",
    teams: teamsF,
  },
  {
    letter: "G",
    teams: teamsG,
  },
  {
    letter: "H",
    teams: teamsH,
  },
];

export { groups, Team, Teams, Group, Groups };
