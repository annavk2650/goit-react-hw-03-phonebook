import React from 'react';
import PropTypes from 'prop-types';
import { FormCont, LabelCont, InputCont, BtnCont } from './ContactForm.styled';

export class ContactForm extends React.Component {
  state = { name: '', number: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormCont onSubmit={this.handleSubmit}>
        <LabelCont>
          Name
          <InputCont
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Ivan Ivanov"
            required
            onChange={this.handleChange}
          />
        </LabelCont>
        <LabelCont>
          Number
          <InputCont
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="11-11-11"
            required
            onChange={this.handleChange}
          />
        </LabelCont>

        <BtnCont type="submit">Add contact</BtnCont>
      </FormCont>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
