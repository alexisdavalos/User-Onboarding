import React from 'react';
import {withFormik} from 'formik';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components'
const Form_S = styled(Form)`
width:50%;
margin: 0 auto;
`
const SignupForm = ({values,handleChange}) =>{
    return (
        
            <Form_S>
                <Label>Name</Label>
                <Input 
                type='text'
                value={values.name}
                onChange={handleChange}
                name='name'
                />
                <Label>Email</Label>
                <Input 
                type='email'
                name='email'
                onChange={handleChange}
                />
                <Label>Password</Label>
                <Input 
                type='password'
                name='password'
                onChange={handleChange}
                />
                <Button>Submit</Button>
            </Form_S>


       
    )
}
const FormikForm = withFormik({
    mapPropsToValues(props){
        return {
            name: props.name,
            email: props.email,
            password: props.password,
            terms: props.terms
        }
    }
})(SignupForm);
//replaced Form with FormikForm
export default FormikForm;