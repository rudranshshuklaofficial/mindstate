import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import './styles.css';
import heroImage from './assests/hero.png';
import logoImage from './assests/logo.png';
import featuredImageOne from './assests/image.png';
import featuredImageTwo from './assests/image (1).png';
import featuredImageThree from './assests/image (2).png';
import featuredImageFour from './assests/image (3).png';
import purposeImage from './assests/purpose.png';
import newsletterComic from './assests/comic.png';
import newsletterPeep from './assests/peep-52.png';
import impactImageOne from './assests/impact 1.png';
import impactImageTwo from './assests/impact 2.png';
import impactImageThree from './assests/impact 3.png';
import impactImageFour from './assests/impact 4.png';

const topics = [
  { number: '01', title: 'The inner life', copy: 'A gentler language for the parts of us no one else can see.', color: 'bg-blush text-paper' },
  { number: '02', title: 'Culture & care', copy: 'How the systems around us shape our capacity to feel well.', color: 'bg-moss text-paper' },
  { number: '03', title: 'Work, reimagined', copy: 'Small, practical ideas for building lives with more room in them.', color: 'bg-butter text-ink' }
];

const voices = [
  { quote: 'We do not need to become different people to feel better. We need places where our whole selves are welcome.', name: 'Amina J.', role: 'Community facilitator', accent: 'bg-[#e3b6a5]' },
  { quote: 'The most radical thing I learned was to stop treating rest like a reward for finishing everything.', name: 'Jon Bell', role: 'Writer & gardener', accent: 'bg-[#aeb9a0]' }
];

const featuredEditions = [
  { title: 'Forecasting potential misuses of language models for disinformation campaigns and how to reduce risk', date: 'Jan 11, 2023', image: featuredImageOne },
  { title: 'Best practices for deploying language models', date: 'Jun 2, 2022', image: featuredImageTwo },
  { title: 'Lessons learned on language model safety and misuse', date: 'Mar 3, 2022', image: featuredImageThree },
  { title: 'Why responsible AI development needs cooperation on safety', date: 'Jul 10, 2019', image: featuredImageFour }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [featuredStart, setFeaturedStart] = useState(0);

  const moveFeatured = (direction) => {
    setFeaturedStart((currentStart) => (currentStart + direction + featuredEditions.length) % featuredEditions.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="relative z-20 bg-[#f8ead1] px-4 pt-4 sm:px-5">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border border-ink/70 px-4 py-2.5 shadow-[0_1px_0_rgba(32,35,33,0.2)] sm:px-5" aria-label="Main navigation">
          <a href="#top" className="font-sf-pro text-base font-semibold tracking-tight sm:text-lg">MindState</a>
          <div className="font-sf-rounded hidden items-center gap-7 text-xs text-ink/70 lg:flex">
            <a href="#purpose" className="nav-link">What is MindState?</a>
            <a href="#purpose" className="nav-link">About Us</a>
            <a href="#voices" className="nav-link">Our Team</a>
            <a href="#newsletter" className="nav-link">Join Us</a>
            <a href="#newsletter" className="nav-link">Contact Us</a>
          </div>
          <a href="#newsletter" className="font-sf-pro hidden rounded-xl bg-ink px-4 py-2 text-base font-semibold text-paper transition sm:block">Join the Waitlist</a>
          <button type="button" className="rounded-lg border border-ink/25 p-1.5 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        {menuOpen && <div className="font-sf-rounded mx-auto mt-2 grid max-w-[1440px] gap-3 rounded-2xl border border-ink/50 bg-[#f8ead1] p-5 text-sm lg:hidden"><a href="#purpose" onClick={() => setMenuOpen(false)}>What is MindState?</a><a href="#purpose" onClick={() => setMenuOpen(false)}>About Us</a><a href="#voices" onClick={() => setMenuOpen(false)}>Our Team</a><a href="#newsletter" onClick={() => setMenuOpen(false)}>Join Us</a><a href="#newsletter" onClick={() => setMenuOpen(false)}>Contact Us</a><a href="#newsletter" onClick={() => setMenuOpen(false)} className="font-sf-pro mt-2 rounded-lg bg-ink px-4 py-2 text-center text-paper">Join the Waitlist</a></div>}
      </header>

      <main id="top">
        <section className="relative overflow-visible bg-[#f8ead1] px-5 pb-0 pt-10 sm:px-8 sm:pt-12 lg:px-10">
          <div className="mx-auto max-w-[1440px] text-center">
            <div className="mx-auto mb-3 flex h-16 w-32 items-center justify-center text-4xl" aria-label="MindState logo placeholder">
                <img src={logoImage} alt="MindState logo" className="h-16 w-16 object-contain object-center" />
            </div>
            <h1 className="font-instrument mx-auto max-w-4xl text-5xl leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:text-[5.8rem]">A place for thoughtful <span className="rounded-2xl bg-ink px-3 text-paper">minds.</span></h1>
            <p className="font-google-sans-flex mx-auto mt-5 max-w-3xl text-lg leading-6 text-ink sm:text-2xl">Explore essays, research, art, and voices shaping the future of mental wellbeing.</p>
            <a href="#purpose" className="font-sf-pro mt-5 inline-flex rounded-full bg-ink px-10 py-3 text-sm font-medium text-paper shadow-[0_3px_0_#8a7770] transition">Read the Journal</a>
            <div className="relative left-1/2 mt-1 w-[calc(100vw+20px)] -translate-x-1/2 overflow-visible">
              <img src={heroImage} alt="Illustrated people exploring ideas together" className="block h-auto w-full max-w-none" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-ink/10 py-5 text-ink/75 sm:gap-x-12"><span className="text-xs">Supported by</span><span className="font-semibold tracking-tight">◉ databricks</span><span className="font-semibold">◈ Linear</span><span className="font-semibold tracking-widest">CIRCUS</span><span className="font-semibold tracking-widest">MERCURY</span><span className="font-semibold">remote</span></div>
          </div>
        </section>

        <section className="bg-[#f8ead1] px-4 py-16 sm:px-5 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-instrument text-4xl leading-none sm:text-5xl">Featured Edition</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredEditions.map((_, cardIndex) => {
                const edition = featuredEditions[(featuredStart + cardIndex) % featuredEditions.length];
                return (
                <article key={edition.title} className="min-w-0">
                  <img src={edition.image} alt="Featured edition artwork" className="aspect-[1.45] h-full w-full rounded-2xl object-cover" />
                  <h3 className="font-google-sans-flex mt-2 text-sm font-medium leading-[1.15]">{edition.title}</h3>
                  <p className="font-google-sans-flex mt-1 text-sm font-normal text-ink/75">{edition.date}</p>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <div className="bg-[#f8ead1] px-4 pb-6 sm:px-5">
          <div className="mx-auto flex max-w-[1440px] justify-end gap-3">
            <button type="button" aria-label="Previous featured editions" onClick={() => moveFeatured(-1)} className="rounded-full bg-ink/10 p-2 text-ink/60 transition hover:bg-ink/20"><ChevronLeft size={16} /></button>
            <button type="button" aria-label="Next featured editions" onClick={() => moveFeatured(1)} className="rounded-full bg-ink/10 p-2 text-ink/70 transition hover:bg-ink/20"><ChevronRight size={16} /></button>
          </div>
        </div>

        <section id="purpose" className="bg-[#f8ead1] px-4 pb-16 sm:px-5 lg:pb-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-instrument text-4xl leading-none sm:text-5xl">Our Purpose</h2>
            <p className="font-sf-pro mt-2 text-sm leading-[1.2] sm:text-base">When people feel overwhelmed, unheard, or disconnected, they often withdraw from conversations, communities, and civic life. MindState exists to bridge the gap between mental wellbeing and democracy by creating a space for thoughtful journalism, creative expression, and meaningful dialogue. <a href="#voices" className="underline underline-offset-2">Learn more →</a></p>
            <img src={purposeImage} alt="Children's drawing about creativity and connection" className="mt-3 h-auto w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section id="voices" className="bg-[#f8ead1] px-4 py-16 sm:px-5 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-instrument text-4xl leading-none sm:text-5xl">Community Voices</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Forecasting potential misuses of language models for disinformation campaigns and how to reduce risk', 'Jan 11, 2023', 'c6f06a'],
                ['Forecasting potential misuses of language models and how to reduce risk', 'Jan 11, 2023', '88a29a'],
                ['Forecasting potential misuses of language models and how to reduce risk', 'Jan 11, 2023', 'd8d1b8'],
                ['Forecasting potential misuses of language models and how to reduce risk', 'Jan 11, 2023', 'adc5a0']
              ].map(([title, date, color]) => (
                <article key={`${title}-${color}`} className="min-w-0">
                  <img src={`https://placehold.co/640x330/${color}/202321?text=Image+Placeholder`} alt="Community voice image placeholder" className="aspect-[1.65] w-full rounded-none border-4 border-ink object-cover" />
                  <h3 className="font-google-sans-flex mt-2 text-sm font-medium leading-[1.15]">{title}</h3>
                  <p className="font-google-sans-flex mt-1 text-sm font-normal text-ink/75">{date}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button type="button" aria-label="Previous community voices" className="rounded-full bg-ink/10 p-2 text-ink/40"><ChevronLeft size={16} /></button>
              <button type="button" aria-label="Next community voices" className="rounded-full bg-ink/10 p-2 text-ink/70"><ChevronRight size={16} /></button>
            </div>
          </div>
        </section>

        <section id="topics" className="bg-[#f8ead1] px-4 pb-20 sm:px-5 lg:pb-28">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-instrument text-4xl leading-none sm:text-5xl">Explore Topics</h2>
            <div className="mt-6 grid auto-rows-[168px] gap-3 sm:grid-cols-2 lg:grid-cols-6">
              <a href="#newsletter" className="group rounded-2xl border-2 border-ink p-5 transition hover:bg-ink hover:text-paper lg:col-span-2"><h3 className="font-google-sans-flex text-lg font-medium">Mental Health</h3><p className="mt-2 max-w-[190px] text-sm leading-5 opacity-70">Understanding the inner world and making space for better care.</p><div className="mt-5 text-3xl">⌁</div></a>
              <a href="#voices" className="group rounded-2xl border-2 border-ink p-5 transition hover:bg-ink hover:text-paper lg:col-span-2"><h3 className="font-google-sans-flex text-lg font-medium">Community Voices</h3><p className="mt-2 max-w-[190px] text-sm leading-5 opacity-70">Stories and perspectives from people shaping a kinder culture.</p><div className="mt-5 text-3xl">▣</div></a>
              <a href="#newsletter" className="group rounded-2xl bg-ink p-5 text-paper transition hover:bg-blush lg:col-span-2"><h3 className="font-google-sans-flex text-lg font-medium">Art &amp; Creativity</h3><p className="mt-2 max-w-xs text-sm leading-5 text-paper/70">Discover illustrations, photography, visual art, and creative work that explore the human experience.</p></a>
              <a href="#newsletter" className="group rounded-2xl bg-ink p-5 text-paper transition hover:bg-blush lg:col-span-3"><h3 className="font-google-sans-flex text-lg font-medium">Society &amp; Democracy</h3><p className="mt-2 max-w-sm text-sm leading-5 text-paper/70">Explore how mental wellbeing influences participation, empathy, trust, and the future of democracy.</p></a>
              <a href="#newsletter" className="group rounded-2xl border-2 border-ink p-5 transition hover:bg-ink hover:text-paper lg:col-span-1"><h3 className="font-google-sans-flex text-lg font-medium">Meaningful Conversations</h3><p className="mt-2 text-sm leading-5 opacity-70">Make room for honest dialogue.</p></a>
              <a href="#newsletter" className="group rounded-2xl border-2 border-ink p-5 transition hover:bg-ink hover:text-paper lg:col-span-2"><h3 className="font-google-sans-flex text-lg font-medium">Friendly For Beginners</h3><p className="mt-2 text-sm leading-5 opacity-70">Ideas without the intimidating jargon.</p></a>
            </div>
          </div>
        </section>

        <section id="events" className="bg-[#f8ead1] px-4 py-16 sm:px-5 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-instrument text-4xl leading-none sm:text-5xl">Events &amp; Conversations</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {[
                ['OpenAccess conversation on Mental Wellness and wellbeing of mind. This is a demo text with a demo button.', 'OpenAccess', 'd8d2c7'],
                ['OpenAccess conversation on Mental Wellness and wellbeing of mind. This is a demo text with a demo button.', '3FOLD', '31583d']
              ].map(([detail, label, color]) => (
                <article key={label} className="rounded-2xl border-2 border-ink/70 p-3 sm:p-5">
                  <img src={`https://placehold.co/900x300/${color}/f8ead1?text=Image+Placeholder`} alt="Event image placeholder" className="aspect-[2.9] w-full rounded-xl border border-ink/60 object-cover" />
                  <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-6">
                    <p className="max-w-md text-base leading-[1.15] sm:text-lg">{detail}</p>
                    <span className="shrink-0 rounded-full bg-ink px-4 py-2 text-xs text-paper">View More</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 flex justify-end gap-3">
              <button type="button" aria-label="Previous events" className="rounded-full bg-ink/10 p-2 text-ink/40"><ChevronLeft size={16} /></button>
              <button type="button" aria-label="Next events" className="rounded-full bg-ink/10 p-2 text-ink/70"><ChevronRight size={16} /></button>
            </div>
          </div>
        </section>

        <section id="impact" className="bg-[#f8ead1] px-4 pb-20 sm:px-5 lg:pb-28">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="font-instrument text-4xl leading-none sm:text-5xl">Impact</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-[0.4fr_0.6fr]">
              <div className="grid gap-4">
                <div className="flex min-h-[84px] items-center justify-between rounded-2xl border-2 border-ink/45 px-5"><div className="flex items-center gap-3"><span className="text-xl">Schools reached</span><img src={impactImageOne} alt="Schools reached illustration" className="h-10 w-10 object-contain" /></div><span className="rounded-full border border-ink/40 px-5 py-1 text-base">1500+</span></div>
                <div className="flex min-h-[230px] items-center overflow-visible rounded-2xl border-2 border-ink/45 px-5"><img src={impactImageThree} alt="Stories shared illustration" className="h-48 w-36 shrink-0 object-contain sm:h-56 sm:w-44" /><div className="relative z-10"><p className="font-instrument text-7xl leading-none sm:text-8xl">5000+</p><p className="mt-2 text-3xl leading-none">Stories shared</p></div></div>
                <div className="flex min-h-[84px] items-center justify-between rounded-2xl border-2 border-ink/45 px-5"><span className="text-xl">Events Hosted</span><span className="rounded-full border border-ink/40 px-5 py-1 text-base">10+</span></div>
              </div>
              <div className="grid gap-4">
                <div className="relative flex min-h-[140px] items-center rounded-2xl border-2 border-ink/45 px-8"><div><p className="font-instrument text-6xl leading-none sm:text-7xl">400+</p><p className="mt-2 text-3xl leading-none">Articles published</p></div><img src={impactImageTwo} alt="Articles published illustration" className="absolute bottom-0 right-3 h-32 w-28 object-contain" /></div>
                <div className="flex min-h-[230px] items-center justify-center rounded-2xl border-2 border-ink/45 text-center"><div><p className="font-instrument text-7xl leading-none sm:text-8xl">7000+</p><p className="mt-3 flex items-center justify-center gap-2 text-3xl leading-none"><img src={impactImageFour} alt="Members illustration" className="h-12 w-32 object-contain" />Members</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="bg-[#f8ead1] px-4 py-16 sm:px-5 lg:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-2">
            <div className="relative min-h-[560px] overflow-hidden rounded-2xl sm:min-h-[680px]">
              <img src={newsletterComic} alt="People sharing ideas through the newsletter" className="absolute inset-0 h-full w-full object-contain object-center" />
            </div>
            <div className="relative flex min-h-[560px] flex-col justify-center overflow-visible rounded-2xl px-6 py-10 sm:min-h-[680px] sm:px-10">
              <div className="relative z-10 pb-44 sm:pb-52">
                <h2 className="font-instrument text-5xl leading-none sm:text-6xl">Join the Newsletter</h2>
                <p className="font-sf-pro mt-5 max-w-xl text-base leading-[1.15] text-ink/65 sm:text-lg">Stay connected with our latest essays, interviews, research, community stories, and upcoming events. Thoughtful updates delivered only when there&apos;s something worth reading.</p>
                {submitted ? <p className="font-google-sans-flex mt-6 border-b border-ink/50 pb-3 text-lg">You&apos;re on the list. See you Thursday.</p> : <form onSubmit={handleSubmit} className="relative z-10 mt-6 flex max-w-xl gap-2"><label className="sr-only" htmlFor="email">Email address</label><input id="email" required type="email" placeholder="example@email.com" className="font-sf-pro min-w-0 flex-1 rounded-full border border-ink/60 bg-[#f8ead1] px-4 py-2 text-sm outline-none placeholder:text-ink/50" /><button type="submit" className="font-sf-pro shrink-0 rounded-full bg-ink px-5 py-2 text-xs text-paper transition hover:bg-blush">Join Now</button></form>}
              </div>
              <img src={newsletterPeep} alt="Newsletter illustration" className="newsletter-peep pointer-events-none absolute bottom-0 z-0 h-52 w-full object-contain object-right-bottom sm:h-80" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
