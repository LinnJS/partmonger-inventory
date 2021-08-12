import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Layout from 'global/Layout';
import useAllParts from 'utils/hooks/useAllParts';

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
            {parts.map(({ image, name, id, description, cost, partNumber, inStock }) => (
              <div
                key={id}
                className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
              >
                <div className="bg-gray-200 aspect-w-3 aspect-h-4 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      className="object-cover object-center w-full h-full sm:w-full sm:h-full"
                    />
                  ) : (
                    <Img className="max-h-96" alt="Placeholder" image={file.childImageSharp.gatsbyImageData} />
                  )}
                </div>
                <div className="flex flex-col flex-1 p-4 space-y-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </h3>
                  <p className="text-sm text-gray-500">{description}</p>
                  <div className="flex flex-col justify-end flex-1">
                    <p className="text-base font-medium text-gray-900">{`$${cost}`}</p>
                    <p className="text-sm italic text-gray-500">{`#${partNumber}`}</p>
                    {inStock ? (
                      <p className="text-sm font-bold text-gray-500">{`${inStock} available`}</p>
                    ) : (
                      <p className="text-sm font-bold text-gray-500">Out of stock</p>
                    )}
                  </div>
                </div>
              </div>
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
