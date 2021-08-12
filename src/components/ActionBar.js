/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import PropTypes from 'prop-types';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ActionBar = ({ id, name, setQuantity, quantity, inStock, orderPart, checkoutPart }) => {
  return (
    <form className="flex justify-between">
      <label htmlFor={`quantity-${id}`} className="sr-only">
        Quantity, {name}
      </label>

      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
        id={`quantity-${id}`}
        name={`quantity-${id}`}
        className="max-w-full rounded-md border border-gray-300 pr-8 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((option, idx) => (
          <option key={`option-${idx}`} value={option}>{` ${option} `}</option>
        ))}
      </select>

      <div className="flex justify-between">
        <button
          onClick={() => orderPart()}
          type="submit"
          className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium leading-4 text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Order
          <PlusIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
        </button>

        {!!inStock && (
          <button
            onClick={() => checkoutPart()}
            type="submit"
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Checkout
            <MinusIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </form>
  );
};

export default ActionBar;

ActionBar.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  orderPart: PropTypes.func.isRequired,
  checkoutPart: PropTypes.func.isRequired,
  inStock: PropTypes.number,
};
