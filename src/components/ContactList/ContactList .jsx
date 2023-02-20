import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onClick={onDeleteContact}
      ></ContactListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
