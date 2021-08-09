import React from 'react';
import './App.css';

import AppHeader from './components/AppHeader'
import NameCard from './components/NameCard'
import About from './components/About'
import CopyrightNotice from './components/CopyrightNotice'

function App() {

  return (
    <div className="App">
      <AppHeader />
		<div className="l-main-content">
			<section id="about-me" className="l-name-card">
				<NameCard name="Hello World!"/>
			</section>
			<section className="l-about-me">
				<About />
			</section>
			<section id="portfolio">
				<h1>Portfolio</h1>
			</section>
			<section id="personal-projects">
				<h1>Personal Projects</h1>
			</section>
		</div>
		<footer className="l-footer">
			<ul className="c-social-links">
				<li className="c-social-links__list-item">
					<a
						href="https://www.linkedin.com/in/corychainsman/"
						className="c-social-links__link"
            target="_blank"
            rel="noreferrer"
					>
						<i className="social fab fa-linkedin" aria-hidden="true"></i>
						<span>LinkedIn</span>
					</a>
				</li>
				<li className="c-social-links__list-item">
					<a
						href="https://twitter.com/corychainsman/"
						className="c-social-links__link"
            target="_blank"
            rel="noreferrer"
					>
						<i className="social fab fa-twitter-square" aria-hidden="true"></i>
						<span>Twitter</span>
					</a>
				</li>
				<li className="c-social-links__list-item">
					<a
						href="https://instagram.com/corychainsman/"
						className="c-social-links__link"
            target="_blank"
            rel="noreferrer"
					>
						<i className="social fab fa-instagram-square" aria-hidden="true"></i>
						<span>Instagram</span>
					</a>
				</li>
			</ul>
			<CopyrightNotice name="Cory Chainsman"/>
		</footer>
      </div>
  );
}

export default App;
