import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList ';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = { name, number, id: nanoid() };

    const { contacts } = this.state;

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  onChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== contactId) };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const visibleContact = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter value={filter} onChange={this.onChange} />}
        {contacts.length > 0 ? (
          <ContactList contacts={visibleContact} onDeleteContact={this.onDeleteContact} />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </Container>
    );
  }
}
