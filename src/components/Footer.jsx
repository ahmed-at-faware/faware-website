export default function Footer() {
  return (
<footer className="relative bg-foreground text-background">
          <div className="trypost-container mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-12 gap-y-12 md:gap-x-10 py-14 md:py-20">
              <div
                className="col-span-12 lg:col-span-4 space-y-5 text-center lg:text-left"
              >
                <a
                  aria-current="page"
                  href="/en"
                  className="router-link-active router-link-exact-active inline-flex items-center gap-2"
                  aria-label="TryPost"
                  ><img
                    onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                    alt="TryPost"
                    loading="lazy"
                    data-nuxt-img
                    srcSet="
                      /images/trypost/logo-dark.png 1x,
                      /images/trypost/logo-dark.png 2x
                    "
                    className="h-8 w-auto"
                    src="/images/trypost/logo-dark.png"
                /></a>
                <p
                  className="text-sm text-background/70 max-w-xs mx-auto lg:mx-0 leading-relaxed"
                >
                  Open Source Social media scheduling for creators, startups,
                  and agencies. Plan once, post everywhere.
                </p>
                <ul
                  className="flex items-center justify-center lg:justify-start gap-2"
                >
                  <li>
                    <a
                      className="inline-flex size-9 items-center justify-center rounded-lg border-2 border-background/30 bg-background/5 hover:bg-background/15 hover:-translate-y-0.5 transition-all"
                      href="https://github.com/trypostit/trypost"
                      target="_blank"
                      aria-label="GitHub"
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
                        className="tabler-icon tabler-icon-brand-github size-5 text-background"
                      >
                        <path
                          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                        ></path></svg
                    ></a>
                  </li>
                  <li>
                    <a
                      className="inline-flex size-9 items-center justify-center rounded-lg border-2 border-background/30 bg-background/5 hover:bg-background/15 hover:-translate-y-0.5 transition-all"
                      href="https://www.instagram.com/trypost.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
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
                        className="tabler-icon tabler-icon-brand-instagram size-5 text-background"
                      >
                        <path
                          d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                        ></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M16.5 7.5v.01"></path></svg
                    ></a>
                  </li>
                  <li>
                    <a
                      className="inline-flex size-9 items-center justify-center rounded-lg border-2 border-background/30 bg-background/5 hover:bg-background/15 hover:-translate-y-0.5 transition-all"
                      href="https://x.com/trypostit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
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
                        className="tabler-icon tabler-icon-brand-x size-5 text-background"
                      >
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                        <path
                          d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"
                        ></path></svg
                    ></a>
                  </li>
                  <li>
                    <a
                      className="inline-flex size-9 items-center justify-center rounded-lg border-2 border-background/30 bg-background/5 hover:bg-background/15 hover:-translate-y-0.5 transition-all"
                      href="https://www.youtube.com/@trypostit"
                      target="_blank"
                      aria-label="YouTube"
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
                        className="tabler-icon tabler-icon-brand-youtube size-5 text-background"
                      >
                        <path
                          d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"
                        ></path>
                        <path d="M10 9l5 3l-5 3z"></path></svg
                    ></a>
                  </li>
                  <li>
                    <a
                      className="inline-flex size-9 items-center justify-center rounded-lg border-2 border-background/30 bg-background/5 hover:bg-background/15 hover:-translate-y-0.5 transition-all"
                      href="https://trypost.it/discord"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Discord"
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
                        className="tabler-icon tabler-icon-brand-discord size-5 text-background"
                      >
                        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                        <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                        <path
                          d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
                        ></path>
                        <path d="M7 16.5c3.5 1 6.5 1 10 0"></path></svg
                    ></a>
                  </li>
                </ul>
                <div className="flex justify-center lg:justify-start">
                  <div
                    className="inline-flex items-center gap-2.5"
                    role="group"
                    aria-label="Select language"
                  >
                    {/* [ */}<button
                      type="button"
                      title="English"
                      aria-label="English"
                      aria-pressed="true"
                      className="group relative inline-flex items-center justify-center size-8 rounded-full overflow-hidden transition-all duration-200 ring-2 ring-background scale-105"
                    >
                      <img
                        onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                        alt="English"
                        loading="lazy"
                        data-nuxt-img
                        srcSet="
                          /images/languages/en.png 1x,
                          /images/languages/en.png 2x
                        "
                        className="size-full object-cover"
                        src="/images/languages/en.png"
                      /></button
                    ><button
                      type="button"
                      title="Português"
                      aria-label="Português"
                      aria-pressed="false"
                      className="group relative inline-flex items-center justify-center size-8 rounded-full overflow-hidden transition-all duration-200 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105"
                    >
                      <img
                        onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                        alt="Português"
                        loading="lazy"
                        data-nuxt-img
                        srcSet="
                          /images/languages/pt-BR.png 1x,
                          /images/languages/pt-BR.png 2x
                        "
                        className="size-full object-cover"
                        src="/images/languages/pt-BR.png"
                      /></button
                    ><button
                      type="button"
                      title="Español"
                      aria-label="Español"
                      aria-pressed="false"
                      className="group relative inline-flex items-center justify-center size-8 rounded-full overflow-hidden transition-all duration-200 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105"
                    >
                      <img
                        onerror="this.setAttribute(&#39;data-error&#39;, 1)"
                        alt="Español"
                        loading="lazy"
                        data-nuxt-img
                        srcSet="
                          /images/languages/es.png 1x,
                          /images/languages/es.png 2x
                        "
                        className="size-full object-cover"
                        src="/images/languages/es.png"
                      /></button
                    >{/* ] */}
                  </div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-4">
                <h3
                  className="text-[11px] font-black uppercase tracking-widest text-background/50"
                >
                  Channels
                </h3>
                <ul className="text-sm space-y-2.5">
                  {/* [ */}
                  <li>
                    <a href="/en/channels/instagram" className="footer-link"
                      >Instagram</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/facebook" className="footer-link"
                      >Facebook</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/linkedin" className="footer-link"
                      >LinkedIn</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/x" className="footer-link">X (Twitter)</a>
                  </li>
                  <li>
                    <a href="/en/channels/youtube" className="footer-link"
                      >YouTube</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/tiktok" className="footer-link">TikTok</a>
                  </li>
                  <li>
                    <a href="/en/channels/pinterest" className="footer-link"
                      >Pinterest</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/threads" className="footer-link"
                      >Threads</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/bluesky" className="footer-link"
                      >Bluesky</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/mastodon" className="footer-link"
                      >Mastodon</a
                    >
                  </li>
                  <li>
                    <a href="/en/channels/telegram" className="footer-link"
                      >Telegram</a
                    >
                  </li>
                  {/* ] */}
                  <li>
                    <a href="/en/channels" className="footer-link">All networks</a>
                  </li>
                </ul>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-6">
                <div className="space-y-2.5">
                  <h3
                    className="text-[11px] font-black uppercase tracking-widest text-background/50"
                  >
                    Resources
                  </h3>
                  <ul className="text-sm space-y-2.5">
                    <li><a href="/en/blog" className="footer-link"> Blog </a></li>
                    <li>
                      <a href="/en/glossary" className="footer-link">Glossary</a>
                    </li>
                    <li><a href="/en/faq" className="footer-link">FAQ</a></li>
                    <li><a href="/en/tools" className="footer-link">Tools</a></li>
                    <li>
                      <a href="/en/affiliates" className="footer-link"
                        >Affiliates</a
                      >
                    </li>
                  </ul>
                </div>
                <div className="space-y-2.5">
                  <h3
                    className="text-[11px] font-black uppercase tracking-widest text-background/50"
                  >
                    Explore
                  </h3>
                  <ul className="text-sm space-y-2.5">
                    <li>
                      <a href="/en/use-cases" className="footer-link">Use cases</a>
                    </li>
                    <li>
                      <a href="/en/social-media-calendar" className="footer-link"
                        >Content calendars</a
                      >
                    </li>
                    <li>
                      <a href="/en/alternatives" className="footer-link"
                        >Alternatives</a
                      >
                    </li>
                    <li>
                      <a href="/en/pricing" className="footer-link">Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-6">
                <div className="space-y-2.5">
                  <h3
                    className="text-[11px] font-black uppercase tracking-widest text-background/50"
                  >
                    Features
                  </h3>
                  <ul className="text-sm space-y-2.5">
                    <li><a href="/en/ai" className="footer-link">AI</a></li>
                    <li><a href="/en/mcp" className="footer-link">MCP</a></li>
                    <li>
                      <a href="/en/automations" className="footer-link"
                        >Automations</a
                      >
                    </li>
                  </ul>
                </div>
                <div className="space-y-2.5">
                  <h3
                    className="text-[11px] font-black uppercase tracking-widest text-background/50"
                  >
                    MCP clients
                  </h3>
                  <ul className="text-sm space-y-2.5">
                    {/* [ */}
                    <li>
                      <a href="/en/openclaw" className="footer-link">OpenClaw</a>
                    </li>
                    <li>
                      <a href="/en/nanoclaw" className="footer-link">nanoclaw</a>
                    </li>
                    <li>
                      <a href="/en/paperclip" className="footer-link">Paperclip</a>
                    </li>
                    <li>
                      <a href="/en/grok-bot" className="footer-link">Grok Bot</a>
                    </li>
                    <li>
                      <a href="/en/hermes-agent" className="footer-link"
                        >Hermes Agent</a
                      >
                    </li>
                    {/* ] */}
                  </ul>
                </div>
                <div className="space-y-2.5">
                  <h3
                    className="text-[11px] font-black uppercase tracking-widest text-background/50"
                  >
                    Docs
                  </h3>
                  <ul className="text-sm space-y-2.5">
                    <li>
                      <a
                        className="footer-link"
                        href="https://docs.trypost.it/api-reference/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        >API Reference</a
                      >
                    </li>
                    <li>
                      <a
                        className="footer-link"
                        href="https://docs.trypost.it/ai/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Build with AI</a
                      >
                    </li>
                    <li>
                      <a
                        className="footer-link"
                        href="https://docs.trypost.it/knowledge-base/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Knowledge Base</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 space-y-6">
                <div className="space-y-2.5">
                  <h3
                    className="text-[11px] font-black uppercase tracking-widest text-background/50"
                  >
                    Company
                  </h3>
                  <ul className="text-sm space-y-2.5">
                    <li>
                      <a href="/en/terms" className="footer-link"
                        >Terms of Service</a
                      >
                    </li>
                    <li>
                      <a href="/en/privacy" className="footer-link"
                        >Privacy Policy</a
                      >
                    </li>
                    <li>
                      <a
                        className="footer-link"
                        href="https://status.trypost.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        >System Status</a
                      >
                    </li>
                  </ul>
                </div>
                <div className="space-y-2.5">
                  <h3
                    className="text-[11px] font-black uppercase tracking-widest text-background/50"
                  >
                    More from us
                  </h3>
                  <ul className="text-sm space-y-2.5">
                    <li>
                      <a
                        className="footer-link"
                        href="https://sendkit.dev"
                        target="_blank"
                      >
                        Sendkit
                      </a>
                    </li>
                    <li>
                      <a
                        className="footer-link"
                        href="https://changelogfy.com"
                        target="_blank"
                      >
                        Changelogfy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
  );
}