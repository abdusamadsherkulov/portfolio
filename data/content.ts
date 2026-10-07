export type Project = {
    title: string;
    description: string;
    tags: string[];
    live?: string;
    repo: string;
};

export const profile = {
    name: "Sam Sherkulov",
    role: "Front-End Developer",
    intro:
        "I build clean, fast, accessible web interfaces with React, TypeScript and Next.js.",
    about:
        "I'm a front-end developer who enjoys turning ideas into clean, fast and responsive web interfaces. I care about simple design, good details and code that's easy to maintain. I'm always learning, and right now I'm exploring AI and cloud services.",
    email: "abdusamadsherkulov@gmail.com",
    github: "https://github.com/abdusamadsherkulov",
    linkedin: "https://linkedin.com/in/abdusamadsherkulov",
    telegram: "https://t.me/abdusamadsherkulov",
};

export const projects: Project[] = [
    {
        title: "CineList",
        description: "A movie diary where you rate films, build watchlists and folders, add friends, and chat live, with actor pages and genre filters.",
        tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind CSS"],
        live: "https://cinelist-app.vercel.app/",
        repo: "https://github.com/abdusamadsherkulov/cinelist",
    },
    {
        title: "Aeris",
        description: "A weather app with live forecasts, city search suggestions, and an animated sky that changes with the weather.",
        tags: ["Python", "Flask", "JavaScript", "REST API"],
        live: "https://aeris-weather-app.vercel.app/",
        repo: "https://github.com/abdusamadsherkulov/Aeris",
    },
    {
        title: "Bankist App",
        description:
            "Built while learning JavaScript, then extended with a responsive layout and optimized images. Vanilla HTML, CSS and JS.",
        tags: ["HTML", "CSS", "JavaScript"],
        live: "https://bankistapp-sigma.vercel.app/",
        repo: "https://github.com/abdusamadsherkulov/BankistApp",
    },
    {
        title: "Petcare",
        description: "One sentence on what it does and why it matters.",
        tags: ["React", "Node.js"],
        live: "",
        repo: "https://github.com/abdusamadsherkulov/petcare.uz",
    },

];

export const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
];

export type Certificate = {
    title: string;
    issuer: string;
    year: string;
    file: string;
};

export const certificates: Certificate[] = [
    {
        title: "Certificate of Completion: JavaScript Course",
        issuer: "Udemy",
        year: "2024",
        file: "/certificates/javascript.pdf",
    },
    {
        title: "Certificate of Participation: Software Development Internship",
        issuer: "Itransition",
        year: "2026",
        file: "/certificates/itransition.pdf",
    },
];