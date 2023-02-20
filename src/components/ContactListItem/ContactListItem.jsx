import PropTypes from 'prop-types';
import { ItemCont, BtnContItem } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onClick, id }) => {
  return (
    <ItemCont id={id}>
      {name}: {number}
      <BtnContItem type="button" onClick={() => onClick(id)}>
        Delete
      </BtnContItem>
    </ItemCont>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
