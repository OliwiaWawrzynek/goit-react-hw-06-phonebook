import React from 'react';
import ContactListElement from 'components/ContactListElement/ContactListElement';
import css from './ContactList.module.css';
import { getContacts, getContactsFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const getFilteredContacts = (filterQuery, contacts) => {
  return contacts.filter(
    contact =>
      filterQuery === '' ||
      contact.name.toLowerCase().includes(filterQuery.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getContactsFilter);
  const filteredContacts = getFilteredContacts(filterQuery, contacts);

  return (
    <ul className={css.contactlist}>
      {filteredContacts.map(contact => (
          <ContactListElement
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))
      }
    </ul>
  );
};

export default ContactList;
