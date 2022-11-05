import ContactForm from "./ContactForm"
import Footer from "./Footer"

const ContactPage = () => {
    return (
        <>
            <section id="contact-page">
                <h4>Contact Me</h4>
                <p className="greeting">Hi there, contact me to tell me anything you have in mind</p>
                <ContactForm />
            </section>
            <Footer />
        </>
    )
}

export default ContactPage