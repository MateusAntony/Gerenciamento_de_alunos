import React, {useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'


function Read() {

  const id = useParams();
  const [estudante,setEstudante]=useState(null);

  useEffect(() =>{
    axios.get(`http://localhost:5000/read/${id.id}`)
      .then(res => setEstudante(res.data[0]))
      .catch(err => console.log(err));
  },[id])

  if(!estudante)return <div className='container py-5'>Loading...</div>

  const media =  ((Number(estudante.nota1)+ Number(estudante.nota2)+ Number(estudante.nota3))/3)
  return (
    <div className='container-fluid vh-100 b-light py-5 '>
      <div className='container'>
        <div className='card shadow border p-3'>
          <div className='card-header bg-primary  text-white p-3'>
            <h3> Detalhes do Estudante: {estudante.name} </h3>
          </div>

          <div>
            <div className='card-body'>
              <div className="row ">
                <div className = 'col-md-6 border-end'>
                  <h5>Informações pessoais</h5>
                  <p><strong>Nome:</strong> {estudante.nome} </p>
                  <p><strong>Email:</strong> {estudante.email} </p>
                  <p><strong>Idade:</strong> {estudante.idade} </p>
                  <p><strong>Gênero:</strong> {estudante.genero} </p>
                </div>

                <div className='col-md-6 ps-4'>
                  <h5>Desempenho acadêmico</h5>
                  <div className='d-flex justify-content-between mb-2'>
                    <span>Nota 1:</span> 
                    <strong>{estudante.nota1}</strong>
                  </div>
                  <div className='d-flex justify-content-between mb-2'>
                    <span>Nota 2:</span> 
                    <strong>{estudante.nota2}</strong>
                  </div>
                  <div className='d-flex justify-content-between mb-2'>
                    <span>Nota 3:</span> 
                    <strong>{estudante.nota3}</strong>
                  </div>
                  <div className='d-flex justify-content-between border-top pt-2'>
                    <span>Média Final:</span> 
                    <strong className={media >= 7 ? 'text-success' : 'text-danger'}>
                      {media.toFixed(2)}
                    </strong>
                    </div>

                  <div className='mt-3 p-2 bg-warning bg-opacity-10 rounded text-center'>
                    <strong>Total de Faltas: {estudante.faltas}</strong>
                  </div>
                </div>

              </div>

              <div className='mt-4'>
                <Link to="/" className='btn btn-secondary'>Voltar</Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Read