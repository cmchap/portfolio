/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

// interface Props {
//   };
  
const About = (): JSX.Element => (
	<div className="c-about-me">
		<h3 className="c-about-me__heading">About Me</h3>
		<div className="c-about-me__body">
			<p>
				I have been a UX designer since 2010, with additional work in
				product management, libraries, digital archives and collections. I
				focus on meeting complex, interconnected requirements with simple,
				modular, reusable components and design systems. My designs are
				data-driven at all phases of the design cycle. I have designed
				products and services for the web, desktop, mobile, embedded
				systems, kiosks, VR/AR, voice, IoT, and edge intelligence
				platforms.
			</p>
			<p>
				I currently work as a Principal UX Designer at 
				<span> <a href="#">Cognex</a></span>, a maker of advanced machine vision systems
				in Boston, Massachusetts. My work at Cognex has been focused on
				usability of 3D computer vision systems, and human-in-the-loop
				interfaces to train machine learning models.
			</p>
			<p>
				I spent my first 18 years in Madison, Alabama. After getting my BS
				in Biology from the College of William & Mary (with a brief
				stopover at the University of Alabama), I received my MS in
				Information Science and Human Computer Interaction (HCI) from UNC
				Chapel Hill's School of Library and Information Science. My
				graduate work included digitizing, accessioning, and preserving
				digital archives, managing and analyzing digital
				government/medical information, studying scientists' data
				workflows, and promoting the free (as in beer 🍺 and freedom 🗽)
				and open internet as a Wikipedian in Residence.
			</p>
			<p>
				You'll find me around the internet as either
				<code>corychainsman</code> or <code>cmchap</code>.
			</p>
		</div>
	</div>
);
  
export default About;