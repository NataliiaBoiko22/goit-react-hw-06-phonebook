import React from 'react';
import css from './filter.module.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice.js';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <>
      <label className={css.title}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={(e) => dispatch(updateFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};
export default Filter;

