import React from 'react';
import PropTypes from 'prop-types';
import css from './contactList.module.css';
import {useDispatch, useSelector } from 'react-redux';
import { onRemove, updateFilter  } from '../../redux/contactsSlice.js';
import Filter from 'components/Filter/Filter';
import { persistor } from '../../redux/store';
function ContactList() {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(onRemove(id));
    dispatch(updateFilter(''));
    persistor.purge(); 
  };
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.contacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
    <Filter filter={filter} />
    <ul className={css.container}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
      <p>
      {contact.name} : {contact.number}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => handleRemove(contact.id)}
      >
        Delete
      </button>
    </li>
      ))}
    </ul>
    </div>
  );
}

ContactList.propTypes = {
 contacts: PropTypes.object,
};

export default ContactList;
