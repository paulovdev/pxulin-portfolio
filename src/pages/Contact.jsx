import React from "react";

const Contact = () => {
    return (
        <main id="contact">
            <h1>About me<span id="mySpan">.</span></h1>
            <p>Send me a message!</p>
            <form>
                <div className="col-1">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="col-2">
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                    />

                    <textarea
                        placeholder="Message"
                        rows={5}
                        required
                    />
                </div>

                <button type="submit">Send</button>
            </form>
        </main>
    );
};

export default Contact;
