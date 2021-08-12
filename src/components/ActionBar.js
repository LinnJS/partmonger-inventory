/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import PropTypes from 'prop-types';
// import { XIcon } from '@heroicons/react/solid';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ActionBar = ({ id, name, setQuantity, quantity }) => {
  return (
    <section className="flex">
      <div className="mt-4 sm:mt-0 sm:pr-9">
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
      </div>
    </section>
  );
};

export default ActionBar;

ActionBar.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
