interface Exp {
  post: string,
  company: string,
  date: [string, string],
  about: string,
}

function getLocalDate(y: number, m: number) {
  return new Date(y, m).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric'
  })
}

export type {
  Exp
}

export const exp: Exp[] = [
  {
    post: 'Trainee programmer',
    company: 'Novosibirsk State Technical University',
    date: [getLocalDate(2021, 9), getLocalDate(2022, 1)],
    about: `Development of a neural network for forest fire detection. 
            Creating a backend for processing and saving the received photos, for further sending to the neural network. 
            Writing a machine vision algorithm to determine the boundaries between heaven and earth in a photo.
            Neural network training and testing.`
  },
  {
    post: 'Full-stack developer',
    company: 'СибРефЛогистика',
    date: [getLocalDate(2022, 3), getLocalDate(2022, 11)],
    about: `Development of an internal logistics system.
            Creating a web interface, mobile and desktop application. 
            Plotting, enabling authentication, writing sql queries, testing and bug fixing.`,
  },
  {
    post: 'Frontend developer',
    company: 'Цветок Риса',
    date: [getLocalDate(2022, 11), getLocalDate(2023, 4)],
    about: `Creation of an online store and its further support and content. 
            The layout of the site, the creation of reused components, the connection of common payment systems, 
            the deployment of the project on the WordPress platform.`,
  },
  {
    post: 'Full-stack developer',
    company: 'Freelance',
    date: [getLocalDate(2022, 4), getLocalDate(2023, 8)],
    about: `Development of own projects, execution of orders, additional training, 
            developed projects for personal use, execution of commercial orders.`,
  },
]