import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2';
function Notas() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [notas, setNotas] = useState({
        nota1: '',
        nota2: '',
        nota3: '',
        faltas: ''
    });

    const [nomeAluno, setNomeAluno] = useState("");

    useEffect(() =>{
        axios.get(`http://localhost:5000/read/${id}`)
        .then(res => {
            setNomeAluno(res.data[0].nome);
            setNotas({
                nota1: res.data.nota1,
                nota2: res.data.nota2,
                nota3: res.data.nota3,
                faltas: res.data.faltas

            });
        })
        .catch(err => console.log(err));

    },[id]);

    const handleUpdate = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:5000/update_notas/${id}`,notas)
        .then((res) =>{
            Swal.fire({
            title: 'Sucesso!',
            text: 'As notas foram atualizadas no sistema.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
            }).then(result => {
                if (result.isConfirmed) {
                navigate(`/read/${id}`);
            }
        })
        }).catch(err => console.log(err));
    }


  return (
    <div className='d-flex vh-100 bg-light justify-content-center align-items-center'>
        <div className= 'w-50 bg-white rounded p-4 shadow'>
            <form onSubmit={handleUpdate}>
                <h2 className='mb-3'>Notas de {nomeAluno}</h2>

                <div className='row'>

                    <div className='col-md-4 mb-3'>
                        <label>Nota 1</label>
                        <input type="number" className='form-control' value={notas.nota1} onChange={(e) => setNotas({...notas, nota1: e.target.value})} />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label>Nota 2</label>
                        <input type="number" className='form-control' value={notas.nota2} onChange={(e) => setNotas({...notas, nota2: e.target.value})} />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label>Nota 3</label>
                        <input type="number" className='form-control' value={notas.nota3} onChange={(e) => setNotas({...notas, nota3: e.target.value})} />
                    </div>
                </div>

                <div className='mb-3'>
                    <label>Faltas</label>
                    <input type="number" className='form-control' value={notas.faltas} onChange={(e) => setNotas({...notas,faltas: e.target.value})} />
                </div>

                <button type="submit" className='btn btn-success'>Salvar</button>
                <Link to={'/'} className='btn btn-secondary ms-2'>Voltar</Link>

            </form>
        </div>
    </div>
)
}

export default Notas