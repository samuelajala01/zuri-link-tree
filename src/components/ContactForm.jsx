const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div class="input-group">
                    <label for="first-name"> First Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="input-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" id="lastname" name="lastname" required />
                </div>
            </div>
            <label>Email</label>
            <input type="mail" />
            <label>Message</label><textarea rows='10' />
            <button>Send Message</button>
        </form>
    )
}

export default ContactForm