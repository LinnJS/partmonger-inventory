import React, { useState } from 'react';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import ActionBar from '../components/ActionBar';
import useOrderPart from '../utils/hooks/useOrderPart';
import useCheckoutPart from '../utils/hooks/useCheckoutPart';

const PartCard = ({ part, placeHolderImg }) => {
  const [quantity, setQuantity] = useState(1);
  const [orderPart] = useOrderPart(part.id, quantity);
  const [checkoutPart] = useCheckoutPart(part.id, quantity);
  const { id, image, name, description, cost, partNumber, inStock } = part;

  return (
    <section key={id} className="relative flex flex-col bg-white border border-gray-200 rounded-lg group">
      <div className="bg-gray-200 aspect-w-3 aspect-h-4 sm:aspect-none sm:h-96">
        {/* render part image otherwise render image placeholder */}
        {image ? (
          <img src={image} alt={name} className="object-cover object-center w-full h-full sm:w-full sm:h-full" />
        ) : (
          <Img className="max-h-96" alt="Placeholder" image={placeHolderImg.childImageSharp.gatsbyImageData} />
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-col justify-end flex-1">
          <p className="text-base font-medium text-gray-900">{`$${cost}`}</p>
          <p className="text-sm italic text-gray-500">{`#${partNumber}`}</p>
          {/* render inStock or out of stock placeholder */}
          {inStock ? (
            <p className="text-sm font-bold text-gray-500">{`${inStock} available`}</p>
          ) : (
            <p className="text-sm font-bold text-gray-500">Out of stock</p>
          )}

          <div className="w-full">
            <ActionBar
              orderPart={orderPart}
              checkoutPart={checkoutPart}
              inStock={inStock}
              id={id}
              name={part.name}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartCard;

PartCard.propTypes = {
  placeHolderImg: PropTypes.object,
  part: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    file: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.number,
    partNumber: PropTypes.string,
    inStock: PropTypes.number,
  }),
};
