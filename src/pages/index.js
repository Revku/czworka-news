import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SEO from 'components/SEO';
import Header from 'components/organisms/Header/Header';
import Releases from 'components/organisms/Releases/Releases';

const IndexPage = () => {
  return (
    <MainTemplate>
      <Header />
      <Releases />
    </MainTemplate>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Czwórka News - oficjalna strona redakcji" />
);
