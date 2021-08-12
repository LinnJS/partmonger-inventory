import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'global/Layout';
import useAllParts from 'utils/hooks/useAllParts';

import PartCard from '../components/PartCard';

export const query = graphql`
  query OrderDetailsQuery {
    file(name: { eq: "parts" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

const LandingPage = ({ data: { file } }) => {
  const [parts] = useAllParts();
  console.log('parts: ', parts);

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {parts.map((part) => (
              <PartCard key={`part-card-${part.id}`} placeHolderImg={file} part={part} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
  }),
};
