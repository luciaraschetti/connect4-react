import './ContactForm.css';
import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = () => (
    console.log('ok')
)

const ContactForm = () => (
    <Form
      onSubmit={onSubmit}
      validate={values => {
          const errors = {}
          if(!values.name) {
              errors.name = 'Please enter 3 characters or more';
              errors.email = 'Please enter a valid email';
              errors.message = 'Please enter 5 characters or more';
          }
          return errors;
      }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
            <h2>GET IN TOUCH</h2>
            <label htmlFor="name">Name</label>
            <Field id="name" component="input" type="text" name="name">
                {({input, meta}) => (
                 <div>
                     <input className="entry" {...input} />
                     {meta.touched && meta.error && <p>{meta.error}</p>}
                 </div>       
                )}
            </Field>
            <label htmlFor="email">Email</label>
            <Field id="email" component="input" type="text" name="email">
                {({input, meta}) => (
                 <div>
                     <input className="entry" {...input} />
                     {meta.touched && meta.error && <p>{meta.error}</p>}
                 </div>       
                )}
            </Field>
            <label htmlFor="message">Message</label>
            <Field id="message" component="textarea" name="message">
                {({input, meta}) => (
                    <div>
                        <textarea {...input} />
                        {meta.touched && meta.error && <p>{meta.error}</p>}
                    </div>       
                    )}
            </Field>
            <button id="submit" type="submit">Send Message</button>
            <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    />
)

export default ContactForm;