import './ContactForm.css';
import React from 'react';

const ContactForm = () => (
    <form>
        <h2>GET IN TOUCH</h2>
        <label htmlFor="name">Name</label>
        <input id="name" className="entry" type="text" name="name"/>
        <label htmlFor="email">Email</label>
        <input id="email" className="entry" type="text" name="email"/>
        <label htmlFor="message">Message</label>
        <textarea id="message" className="entry" name="message"></textarea>
        <button id="submit" type="button">Send Message</button>
    </form>
)
export default ContactForm;