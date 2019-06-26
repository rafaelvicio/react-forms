import React from 'react';

import { withFormik } from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';

const sexs = [
  { value: 'M', label: 'Masculino'},
  { value: 'F', label: ' Feminino'}
]

function App({ handleSubmit, erros, values, handleChange, setFieldValue }) {

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={values.name} onChange={handleChange} />
      {/* { !!erros.name && <span>{erros.name}</span>} */}
      <input type="text" name="email" value={values.email} onChange={handleChange} />
      <Select placeholder="Escolha o sexo..." options={sexs} value={values.sex} onChange={value => setFieldValue('sex', value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default withFormik({
  mapPropsToValues: (props) => ({
  name: 'abc',
  email: '',
  sex: { value: 'M', label: ' Masculino'}
  }),
  validateOnChange: false,
  validateOnBlur: false,
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório')
  }),
  handleSubmit: (values, {props}) => {
    const payload = {
      ...values,
      sex: values.sex.value
    }
    console.log('-->', payload)
  },
})(App);
