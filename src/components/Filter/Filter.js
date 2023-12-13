import { useDispatch, useSelector } from 'react-redux';
import { ContactFilter } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  return (
    <>
      <label htmlFor="findContacts"></label>
      <ContactFilter
        type="text"
        name="findContacts"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
        placeholder="Search by name"
      />
    </>
  );
};
