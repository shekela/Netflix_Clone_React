import React, { useEffect, useState } from "react"

function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 140) {
               handleShow(true)
            }
            else {
                handleShow(false)
            }
        })

    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="Nav_logo" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo" className="Nav_avatar" />
        </div>
        )
}

export default Navbar