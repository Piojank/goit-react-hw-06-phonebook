import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/sliceContacts';
import { ContactList } from './PhonebookList/PhonebookList';
import { Filter } from "components/Filter/Filter";
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <h1>Phonebook</h1>

        <PhonebookForm />
    
      <h2>Contacts</h2>
      <Filter />
      {contacts.length === 0 ? <div>empty</div> : <ContactList />}
    </>
  );
};
