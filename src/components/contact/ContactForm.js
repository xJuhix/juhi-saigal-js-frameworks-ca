import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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

    messageField: yup
        .string()
        .required("Message is required")
        .min(10, "Your message must contain at least 10 characters")
});

function ContactForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [sent, setSent] = React.useState(false);

    function onSubmit(data) {
        console.log("data", data);
        setSent(true);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {sent && <div className="validationMessage"> 
                        <h3>Thank you!</h3> 
                        <p>Your message has been successfully sent. We will contact you very soon!</p>
                    </div> 
            }
            <Form.Group>
                <Form.Label>First name:</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}

                <br />
                <Form.Label>Last name:</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your Last name" ref={register} />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>    
                <Form.Control type="text" name="email" placeholder="Enter your Email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" name="messageField" type="text" placeholder="Enter your Message" ref={register} />
                {errors.messageField && <ErrorMessage>{errors.messageField.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit" variant="primary">Submit</Button>     
        </Form>
        
    );
}

export default ContactForm;