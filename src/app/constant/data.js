import "dotenv/config";

// Header Configuration
export const headerLinks = [
  {
    alt: "about",
    href: "/about", // Placeholder link, replace with the actual URL
    target: "",
    title: "About",
  },
  {
    alt: "timeline",
    href: "/timeline", // Placeholder link, replace with the actual URL
    target: "",
    title: "Timeline",
  },

  {
    alt: "projects",
    href: "/projects", // Placeholder link, replace with the actual URL
    target: "",
    title: "Projects",
  },

  {
    alt: "contact",
    href: "/contact", // Placeholder link, replace with the actual URL
    target: "",
    title: "Contact",
  },
  {
    alt: "Resume",
    href: "https://docs.google.com/document/d/1_tXti08UIkA1QLYvWHRRd_zt08KV4QLfCwRY_INYKSU/edit?tab=t.0#heading=h.tzxy95a7f87c", // Placeholder link, replace with the actual URL
    target: "_blank",
    title: "Resume",
  },
];

// Footer Configuration
export const socialLinks = [
  {
    alt: "Facebook",
    href: process.env.FACEBOOK_LINK, // Placeholder link, replace with the actual URL
    src: "facebook-icon.svg",
    target: "_blank",
  },
  {
    alt: "Twitter",
    href: process.env.TWITTER_LINK, // Placeholder link, replace with the actual URL
    src: "twitter-icon.svg",
    target: "_blank",
  },
  {
    alt: "LinkedIn",
    href: process.env.LINKDIN_LINK, // Placeholder link, replace with the actual URL
    src: "linkedin-icon.svg",
    target: "_blank",
  },
  {
    alt: "GitHub",
    href: process.env.GITHUB_LINK, // Placeholder link, replace with the actual URL
    src: "github-icon.svg",
    target: "_blank",
  },
];

export const contactDetails = {
  copyright: `Copyright ${new Date().getFullYear()}. All rights reserved,`,
  email: "ydhiman20@gmail.com",
};

export const projectData = [
  {
    githubLink: "https://github.com/username/lorem-ipsum-1",
    src: "placeholder.png",
    tech: ["Lorem", "Ipsum", "Dolor"],
    title: "Project 1",
    url: "https://lorem-ipsum-1.com",
  },
  {
    githubLink: "https://github.com/username/lorem-ipsum-2",
    src: "placeholder.png",
    tech: ["Sit", "Amet", "Consectetur"],
    title: "Project 2",
    url: "https://lorem-ipsum-2.com",
  },
  {
    githubLink: "https://github.com/username/lorem-ipsum-3",
    src: "placeholder.png",
    tech: ["Adipiscing", "Elit", "Tempor"],
    title: "Project 3",
    url: "https://lorem-ipsum-3.com",
  },
  {
    githubLink: "https://github.com/username/lorem-ipsum-4",
    src: "placeholder.png",
    tech: ["Eiusmod", "Incididunt", "Labore"],
    title: "Project 4",
    url: "https://lorem-ipsum-4.com",
  },
  {
    githubLink: "https://github.com/username/lorem-ipsum-5",
    src: "placeholder.png",
    tech: ["Dolore", "Magna", "Aliqua"],
    title: "Project 5",
    url: "https://lorem-ipsum-5.com",
  },
  {
    githubLink: "https://github.com/username/lorem-ipsum-6",
    src: "placeholder.png",
    tech: ["Ut", "Enim", "Minim"],
    title: "Project 6",
    url: "https://lorem-ipsum-6.com",
  },
];

export const TimeLineData = [
  {
    duration: "Jul 2019 - Till",
    id: 0,
    org: "Editorialist",
    skills: ["UI", "UX", "Next", "React", "Aanalytics Tools", "Wordpress"],
    title: "Senior UI Specialist Engineer",
  },
  {
    duration: "Feb 2013 - May 2019",
    id: 1,
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
    title: "Web designer/Developer",
  },
  {
    duration: "Feb 2012 - Oct 2013",
    id: 2,
    org: "Seasia group",
    skills: ["Photoshop", "Illustrator", "HTML", "CSS", "JavaScript"],
    title: "Associate Consultant",
  },
];

export const techSkills = [
  {
    icon: "bi bi-brush",
    index: "01/",
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
    title: "Design Tools",
  },
  {
    icon: "fa6/FaCode",
    index: "02/",
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
    title: "UI Developer",
  },
  {
    icon: "bi bi-graph-up-arrow",
    index: "03/",
    skills: [
      "Google Analytics",
      "Google Tag Manager",
      "Microsoft Clarity",
      "Looker Studio",
    ],
    title: "Analytics",
  },
  {
    icon: "bi bi-window-sidebar",
    index: "04/",
    skills: ["Shopify", "WordPress", "Magento", "Joomla"],
    title: "Theme Developer",
  },
];

export const ABOUT_CONTENT = {
  avatarAlt: "Profile Image",
  buttonLink: "/contact",
  buttonText: "Connect Me",
  description:
    "Currently focused on crafting user experiences that inspire engagement and drive growth.",
  greeting: "Hi, I’m YD",
  title: "Frontend Developer & Visual Designer",
  typeAnimation: "Developer & Visual Designer",
};

// Constants for Text Content
export const ABOUT_PAGE_CONTENT = {
  aboutDescription:
    "Front-end Engineer specializing in building modern, reactive, and user-friendly web applications with the latest technologies. I believe the perfect UI architecture blends user goals and needs into an elegant, efficient, and robust design. Experienced in React.js, Next.js, and state management with Redux, as well as proficient in JavaScript, TypeScript, Tailwind CSS, and SASS. Skilled in developing large-scale web applications, cross-browser platforms, and responsive user interfaces while adhering to design constraints.",
  aboutHeading: "About",
  aboutSubHeading: "Little about me. Also, It's not that hard to find me.",
  techStackHeading: "Tech Stack",
  techStackSubHeading:
    "Like many developers, I often find myself spending more time exploring and experimenting with tools than actually writing meaningful code.",
};
