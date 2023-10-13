/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chirag Phor",
  title: "Hi all, I'm Chirag Phor",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript. Equipped with a diverse and promising skill set. Proficient in an assortment of technologies. Able to effectively self manage in independent projects, as well as collaborate in team setting"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XLEgy4fl-dXaoR09Ej-QeTSJ7Wz3B3h_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cph0r",
  linkedin: "https://in.linkedin.com/in/chirag4/",
  gmail: "chiragphor19@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/chiragphor",
  // medium: "https://medium.com/@cph0r",
  stackoverflow: "https://stackoverflow.com/users/14067223/chirag-phor",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2016 - January 2020",
      desc: "CGPA: 8.5",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend/System Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Ui design",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer 2",
      company: "C2FO",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Oct 2021 – Present",
      desc: "C2FO is a working capital platform that enabled suppliers to receive early payment on their invoices, at discounts that they determined.",
      descBullets: [
        "Tech Stack - Typescript, Node, Jest, React, AWS",
        "Used various ideas from distributed computing, large-scale design, real-time data processing, data storage to solve challenging problems",
        "Created a TWA app for the website and published it on playstore",
      ]
    },
    {
      role: "Software Engineer 1",
      company: "Udaan",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Jan 2020 – Oct 2021",
      desc: "Udaan is a B2B trade platform that brings manufacturers, traders, retailers, and wholesalers into a single platform.",
      descBullets: [
        "Tech Stack - Python, Django, Postgres, Redis, Azure",
        "Gained significant expertise in popular back end technologies like AWS and PostgreSQL",
        "Individually developed and scaled the entire backend for HRM application along with maximising application's efficiency",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "HealthCloud AI",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2020 – Jun 2020",
      desc: "Healthcloud AI developed an AI based Medical Assistant which automates the health care processes keeping track of users health and symptoms.",
      descBullets: [
        "Developed front end for the web app version of the mobile app independently using Python and Flasks",
        "Managed time sensitive updates, including content changes and database upgrades",
        "Designed, wrote, debugged web applications with complete accuracy"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some awesome projects that I did for the companies I worked for",
  projects: [
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "TWA",
      projectDesc: "While employed at C2FO, the company aimed to expand its presence, and to achieve this, they sought to have an Android app available on the Play Store. However, creating a full-fledged Android app would have been a time-consuming and resource-intensive endeavor. The solution to this challenge was the development of a Trusted Web Activity (TWA) application for the company's website. I created and deployed the TWA app for C2FO on playstore",
      footerLink: [
        {
          name: "Visit Playstore",
          url: "https://play.google.com/store/apps/details?id=com.c2fo.app.twa&pcampaignid=web_share"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.png"),
      projectName: "Datadog",
      projectDesc: "C2FO required comprehensive logging and monitoring for their applications, and Datadog proved to be the ideal solution. I gained a high level of proficiency in using the platform, enabling me to design dashboards, set up monitors, and seamlessly integrate it with Slack and OpsGenie, as well as perform log analysis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.datadoghq.com/"
        }
      ]
    },
    {
      image: require("./assets/images/lol5.webp"),
      projectName: "GPT Integration",
      projectDesc: "Being a global company C2FO always struggled with translation on their website, previouly it was handled by smartling a tool that does translations by human volunteers, this wa error prone, time consuming and costly process. For this I proposed using LLM for translations of emails and website content using Chat Gpt's API's",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://platform.openai.com/docs/introduction"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "add data",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8816086525",
  email_address: "chiragphor19@gmail.com",
}


// Twitter Section

const twitterDetails = {
  userName: "ph0rgasm", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
