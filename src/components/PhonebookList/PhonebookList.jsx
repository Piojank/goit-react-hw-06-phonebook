import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from 'components/IconButton/IconButton';
import { deleteMyContact, getContacts, getFilter } from '../../redux';

import style from './PhonebookList.module.css';
import React from "react";

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);


  const deleteContact = idContact => {
    dispatch(deleteMyContact(idContact));
  };



  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const PhonebookListItem = findContacts();

  return (

      <ul className={style.PhonebookList__list}>
        {PhonebookListItem.map(({ id, name, number }) => {
          return (
            <li className={style.PhonebookList__item} key={id}>
              <span className={style.PhonebookList__text}>{name}: </span>
              <span className={style.PhonebookList__text}>{number}: </span>
              <IconButton
                type="button"
                className={style.PhonebookList__button}
                onClick={() => deleteContact(id)}
                aria-label="Delete contact"
              >
                Delete
              </IconButton>
            </li>
          );
        })}
      </ul>

  );
};
