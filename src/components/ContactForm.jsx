import { useState, useEffect } from "react"


const ContactForm = () => {
    const name = 'Samuel'
    const initialValues = { firstname: '', lastname: '', email: '', textarea: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        if (!values.firstname) {
            errors.firstname = 'First name is required'
        }
        if (!values.lastname) {
            errors.lastname = 'Last name is required'
        }
        if (!values.email) {
            errors.email = 'email is required'
        }
        if (!values.textarea) {
            errors.textarea = 'Message is required'
        }
        return errors
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-group">
                    <label htmlFor="first-name"> First Name</label>
                    <input type="text" id="first_name" name="firstname" placeholder="Enter your first name" value={formValues.firstname} onChange={handleChange} />
                    <p className="error-info">{formErrors.firstname}</p>
                </div>
                <div className="input-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last_name" name="lastname" placeholder="Enter your last name" value={formValues.lastname} onChange={handleChange} />
                    <p className="error-info">{formErrors.lastname}</p>
                </div>
            </div>
            <div className="email">
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="yourname@email.com" value={formValues.email} onChange={handleChange} />
                <p className="error-info">{formErrors.email}</p>
            </div>

            <div className="message">
                <label>Message</label><textarea rows='10' id="message" name="textarea" placeholder="Send me a message and I'll reply you as soon as possible..." value={formValues.textarea} onChange={handleChange} />
                <p className="error-info">{formErrors.textarea}</p>
            </div>
            <div className="contract">
                <input type="checkbox" id="checkbox" required /><span>To agree to providing your data to {name} who may contact you</span>
            </div>
            <button type="submit" value="submit">Send Message</button>
        </form>
    )
}

export default ContactForm