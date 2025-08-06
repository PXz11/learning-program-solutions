import React, { useState } from 'react';
import './App.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        newErrors.name =
          value.length < 5 ? 'Full Name must be 5 characters long!' : '';
        break;

      case 'email':
        const validEmailRegex = RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        );
        newErrors.email = validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        break;

      case 'password':
        newErrors.password =
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });

    validateField(name, value);
};

const validateForm = () => {
    return (
      errors.name === '' &&
      errors.email === '' &&
      errors.password === '' &&
      formData.name !== '' &&
      formData.email !== '' &&
      formData.password !== ''
    );
  };


const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Valid Form');
      console.log(formData);
    } else {
      if (errors.name) alert(errors.name);
      if (errors.email) alert(errors.email);
      if (errors.password) alert(errors.password);
    }
};

return (
    <div>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </div>
            <br />

            <div>
            <label>Email: </label>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
          {errors.email && (
            <span style={{ color: 'red' }}>{errors.email}</span>
          )}
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: 'red' }}>{errors.password}</span>
          )}
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
)
};

export default Register;