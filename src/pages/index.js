import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SEO from 'components/SEO';
import Header from 'components/organisms/Header/Header';

const IndexPage = () => {
  return (
    <MainTemplate>
      <Header />
    </MainTemplate>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Czwórka News - oficjalna strona redakcji" />
);
