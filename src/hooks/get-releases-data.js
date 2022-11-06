import { graphql, useStaticQuery } from 'gatsby';

const getReleasesData = () => {
  const data = useStaticQuery(graphql`
    query {
      hygraph {
        releases {
          year {
            textColor {
              hex
            }
            year
            backgroundColor {
              hex
            }
            id
          }
          pdfFile {
            url
          }
          releaseName
          date
        }
      }
    }
  `);

  return data.hygraph.releases;
};

export default getReleasesData;
