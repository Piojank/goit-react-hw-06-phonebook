import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/slice';
import { getContacts } from 'redux/contacts/selectors';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        contacts.some(contact => contact.name === name)
        ? alert(`${name} is already in contacts`)
        : dispatch(
            addContacts({
                id: nanoid(),
                name: name,
                number: number,
            })
            );

        setName('');
        setNumber('');
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        switch (name) {
        case 'name':
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;

        default:
            break;
        }
    };

    return (
        <form className={style.FormInput} onSubmit={handleSubmit}>
        <label>Name</label>
            <input
            className={style.FormInput__input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
            />
        
        <label>Number</label>
            <input
            className={style.FormInput__input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            required
            />
        

        <button className={style.FormButton} type="submit">
            Add contact
        </button>
        </form>
    );
}
