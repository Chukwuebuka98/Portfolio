import NextjsIcon from '@/icons/NextjsIcon';
import TailwindIcon from '@/icons/TailwindIcon';
import TypescriptIcon from '@/icons/TypescriptIcon';
import FirebaseIcon from '@/icons/FirebaseIcon';
import ReactIcon from '@/icons/ReactIcon';

export const navItems = [
  { href: '#home', icon: '/icons/homepage.svg', label: 'Home' },
  { href: '#about', icon: '/icons/x.svg', label: 'About' },
  { href: '#projects', icon: '/icons/github.svg', label: 'Projects' },
  { href: '#skills', icon: '/icons/googledocs.svg', label: 'Skills' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/bg1.png',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Diving into Backend Development',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'GrillBot - AI Interviewer',
    name: 'GrillBot',
    des: 'GrillBot is an AI-powered interviewer that helps you prepare for job interviews by simulating real interview scenarios.',
    img: '/images/grillbot.png',
    iconLists: [
      { iconName: 'Next.js', icon: NextjsIcon },
      { iconName: 'Tailwind CSS', icon: TailwindIcon },
      { iconName: 'TypeScript', icon: TypescriptIcon },
      { iconName: 'Firebase', icon: FirebaseIcon },
    ],
    link: 'https://grill-bot-nine.vercel.app/',
  },
  {
    id: 2,
    title: 'NexQuant - Payroll Calculator',
    name: 'NexQuant',
    des: 'A payroll calculator for a company that helps employees calculate their salaries and deductions.',
    img: '/images/nexquant.png',
    iconLists: [
      { iconName: 'React', icon: ReactIcon },
      { iconName: 'Tailwind CSS', icon: TailwindIcon },
      { iconName: 'Firebase', icon: FirebaseIcon },
    ],
    link: 'https://nexquant-calc.netlify.app/',
  },
  {
    id: 3,
    title: 'HooBank - Banking App',
    name: 'HooBank',
    des: 'A banking app UI that allows users to manage their finances, make transactions, and track their spending.',
    img: '/images/hoobank.png',
    iconLists: [
      { iconName: 'React', icon: ReactIcon },
      { iconName: 'Tailwind CSS', icon: TailwindIcon },
      { iconName: 'TypeScript', icon: TypescriptIcon },
    ],
    link: 'https://bankinghoobank.netlify.app/',
  },
  {
    id: 4,
    title: 'Dashboard - Admin Panel',
    name: 'Geegpay',
    des: 'An admin panel UI that allows users to manage their data and perform various tasks.',
    img: '/images/dashboard.png',
    iconLists: [
      { iconName: 'React', icon: ReactIcon },
      { iconName: 'Tailwind CSS', icon: TailwindIcon },
    ],
    link: 'https://geegpay-analytic-dashboard.netlify.app/',
  },
];

export const testimonials = [
  {
    quote:
      "Working with Emmanuel was a seamless experience from start to finish. His attention to detail, creative insight, and commitment to delivering outstanding work exceeded all expectations. Emmanuel doesn't just build websites — he brings visions to life. I highly recommend him for anyone serious about elevating their digital presence.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Emmanuel combines technical expertise with a genuine passion for development. His ability to understand project goals and translate them into polished, high-performing solutions sets him apart. It's rare to find someone so reliable, talented, and easy to work with.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Emmanuel went above and beyond in every phase of our collaboration. From initial concepts to the final product, he demonstrated creativity, efficiency, and a deep understanding of modern web standards. I'd work with him again in a heartbeat.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Beyond technical skills, Emmanuel brings a level of professionalism and enthusiasm that's truly refreshing. He made the entire process feel effortless while consistently delivering high-quality results. Highly recommended for any project, big or small.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      'Emmanuel’s work speaks for itself — clean, fast, and visually stunning. He’s a rare developer who balances aesthetic design with robust backend functionality. Partnering with Emmanuel was one of the best decisions we made for our brand’s growth.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const experience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
    delay: 0.7, // Optional delay for animation
    duration: 2, // Optional duration for animation
  },
  {
    id: 2,
    title: 'Frontend developer at Arya-vs',
    desc: "Built and maintained a payroll calculator for the company's internal use, improving efficiency and accuracy.",
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
    delay: 0.8, // Optional delay for animation
    duration: 3, // Optional duration for animation
  },
  {
    id: 3,
    title: 'Freelance Web Dev Project',
    desc: 'Developed a responsive website for a local business, enhancing their online presence and customer engagement.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
    delay: 1, // Optional delay for animation
    duration: 4, // Optional duration for animation
  },
  {
    id: 4,
    title: 'Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
    delay: 0.5, // Optional delay for animation
    duration: 3, // Optional duration for animation
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Chukwuebuka98',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://x.com/TrigahN',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/chukwuebuka-igwe-6b8a76117/',
  },
];
