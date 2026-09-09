"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-12-03T04:45:00+05:30").getTime();

function getTimeLeft() {
  const difference = weddingDate - Date.now();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft === undefined) {
    return (
      <div className="countdown" aria-label="Countdown loading">
        {Object.keys({ days: 0, hours: 0, minutes: 0, seconds: 0 }).map((label) => (
          <div key={label}><strong>--</strong><span>{label}</span></div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return <div className="countdown"><div className="countdown-finished"><strong>Just Married!</strong><span>Celebrating love</span></div></div>;
  }

  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label}><strong>{value}</strong><span>{label}</span></div>
      ))}
    </div>
  );
}

function Petals() {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.textContent = ["✿", "❀", "✦", "•"][Math.floor(Math.random() * 4)];
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
      petal.style.animationDuration = `${7 + Math.random() * 7}s`;
      petal.style.fontSize = `${9 + Math.random() * 10}px`;
      document.body.appendChild(petal);
      window.setTimeout(() => petal.remove(), 15000);
    };

    const interval = window.setInterval(createPetal, 900);
    const initialPetals = Array.from({ length: 7 }, (_, index) => window.setTimeout(createPetal, index * 350));
    return () => {
      window.clearInterval(interval);
      initialPetals.forEach(window.clearTimeout);
      document.querySelectorAll(".petal").forEach((petal) => petal.remove());
    };
  }, []);

  return null;
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Petals />
      <nav>
        <a href="#home">Home</a><a href="#couple">Couple</a><a href="#events">Events</a><a href="#rsvp">RSVP</a>
      </nav>
      <main>
        <section id="home" className="hero">
          <div className="hero-inner">
            <div className="om float">॥ श्री गणेशाय नमः ॥</div>
            <p className="mantra">Vakratundaya Mahakaya, Suryakoti Samaprabha<br />Nirvighnam Kurume Deva, Sarva Karyeshu Sarvada ॥</p>
            <div className="eyebrow">A celebration of love</div>
            <h1>Dilip <span className="amp">&amp;</span> Gayatri</h1>
            <div className="ornament">✦ ❦ ✦</div>
            <div className="date">2–3 DECEMBER 2026 · BHILAI</div>
            <a className="btn" href="#events">Celebrate With Us ↓</a>
            <Countdown />
          </div>
          <div className="scroll-hint">Scroll to explore</div>
        </section>

        <section id="story" className="reveal">
          <div className="card invite">
            <div className="section-kicker">With joyful hearts</div><h2 className="section-title">You Are Invited</h2>
            <p>Shri Anime Vasudeo Rao &amp; Smt. Anime Ravana cordially invite you and your family to grace the auspicious occasion of the wedding of their beloved son.</p>
            <div className="ornament">❦</div><p>Your presence and blessings will make this beautiful celebration even more special.</p>
          </div>
        </section>

        <section id="couple" className="reveal">
          <div className="section-kicker">Two hearts · One journey</div><h2 className="section-title">The Couple</h2>
          <p className="section-sub">A new chapter begins with love, family and blessings.</p>
          <div className="couple">
            <div className="card person"><div className="symbol">❧</div><h3>Anime Dilip (Vicky)</h3><p>Son of A. Vasudeo Rao</p><p>and A. Ravana</p><p>Rao Tailor, Azad Market<br />Risali, Bhilai, Chhattisgarh</p></div>
            <div className="card person"><div className="symbol">❧</div><h3>Tootica Gayatri</h3><p>Daughter of Mr. Tootica Kapilesh</p><p>and Mrs. Tootica Geeta</p><p>Chinna Bazar, Berhampur<br />Odisha</p></div>
          </div>
        </section>

        <section id="events" className="reveal">
          <div className="section-kicker">Save the dates</div><h2 className="section-title">Celebrations</h2><p className="section-sub">Come celebrate these precious moments with us.</p>
          <div className="events">
            <div className="card event"><div className="event-icon">✦</div><h3>Reception &amp; Dinner</h3><div className="day">Wednesday · 2 December 2026</div><div className="time">07:30 PM onwards</div><div className="venue">Sammati Palace<br />Dhanora, Bhilai, Chhattisgarh<br /><a className="map-link" href="https://maps.app.goo.gl/kYWBKGtN5tugtyrg7" target="_blank" rel="noopener noreferrer">📍 View Venue on Google Maps</a></div></div>
            <div className="card event"><div className="event-icon">❦</div><h3>Wedding Ceremony</h3><div className="day">Thursday · 3 December 2026</div><div className="time">04:45 AM</div><div className="venue">Auspicious early-morning ceremony</div></div>
          </div>
        </section>

        <section id="family" className="reveal">
          <div className="section-kicker">With best compliments</div><h2 className="section-title">Our Families</h2>
          <div className="card family"><div><h3>RSVP</h3><p><strong>A. Vasudeo Rao</strong><br />Rao Tailor, Azad Market<br />Risali, Bhilai, Chhattisgarh</p></div><div><h3>With Blessings</h3><p>Mr. Chandar Rao &amp; Mrs. Sangeta<br />Mr. A. Pashupati Rao &amp; Mrs. A. Nirmala</p></div></div>
        </section>

        <section id="rsvp" className="reveal">
          <div className="card rsvp"><div className="section-kicker">We can&apos;t wait to see you</div><h2 className="section-title">Your Presence Is Our Blessing</h2><p className="section-sub">Please join us with your love, laughter and blessings.</p><a className="btn" href="tel:+918109314806">RSVP · 8109314806</a></div>
        </section>
      </main>
      <footer><div className="ornament">✦ ❦ ✦</div><p>With love, laughter &amp; blessings · December 2026</p></footer>
    </>
  );
}