export default function TrustBar() {
  return (
<section className="relative overflow-hidden bg-background">
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{backgroundImage: "radial-gradient(
                    circle,
                    #0a0a0a 1px,
                    transparent 1px
                  )", backgroundSize: "28px 28px"}}
              ></div>
              <div
                className="absolute -top-20 right-0 size-[520px] rounded-full bg-violet-200/50 blur-3xl pointer-events-none"
              ></div>
              <div
                className="absolute bottom-0 -left-32 size-[420px] rounded-full bg-fuchsia-200/40 blur-3xl pointer-events-none"
              ></div>
              <div
                className="relative trypost-container px-6 lg:px-10 pt-20 lg:pt-24 pb-16 lg:pb-20"
              >
                <div className="flex flex-col items-center gap-5 lg:gap-6">
                  <div className="text-center max-w-5xl mx-auto">
                    {/* [ */}
                    <div
                      role="group"
                      aria-label="Choose how you schedule"
                      className="mb-5 inline-flex max-w-full items-center gap-3 sm:mb-6 sm:gap-4"
                    >
                      <button
                        type="button"
                        className="text-foreground/40 hover:text-foreground/60 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
                        aria-pressed="false"
                      >
                        Schedule manually</button
                      >{/* [ */}<button
                        id="home-hero-mode"
                        role="switch"
                        type="button"
                        value="on"
                        aria-label="Choose how you schedule"
                        aria-checked="true"
                        aria-required="false"
                        data-state="checked={true}"
                        data-slot="switch"
                        className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-foreground px-0.5 shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled={true}:cursor-not-allowed disabled={true}:opacity-50 data-[state=checked={true}]:bg-primary data-[state=unchecked]:bg-muted"
                      >
                        {/* [ */}<span
                          data-state="checked={true}"
                          data-slot="switch-thumb"
                          className="pointer-events-none block size-4 rounded-full border-2 border-foreground bg-card shadow-2xs ring-0 transition-transform data-[state=checked={true}]:translate-x-5 data-[state=unchecked]:translate-x-0"
                          >{/* [ */}{/* ] */}</span
                        >{/* ] */}</button
                      >{/* v-if */}{/* ] */}<button
                        type="button"
                        className="text-foreground text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
                        aria-pressed="true"
                      >
                        Schedule with AI agents
                      </button>
                    </div>
                    {/* ] */}
                    <h1
                      className="h1 text-foreground mb-5 text-center !text-4xl sm:!text-5xl lg:!text-7xl xl:!text-[5.5rem] !leading-[1.08]"
                    >
                      <span className="whitespace-nowrap block"
                        >Run your social media</span
                      ><span className="relative inline-block whitespace-nowrap"
                        ><span className="relative z-10"
                          >on autopilot with AI agents.</span
                        ><svg
                          className="absolute -bottom-2 left-0 right-0 h-2.5 w-full text-violet-500"
                          viewBox="0 0 200 12"
                          preserveAspectRatio="none"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path
                            d="M 5 6 Q 25 0, 50 6 T 100 6 T 150 6 T 195 6"
                          ></path></svg
                      ></span>
                    </h1>
                    <p
                      className="text-muted-foreground text-balance mb-5 text-sm sm:mb-6 sm:text-lg max-w-2xl mx-auto"
                    >
                      Connect an agent over MCP. It plans, writes, and schedules
                      a week of posts across every network.
                    </p>
                    {/* [ */}{/* ] */}
                    <div
                      className="flex flex-col sm:flex-row items-center gap-3 mb-5 justify-center sm:mb-6"
                    >
                      <a
                        href="https://app.trypost.it/register"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary-gradient text-white border border-transparent px-7 py-3 text-base font-semibold shadow-sm hover:shadow-md transition-shadow"
                        >Start my 7-day free trial</a
                      >{/*  */}
                    </div>
                    {/* [ */}
                    <div
                      className="mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mb-8"
                    >
                      {/* [ */}<span
                        className="inline-flex items-center gap-1.5 text-foreground/80"
                        ><img
                          onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                          width="20"
                          height="20"
                          alt
                          decoding="async"
                          data-nuxt-img
                          srcSet="
                            /images/ai/hermes-agent.png 1x,
                            /images/ai/hermes-agent.png 2x
                          "
                          aria-hidden="true"
                          className="size-5"
                          src="/images/ai/hermes-agent.png"
                        /><span className="text-sm font-semibold"
                          >Hermes Agent</span
                        ></span
                      ><span
                        className="inline-flex items-center gap-1.5 text-foreground/80"
                        ><img
                          onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                          width="20"
                          height="20"
                          alt
                          decoding="async"
                          data-nuxt-img
                          srcSet="
                            /images/ai/grok-bot.svg 1x,
                            /images/ai/grok-bot.svg 2x
                          "
                          aria-hidden="true"
                          className="size-5"
                          src="/images/ai/grok-bot.svg"
                        /><span className="text-sm font-semibold"
                          >Grok Bot</span
                        ></span
                      ><span
                        className="inline-flex items-center gap-1.5 text-foreground/80"
                        ><img
                          onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                          width="20"
                          height="20"
                          alt
                          decoding="async"
                          data-nuxt-img
                          srcSet="
                            /images/ai/openclaw.svg 1x,
                            /images/ai/openclaw.svg 2x
                          "
                          aria-hidden="true"
                          className="size-5"
                          src="/images/ai/openclaw.svg"
                        /><span className="text-sm font-semibold"
                          >OpenClaw</span
                        ></span
                      ><span
                        className="inline-flex items-center gap-1.5 text-foreground/80"
                        ><img
                          onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                          width="20"
                          height="20"
                          alt
                          decoding="async"
                          data-nuxt-img
                          srcSet="
                            /images/mcp/claude.svg 1x,
                            /images/mcp/claude.svg 2x
                          "
                          aria-hidden="true"
                          className="size-5"
                          src="/images/mcp/claude.svg"
                        /><span className="text-sm font-semibold"
                          >Claude</span
                        ></span
                      ><span
                        className="inline-flex items-center gap-1.5 text-foreground/80"
                        ><img
                          onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                          width="20"
                          height="20"
                          alt
                          decoding="async"
                          data-nuxt-img
                          srcSet="
                            /images/mcp/chatgpt.svg 1x,
                            /images/mcp/chatgpt.svg 2x
                          "
                          aria-hidden="true"
                          className="size-5"
                          src="/images/mcp/chatgpt.svg"
                        /><span className="text-sm font-semibold"
                          >ChatGPT</span
                        ></span
                      ><span
                        className="inline-flex items-center gap-1.5 text-foreground/80"
                        ><img
                          onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                          width="20"
                          height="20"
                          alt
                          decoding="async"
                          data-nuxt-img
                          srcSet="
                            /images/mcp/gemini.svg 1x,
                            /images/mcp/gemini.svg 2x
                          "
                          aria-hidden="true"
                          className="size-5"
                          src="/images/mcp/gemini.svg"
                        /><span className="text-sm font-semibold"
                          >Gemini</span
                        ></span
                      ><span
                        className="inline-flex items-center gap-1.5 text-foreground/80"
                        ><img
                          onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                          width="20"
                          height="20"
                          alt
                          decoding="async"
                          data-nuxt-img
                          srcSet="
                            /images/mcp/perplexity.svg 1x,
                            /images/mcp/perplexity.svg 2x
                          "
                          aria-hidden="true"
                          className="size-5"
                          src="/images/mcp/perplexity.svg"
                        /><span className="text-sm font-semibold"
                          >Perplexity</span
                        ></span
                      >{/* ] */}
                    </div>
                    {/* ] */}{/*  */}
                  </div>
                  <div className="relative w-full max-w-5xl mx-auto">
                    {/* [ */}
                    <div id="home-hero-panel">
                      <div
                        className="relative rounded-2xl border-2 border-foreground bg-card shadow-xl overflow-hidden"
                        role="img"
                        aria-label="An AI assistant scheduling a weekend of posts and pulling metrics through TryPost&#39;s MCP server"
                        data-v-e9123136
                      >
                        <div
                          className="flex items-center gap-3 border-b-2 border-foreground bg-muted px-4 py-2.5"
                          data-v-e9123136
                        >
                          <div className="flex gap-1.5" data-v-e9123136>
                            <span
                              className="size-3 rounded-full border border-foreground bg-rose-300"
                              data-v-e9123136
                            ></span
                            ><span
                              className="size-3 rounded-full border border-foreground bg-amber-300"
                              data-v-e9123136
                            ></span
                            ><span
                              className="size-3 rounded-full border border-foreground bg-emerald-300"
                              data-v-e9123136
                            ></span>
                          </div>
                          <div
                            className="ml-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
                            data-v-e9123136
                          >
                            trypost.it · MCP
                          </div>
                        </div>
                        <div className="bg-foreground/[0.015]" data-v-e9123136>
                          <div
                            className="mx-auto w-full max-w-3xl space-y-5 px-5 py-6 sm:px-6 sm:py-8"
                            data-v-e9123136
                          >
                            <div
                              className="on step flex items-start justify-end gap-2.5"
                              data-v-e9123136
                            >
                              <p
                                className="max-w-[80%] rounded-2xl rounded-tr-sm border-2 border-foreground bg-violet-100 px-3.5 py-2 text-sm font-medium text-foreground"
                                data-v-e9123136
                              >
                                Plan this weekend for my coffee shop. One promo,
                                one behind-the-scenes, one treat.
                              </p>
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
                                className="tabler-icon tabler-icon-user-circle mt-0.5 size-5 shrink-0 text-foreground/40"
                                aria-hidden="true"
                                data-v-e9123136
                              >
                                <path
                                  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                                ></path>
                                <path
                                  d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                                ></path>
                                <path
                                  d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
                                ></path>
                              </svg>
                            </div>
                            <div
                              className="step flex items-start gap-2.5"
                              data-v-e9123136
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
                                className="tabler-icon tabler-icon-sparkles mt-0.5 size-5 shrink-0 text-violet-500"
                                aria-hidden="true"
                                data-v-e9123136
                              >
                                <path
                                  d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
                                ></path>
                              </svg>
                              <div
                                className="min-w-0 flex-1 space-y-2.5"
                                data-v-e9123136
                              >
                                <div
                                  className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-card px-3 py-1.5 shadow-2xs"
                                  style={{display: "none"}}
                                  data-v-e9123136
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
                                    className="tabler-icon tabler-icon-loader-2 size-4 shrink-0 animate-spin text-violet-600"
                                    aria-hidden="true"
                                    data-v-e9123136
                                  >
                                    <path d="M12 3a9 9 0 1 0 9 9"></path></svg
                                  ><span
                                    className="text-sm text-foreground/70"
                                    data-v-e9123136
                                    >Writing captions and scheduling posts<span
                                      className="dots"
                                      data-v-e9123136
                                    ></span
                                  ></span>
                                </div>
                                <p
                                  className="text-sm leading-relaxed text-foreground/80"
                                  style={{display: "none"}}
                                  data-v-e9123136
                                >
                                  Scheduled 3 posts to Instagram, TikTok, and X
                                </p>
                                <div
                                  className="step rounded-lg border-2 border-foreground bg-card overflow-hidden"
                                  data-v-e9123136
                                >
                                  <div
                                    className="flex items-center justify-between gap-2 border-b-2 border-foreground/10 bg-fuchsia-50 px-3 py-2"
                                    data-v-e9123136
                                  >
                                    <span
                                      className="text-[10px] font-black uppercase tracking-widest text-foreground"
                                      data-v-e9123136
                                      >Content calendar</span
                                    ><span
                                      className="inline-flex items-center rounded border-2 border-foreground bg-emerald-200 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-foreground"
                                      data-v-e9123136
                                      >3 scheduled</span
                                    >
                                  </div>
                                  <div
                                    className="grid grid-cols-3 gap-2 p-2.5 sm:gap-2.5 sm:p-3"
                                    data-v-e9123136
                                  >
                                    {/* [ */}
                                    <div
                                      className="step flex flex-col gap-1.5"
                                      style={{transitionDelay: "200ms"}}
                                      data-v-e9123136
                                    >
                                      <div
                                        className="text-center text-[9px] font-black uppercase tracking-widest text-foreground/40 sm:text-[10px]"
                                        data-v-e9123136
                                      >
                                        Fri
                                      </div>
                                      <div
                                        className="bg-pink-100 flex min-h-[96px] flex-col rounded-md border-2 border-foreground p-2 shadow-2xs sm:min-h-[110px] sm:p-2.5"
                                        data-v-e9123136
                                      >
                                        <p
                                          className="line-clamp-5 text-[11px] font-medium leading-snug text-foreground sm:text-xs"
                                          data-v-e9123136
                                        >
                                          Happy hour: 2-for-1 coffees this
                                          Friday
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="step flex flex-col gap-1.5"
                                      style={{transitionDelay: "290ms"}}
                                      data-v-e9123136
                                    >
                                      <div
                                        className="text-center text-[9px] font-black uppercase tracking-widest text-foreground/40 sm:text-[10px]"
                                        data-v-e9123136
                                      >
                                        Sat
                                      </div>
                                      <div
                                        className="bg-fuchsia-100 flex min-h-[96px] flex-col rounded-md border-2 border-foreground p-2 shadow-2xs sm:min-h-[110px] sm:p-2.5"
                                        data-v-e9123136
                                      >
                                        <p
                                          className="line-clamp-5 text-[11px] font-medium leading-snug text-foreground sm:text-xs"
                                          data-v-e9123136
                                        >
                                          Behind the scenes: roasting
                                          Saturday&#39;s beans
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="step flex flex-col gap-1.5"
                                      style={{transitionDelay: "380ms"}}
                                      data-v-e9123136
                                    >
                                      <div
                                        className="text-center text-[9px] font-black uppercase tracking-widest text-foreground/40 sm:text-[10px]"
                                        data-v-e9123136
                                      >
                                        Sun
                                      </div>
                                      <div
                                        className="bg-amber-100 flex min-h-[96px] flex-col rounded-md border-2 border-foreground p-2 shadow-2xs sm:min-h-[110px] sm:p-2.5"
                                        data-v-e9123136
                                      >
                                        <p
                                          className="line-clamp-5 text-[11px] font-medium leading-snug text-foreground sm:text-xs"
                                          data-v-e9123136
                                        >
                                          Weekend treat: free cookie with any
                                          latte
                                        </p>
                                      </div>
                                    </div>
                                    {/* ] */}
                                  </div>
                                  <div
                                    className="border-t-2 border-foreground/10 bg-foreground/[0.02] px-3 py-2.5"
                                    data-v-e9123136
                                  >
                                    <span
                                      className="text-[10px] font-black uppercase tracking-widest text-foreground/50"
                                      data-v-e9123136
                                      >Publishing to</span
                                    >{/* [ */}{/* [ */}
                                    <div
                                      className="mt-2 flex flex-wrap gap-1.5"
                                      data-v-e9123136
                                    >
                                      {/* [ */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="relative inline-flex size-8 items-center justify-center rounded-md border-2 border-foreground bg-card shadow-2xs"
                                        data-v-e9123136
                                        ><svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2.25"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-brand-instagram text-rose-600 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                                          ></path>
                                          <path
                                            d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                                          ></path>
                                          <path d="M16.5 7.5v.01"></path></svg
                                        ><span
                                          className="absolute -top-1 -right-1 inline-flex size-3.5 items-center justify-center rounded-full border-2 border-foreground bg-foreground text-background"
                                          data-v-e9123136
                                          ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-check size-2"
                                            data-v-e9123136
                                          >
                                            <path
                                              d="M5 12l5 5l10 -10"
                                            ></path></svg></span></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="relative inline-flex size-8 items-center justify-center rounded-md border-2 border-foreground bg-card shadow-2xs"
                                        data-v-e9123136
                                        ><svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2.25"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-brand-tiktok text-foreground size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"
                                          ></path></svg
                                        ><span
                                          className="absolute -top-1 -right-1 inline-flex size-3.5 items-center justify-center rounded-full border-2 border-foreground bg-foreground text-background"
                                          data-v-e9123136
                                          ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-check size-2"
                                            data-v-e9123136
                                          >
                                            <path
                                              d="M5 12l5 5l10 -10"
                                            ></path></svg></span></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="relative inline-flex size-8 items-center justify-center rounded-md border-2 border-foreground bg-card shadow-2xs"
                                        data-v-e9123136
                                        ><svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2.25"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-brand-x text-foreground size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M4 4l11.733 16h4.267l-11.733 -16z"
                                          ></path>
                                          <path
                                            d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"
                                          ></path></svg
                                        ><span
                                          className="absolute -top-1 -right-1 inline-flex size-3.5 items-center justify-center rounded-full border-2 border-foreground bg-foreground text-background"
                                          data-v-e9123136
                                          ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-check size-2"
                                            data-v-e9123136
                                          >
                                            <path
                                              d="M5 12l5 5l10 -10"
                                            ></path></svg></span></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-facebook text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-linkedin text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path d="M8 11v5"></path>
                                          <path d="M8 8v.01"></path>
                                          <path d="M12 16v-5"></path>
                                          <path
                                            d="M16 16v-3a2 2 0 1 0 -4 0"
                                          ></path>
                                          <path
                                            d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-youtube text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"
                                          ></path>
                                          <path
                                            d="M10 9l5 3l-5 3z"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-pinterest text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path d="M8 20l4 -9"></path>
                                          <path
                                            d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"
                                          ></path>
                                          <path
                                            d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-threads text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-bluesky text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-mastodon text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M18.648 15.254c-1.816 1.763 -6.648 1.626 -6.648 1.626a18.262 18.262 0 0 1 -3.288 -.256c1.127 1.985 4.12 2.81 8.982 2.475c-1.945 2.013 -13.598 5.257 -13.668 -7.636l-.026 -1.154c0 -3.036 .023 -4.115 1.352 -5.633c1.671 -1.91 6.648 -1.666 6.648 -1.666s4.977 -.243 6.648 1.667c1.329 1.518 1.352 2.597 1.352 5.633s-.456 4.074 -1.352 4.944z"
                                          ></path>
                                          <path
                                            d="M12 11.204v-2.926c0 -1.258 -.895 -2.278 -2 -2.278s-2 1.02 -2 2.278v4.722m4 -4.722c0 -1.258 .895 -2.278 2 -2.278s2 1.02 2 2.278v4.722"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-telegram text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* [ */}{/* [ */}{/* [ */}<span
                                        data-slot="tooltip-trigger"
                                        data-v-e9123136
                                        data-state="closed"
                                        data-grace-area-trigger
                                        className="inline-flex size-8 items-center justify-center rounded-md border-2 border-dashed border-foreground/25 bg-card/40"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-brand-discord text-foreground/40 size-4"
                                          data-v-e9123136
                                        >
                                          <path
                                            d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
                                          ></path>
                                          <path
                                            d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
                                          ></path>
                                          <path
                                            d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
                                          ></path>
                                          <path
                                            d="M7 16.5c3.5 1 6.5 1 10 0"
                                          ></path></svg></span
                                      >{/* v-if */}{/* ] */}{/* ] */}{/* ] */}{/* ] */}
                                    </div>
                                    {/* ] */}{/* ] */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="step flex items-start justify-end gap-2.5"
                              data-v-e9123136
                            >
                              <p
                                className="max-w-[80%] rounded-2xl rounded-tr-sm border-2 border-foreground bg-violet-100 px-3.5 py-2 text-sm font-medium text-foreground"
                                data-v-e9123136
                              >
                                How did last week&#39;s posts do?
                              </p>
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
                                className="tabler-icon tabler-icon-user-circle mt-0.5 size-5 shrink-0 text-foreground/40"
                                aria-hidden="true"
                                data-v-e9123136
                              >
                                <path
                                  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                                ></path>
                                <path
                                  d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                                ></path>
                                <path
                                  d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
                                ></path>
                              </svg>
                            </div>
                            <div
                              className="step flex items-start gap-2.5"
                              data-v-e9123136
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
                                className="tabler-icon tabler-icon-sparkles mt-0.5 size-5 shrink-0 text-violet-500"
                                aria-hidden="true"
                                data-v-e9123136
                              >
                                <path
                                  d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
                                ></path>
                              </svg>
                              <div
                                className="min-w-0 flex-1 space-y-2.5"
                                data-v-e9123136
                              >
                                <div
                                  className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-card px-3 py-1.5 shadow-2xs"
                                  style={{display: "none"}}
                                  data-v-e9123136
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
                                    className="tabler-icon tabler-icon-loader-2 size-4 shrink-0 animate-spin text-violet-600"
                                    aria-hidden="true"
                                    data-v-e9123136
                                  >
                                    <path d="M12 3a9 9 0 1 0 9 9"></path></svg
                                  ><span
                                    className="text-sm text-foreground/70"
                                    data-v-e9123136
                                    >Pulling last week&#39;s analytics<span
                                      className="dots"
                                      data-v-e9123136
                                    ></span
                                  ></span>
                                </div>
                                <p
                                  className="text-sm leading-relaxed text-foreground/80"
                                  style={{display: "none"}}
                                  data-v-e9123136
                                >
                                  Reach +18%, 312 new followers, best day
                                  Saturday
                                </p>
                                <div
                                  className="step rounded-lg border-2 border-foreground bg-card overflow-hidden"
                                  data-v-e9123136
                                >
                                  <div
                                    className="border-b-2 border-foreground/10 bg-sky-50 px-3 py-2"
                                    data-v-e9123136
                                  >
                                    <span
                                      className="text-[10px] font-black uppercase tracking-widest text-foreground"
                                      data-v-e9123136
                                      >Weekly report</span
                                    >
                                  </div>
                                  <div
                                    className="grid grid-cols-3 divide-x-2 divide-foreground/10"
                                    data-v-e9123136
                                  >
                                    {/* [ */}
                                    <div className="px-3 py-2.5" data-v-e9123136>
                                      <div
                                        className="text-[9px] font-black uppercase tracking-widest text-foreground/50"
                                        data-v-e9123136
                                      >
                                        Reach
                                      </div>
                                      <div
                                        className="font-mono text-lg font-bold leading-tight text-foreground"
                                        data-v-e9123136
                                      >
                                        24.5k
                                      </div>
                                      <div
                                        className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-trending-up size-2.5"
                                          aria-hidden="true"
                                          data-v-e9123136
                                        >
                                          <path d="M3 17l6 -6l4 4l8 -8"></path>
                                          <path d="M14 7l7 0l0 7"></path>
                                        </svg>
                                        +18%
                                      </div>
                                    </div>
                                    <div className="px-3 py-2.5" data-v-e9123136>
                                      <div
                                        className="text-[9px] font-black uppercase tracking-widest text-foreground/50"
                                        data-v-e9123136
                                      >
                                        Engagement
                                      </div>
                                      <div
                                        className="font-mono text-lg font-bold leading-tight text-foreground"
                                        data-v-e9123136
                                      >
                                        6.1%
                                      </div>
                                      <div
                                        className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-trending-up size-2.5"
                                          aria-hidden="true"
                                          data-v-e9123136
                                        >
                                          <path d="M3 17l6 -6l4 4l8 -8"></path>
                                          <path d="M14 7l7 0l0 7"></path>
                                        </svg>
                                        +2.3pt
                                      </div>
                                    </div>
                                    <div className="px-3 py-2.5" data-v-e9123136>
                                      <div
                                        className="text-[9px] font-black uppercase tracking-widest text-foreground/50"
                                        data-v-e9123136
                                      >
                                        New followers
                                      </div>
                                      <div
                                        className="font-mono text-lg font-bold leading-tight text-foreground"
                                        data-v-e9123136
                                      >
                                        312
                                      </div>
                                      <div
                                        className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600"
                                        data-v-e9123136
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
                                          className="tabler-icon tabler-icon-trending-up size-2.5"
                                          aria-hidden="true"
                                          data-v-e9123136
                                        >
                                          <path d="M3 17l6 -6l4 4l8 -8"></path>
                                          <path d="M14 7l7 0l0 7"></path>
                                        </svg>
                                        +9%
                                      </div>
                                    </div>
                                    {/* ] */}
                                  </div>
                                  <div
                                    className="border-t-2 border-foreground/10 px-3 py-2"
                                    data-v-e9123136
                                  >
                                    <svg
                                      className="h-7 w-full text-violet-500"
                                      viewBox="0 0 100 28"
                                      preserveAspectRatio="none"
                                      fill="none"
                                      aria-hidden="true"
                                      data-v-e9123136
                                    >
                                      <polyline
                                        className="spark"
                                        points="0,24 16,20 32,22 48,14 64,16 80,7 100,3"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-v-e9123136
                                      ></polyline>
                                    </svg>
                                  </div>
                                  <div
                                    className="flex items-center justify-between gap-2 border-t-2 border-foreground/10 px-3 py-2"
                                    data-v-e9123136
                                  >
                                    <span
                                      className="text-[9px] font-black uppercase tracking-widest text-foreground/50"
                                      data-v-e9123136
                                      >Best day</span
                                    ><span
                                      className="text-xs font-bold text-foreground"
                                      data-v-e9123136
                                      >Saturday · 11:30
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ] */}
                  </div>
                </div>
              </div>
            </section>
  );
}