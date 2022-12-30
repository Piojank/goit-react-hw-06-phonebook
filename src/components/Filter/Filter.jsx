import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/selectors';
import style from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={style.FilterContainer}>
      Find contacts by name
      <input
        className={style.FilterInput}
        type="text"
        name="filter"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={evt => dispatch(setFilter(evt.target.value))}
        required
      />
    </div>
  );
}