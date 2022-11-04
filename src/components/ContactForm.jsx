const ContactForm = () => {
    const name = 'Samuel'
    return (
        <form>
            <div className="row">
                <div class="input-group">
                    <label for="first-name"> First Name</label>
                    <input type="text" id="first_name" name="firstname" placeholder="Enter your first name" required />
                </div>
                <div class="input-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last_name" name="lastname" placeholder="Enter your last name" required />
                </div>
            </div>
            <div className="email">
                <label>Email</label>
                <input type="text" id="email" placeholder="yourname@email.com" />
            </div>
            <div className="message">
                <label>Message</label><textarea rows='10' id="message" placeholder="Send me a message and I'll reply you as soon as possible..." />
            </div>
            <div className="contract">
                <input type="checkbox" /><span>To agree to providing your data to {name} who may contact you</span>
            </div>
            <button type="submit" value="submit">Send Message</button>
        </form>
    )
}

export default ContactForm