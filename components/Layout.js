import React from 'react'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'

export default function Layout(props) {
    return (
        <div>
            <Navbarr />
            {props.children}
            <Footer />
        </div>
    )
}
