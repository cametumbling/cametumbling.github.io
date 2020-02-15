import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jill Marcum | Web Developer', // e.g: 'Jill Marcum | Web Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hi! I\'m a React Developer. Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jill Marcum',
  subtitle: 'I build smart React sites.',
  cta: 'Know more...',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi! My name is Jill, I\'m a web developer in JavaScript, working with frameworks such as React. ',
  paragraphTwo: 'I hold two master\'s degrees, the most recent in Cuneiform Studies from Oxford University. My last job was at the Metropolitan Museum of Art in New York, where I was the IT Operations Manager, and got my start in Front-End, joining the dev team for UX work and making responsive sites.',
  paragraphThree: 'In a previous life, I was a GIS Data Analyst, so I love SQL, databases, and all kinds of maps. I can also tinker around with Python, numpy, pandas, and so on.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Wanderlust',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Ravenous',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Jammming',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me :)',
  email: 'jill.marcum@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /*{
      id: uuidv1(),
      name: 'twitter',
      url: '',
    }, 
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/cametumbling',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jill-marcum-oxford/',
    },
   
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
