const resume = {
  name: "Bob Shoaun Ng",
  title: "Software Developer &\n Designer",
  phoneNumber: "(437) 984-6410",
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
  location: "Toronto, ON, Canada",
  about:
    // "Skilled and diligent programmer with an eye for good designs. Always seeking to learn and improve on existing ways. A resourceful and avid self-learner passionate in coding.",
    "Accomplished and diligent software developer with a good eye for designs. Able to deliver products with high quality proven through customer satisfaction. Friendly, with strong communication skills with teammates. Seeking to learn and grow to become a professional software engineer.",

  skills: {
    languages: [
      "JavaScript (ES6)",
      "HTML",
      "CSS",
      "Java",
      "Python",
      "C#",
      "TypeScript",
      "C",
      "C++",
      "SQL",
      "GraphQL",
    ],
    frontend: [
      "React",
      "Tailwind",
      "Redux",
      "Vue",
      "Svelte",
      "Astro",
      "Bulma",
      "Bootstrap",
      "Figma",
    ],
    backend: [
      "Node.js",
      "Express",
      "Hasura",
      "Ruby on Rails",
      "Java Spring",
      "Quarkus"
    ],
    database: ["MongoDB", "Postgres", "DynamoDB", "Redis", "RDS Aurora"],
    devops: [
      "AWS",
      "Firebase",
      "Google Cloud",
      "Heroku",
      "Docker",
      "Netlify",
      "Github Actions",
      "Splunk",
      "Jenkins",
    ],
    others: [
      "Git",
      "NPM",
      "Insomnia",
      "Postman",
      "Unity Engine",
      "Jest",
      "Selenium",
      "Adobe Illustrator",
    ],
  },

  // Ukulele
  interests: ["Drums", "Graphic Design", "PC Building", "Table Tennis"],
  languages: ["English", "Chinese", "Malay"],
  lastUpdated: "Dec 2023",
  education: {
    school: "University of Toronto, St. George",
    cgpa: "3.91 / 4.0 CGPA (Dean's List Scholar)", // Dean's List Scholar
    description:
      "Graduated with Honours Bachelor of Science - Computer Science Specialist",
    timeline: "Sep 2019 - Jun 2024",
  },

  experiences: [
    {
      company: "Amazon Web Services",
      position: "Software Development Engineer - RDS Aurora",
      timeline: "Sep 2024 - Present",
      location: "Toronto, ON",
      points: [
        "Migrated codebase of integral database software from Java Spring to Quarkus framework while maintaining backwards compatibility, resulting in a reduced memory footprint and CPU usage of 30% and 60% respectively, with the startup time reduced by 30x.",
        "Designed and implemented automated e2e testing and integrated QA process into the existing pipeline for a smooth rollout of the migration.",
        "Corresponded in 10+ customer escalation tickets and performed root cause analysis on issues in customer's database instances.",
        "Onboarded 2 new hires and 2 interns, provided troubleshooting aid and advice which allowed them to ramp up within the first 3 weeks.",
      ],
    },
    {
      company: "Amazon Web Services",
      position: "SDE Intern - RDS Aurora",
      timeline: "May 2023 - Aug 2023",
      location: "Toronto, ON",
      points: [
        "Created a dashboard for on-call engineers to monitor patching statuses of Aurora limitless database clusters, saving 85% of the total time needed to monitor patches and detect issues, with UI/UX considerations in the forefront",
        "Developed the dashboard using React, Cloudscape, DynamoDB, Ruby on Rails, and integrated with various existing RDS service APIs.",
        "Wrote design document, held reviews, midpoint and final demo with 50+ attendees, across 3 stakeholder departments.",
        // "Drove project from conception to completion. Held meetings spanning mutliple teams. Held design document reviews, midpoint demos, final presentation, and various meetings with stakeholder and other engineers to align on details.",
        // "Contributed to 3 major codebases, spanning multiple teams with different conventions. Code thoroughly tested with >95% coverage.",
        "Contributed to 3 major codebases owned by different teams, with all code thoroughly reviewed and tested with >95% coverage.",
        "Wrote detailed Wiki documentation, recorded code walkthrough videos of the codebase for a thorough knowledge transfer.",
      ],
    },
    {
      company: "Zynga",
      position: "Software Engineering Intern - Analytics",
      timeline: "May 2022 - Apr 2023",
      location: "Toronto, ON",
      points: [
        "Developed a centralized portal for analytics applications using React and Redux, introducing accessible HTML and Tailwind.",
        "Led production releases of the centralized portal, ensuring approval from quality assurance, running and fixing automated content testing, drafting Change Management requests, and executing scheduled deployments using Jenkins with 0 downtime.",
        "Designed and built a Python CronJob for tagging product emails, saving project managers 90% of time spent manually tagging emails.",
        // "Wrote technical specifications, held review meetings, then drove the entire feature to completion.",
        "Created analytics reports using Jupyter notebooks and useful logging visualization using Splunk dashboards.",
        "Carried out frontend migration of a major A/B testing system from Angular.js, Bootstrap to React, TypeScript, and Tailwind.",
      ],
    },
    {
      company: "X-CD Technologies",
      position: "Software Developer",
      timeline: "Apr 2021 - Feb 2022",
      location: "Toronto, ON",
      points: [
        "Developed clients’ e-commerce stores, product consumption platforms, member & corporate directories, and file browsers using React, Redux and Tailwind, resulting in 6 projects delivered for 3 clients in total.",
        "Developed corresponding APIs and admin functionalities using Node.js, Express, and MySQL, following best practices for API development.",
        // "Presented and showcased my work during head of department meetings.",
        "Provided constructive feedback and proposed improved coding conventions in code reviews, increasing codebase quality and robustness.",
      ],
    },
    {
      company: "Pathforge",
      position: "Full-Stack Developer",
      timeline: "Sep 2020 - Apr 2021",
      location: "Kuala Lumpur, Malaysia",
      points: [
        "Developed a social e-learning site using Vue, Bulma, GraphQL, Hasura, and Postgres, while continuously improving existing code.",
        "Built a CMS for course materials, implemented user leaderboards, mentor endorsement feature, and the entire social feed system.",
        "Taught programming and web development - HTML, CSS, and JavaScript to students enrolled in the bootcamp in 2 hour long sessions.",
      ],
    },
    // {
    //   company: "N2N Connect Bhd.",
    //   position: "Industrial Trainee",
    //   timeline: "May 2019 - Aug 2019",
    //   location: "Kuala Lumpur, Malaysia",
    //   points: [
    //     "Revamped timesheet management system written in Angular.js and Bootstrap by introducing QoL features and fixing bugs.",
    //     // "Presented and showcased work during head of department meetings, collecting critical feedback and suggestions.",
    //     "Authored extensive technical documentation for a proper project handover, saving 70% of on-boarding time for new developers.",
    //   ],
    // },
  ],
  projects: [
    {
      name: "Bobcoin",
      type: "Personal project",
      points: [
        "Built a fully featured cryptocurrency complete with node software, wallet, block explorer, faucet, solo and pool mining client using Typescript, Crypto.js, Express, MongoDB, Socket.io, Jest, React, Redux, Bulma, and Firebase.",
        "Secured using the Nakamoto PoW consensus mechanism, cryptographic hash algorithms, digital signatures, public-key cryptography, UTXO model, Merkle trees, address checksums, BIP compliancy via HD wallets, and mnemonic seed phrases resulting in a tamper-proof ledger.",
        // "Refactored blockchain storage, query, and validation code by redefining Mongoose schemas, and devising a new stratagy for handling blockchain reorganizations and forks. Overall, increasing efficiency and scalability by 80%.",
        "Through this project, taught 20+ friends and family basic cryptocurrency usage, and grew a Discord community with 100+ members.",
      ],
      link: "https://github.com/BobShoaun/Bobcoin-Node",
      github: [
        {
          repo: "Bobcoin-Node",
          url: "https://github.com/BobShoaun/Bobcoin-Node",
        },
        {
          repo: "Bobcoin-Client",
          url: "https://github.com/BobShoaun/Bobcoin-Client",
        },
      ],
    },
    {
      name: "Artsu.me",
      type: "Academic project",
      points: [
        "Developed an art hosting web application that allows artists to create a job-ready portfolio to showcase their artworks.",
        "Led and managed a team of 4 junior developers, providing 1-on-1 mentorship and support to struggling individuals.",
        "Built using React, Tailwind, Redux for the frontend; Express, MongoDB, and Cloudinary for the backend; Heroku, and Google Cloud for deployment; Jest, and Supertest for testing; OAuth2.0 for authentication using Google or Facebook.",
        // "Wrote proper documentation for developer on-boarding, for every user story, and for every API endpoint.",
      ],
      link: "https://github.com/BobShoaun/Artsu.me",
      github: [
        {
          repo: "Artsu.me",
          url: "https://github.com/BobShoaun/Artsu.me",
        },
      ],
    },
    // {
    //   name: "Assembly Doodle Jump",
    //   type: "Academic project",
    //   points: [
    //     "Final coursework using MIPS assembly language, scored a grade of 100%.",
    //     "Features sound effects, powerups like springs and jetpacks, different platform types, and scalable difficulty.",
    //   ],
    // },
    // {
    //   name: "Course Checker",
    //   type: "Personal project",
    //   points: [
    //     "Aids in course planning for upcoming semester by dynamically generating a visual timetable given a selection of courses.",
    //     "Highly customizable in terms of colors, additional info, and timestamps",
    //     "Developed with C# using the Unity Engine, built as a WebGL frame embedded into a website made with HTML + CSS.",
    //   ],
    // },
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
