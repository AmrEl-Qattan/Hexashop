
export default function Contact() {
  return (
    <div className="contact" id="contact">
        <div className="container">
          <div className="title">
            <h2>Contact Us</h2>
            <div className="border"></div>
          </div>

          <form className="contact-area">
            <div className="data-form">
              <input
                type="text"
                name="user_name"
                autoComplete="off"
                placeholder="Name"
                required
              />
            </div>

            <div className="data-form">
              <input
                type="email"
                name="user_email"
                autoComplete="off"
                placeholder="Email"
                required
              />
            </div>
            <div className="data-form">
              <input
                type="tel"
                name="user_phone"
                autoComplete="off"
                placeholder="Phone"
                required
              />
            </div>

            <div className="data-form">
              <input
                type="text"
                name="subject"
                autoComplete="off"
                placeholder="Subject"
                required
              />
            </div>

            <div className="data-form">
              <textarea
                name="message"
                placeholder="Message for me"
                autoComplete="off"
                required
              ></textarea>
            </div>

            <div className="clr"></div>

            <button className="btn bg-main text-white w-100" type="submit">
              send message
            </button>
          </form>
        </div>
      </div>
  )
}
