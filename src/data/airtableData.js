import galactusImg from '../images/about/galactus.png';
import snakeGameImg from '../images/about/snakeGame.png';
import sharkSphereImg from '../images/about/sharkSphere.png'
const AIRTABLE_DATA = {
  featuredProjects: [
    {
      id: 1,
      title: '2. Snake Game - Modern Take on a Retro Classic',
      desc: 'A smooth and responsive classic Snake game built from scratch using React.js and HTML Canvas, featuring TypeScript for type safety, keyboard controls, score tracking, and a seamless game-over restart experience — all without third-party libraries.',
      imgUrl:
      snakeGameImg,
      isClientWork: false,
      stack: ['ReactJS', 'TypeScript', 'HTML5 Canvas', 'CSS3'],
      url: 'https://snakes-game-main.vercel.app/',
      github: 'https://github.com/Amaan-pathan/snakes-game-main',
    },
    {
      id: 2,
      title: '3. Shark Sphere – Where Startup Ideas Come to Life',
      desc: 'Shark Sphere is a dynamic E-Cell website crafted to inspire student entrepreneurship. Featuring an idea submission portal, startup resources, and event listings, it delivers a responsive, interactive experience that empowers students to connect, innovate, and launch ventures.',
      imgUrl:
      sharkSphereImg,
      isClientWork: false,
      stack: [
        'HTML',
        'CSS',
        'JavaScript',
        'Django',
      ],
      url: 'https://e-cell-nu.vercel.app/',
      github: 'https://github.com/Amaan-pathan/E-cell',
    },
    {
      id: 3,
      title: '1. Galactus – A Visually Engaging Comic Book Website',
      desc: 'Galactus is a visually immersive comic book website crafted to captivate fans with dynamic layouts, smooth animations, and a bold comic-style aesthetic — delivering an engaging experience that feels straight out of a graphic novel.',
      imgUrl:
      galactusImg,
      isClientWork: false,
      stack: [
        'HTML',
        'CSS',
        'BootStrapping'
      ],
      url: 'https://galactus-phi.vercel.app/',
      github: 'https://github.com/Amaan-pathan/GALACTUS',
    },
  ],

};

export default AIRTABLE_DATA;
