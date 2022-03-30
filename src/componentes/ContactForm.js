/* import { useState } from "react";

const ContactForm = ({ toggLeVisibility, setContact}) => {
    cont [name, setName] = useState('')
    cont [phone, setPhone] = useState('')
    cont [address, setAddress] = useState('')
    cont [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggLeVisibility.current.toggLeVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div>
            <div>Contacto</div>
            <form onSubmit={handleContactForm}>
                <label>Nombre:
                    <input 
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>

                <label>Telefono:
                    <input
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>

                <label>Direccion:
                    <input
                        type='text'
                        value={address}
                        onChange={({ target }) => setAddress(target.value)}
                    />
                </label>

                <label>Comentario:
                    <input
                        type='text'
                        value={comment}
                        onChange={({ target }) => setComment(target.value)}
                    />
                </label>
                <button type="submit">Confirmar</button>
            </form>
        </div>
    )
} */

//export default ContactForm



