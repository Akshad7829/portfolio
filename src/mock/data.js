import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1Ob26-az0eYKFyntTZy49EXTi2V8-1wuq/view?usp=sharing', // if no resume, the button will not show up
};
export const expData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
 
  exps: 'https://drive.google.com/file/d/1p_zlt4mvJXPvugr3PnsimsV5zjQOOh3n/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Test-Mate',
    info: 'This Website, you can write your text and edit it. Some of the features of MS-Word are present. ',
    info2: 'Tech Stack:- HTML5,CSS3,Reactjs',
    url: 'https://text-mate.netlify.app/',
    repo: 'https://github.com/Akshad7829/Text-Editor', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Picture-Perfect',
    info: 'Use to download HD photos for free. ',
    info2: 'Tech Stack:- HTML5,CSS3,Reactjs',
    url: 'https://picture-perfecct.netlify.app/',
    repo: 'https://github.com/Akshad7829/picture-perfect', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Drum-Kit',
    info: 'Plays music of different instruments. ',
    info2: 'Tech Stack:- HTML5,CSS3,JS',
    url: 'https://akshad7829.github.io/drumplayer/',
    repo: 'https://github.com/Akshad7829/DrumKit', // if no repo, the button will not show up
  },
];


// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'google',
      url: 'mailto:akshadsn03@gmail.com',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/akshu_7829_/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/akshad-nayakwadi-43a049194/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Akshad7829',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
