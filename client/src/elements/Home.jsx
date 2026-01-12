import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/estudantes')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

  return (
    <div className='bg-light vh-100 py-5 '>
    
        <div className='container'>

            <div className= 'bg-white p-4 rounded shadow-sm'>

                <div className = 'd-flex justify-content-between align-items-center mb-4 border-bottom pb-2'>
                    <h2 className='text-secondary fw-body'> Lista de Estudantes </h2>
                    <Link to="/create" className="btn btn-primary"> + Novo Estudante</Link>
                </div>

                <div className='table-responsive'></div>
                    <table className='table table-hover align-middle'>
                            <thead className='table-dark'>
                            <tr>
                                <th className='ps-3'>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Idade</th>
                                <th>Gênero</th>
                                <th className='text-center'>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.length > 0 ? (data.map((estudante) => (
                                <tr key={estudante.id}>
                                <td>#{estudante.id}</td>
                                <td>{estudante.nome}</td>
                                <td>{estudante.email}</td>
                                <td>{estudante.idade}</td>
                                <td>{estudante.genero}</td>
                                <td className='text-center'>
                                    <Link to={`/read/${estudante.id}`} className='btn btn-sm btn-outline-secondary me-2'>Ver</Link>
                                    <Link to={`/edit/${estudante.id}`} className="btn btn-sm btn-outline-primary me-2">Editar</Link>
                                    <Link to={`/notas/${estudante.id}`} className="btn btn-sm btn-outline-warning me-2">Lançar Notas</Link>
                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                </td>
                                </tr>
                            ))) : (
                                <tr>
                                    <td colSpan="6" className='text-center'>Nenhum estudante cadastrado.</td>
                                </tr>
                            )}
                            </tbody>
                    </table>
            </div>

        </div>

    </div>
  )
}

export default Home