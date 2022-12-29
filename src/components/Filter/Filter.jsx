import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <div className={style.FilterContainer}>
        <label>
        Find contacts by name
        <input
            type="text"
            name="filter"
            className={style.FilterInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Find contacts by name"
            onChange={onFilter}
            placeholder="Filter Contacts"
        />
        </label>
    </div>
  );
};

Event.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
