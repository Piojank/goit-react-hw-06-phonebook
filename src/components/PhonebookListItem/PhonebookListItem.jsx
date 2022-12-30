import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import PropTypes from 'prop-types';
import style from './PhonebookListItem.module.css';

export default function ContactItem({ id, name, number }) {
    const dispatch = useDispatch();

    return (
        <>
        <span>
            {name}: {number}
        </span>
        <button
            className={style.button}
            type="submit"
            name={name}
            onClick={() => dispatch(removeContacts(id))}
        >
            Delete
        </button>
        </>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};