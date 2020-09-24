import './ContactForm.css';
import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = () => (
    console.log('ok')
)

const ContactForm = () => (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <h2>GET IN TOUCH</h2>
            <label htmlFor="name">Name</label>
            <Field id="name" className="entry" component="input" type="text" name="name"/>
            <label htmlFor="email">Email</label>
            <Field id="email" className="entry" component="input" type="text" name="email"/>
            <label htmlFor="message">Message</label>
            <Field id="message" className="entry" component="textarea" name="message"></Field>
            <button id="submit" type="submit">Send Message</button>
        </form>
      )}
    />
)

export default ContactForm;