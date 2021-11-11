const color = {
  violet: '#8884d8',
  blue: '#83a6ed',
  aqua: '#8dd1e1',
  green: '#82ca9d',
  lime: '#a4de6c',
  sun: '#d0ed57',
  orange: '#ffc658',
}

export const dataLogroPuntajeAcumulado = [
  {
    name: 'Apoyo al medio ambiente',
    score: 100,
    fill: '#fff',
  },
  {
    name: 'Electricidad',
    score: 35,
    fill: color.violet,
  },
  {
    name: 'Transporte',
    score: 25,
    fill: color.blue,
  },
  {
    name: 'Alimentación',
    score: 50,
    fill: color.aqua,
  },
  {
    name: 'Consumo',
    score: 75,
    fill: color.green,
  },
  // {
  //   name: '40-49',
  //   score: 25,
  //   fill: color.lime,
  // },
  // {
  //   name: '50+',
  //   score: 25,
  //   fill: color.sun,
  // },
  // {
  //   name: 'unknow',
  //   score: 25,
  //   fill: color.orange,
  // },
]

export const dataMonthlyAccumulatedByVertical = [
  {
    date: 'Enero',
    electricidad: 40,
    transporte: 24,
    alimentación: 24,
    consumo: 24,
  },
  {
    date: 'Febrero',
    electricidad: 30,
    transporte: 13,
    alimentación: 22,
    consumo: 22,
  },
  {
    date: 'Marzo',
    electricidad: 20,
    transporte: 98,
    alimentación: 22,
    consumo: 22,
  },
  {
    date: 'Abril',
    electricidad: 27,
    transporte: 39,
    alimentación: 20,
    consumo: 20,
  },
  {
    date: 'Mayo',
    electricidad: 18,
    transporte: 48,
    alimentación: 21,
    consumo: 21,
  },
  {
    date: 'Junio',
    electricidad: 23,
    transporte: 38,
    alimentación: 25,
    consumo: 25,
  },
  {
    date: 'Julio',
    electricidad: 34,
    transporte: 43,
    alimentación: 21,
    consumo: 21,
  },
]

export const dataComparativeRanking = [
  {
    date: 'Enero',
    me: 350,
    compared_user: 300,
  },
  {
    date: 'Febrero',
    me: 300,
    compared_user: 139,
  },
  {
    date: 'Marzo',
    me: 200,
    compared_user: 450,
  },
  {
    date: 'Abril',
    me: 278,
    compared_user: 390,
  },
  {
    date: 'Mayo',
    me: 189,
    compared_user: 480,
  },
]
