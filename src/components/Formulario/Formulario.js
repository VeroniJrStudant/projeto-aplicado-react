import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

export const Formulario = () => {

    const handleSubmit = (values, setSubmitting, resetForm) => {

        setTimeout(() => {
            alert(JSON.stringify(values, null, 4));
            setSubmitting(false);
            resetForm(
                {email: values.email}
            );
        },1000);
    };

    const schema = Yup.object().shape({
        email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
        senha: Yup.string().required('Campo obrigatório'),
    });

    return (
        <>
            <h1>Formulario</h1>


            <Formik initialValues={{email: '', senha:''}} onSubmit={handleSubmit} validationSchema={schema}>
                {({isSubmitting, resetForm, isValues}) => (
                    <Form>
                        {console.log('isValues', isValues)}
                        <Field name="email" placeholder="E-mail" /> Senha:

                        <Field name="senha" placeholder="Senha" type="senha" /> 

                        <button type="submit" disabled={isSubmitting}> Enviar </button> 

                        <button type="button" disabled={isSubmitting} onClick={resetForm}> Limpar </button> 
                    </Form>    
                )}
            </Formik>

        </>
    );
}