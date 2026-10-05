import Section from "@/components/Section";
import { profile, projects, skills } from "@/data/content";

const nav = ["projects", "about", "contact"];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-neutral-200/60 bg-white/80 backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-950/80">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 sm:px-8 py-4">
          <a href="#" className="font-semibold">
            {profile.name}
          </a>
          <ul className="flex gap-4 sm:gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            {nav.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="capitalize transition hover:text-neutral-900 dark:hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Hero */}
        <section className="animate-fade-up py-20 sm:py-32 lg:py-40">
          <p className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-green-500" />
            Available for work
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tighter sm:mt-8 sm:text-6xl lg:text-7xl">
            {profile.name}
            <br />
            <span className="text-neutral-400 dark:text-neutral-600">
              {profile.role}.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <a
              href="#projects"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Contact me
            </a>
          </div>
        </section>

        {/* Projects */}
        <Section id="projects" title="Selected work">
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {projects.map((p, i) => (
              <li
                key={p.title}
                className={`flex items-start gap-4 sm:gap-6 ${i === 0 ? "pb-4" : "py-4"}`}
              >
                <span className="pt-1.5 text-sm tabular-nums text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-neutral-500">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-neutral-900 px-4 py-1.5 font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                      >
                        Live demo ↗
                      </a>
                    )}
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-neutral-300 px-4 py-1.5 font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                    >
                      Code ↗
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* About */}
        <Section id="about" title="About">
          <p className="max-w-xl text-neutral-600 dark:text-neutral-400">
            {profile.about}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-neutral-200 px-3 py-1 text-sm dark:border-neutral-800"
              >
                {s}
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="text-neutral-600 dark:text-neutral-400">
            Open to work. The best way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block break-all text-lg font-semibold underline decoration-neutral-300 underline-offset-4 transition hover:decoration-current sm:text-2xl dark:decoration-neutral-700"
          >
            {profile.email}
          </a>
          <div className="mt-6 flex gap-5 text-sm text-neutral-500">
            <a href={profile.github} className="hover:text-current">GitHub</a>
            <a href={profile.linkedin} className="hover:text-current">LinkedIn</a>
            <a href={profile.telegram} className="hover:text-current">Telegram</a>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl px-5 py-10 text-center text-sm text-neutral-500 sm:px-8">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}