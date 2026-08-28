export default function HowItWorks() {
  return (
<section
              className="relative bg-background overflow-hidden border-t-2 border-foreground py-20 sm:py-28"
            >
              <div
                className="absolute -top-20 -left-32 size-[480px] rounded-full bg-sky-200/35 blur-3xl pointer-events-none"
              ></div>
              <div className="relative trypost-container px-6">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-foreground border-2 border-foreground bg-sky-200 px-3 py-1 rounded-md shadow-2xs -rotate-1"
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
                    Teams &amp; approvals</span
                  >
                  <h2 className="h2 text-foreground">
                    Built for teams who ship together
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
                    Separate workspaces per brand or client, approval threads on
                    every post, comments to request changes, and a shareable
                    link so clients can approve without an account.
                  </p>
                </div>
                <div className="relative max-w-6xl mx-auto">
                  <span
                    className="absolute -top-7 left-4 sm:left-10 z-20 -rotate-3 inline-flex items-center gap-1.5 rounded-md border-2 border-foreground bg-sky-200 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-foreground shadow-xs"
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
                    Acme · Workspace</span
                  ><span
                    className="absolute -bottom-6 right-4 sm:right-10 z-20 rotate-3 inline-flex items-center gap-1.5 rounded-md border-2 border-foreground bg-emerald-200 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-foreground shadow-xs"
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
                      className="tabler-icon tabler-icon-check size-3.5"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    Client approved</span
                  >
                  <div
                    className="rounded-xl border-2 border-foreground bg-card shadow-xl overflow-hidden"
                  >
                    <div
                      className="flex items-center justify-between gap-3 border-b-2 border-foreground bg-muted px-5 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <span
                            className="size-3 rounded-full border border-foreground bg-rose-300"
                          ></span
                          ><span
                            className="size-3 rounded-full border border-foreground bg-amber-300"
                          ></span
                          ><span
                            className="size-3 rounded-full border border-foreground bg-emerald-300"
                          ></span>
                        </div>
                        <div
                          className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
                        >
                          trypost.it · post review
                        </div>
                      </div>
                      <span
                        className="hidden sm:inline-flex items-center gap-1 rounded-md border-2 border-foreground bg-amber-200 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-foreground shadow-2xs"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="tabler-icon tabler-icon-eye size-3"
                        >
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                          <path
                            d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                          ></path>
                        </svg>
                        In review</span
                      >
                    </div>
                    <div
                      className="grid lg:grid-cols-[1.1fr_1fr] divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-foreground/10"
                    >
                      <div className="p-5 sm:p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span
                            className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                            >Post preview</span
                          ><span
                            className="inline-flex items-center gap-1 rounded-md border-2 border-foreground bg-amber-200 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-foreground shadow-2xs"
                            >Pending</span
                          >
                        </div>
                        <div className="flex items-center gap-3">
                          <div
                            className="inline-flex size-9 items-center justify-center rounded-full border-2 border-foreground bg-card shadow-2xs"
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
                              className="tabler-icon tabler-icon-brand-instagram size-4 text-rose-600"
                            >
                              <path
                                d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                              ></path>
                              <path
                                d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                              ></path>
                              <path d="M16.5 7.5v.01"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground">
                              @acme.brand
                            </div>
                            <div
                              className="text-[10px] uppercase tracking-widest font-black text-foreground/60"
                            >
                              Instagram · Mon · 10:00
                            </div>
                          </div>
                        </div>
                        <div
                          className="aspect-[4/3] rounded-lg border-2 border-foreground bg-pink-100 overflow-hidden flex items-center justify-center relative"
                        >
                          <div
                            className="absolute inset-0 opacity-[0.10]"
                            style={{backgroundImage: "radial-gradient(
                                circle,
                                #0a0a0a 1px,
                                transparent 1px
                              )", backgroundSize: "14px 14px"}}
                          ></div>
                          <div
                            className="relative inline-flex size-14 items-center justify-center rounded-2xl border-2 border-foreground bg-card shadow-sm"
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
                              className="tabler-icon tabler-icon-photo size-7 text-foreground/40"
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
                        </div>
                        <p
                          className="text-sm font-medium text-foreground leading-snug"
                        >
                          Big news. New pricing is live today 🚀
                        </p>
                        <p className="text-sm text-foreground/70 leading-snug">
                          One flat rate per client, unlimited team members.
                        </p>
                      </div>
                      <div className="p-5 sm:p-6 space-y-4 bg-foreground/[0.02]">
                        <div className="flex items-center justify-between">
                          <span
                            className="text-[10px] font-black uppercase tracking-widest text-foreground/60"
                            >Review thread</span
                          ><span
                            className="text-[10px] font-bold uppercase tracking-widest text-foreground/40"
                            >2 comments</span
                          >
                        </div>
                        <div
                          className="rounded-lg border-2 border-foreground bg-card p-3 shadow-2xs space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src="/images/avatars/maya.svg"
                              alt="Maya"
                              className="size-7 rounded-full border-2 border-foreground bg-card shadow-2xs"
                              loading="lazy"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-foreground">
                                Maya
                              </div>
                              <div
                                className="text-[9px] uppercase tracking-widest font-black text-foreground/50"
                              >
                                2 min ago · Editor
                              </div>
                            </div>
                            <span
                              className="inline-flex items-center gap-1 rounded border-2 border-foreground bg-amber-100 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-foreground"
                              >Changes</span
                            >
                          </div>
                          <p className="text-xs text-foreground/85 leading-snug">
                            Great direction. Let&#39;s swap the rocket emoji for
                            ✨ to match the spring campaign?
                          </p>
                        </div>
                        <div
                          className="rounded-lg border-2 border-foreground bg-emerald-50 p-3 shadow-2xs space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src="/images/avatars/tom.svg"
                              alt="Tom"
                              className="size-7 rounded-full border-2 border-foreground bg-card shadow-2xs"
                              loading="lazy"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-foreground">
                                Tom (client)
                              </div>
                              <div
                                className="text-[9px] uppercase tracking-widest font-black text-foreground/50"
                              >
                                Just now · External
                              </div>
                            </div>
                            <span
                              className="inline-flex items-center gap-1 rounded border-2 border-foreground bg-emerald-200 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-foreground"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="tabler-icon tabler-icon-check size-2.5"
                              >
                                <path d="M5 12l5 5l10 -10"></path>
                              </svg>
                              Approved</span
                            >
                          </div>
                          <p className="text-xs text-foreground/85 leading-snug">
                            Looks great after the change. Ship it.
                          </p>
                        </div>
                        <button
                          type="button"
                          className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border-2 border-foreground bg-card text-foreground px-3 py-2 text-xs font-bold shadow-2xs hover:shadow-xs transition-shadow"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-link size-3.5"
                          >
                            <path d="M9 15l6 -6"></path>
                            <path
                              d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"
                            ></path>
                            <path
                              d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"
                            ></path>
                          </svg>
                          Share approval link
                        </button>
                        <div
                          className="flex items-center justify-between gap-2 rounded-lg border-2 border-dashed border-foreground/20 bg-foreground/[0.015] px-3 py-2"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-1.5">
                              <img
                                src="/images/avatars/maya.svg"
                                alt="Maya"
                                className="size-5 rounded-full border-2 border-foreground bg-card"
                              /><img
                                src="/images/avatars/nina.svg"
                                alt="Nina"
                                className="size-5 rounded-full border-2 border-foreground bg-card"
                              />
                            </div>
                            <span
                              className="text-[10px] font-bold uppercase tracking-widest text-foreground/60"
                              >2 editing now</span
                            >
                          </div>
                          <span className="relative inline-flex size-2"
                            ><span
                              className="absolute inset-0 inline-flex rounded-full bg-emerald-400 opacity-75 animate-ping"
                            ></span
                            ><span
                              className="relative inline-flex size-2 rounded-full bg-emerald-500"
                            ></span
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  );
}