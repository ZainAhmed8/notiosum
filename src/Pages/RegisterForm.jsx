import React, {useState} from "react";
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"

export const RegisterForm = (props) => {
    const history=useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            await axios.post("http://localhost:3000/register", {
                email,pass
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists!")
                }
                else if (res.data === "notexist") {
                    history("/")
                }
            })
            .catch(e => {
                alert("Wrong details")
                console.log(e);
            })
        }
        catch(e) {
            console.log(e)
        }

        navigate('/')
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Full Name" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
            <Link to="/">Register Page</Link>
        </div>
    )
}