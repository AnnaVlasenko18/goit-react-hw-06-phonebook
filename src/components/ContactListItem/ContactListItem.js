import { useDispatch } from 'react-redux';
import {
  ContactItem,
  ContactItemText,
  ContactDelete,
  FormText,
} from './ContactListItem.styled';
import { onDelete } from '../../redux/contactsSlice';

export const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <ContactItemText>
        <FormText>{name}:</FormText>
        <FormText>{number}</FormText>
      </ContactItemText>
      <ContactDelete type="button" onClick={() => dispatch(onDelete(id))}>
        Delete
      </ContactDelete>
    </ContactItem>
  );
};
