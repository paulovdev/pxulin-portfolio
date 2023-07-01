import React from "react";
import { motion } from 'framer-motion';
import './Contact.css'
const Contact = () => {
    const translateAnimation = {
        initial: { opacity: 0.1, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };
    return (
        <main id="contact">
            <motion.h1 {...translateAnimation}>About me<span id="mySpan">.</span>
            </motion.h1>
            <motion.p {...translateAnimation}
                transition={{ delay: 0.1 }}>Send me a message!</motion.p>
            <form>
                <div className="col-1">
                    <motion.input   {...translateAnimation}
                        transition={{ delay: 0.1 }}
                        type="text"
                        placeholder="Enter your name"
                        required
                    />

                    <motion.input  {...translateAnimation}
                        transition={{ delay: 0.2 }}
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="col-2">
                    <motion.input {...translateAnimation}
                        transition={{ delay: 0.3 }}
                        type="text"
                        placeholder="Subject"
                        required
                    />

                    <motion.textarea {...translateAnimation}
                        transition={{ delay: 0.4 }}
                        placeholder="Message"
                        rows={5}
                        required
                    />
                </div>

                <button type="submit">Send</button>
            </form>
        </main >
    );
};

export default Contact;
