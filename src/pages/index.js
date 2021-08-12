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
  const [parts, isLoading] = useAllParts();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-700">
            <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>

            <div>Loading ...</div>
          </div>
        </div>
      </Layout>
    );
  }

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
