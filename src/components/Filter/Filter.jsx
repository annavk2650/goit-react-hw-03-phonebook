import React from 'react';
import PropTypes from 'prop-types';
import { LableFilter, InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <LableFilter>
      Find contacts by name
      <InputFilter type="text" value={value} onChange={onChange} />
    </LableFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
