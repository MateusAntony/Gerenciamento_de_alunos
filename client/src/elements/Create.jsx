import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';



function Create() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        gender: '',
        age: ''
    });

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/add_user', values)
        .then((res) => {
            navigate('/');
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div className = 'container vh-100 vw-100 bg-light d-flex justify-content-center align-items-center'>
        <div className='row'>
            <h3> Adicionar estudante</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'> Nome: </label>
                    <input className='form-control' type="text" name='name' onChange={(e) => setValues({...values, name: e.target.value})} />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'> Email: </label>
                    <input className='form-control' type="text" name='email' onChange={(e) => setValues({...values, email: e.target.value})} />
                </div>

                <div className='form-group'>
                    <label htmlFor='gender'> Gênero: </label>
                    <input className='form-control' type="text" name='gender' onChange={(e) => setValues({...values, gender: e.target.value})} />
                </div>

                <div className='form-group'>
                    <label htmlFor='age'> Idade: </label>
                    <input className='form-control' type="number" name='age' onChange={(e) => setValues({...values, age: e.target.value})} />
                </div>


                <div className='form-group mt-3'>
                    <button type='submit' className='btn btn-success'>Cadastrar</button>
                    <Link to="/" className='btn btn-secondary ms-2'>Cancelar</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create