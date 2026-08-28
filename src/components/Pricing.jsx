export default function Pricing() {
  return (
<section
              className="relative bg-background border-t-2 border-foreground py-20 sm:py-28 overflow-hidden"
            >
              <div
                className="absolute -top-20 right-0 size-[420px] rounded-full bg-violet-200/30 blur-3xl pointer-events-none"
              ></div>
              <div className="relative trypost-container px-6">
                <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-foreground border-2 border-foreground bg-pink-200 px-3 py-1 rounded-md shadow-2xs -rotate-1"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-users size-3.5"
                    >
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path
                        d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                      ></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                    </svg>
                    Who&#39;s it for?</span
                  >
                  <h2 className="h2 text-foreground">
                    Whether you post for yourself or for 30 brands
                  </h2>
                  <svg
                    className="mx-auto h-3 w-40 text-violet-400"
                    viewBox="0 0 200 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M 5 6 Q 25 0, 50 6 T 100 6 T 150 6 T 195 6"></path>
                  </svg>
                  <p className="text-muted-foreground text-lg text-balance">
                    Same calendar, different scale. From a solo creator to a
                    growing startup to an agency juggling 30 brands.
                  </p>
                </div>
                <div
                  className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto"
                >
                  {/* [ */}<a
                    href="/en/use-cases/creators"
                    className="bg-pink-100 group relative flex flex-col rounded-2xl border-2 border-foreground p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                    ><div
                      className="inline-flex size-12 items-center justify-center rounded-lg border-2 border-foreground bg-card shadow-2xs mb-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-sparkles text-rose-600 size-6"
                      >
                        <path
                          d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
                        ></path>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60 mb-1"
                      >Solo &amp; freelancer</span
                    >
                    <h3
                      className="text-2xl font-bold tracking-tight text-foreground mb-3"
                    >
                      Creators
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      Batch a week of content on Sunday, queue it across
                      Instagram, X and TikTok in one calendar, ship the rest of
                      the week without opening five apps.
                    </p></a
                  ><a
                    href="/en/use-cases/teams"
                    className="bg-sky-100 group relative flex flex-col rounded-2xl border-2 border-foreground p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                    ><div
                      className="inline-flex size-12 items-center justify-center rounded-lg border-2 border-foreground bg-card shadow-2xs mb-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-users-group text-blue-700 size-6"
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
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60 mb-1"
                      >Brands &amp; startups</span
                    >
                    <h3
                      className="text-2xl font-bold tracking-tight text-foreground mb-3"
                    >
                      Teams
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      Designer drops the visual, copywriter writes the caption,
                      both edit the same post live. Approvals replace email
                      threads. Brand kit keeps voice and colors consistent.
                    </p></a
                  ><a
                    href="/en/use-cases/agencies"
                    className="bg-violet-100 group relative flex flex-col rounded-2xl border-2 border-foreground p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                    ><div
                      className="inline-flex size-12 items-center justify-center rounded-lg border-2 border-foreground bg-card shadow-2xs mb-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-building-store text-violet-700 size-6"
                      >
                        <path d="M3 21l18 0"></path>
                        <path
                          d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"
                        ></path>
                        <path d="M5 21l0 -10.15"></path>
                        <path d="M19 21l0 -10.15"></path>
                        <path
                          d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
                        ></path>
                      </svg>
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-widest text-foreground/60 mb-1"
                      >Multiple clients</span
                    >
                    <h3
                      className="text-2xl font-bold tracking-tight text-foreground mb-3"
                    >
                      Agencies
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      One workspace per client, separate brand kits, per-client
                      reviewers. Switch context in one click instead of logging
                      in and out of 15 dashboards.
                    </p></a
                  >{/* ] */}
                </div>
              </div>
            </section>
  );
}