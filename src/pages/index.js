import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SEO from 'components/SEO';
import Header from 'components/organisms/Header/Header';
import Releases from 'components/organisms/Releases/Releases';
import Team from 'components/organisms/Team/Team';
import Contact from 'components/organisms/Contact/Contact';
import Footer from 'components/organisms/Footer/Footer';

const IndexPage = () => {
  return (
    <MainTemplate>
      <Header />
      <Releases />
      <Team />
      <Contact />
      <Footer />
    </MainTemplate>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Czwórka News - oficjalna strona redakcji" />
);
