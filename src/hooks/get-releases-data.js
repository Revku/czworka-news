import { graphql, useStaticQuery } from 'gatsby';

const getReleasesData = () => {
  const data = useStaticQuery(graphql`
    query {
      hygraph {
        releases(first: 200, orderBy: date_DESC) {
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
