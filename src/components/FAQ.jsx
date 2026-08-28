export default function FAQ() {
  return (
<section
              className="relative bg-background border-t-2 border-foreground py-16 sm:py-24"
            >
              <div className="trypost-container px-6">
                <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
                  <span
                    className="bg-amber-200 inline-block text-[11px] font-black uppercase tracking-widest text-foreground border-2 border-foreground px-3 py-1 rounded-md shadow-2xs rotate-1"
                  >
                    Why TryPost
                  </span>
                  <h2 className="h2 text-foreground">Why choose TryPost?</h2>
                  <p className="text-muted-foreground text-lg">
                    What makes TryPost the right fit for creators, startups, and
                    agencies.
                  </p>
                </div>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                  {/* [ */}
                  <div
                    className="bg-violet-100 relative rounded-xl border-2 border-foreground p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span
                      className="absolute top-4 right-5 text-5xl font-black text-foreground/10 leading-none select-none"
                      aria-hidden="true"
                      >01</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs mb-5"
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
                        className="tabler-icon tabler-icon-credit-card size-6 text-violet-600"
                      >
                        <path
                          d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
                        ></path>
                        <path d="M3 10l18 0"></path>
                        <path d="M7 15l.01 0"></path>
                        <path d="M11 15l2 0"></path>
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-bold text-foreground tracking-tight mb-2"
                    >
                      Pay per workspace, not per seat
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      $12 per workspace. Unlimited team members and no per-seat
                      tax, so your bill grows with the brands you manage, never
                      with team size.
                    </p>
                  </div>
                  <div
                    className="bg-amber-100 relative rounded-xl border-2 border-foreground p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span
                      className="absolute top-4 right-5 text-5xl font-black text-foreground/10 leading-none select-none"
                      aria-hidden="true"
                      >02</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs mb-5"
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
                        className="tabler-icon tabler-icon-rosette-discount-check size-6 text-amber-600"
                      >
                        <path
                          d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"
                        ></path>
                        <path d="M9 12l2 2l4 -4"></path>
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-bold text-foreground tracking-tight mb-2"
                    >
                      Every feature, every plan
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      No gating. AI, analytics, approvals, the API and MCP ship
                      on every plan. You scale by adding workspaces, not by
                      unlocking features.
                    </p>
                  </div>
                  <div
                    className="bg-rose-100 relative rounded-xl border-2 border-foreground p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span
                      className="absolute top-4 right-5 text-5xl font-black text-foreground/10 leading-none select-none"
                      aria-hidden="true"
                      >03</span
                    >
                    <div
                      className="size-12 rounded-lg border-2 border-foreground bg-card flex items-center justify-center shadow-2xs mb-5"
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
                        className="tabler-icon tabler-icon-brain size-6 text-rose-600"
                      >
                        <path
                          d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"
                        ></path>
                        <path
                          d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"
                        ></path>
                        <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"></path>
                        <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"></path>
                        <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"></path>
                        <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"></path>
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-bold text-foreground tracking-tight mb-2"
                    >
                      AI that does the work
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Generate captions, hooks, and images, or hand the whole
                      calendar to your AI assistant. Built in, not an upsell.
                    </p>
                  </div>
                  {/* ] */}
                </div>
              </div>
            </section>
  );
}