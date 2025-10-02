import React from 'react';
import aboutImg from '../images/about/amaan.png';
import { Skills } from './Skills';

export const About = () => {
  // state
  const [age, setAge] = React.useState(20);

  React.useEffect(() => {
    setAge(
      Math.floor((new Date() - new Date('2005-01-12').getTime()) / 3.15576e10)
    );
  }, []);

  // jsx
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>
          <span>about</span> me
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center about-center">
        {/* about-img  */}
        <article>
          <div className="about-img">
            <img
              src={aboutImg}
              alt="Pathan Amaan"
              className="about-image"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
        <p>
    I'm <strong>Pathan Amaan</strong>, a <span>{age}</span> year old
    <strong> Full Stack Developer</strong> with experience in building optimized websites and digital solutions.
    I work extensively with <strong>React.js</strong> and other JavaScript frameworks to create dynamic, user-friendly web applications.
    <br />
    <br />
    I have contributed to <strong>open-source projects</strong> like <strong>Zulip</strong> as part of <strong>Google Summer of Code (GSoC)</strong>,
    where I improved features and enhanced the user experience. I’m also the <strong>President</strong> of <strong>Shark Sphere</strong>, an E-Cell at
     <strong> Newton School of Technology</strong>, where I lead entrepreneurial initiatives and build startup-centric platforms for students.
    <br />
</p>


          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};
