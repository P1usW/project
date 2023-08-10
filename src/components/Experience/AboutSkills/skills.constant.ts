const tension = 0.5;

const languageData = {
  labels: [2020, 2021, 2022, 2023],
  datasets: [
    {
      label: 'Python',
      data: [10, 21, 32, 37],
      tension
    },
    {
      label: 'JavaScript',
      data: [ null, 20, 50, 70],
      tension
    },
    {
      label: 'TypeScript',
      data: [null, null, 20,75],
      tension
    },
    {
      label: 'C++',
      data: [10, 13, 14, 15],
      tension
    },
  ]
}

const frontSkills = {
  labels: [2021, 2022, 2023],
  datasets: [
    {
      label: 'HTML',
      data: [20, 50, 79],
      tension
    },
    {
      label: 'CSS / SASS / SCSS',
      data: [20, 43, 71],
      tension
    },
    {
      label: 'React',
      data: [10, 38, 73],
      tension
    },
    {
      label: 'Vue',
      data: [null, 20, 35],
      tension
    },
    {
      label: 'Redux',
      data: [9, 47, 75],
      tension
    },
    {
      label: 'Webpack',
      data: [22, 44, 66],
      tension
    },
  ]
}

const backendSkills = {
  labels: [2021, 2022, 2023],
  datasets: [
    {
      label: 'NodeJS',
      data: [15, 40, 52],
      tension
    },
    {
      label: 'Django',
      data: [37, 44, 44],
      tension
    },
    {
      label: 'SQL',
      data: [25, 48, 50],
      tension
    },
    {
      label: 'Docker',
      data: [7, 30, 40],
      tension
    },
    {
      label: 'Redis',
      data: [null, 15, 18],
      tension
    },
  ]
}

const otherSkills = {
  labels: [2020, 2021, 2022, 2023],
  datasets: [
    {
      label: 'git',
      data: [15, 25, 40, 52],
      tension
    },
    {
      label: 'Jest / TestingLibrary',
      data: [null, null, 20, 42],
      tension
    },
    {
      label: 'Firebase',
      data: [null ,19, 28, 42],
      tension
    },
  ]
}

export {
  languageData,
  frontSkills,
  backendSkills,
  otherSkills
}