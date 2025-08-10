/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chirag Phor",
  title: "Hey there! I'm Chirag",
  subTitle: emoji(
    "AI/MLOps Engineer by day, Python wizard by night 🧙‍♂️ | 5+ years of turning coffee into code and data into dollars | I make AI do cool things, from RAG chatbots that don't hallucinate (much) to Kubernetes clusters that actually stay up. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yDSBnqOafGwddUdzP9SjhrZmPU6xSwfh/view?usp=sharing", // Because even wizards need a resume
  displayGreeting: true // Hiding this would be like a magician hiding his wand! 🎩✨
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
  title: "My Superpowers 🦸‍♂️",
  subTitle: "Full-Stack Developer by title, Tech Swiss Army Knife by nature",
  skills: [
    emoji(
      "⚡ Crafting beautiful, responsive UIs that don't make users want to throw their devices out the window"
    ),
    emoji("⚡ Building PWAs so smooth, they'll make native apps question their life choices"),
    emoji(
      "⚡ Saved companies millions by making data pipelines that don't suck. Tech stack: Python (obviously), AWS (Bedrock, EKS), Airflow, Terraform, Docker, and enough vector databases to make a normal person question their life choices"
    ),
    emoji(
      "⚡ Trained 600+ people on our in-house agent platform - because someone had to teach the machines who's boss. Let's build something amazing together! 🚀"
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
      schoolName: "Indian Institute of Technology, Jodhpur",
      logo: require("./assets/images/iit.png"),
      subHeader: "Master of Technology in Computer Science",
      duration: "July 2024 - Present",
      desc: "CGPA: 7.5",
      descBullets: []
    },
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

// My Tech Stack - The Tools of My Trade

const techStack = {
  viewSkillBars: true, // Because who doesn't love a good progress bar?
  experience: [
    {
      Stack: "Backend/System Design",
      progressPercentage: "90%", // I make servers sing and databases dance 💃
      description: "From APIs that never sleep to databases that scale like they're on steroids"
    },
    {
      Stack: "Frontend/UI Design",
      progressPercentage: "60%",
      description: "Making things pretty and functional, one pixel at a time"
    },
    {
      Stack: "AI/ML Engineering",
      progressPercentage: "85%",
      description: "Teaching machines to be (almost) as smart as humans, one epoch at a time"
    }
  ],
  displayCodersrank: false // My skills speak louder than badges, but feel free to ask for proof! 😉
};

// Work Experience - The Chronicles of a Code Warrior

const workExperiences = {
  display: true, // Hiding this would be like a magician revealing their secrets!
  experience: [
    {
      role: "AI/ML Engineer",
      company: "C2FO",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Oct 2021 – Present",
      desc: "C2FO - Where we make working capital work harder than a caffeinated developer during a hackathon! 🚀",
      descBullets: [
        "🔧 Tech Stack: Python, TensorFlow, PyTorch, Kubernetes, AWS (Bedrock, EKS), Airflow, Terraform",
        "🚀 Led the development of AI-powered financial forecasting models that predict cash flow with uncanny accuracy (almost like we had a crystal ball 🔮)",
        "🤖 Built and deployed ML models that process millions of transactions daily, making financial decisions faster than you can say 'machine learning'"
      ]
    },
    {
      role: "Software Engineer 1",
      company: "Udaan",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Jan 2020 – Oct 2021",
      desc: "Udaan - Where we connected businesses faster than you can say 'B2B e-commerce' (but with way more code and coffee ☕)",
      descBullets: [
        "💻 Tech Stack: Python, Django, PostgreSQL, Redis, Docker, AWS",
        "⚡ Scaled backend systems to handle 10x traffic growth (without breaking a sweat or the servers)",
        "🔧 Built data pipelines so efficient they made ETL look like magic (but with better documentation)",
        "🎯 Led a team of 3 junior developers, proving that herding cats is possible with enough treats (and code reviews)"
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

// Projects That Made Me Go 'Wow, That Actually Worked!'

const bigProjects = {
  title: "🚀 Project Showcase",
  subtitle: "From 'Will this work?' to 'How did we ever live without this?' - My journey through code and chaos",
  projects: [
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "TWA - The App That Wasn't an App",
      projectDesc: "When C2FO needed an Android presence but didn't want to build a full native app, I waved my magic wand (read: wrote some code) and conjured up a Trusted Web Activity (TWA) app. The result? All the Play Store glory with a fraction of the native development headaches. Users got an app icon, we got to keep our sanity - everyone wins! 🎉",
      footerLink: [
        {
          name: "See It Live on Play Store",
          url: "https://play.google.com/store/apps/details?id=com.c2fo.app.twa&pcampaignid=web_share"
        },
        {
          name: "How TWAs Work",
          url: "https://developer.chrome.com/docs/android/trusted-web-activity/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.png"),
      projectName: "Datadog - The All-Seeing Eye",
      projectDesc: "Ever wanted to know what your applications are doing when you're not looking? I turned C2FO's monitoring from 'Why is this broken?' to 'I can see the future!'. Built comprehensive dashboards, set up alerts that actually matter, and integrated everything with Slack so we could fix issues before users even noticed. The servers have never felt so loved. 💖",
      footerLink: [
        {
          name: "Datadog Magic",
          url: "https://www.datadoghq.com/"
        },
        {
          name: "My Favorite Monitoring Tips",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/lol5.webp"),
      projectName: "GPT-Powered Translation Overhaul",
      projectDesc: "Tired of paying humans to translate content (no offense, humans), I introduced AI to handle C2FO's translation needs. Replaced the clunky, expensive Smartling setup with a sleek GPT-powered solution that translates website content faster than you can say 'lost in translation'. The result? 70% cost reduction and translations that sometimes even make sense! 🌍✨",
      footerLink: [
        {
          name: "See the Magic of GPT",
          url: "https://platform.openai.com/docs/introduction"
        },
        {
          name: "Read About LLMs",
          url: "https://en.wikipedia.org/wiki/Large_language_model"
        }
      ]
    }
  ],
  display: true // Because hiding these gems would be a crime against awesomeness
};

// Trophy Case 🏆
// Where I keep all my digital bragging rights

const achievementSection = {
  title: emoji("Trophies & Accolades 🏆"),
  subtitle:
    "Because what's the point of doing cool stuff if you can't show it off? Here's proof I occasionally know what I'm doing!",

  achievementsCards: [
    {
      title: "AI Innovation Award",
      subtitle:
        "Recognized for developing a game-changing AI solution that saved the company $2M+ annually. Because who needs humans when you have algorithms? (Just kidding... mostly)",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AI Innovation Award",
      footerLink: [
        {
          name: "See the Magic",
          url: "#"
        },
        {
          name: "Read the Case Study",
          url: "#"
        }
      ]
    },
    {
      title: "Kubernetes Whisperer",
      subtitle:
        "Successfully containerized and deployed 50+ microservices without losing my sanity. Bonus: The servers only cried a little bit.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Kubernetes Logo",
      footerLink: [
        {
          name: "View Kubernetes Configs",
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
