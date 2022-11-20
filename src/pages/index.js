import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SEO from 'components/SEO';
import Header from 'components/organisms/Header/Header';
import Releases from 'components/organisms/Releases/Releases';
import Team from 'components/organisms/Team/Team';
import Contact from 'components/organisms/Contact/Contact';
import Footer from 'components/organisms/Footer/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const IndexPage = () => {
  const releasesRef = React.useRef();
  const teamRef = React.useRef();
  const contactRef = React.useRef();
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.fromTo(
      releasesRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: releasesRef.current,
          start: 'top center',
        },
      }
    );
    gsap.fromTo(
      teamRef.current.querySelector('#teamContent'),
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top center',
        },
      }
    );
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top center',
        },
      }
    );
  }, []);

  return (
    <MainTemplate>
      <Header />
      <div ref={releasesRef} id="releases">
        <Releases />
      </div>
      <div ref={teamRef}>
        <Team />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </MainTemplate>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Czwórka News - oficjalna strona redakcji" />
);
