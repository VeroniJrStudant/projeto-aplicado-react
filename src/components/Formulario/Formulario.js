import { ErrorMessage, Formik, Form, Field } from "formik";

import * as Yup from "yup";

export const Formulario = () => {

    const handleSubmit = (values, {setSubmitting, resetForm}) => {

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
        senha: Yup.string().required('Campo obrigatório').min(8,'Mínimo 8 caracteres'),
        endereco: Yup.object().shape({
            rua: Yup.string().required('Campo Onrigatório').max(10,'Mínimo 10 caracteres'),
            numero: Yup.string().nullable(),
            bairro: Yup.string().required('Campo Onrigató').max(10,'Mínimo 10 caracteres'),
        }),
    });

    const initialValues = {
         email:'',
         senha:'',
         endereco:{
            rua:'',
            numero:'',
            bairro:'',
        },
    }

    return (
        <>
            <h1>Formulario</h1>


            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
                {({isSubmitting, resetForm, isValid}) => (
                    <Form>
                        {console.log('isVaisValid',isValid)}


                        <Field name="email" placeholder="E-mail" />
                        <ErrorMessage name="email" style={{color: 'red'}} components="span"/>

                        <Field name="senha" placeholder="Senha" type="senha" /> 
                        <ErrorMessage name="senha" style={{color: 'red'}} components="span"/>

                        <Field name="endereco.rua" placeholder="Rua"/>
                        <ErrorMessage name="endereco.rua" style={{color: 'red'}} components="span"/>

                        <Field name="endereco.numero" placeholder="Número"/>
                        <ErrorMessage name="endereco.numero" style={{color: 'red'}} components="span"/>

                        <Field name="endereco.bairro" placeholder="Bairro"/>
                        <ErrorMessage name="endereco.bairro" style={{color: 'red'}} components="span"/>

                        <button type="submit" disabled={isSubmitting ||isValid}> Enviar </button> 

                        <button type="button" disabled={isSubmitting} onClick={resetForm}> Limpar </button> 
                    </Form>    
                )}
            </Formik>

        </>
    );
}