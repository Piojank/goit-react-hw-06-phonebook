import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import style from './PhonebookList.module.css';
import PhonebookListItem from 'components/PhonebookListItem/PhonebookListItem';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const contactsFiltered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (contactsFiltered) {
        return (
        <ul>
            {contactsFiltered.map(({ id, name, number }) => (
            <li className={style.li} key={id}>
                <PhonebookListItem id={id} name={name} number={number} />
            </li>
            ))}
        </ul>
        );
    }
}