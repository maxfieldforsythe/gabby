import research from "./assets/pdf/research.pdf"
import rcv from "./assets/pdf/rcv.pdf"
import halcion from "./assets/pdf/halcion.pdf"
import bea from "./assets/pdf/bea.pdf"

const logotext = "Gabrielle";
const meta = {
    title: "John Doe",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "My name’s Gabi.",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I am a recent journalism graduate with a minor in Creative Writing and a strong academic record. I have experience in research, writing, content creation, and multimedia production, with a particular interest in exploring complex global and national issues. ",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "In the midst of the pandemic, I found myself watching movies every day, captivated by the idea that storytelling is more of a mirror of our personal views and identities than an accurate representation of reality. This realization sparked my deep dive into understanding how these narratives naturally shape journalism and its effect on global politics. My research includes studies like “Beyond Black and White: Unraveling U.S. Media Narratives of Ukraine’s Far-Right” and “Visual Propaganda: Analyzing Discourse From Ukraine’s Far-Right Online,” where I examined media narratives surrounding far-right militias in Ukraine from a linguistic perspective. After defending my honors thesis and graduating summa cum laude, I was fortunate to continue my research and debut my findings at the symposium for The Impact of Disinformation and Misinformation on Democratic Society. I take pride in my ability to approach each project with curiosity and a solution-focused mindset, always striving to make complex issues understandable while maintaining a strong sense of ethics and responsibility.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Research",
        value: 90,
    },
    {
        name: "Media Law",
        value: 85,
    },
    {
        name: "Adobe Suite",
        value: 80,
    },
    {
        name: "Google Suite",
        value: 60,
    },
    {
        name: "Microsoft Office",
        value: 60,
    },
    {
        name: "APA and AP Styling",
        value: 85,
    },
    {
        name: "Photography",
        value: 85,
    },
    {
        name: "Videography",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "Visual Propaganda: Analyzing Discourse From Ukraine’s Far-Right Online",
        link: research,
        video: ""
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Ranked Choice Voting for Colorado is Challenging the Two-Party System One City at a time",
        link: rcv,
        video: ""
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Halcyon’s New Day: How a Boulder School Transforms the Mental Health of its Troubled Students",
        link: halcion,
        video: "https://www.youtube.com/watch?v=CfKiFJw2Tcg"
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "UNRAVELING U.S. MEDIA NARRATIVES OF UKRAINE’S FAR-RIGHT (BEA symposium)",
        link: bea,
        video: ""
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Work From Home News Story",
        link: "",
        video: "https://www.youtube.com/watch?v=9y4MB3FNLQg&authuser=0"
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Sammy Profile Story",
        link: "",
        video: "https://www.youtube.com/watch?v=dpSmykkrIEU&authuser=0"
    },
];

const contactConfig = {
    YOUR_EMAIL: "gabi@gabriellegomez.com",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};