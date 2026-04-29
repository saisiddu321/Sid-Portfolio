import type { Metadata } from "next";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About — Siddharth Pamidi",
};

const HOBBIES = [
  { t: "Climbing",    s: "Mostly bouldering indoors V2 - V4",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20l5-8 4 3 3-6 6 11"/><circle cx="16" cy="6" r="1.6"/></svg> },
  { t: "Hiking",      s: "Devil's Lake, Governor Dodge, anything with an overlook",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l5-7-3-4 5-3 4 7 5 7"/><circle cx="9" cy="6" r="1.3"/></svg> },
  { t: "Gaming",  s: "Playing deadlock at the moment",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="M7 9c3-2 7-2 10 0M6 13c4 0 8-2 12-4M8 17c3-1 6-3 9-6"/></svg> },
  { t: "Photography", s: "Aesthethic landscapes and portraits with my Sony Alpha 6400",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7l2-3h4l2 3"/><circle cx="12" cy="13.5" r="3.2"/></svg> },
  { t: "Reading",     s: "On my \"To Read\" list: Antimemetics division, Red Rising, All Systems Red, Mistborn",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5v14a1 1 0 001 1h14V4H5a1 1 0 00-1 1z"/><path d="M8 5v15M12 9h5M12 13h5"/></svg> },
  { t: "Pickleball",  s: "I play casually but I\'m very competitive",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="6"/><path d="M14 14l6 6"/><circle cx="10" cy="10" r="2.5" strokeDasharray="1 1.5"/></svg> },
];

export default function AboutPage() {
  return (
    <main>
      <section className="container-reading page-intro">
        <span className="eyebrow">About</span>
        <h1 className="h1">I like anything and everything, and the people that acommpany</h1>
      </section>

      <section className="container-reading about-layout">
        <div className="prose">
          <p>
            I grew up engrossed by everything related to science. I am fascinated by the idea of
            experimenting with seemingly random interactions that results in riveting behavior.
            Something about creating a magnet simply by conducting electricity through a
            copper wire wrapped around a nail seemed so magical. 
          </p>
          <p>
            Professionally, I&apos;m a software engineer at <em>Epic Systems</em> in Madison,
            working on pharmacy workflows — metrics for stockouts, slow-movers, and fast-movers
            that help pharmacists make fewer small, expensive mistakes. Before Epic, I spent
            two years at Georgia Tech leading a small ML team on wireless signal classification. 
            We trained Vision Transformers on noisy spectrograms to perform real-time packet 
            classification and localization on Bluetooth and Drone communication packets.
          </p>
          <p className="margin-note">
            The best lesson from research: a clean dataset can beat a clever model.
          </p>
          <p>
            Outside of work, I&apos;m usually bouldering (V2-V4), hiking,
            reading fiction, taking aesthetic pictures, or playing pickleball. Recently,
            I&apos;ve taken an interest in trying new hobbies, learning to crotchet being my
            latest interest.
          </p>
          <p>
            If i had to summarize the type of person I am it would be that I can enjoy almost any activity
            with the right company. Invite me to any niche hobby. I&apos;ll probably say yes.
          </p>

          <div className="rule-ornament"><span>·  ·  ·</span></div>

          <h2 className="h2" style={{ marginTop: 24, marginBottom: 16 }}>How I spend a week</h2>
          <p>
            Five weekdays of writing code and code review. One evening at the climbing gym.
            One long walk with a camera. At least one evening to reset and plan for the week ahead.
          </p>

          <div className="hobby-grid">
            {HOBBIES.map((h) => (
              <div className="hobby" key={h.t}>
                <div className="icon">{h.icon}</div>
                <h4>{h.t}</h4>
                <p>{h.s}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-side">
          <div className="portrait">
            <PhotoPlaceholder photo={{ id: 99, hue: 28, light: 68, place: "Kyoto", src: "/photos/fushimi-inari.jpg" }} showLabel={false} />
          </div>
          <dl>
            <dt>Based in</dt><dd>Madison, WI</dd>
            <dt>At</dt><dd>Epic Systems</dd>
            <dt>Before</dt><dd>Georgia Tech</dd>
            <dt>Email</dt><dd><a href="mailto:siddharthsai.pamidi@gmail.com">Say hi</a></dd>
            <dt>Résumé</dt><dd><a href="#">PDF →</a></dd>
            <dt>Paper</dt><dd><a href="https://ieeexplore.ieee.org/document/10539599" target="_blank" rel="noopener noreferrer">IEEE WF-IOT &apos;23</a></dd>
          </dl>
        </aside>
      </section>
    </main>
  );
}
