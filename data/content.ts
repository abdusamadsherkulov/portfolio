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
        "Write 2-3 sentences about yourself: what you build, what you're learning, what you're looking for.",
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