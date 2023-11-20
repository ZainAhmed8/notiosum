import React, {useState} from "react";
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"

export const LoginForm = (props) => {

    const history=useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            await axios.post("http://localhost:3000/login", {
                email,pass
            })
            .then(res => {
                if (res.data === "exist") {
                    history("/")
                }
                else if (res.data === "notexist") {
                    alert("User does not exist")
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
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
            <Link to="/">Login Page</Link>
        </div>
    )
}