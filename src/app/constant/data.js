// Header Configuration
export const headerLinks = [
  {
    title: "Timeline",
    alt: "timeline",
    target: "",
    href: "/timeline", // Placeholder link, replace with the actual URL
  },
  {
    title: "Projects",
    alt: "projects",
    target: "",
    href: "/projects", // Placeholder link, replace with the actual URL
  },
  {
    title: "About",
    alt: "about",
    target: "",
    href: "/about", // Placeholder link, replace with the actual URL
  },
  {
    title: "Contact",
    alt: "contact",
    target: "",
    href: "/contact", // Placeholder link, replace with the actual URL
  },
  {
    title: "Resume",
    alt: "Resume",
    target: "_blank",
    href: process.env.CV_LINK, // Placeholder link, replace with the actual URL
  },
];

// Footer Configuration
export const socialLinks = [
  {
    src: "facebook-icon.svg",
    alt: "Facebook",
    target: "_blank",
    href: process.env.FACEBOOK_LINK, // Placeholder link, replace with the actual URL
  },
  {
    src: "twitter-icon.svg",
    alt: "Twitter",
    target: "_blank",
    href: process.env.TWITTER_LINK, // Placeholder link, replace with the actual URL
  },
  {
    src: "linkedin-icon.svg",
    alt: "LinkedIn",
    target: "_blank",
    href: process.env.LINKDIN_LINK, // Placeholder link, replace with the actual URL
  },
  {
    src: "github-icon.svg",
    alt: "GitHub",
    target: "_blank",
    href: process.env.GITHUB_LINK, // Placeholder link, replace with the actual URL
  },
];

export const contactDetails = {
  email: "ydhiman20@gmail.com",
  copyright: `Copyright ${new Date().getFullYear()}. All rights reserved,`,
};

export const projectData = [
  {
    title: "Project 1",
    tech: ["Lorem", "Ipsum", "Dolor"],
    githubLink: "https://github.com/username/lorem-ipsum-1",
    url: "https://lorem-ipsum-1.com",
    src: "placeholder.png",
  },
  {
    title: "Project 2",
    tech: ["Sit", "Amet", "Consectetur"],
    githubLink: "https://github.com/username/lorem-ipsum-2",
    url: "https://lorem-ipsum-2.com",
    src: "placeholder.png",
  },
  {
    title: "Project 3",
    tech: ["Adipiscing", "Elit", "Tempor"],
    githubLink: "https://github.com/username/lorem-ipsum-3",
    url: "https://lorem-ipsum-3.com",
    src: "placeholder.png",
  },
  {
    title: "Project 4",
    tech: ["Eiusmod", "Incididunt", "Labore"],
    githubLink: "https://github.com/username/lorem-ipsum-4",
    url: "https://lorem-ipsum-4.com",
    src: "placeholder.png",
  },
  {
    title: "Project 5",
    tech: ["Dolore", "Magna", "Aliqua"],
    githubLink: "https://github.com/username/lorem-ipsum-5",
    url: "https://lorem-ipsum-5.com",
    src: "placeholder.png",
  },
  {
    title: "Project 6",
    tech: ["Ut", "Enim", "Minim"],
    githubLink: "https://github.com/username/lorem-ipsum-6",
    url: "https://lorem-ipsum-6.com",
    src: "placeholder.png",
  },
];

export const TimeLineData = [
  {
    id: 0,
    title: "Senior UI Specialist Engineer",
    duration: "Jul 2019 - Till",
    org: "Editorialist",
    skills: ["UI", "UX", "Next", "React", "Aanalytics Tools", "Wordpress"],
  },
  {
    id: 1,
    title: "Web designer/Developer",
    duration: "Feb 2013 - May 2019",
    org: "Miracle Group",
    skills: [
      "UI",
      "UX",
      "Wordpress",
      "Joomla",
      "Javascript",
      "Php",
      "Aanalytics",
    ],
  },
  {
    id: 2,
    title: "Associate Consultant",
    duration: "Feb 2012 - Oct 2013",
    org: "Seasia group",
    skills: ["Photoshop", "Illustrator", "HTML", "CSS", "JavaScript"],
  },
];

export const techSkills = [
  {
    title: "Design Tools",
    index: "01/",
    icon: "bi bi-brush",
    skills: [
      "UI Design",
      "UX Flow",
      "Research",
      "Prototyping",
      "Adobe XD",
      "Figma",
      "Photoshop",
      "illustrator",
    ],
  },
  {
    title: "UI Developer",
    index: "02/",
    icon: "fa6/FaCode",
    skills: [
      "HTML",
      "CSS Preprocessor",
      "JavaScript (ES6+)",
      "ReactJs",
      "NextJs",
      "TypeScript",
      "JQuery",
      "MySQL",
      "Rest API",
      "Performance Optimization",
      "Chrome Extensions",
      "SEO Audit",
      "Search Console",
      "Version,Control/Git",
    ],
  },
  {
    title: "Analytics",
    index: "03/",
    icon: "bi bi-graph-up-arrow",
    skills: [
      "Google Analytics",
      "Google Tag Manager",
      "Microsoft Clarity",
      "Looker Studio",
    ],
  },
  {
    title: "Theme Developer",
    index: "04/",
    icon: "bi bi-window-sidebar",
    skills: ["Shopify", "WordPress", "Magento", "Joomla"],
  },
];

export const ABOUT_CONTENT = {
  avatarAlt: "Profile Image",
  greeting: "Hi, I’m YD",
  title: "Frontend",
  typeAnimation: "Developer & Visual Designer",
  description:
    "Currently focused on crafting user experiences that inspire engagement and drive growth.",
  buttonText: "Connect Me",
  buttonLink: "/contact",
};

// Constants for Text Content
export const ABOUT_PAGE_CONTENT = {
  aboutHeading: "About",
  aboutSubHeading: "Little about me. Also, It's not that hard to find me.",
  aboutDescription:
    "Front-end Engineer specializing in building modern, reactive, and user-friendly web applications with the latest technologies. I believe the perfect UI architecture blends user goals and needs into an elegant, efficient, and robust design. Experienced in React.js, Next.js, and state management with Redux, as well as proficient in JavaScript, TypeScript, Tailwind CSS, and SASS. Skilled in developing large-scale web applications, cross-browser platforms, and responsive user interfaces while adhering to design constraints.",
  techStackHeading: "Tech Stack",
  techStackSubHeading:
    "Like many developers, I often find myself spending more time exploring and experimenting with tools than actually writing meaningful code.",
};
