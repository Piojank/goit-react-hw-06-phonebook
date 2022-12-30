import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import style from './PhonebookListItem.module.css';

export default function PhonebookListItem({ id, name, number }) {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const contactsFiltered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (contactsFiltered) {
        return (
            <>
            {contactsFiltered.map(({ id, name, number }) => (
            <li className={style.PhonebookList__item} key={id}>
                <span className={style.PhonebookList__text}>{name}: </span>
                <span className={style.PhonebookList__text}>{number}: </span>
            <button
                className={style.PhonebookList__button}
                type="submit"
                name={name}
                onClick={() => dispatch(removeContacts(id))}>
                Delete
            </button>
            </li>
            ))}
            </>
        );
    }
}

PhonebookListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};