// import PropTypes from 'prop-types'

import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import "animate.css/animate.compat.css"
// import ScrollAnimation from 'react-animate-on-scroll';
import VDO from "../images/contact.mp4"
import Navbar from './Navbar'



export class Contact extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Navbar />
                <video style={{ width: '100vw' }} className='videoTag' autoPlay loop muted>
                    <source src={VDO} type='video/mp4' />
                </video>
                <div className='contact_h1'>

                    {/* <img className='cnt_img' src={Image} /> */}
                </div>
                <div className='contact_div'>
                    <form action="/contact-submitin" className='contact_form' method="post">
                        <h1 className='h1_cnt'>Contact Us</h1>
                        <input name="name" type="text" className="contact_input" placeholder="Name" />
                        <input name="email" type="text" className="contact_input" placeholder="Email" />
                        <textarea name="text" className="contact_text" placeholder="Message"></textarea>
                        <input class="submit-contact" type="submit" value="Send" />
                    </form>
                </div>
            </div >
        )
    }
}

export default Contact