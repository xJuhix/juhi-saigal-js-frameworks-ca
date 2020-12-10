import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required")
        .min(2, "Your first name must contain at least 2 characters"),

    lastName: yup
        .string()
        .required("Last name is required")
        .min(2, "Your last name must contain at least 2 characters"),

    email: yup
        .string()
        .email('Invalid email')
        .required("A valid Email is required"),

    message: yup
        .string()
        .required("Message is required")
        .min(10, "Your message must contain at least 10 characters")
});

function ContactForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First name:</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}

                <br />
                <Form.Label>Last name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your Last name" ref={register} />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>    
                <Form.Control type="text" placeholder="Enter your Email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Enter your Message" ref={register} />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>
            
            <Button type="submit" variant="primary">Submit</Button>     
        </Form>
        
    );
}

export default ContactForm;