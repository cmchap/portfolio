import * as React from "react";
import ThemeChooser from './ThemeChooser';

// interface Props {
// };
  
const AppHeader = (): JSX.Element => (
  <header>
			<nav className="c-main-nav">
				<ul className="c-main-nav__list">
					<li className="c-main-nav__item">
						<a href="#about-me" className="c-main-nav__link">About</a>
					</li>
					<li className="c-main-nav__item">
						<a href="#portfolio" className="c-main-nav__link">Portfolio</a>
					</li>
					<li className="c-main-nav__item">
						<a href="#personal-projects" className="c-main-nav__link"
							>Personal Projects</a
						>
					</li>
			</ul>
		</nav>
		<ThemeChooser />
		</header>
);
  
export default AppHeader;