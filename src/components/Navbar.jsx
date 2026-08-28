import { useState, useRef } from 'react';

const socialNetworks = [
  { name: 'Instagram', desc: 'Schedule posts, stories and reels', icon: 'instagram', bgStyle: { background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' } },
  { name: 'Facebook', desc: 'Auto-publish to pages and groups', icon: 'facebook', color: '#1877F2' },
  { name: 'LinkedIn', desc: 'Personal profiles and company pages', icon: 'linkedin', color: '#0A66C2' },
  { name: 'X (Twitter)', desc: 'Schedule tweets and threads', icon: 'x', color: '#000000' },
  { name: 'YouTube', desc: 'Publish videos and shorts', icon: 'youtube', color: '#FF0000' },
  { name: 'TikTok', desc: 'Schedule your videos', icon: 'tiktok', color: '#000000' },
  { name: 'Discord', desc: 'Post to your server channels', icon: 'discord', color: '#5865F2' },
  { name: 'Pinterest', desc: 'Schedule pins and boards', icon: 'pinterest', color: '#E60023' },
  { name: 'Threads', desc: 'Schedule posts to Threads', icon: 'threads', color: '#000000' },
  { name: 'Bluesky', desc: 'Schedule posts to Bluesky', icon: 'bluesky', color: '#0285FF' },
  { name: 'Mastodon', desc: 'Schedule toots to Mastodon', icon: 'mastodon', color: '#6364FF' },
  { name: 'Telegram', desc: 'Schedule channel and group posts', icon: 'telegram', color: '#26A5E4' },
];

const aiAgents = [
  { name: 'Agent Workflow', desc: 'Automate your daily tasks with AI', icon: 'openai', color: '#412991' },
  { name: 'Content Generation', desc: 'AI powered writing assistant', icon: 'anthropic', color: '#D97757' },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // slight delay to make moving mouse easier
  };

  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background transition-shadow duration-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/en" className="inline-flex items-center" aria-label="TryPost">
            <img alt="TryPost" loading="eager" className="h-14 md:h-16 w-auto" src="../assets/logo/faware_logo.png" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-1 items-center justify-center relative">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('ai')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-[15px] font-semibold outline-none transition-all ${openDropdown === 'ai'
                ? 'bg-purple-100 text-purple-700'
                : 'bg-background hover:bg-accent hover:text-accent-foreground text-foreground'
                }`}
            >
              AI Agents
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`relative top-[1px] ml-1 size-3 transition duration-300 ${openDropdown === 'ai' ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {openDropdown === 'ai' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="w-[600px] rounded-2xl bg-card text-card-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-foreground p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {aiAgents.map((agent) => (
                      <a key={agent.name} href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-accent/50 transition-colors">
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
                          style={agent.bgStyle || { backgroundColor: agent.color }}
                        >
                          <img src={`https://cdn.simpleicons.org/${agent.icon}/white`} alt={agent.name} className="w-5 h-5 object-contain" />
                        </div>
                        <div>
                          <div className="font-bold text-base text-foreground leading-tight">{agent.name}</div>
                          <div className="text-[13px] text-muted-foreground mt-1">{agent.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Social Networks Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('social')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-[15px] font-semibold outline-none transition-all ${openDropdown === 'social'
                ? 'bg-purple-100 text-purple-700'
                : 'bg-background hover:bg-accent hover:text-accent-foreground text-foreground'
                }`}
            >
              Social Networks
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`relative top-[1px] ml-1 size-3 transition duration-300 ${openDropdown === 'social' ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            {openDropdown === 'social' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="w-[850px] rounded-2xl bg-card text-card-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-foreground p-6">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-6">
                    {socialNetworks.map((network) => (
                      <a key={network.name} href="#" className="flex items-start gap-3 rounded-xl hover:bg-accent/50 transition-colors p-2 -m-2">
                        <div
                          className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center overflow-hidden border border-black/5"
                          style={network.bgStyle || { backgroundColor: network.color }}
                        >
                          <img src={`https://cdn.simpleicons.org/${network.icon}/white`} alt={network.name} className="w-5 h-5 object-contain" />
                        </div>
                        <div>
                          <div className="font-bold text-[15px] text-foreground leading-tight">{network.name}</div>
                          <div className="text-[13px] text-muted-foreground mt-1 leading-snug">{network.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/en/use-cases" className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-[15px] font-semibold hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-[color,box-shadow]">Use cases</a>
          <a href="/en/blog" className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-[15px] font-semibold hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-[color,box-shadow]">Blog</a>
          <a href="/en/pricing" className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-[15px] font-semibold hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-[color,box-shadow]">Pricing</a>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-x-4">
          <a href="https://app.trypost.it/auth/google/redirect" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card text-foreground px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="size-5 shrink-0">
              <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z"></path>
            </svg>
            Join with Google
          </a>
          <a href="https://app.trypost.it/register" className="inline-flex items-center justify-center rounded-full bg-primary-gradient text-white px-6 py-2 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0 border border-transparent">
            Start free trial
          </a>
        </div>

        <div className="flex lg:hidden">
          <button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}