import { graphql, useStaticQuery } from 'gatsby';

const getRedactorsData = () => {
  const data = useStaticQuery(graphql`
    query {
      hygraph {
        redactors {
          role
          roleColor {
            hex
          }
          firstName
          lastName
          id
          about
          photo {
            url
          }
        }
      }
    }
  `);

  return data.hygraph.redactors;
};

export default getRedactorsData;
