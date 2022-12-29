import PropTypes from 'prop-types';
import style from './PhonebookForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMyContact, getContacts } from 'redux/sliceContacts';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const submitForm = (values, { resetForm }) => {

    if (contacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already is contacts`);
    }
    values.id = nanoid(5);

    dispatch(addMyContact(values));

    resetForm();
  };
  return (
    <>
      <form initialValues={initialValues} className={style.FormInput} onSubmit={submitForm}>
        
          <label>Name</label>
            Name
            <input
              type="text"
              name="name"
              className={style.FormInput__input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          
          <label>Number</label>
            Number
            <input
              type="tel"
              name="number"
              className={style.FormInput__input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          
          <button type="submit" className={style.FormButton}>
            Add Contact
        </button>
        
      </form>
    </>
  );
};

Event.propTypes = {
  onSubmit: PropTypes.func,
};
