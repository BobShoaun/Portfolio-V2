const resume = {
  name: "Ng Bob Shoaun",
  title: "Software Developer &\n Designer",
  phoneNumber: "+1 (437) 984 6410",
  website: {
    url: "https://www.bobng.me/",
    label: "bobng.me",
  },
  email: {
    url: "ngbobshoaun2000@gmail.com",
    label: "ngbobshoaun2000@gmail",
  },
  linkedIn: {
    url: "https://www.linkedin.com/in/ngbobshoaun/",
    label: "linkedin.com/in/ngbobshoaun",
  },
  github: {
    url: "https://github.com/BobShoaun",
    label: "github.com/BobShoaun",
  },
  location: "Toronto, Canada",
  about:
    // "Skilled and diligent programmer with an eye for good designs. Always seeking to learn and improve on existing ways. A resourceful and avid self-learner passionate in coding.",
    "Accomplished and diligent software developer with a good eye for designs. Able to deliver products with high quality proven through customer satisfaction. Friendly, with strong communication skills with teammates. Seeking to learn and grow to become a professional software engineer.",
  codingLanguages: [
    "JavaScript (ES6)", // ES6
    "HTML",
    "(S)CSS",
    "C(++)",
    "C#",
    "GraphQL",
    "Python",
    "(PLPG)SQL",
    "Java",
  ],
  // Netlify, Github,
  techStack: [
    "React",
    "Vue",
    "Node.js",
    "Express",
    "Svelte",
    "Unity Engine",
    "Git",
    "Tailwind",
    "Redux",
    "MongoDB",
    "Postgres",
    "Redis",
    "Hasura",
    "Github Actions",
    "Firebase",
    "Heroku",
    "Google Cloud",
    "Figma",
    "Illustrator",
  ],
  // Ukulele
  interests: ["Drums", "Graphic Design", "PC Building", "Table Tennis"],
  languages: ["English", "Chinese", "Malay"],
  lastUpdated: "5 Nov 2021",
  education: {
    school: "University of Toronto",
    cgpa: "3.93 (Dean's List Scholar)",
    major: "Computer Science Specialist (3rd year)",
    timeline: "Sept 2019 - Present",
    courses: [
      { name: "MAT137: Calculus!", grade: "A+" },
      { name: "CSC207: Software Design", grade: "A &nbsp;" },
      { name: "CSC209: Software Tools & Systems Programming", grade: "A+" },
      { name: "CSC258: Computer Organization", grade: "A+" },
      { name: "CSC263: Data Structures & Analysis", grade: "A &nbsp;" },
    ],
  },

  experiences: [
    {
      company: "X-CD Technologies Inc.",
      position: "Software developer",
      timeline: "April 2021 - Present",
      points: [
        "Delivered more than 6 projects since, including client's e-commerce stores, product consumption platforms, member & corporate directories, and the corresponding admin functionalities.",
        "Participated in code reviews, and proposed improved coding conventions resulting in an 80% increase in codebase quality.",
        "Used React, Redux, Redux-saga, Node.js, Express, and MySQL.",
      ],
    },
    {
      company: "Pathforge Pte. Ltd.",
      position: "Fullstack developer",
      timeline: "Sept 2020 - April 2021",
      points: [
        "Worked with a cross-functional team in a startup environment.",
        "Conducted zoom lectures and mentoring sessions to groups of learners about programming and web development.",
        "Used Vue, Graphql, Hasura, and Postgres to build a social e-learning site.",
        "Developed a CMS for course materials, integrated user leaderboards, and implemented entire social feed and endorsement system from ground up.",
      ],
    },
    {
      company: "N2N Connect Bhd.",
      position: "Intern / Frontend developer",
      timeline: "May 2019 - Aug 2019",
      points: [
        "Revamped the company's internal timesheet management system using Angular.js and Bootstrap, improving user experience by 80%.",
        "Fixed 90% of the bugs and introduced new quality of life features.",
        "Presented and showcased my work during head of department meetings.",
        "Authored extensive technical documentation for proper project handover.",
      ],
    },
  ],
  projects: [
    {
      name: "Bobcoin Cryptocurrency (XBC)",
      type: "Personal project",
      points: [
        "An open source, decentralized, peer to peer, proof of work cryptocurrency.",
        "Created from scratch using Node.js for business logic. Express and MongoDB for the Node software/backend. Jest for unit testing. React, Redux-toolkit, and Bulma for the frontend block explorer, wallet software, and mining client.",
        "Secured using cryptographic hash algorithms, elliptic curve digital signatures, public-key cryptography, merkle trees, and the UTXO model.",
      ],
    },
    {
      name: "Assembly Doodle Jump",
      type: "Academic project",
      points: [
        "Final coursework using MIPS assembly language, scored a grade of 100%.",
        "Features sound effects, powerups like springs and jetpacks, different platform types, and scalable difficulty.",
      ],
    },
    {
      name: "Course Checker",
      type: "Personal project",
      points: [
        "Aids in course planning for upcoming semester by dynamically generating a visual timetable given a selection of courses.",
        "Highly customizable in terms of colors, additional info, and timestamps",
        "Developed with C# using the Unity Engine, built as a WebGL frame embedded into a website made with HTML + CSS.",
      ],
    },
    // {
    //   name: "Water Chef",
    //   type: "Personal project",
    //   points: [
    //     "A fast paced restaurant simulator game developed with Unity Engine and written in C#.",
    //     "Complete with multiple levels, objectives, animations, music, and save load functionality.",
    //   ],
    // },
    // {
    //   name: "Fishackathon 2018",
    //   type: "by HackerNest",
    //   points: [
    //     "Built an app to generate awareness of region specific fishing laws.",
    //     "Presented to judges working in the fishing industry.",
    //   ],
    // },
  ],
};

export default resume;
