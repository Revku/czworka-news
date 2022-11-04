import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import SEO from 'components/SEO';

const IndexPage = () => {
  return (
    <MainTemplate>
      <p>IndexPage</p>
    </MainTemplate>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Czwórka News - oficjalna strona redakcji" />
);
