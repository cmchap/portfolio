import * as React from "react";

interface Props {
    name: string;
  };
  
const NameCard = ({ name }: Props): JSX.Element => (
  <div><section id="about-me" className="l-name-card">
  <div className="c-name-card">
    <img
      className="c-name-card__image"
        src="https://via.placeholder.com/150?text=Profile Pic"
        alt="Cory Chainsman"
    />
    <div className="l-name-card__text-container">
      <h1 className="c-name-card__name">Cory Chainsman</h1>
      <p className="c-name-card__title">UX Designer</p>
      <p className="c-name-card__blurb">
        Dad.
        Designer.
        Building UIs & workflows for AI vision systems.
        Humans in the loop. 
        He/Him
      </p>
    </div>
    <div className="c-name-card__button-container">
      <button className="c-name-card__button--primary">
        <a href="#portfolio">Portfolio</a>
      </button>
      <button className="c-name-card__button--secondary">
        <a href="#personal-projects">Personal Projects</a>
      </button>
    </div>
  </div>
</section></div>
);
  
export default NameCard;