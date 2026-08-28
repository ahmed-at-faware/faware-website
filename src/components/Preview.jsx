export default function Preview() {
  return (
<section
              className="relative bg-background border-t-2 border-foreground"
            >
              <div className="trypost-container">
                <div
                  className="relative max-w-3xl mx-auto text-center px-6 py-16 sm:py-24 space-y-4"
                >
                  <svg
                    className="hidden sm:block absolute top-12 right-0 size-8 text-violet-400 -rotate-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M 12 2 L 13.5 8.5 L 20 10 L 13.5 11.5 L 12 18 L 10.5 11.5 L 4 10 L 10.5 8.5 Z"
                    ></path></svg
                  ><svg
                    className="hidden sm:block absolute bottom-10 left-2 size-6 text-amber-400 rotate-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M 12 2 L 13.5 8.5 L 20 10 L 13.5 11.5 L 12 18 L 10.5 11.5 L 4 10 L 10.5 8.5 Z"
                    ></path></svg
                  ><span
                    className="bg-violet-200 inline-block text-[11px] font-black uppercase tracking-widest text-foreground border-2 border-foreground px-3 py-1 rounded-md shadow-2xs -rotate-1"
                  >
                    Features
                  </span>
                  <h2 className="h2 text-foreground">
                    What you actually do in TryPost
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    The six things you&#39;ll use every week, designed to feel
                    familiar from day one.
                  </p>
                </div>
                <div
                  className="mx-auto grid grid-cols-1 md:grid-cols-6 gap-5 px-6 pb-20"
                >
                  {/* [ */}
                  <div
                    className="bg-violet-50 group relative rounded-xl border-2 border-foreground p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all md:col-span-4"
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                    >
                      Feature 01</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-calendar size-6 text-violet-600"
                      >
                        <path
                          d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
                        ></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M11 15h1"></path>
                        <path d="M12 15v3"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-lg font-bold text-foreground tracking-tight"
                      >
                        Visual calendar
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        See every scheduled post across all networks in one
                        drag-and-drop calendar. Reorder by dragging, never
                        wonder what&#39;s queued for Friday.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-amber-50 group relative rounded-xl border-2 border-foreground p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all md:col-span-2 md:row-span-2"
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                    >
                      Feature 02</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-rocket size-6 text-amber-600"
                      >
                        <path
                          d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"
                        ></path>
                        <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                        <path
                          d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3
                        className="text-lg font-bold text-foreground tracking-tight"
                      >
                        Auto publishing
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Set the time, walk away. TryPost publishes via each
                        network&#39;s official API and notifies you only if
                        something fails.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-rose-50 group relative rounded-xl border-2 border-foreground p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all md:col-span-2"
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                    >
                      Feature 03</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-users size-6 text-rose-600"
                      >
                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path
                          d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                        ></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-lg font-bold text-foreground tracking-tight"
                      >
                        Every major network, one editor
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Instagram, Facebook, LinkedIn, X, TikTok, YouTube,
                        Pinterest, Threads, Bluesky, Mastodon, Telegram,
                        Discord, all from a single composer.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-sky-50 group relative rounded-xl border-2 border-foreground p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all md:col-span-2"
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                    >
                      Feature 04</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-users-group size-6 text-sky-600"
                      >
                        <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                        <path
                          d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"
                        ></path>
                        <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                        <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
                        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                        <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-lg font-bold text-foreground tracking-tight"
                      >
                        Team workflows
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Real-time presence shows who&#39;s editing what. Inline
                        comments replace email threads. Approval flows stop
                        launch-day mistakes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-emerald-50 group relative rounded-xl border-2 border-foreground p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all md:col-span-3"
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                    >
                      Feature 05</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-photo size-6 text-emerald-600"
                      >
                        <path d="M15 8h.01"></path>
                        <path
                          d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"
                        ></path>
                        <path
                          d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"
                        ></path>
                        <path
                          d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-lg font-bold text-foreground tracking-tight"
                      >
                        Media library
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        One place for every image, video, and asset. Reuse a
                        creative across networks without re-uploading or
                        re-cropping.
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-fuchsia-50 group relative rounded-xl border-2 border-foreground p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all md:col-span-3"
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                    >
                      Feature 06</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-bolt size-6 text-fuchsia-600"
                      >
                        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-lg font-bold text-foreground tracking-tight"
                      >
                        Automations on autopilot
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Build a flow that pulls from RSS, writes with AI, and
                        publishes on its own. Triggers, conditions, and
                        webhooks, no code.
                      </p>
                    </div>
                  </div>
                  {/* ] */}
                </div>
              </div>
            </section>
  );
}