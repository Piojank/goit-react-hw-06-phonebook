import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/selectors';
import style from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={evt => dispatch(setFilter(evt.target.value))}
        required
      />
    </label>
  );
}