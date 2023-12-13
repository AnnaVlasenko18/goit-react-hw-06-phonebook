import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  FormLabel,
  ErrMsg,
  InputForm,
  FormContact,
  AddContact,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { onAdd } from '../../redux/contactsSlice';

const phoneRegExp = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
const nameRegExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, 'The name must contain only letters')
    .min(2, 'Too Short!')
    .required('Required!'),
  number: Yup.string()
    .matches(phoneRegExp, 'Enter the number in the format "XXX-XX-XX"')
    .min(7, 'Too short! XXX-XX-XX')
    .max(9, 'Too long! XXX-XX-XX')
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          dispatch(onAdd({ values }));
          actions.resetForm();
        }}
      >
        <FormContact>
          <FormLabel htmlFor="name">Name</FormLabel>
          <InputForm name="name" type="text" placeholder="Enter name" />
          <ErrMsg name="name" component="div" />

          <FormLabel>Number</FormLabel>
          <InputForm name="number" placeholder="XXX-XX-XX" type="tel" />
          <ErrMsg name="number" component="div" />

          <AddContact type="submit">Add contact</AddContact>
        </FormContact>
      </Formik>
    </Wrapper>
  );
};
