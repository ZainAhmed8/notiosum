import React, {useState} from 'react';
import './App.css';
import { LoginForm } from './Pages/LoginForm';
import { RegisterForm } from './Pages/RegisterForm';
import { HomePage } from './Pages/HomePage';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
