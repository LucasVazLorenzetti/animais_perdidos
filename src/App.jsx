import { useState } from 'react';
import './App.css';
import ListaDinamica from './component/lista';
import Cadastro from './component/cadastro';
 
 
function AnimalForm() {
  const [animalInfo, setAnimalInfo] = useState([
    {id: 1, descricao: "Cor laranja", lugar: "Sao paulo", tipo: "gato", isConcluido:false},
    {id: 2, descricao: "Cor Marrom", lugar: "Campinas", tipo: "ovelha", isConcluido:false},
  ]);
 
 
  const adicionar = (descricao, lugar, tipo) => {
    const novo = {
      id: Math.floor(Math.random() * 10000),
      descricao,
      lugar,
      tipo,
      isConcluido: false,
    }
    setAnimalInfo((listaAnterior) => [...listaAnterior, novo]);
     
    };
 
    const concluirAlteracao = (id) => {
      setAnimalInfo((listaAnterior) =>
        listaAnterior.map((elemento) =>
          elemento.id === id
            ? { ...elemento, isConcluido: !elemento.isConcluidoConcluido } : elemento
        )
      );
    }
 
    const removeElemento = (id) => {
      setAnimalInfo((listaAnterior) => listaAnterior.filter((elemento) => elemento.id !==id))
    }
   
   
    return(
        <div className='app'>
        <h2>Formulário de Animal Perdido</h2>
        <Cadastro adicionar={adicionar}/>
        {animalInfo.map(elemento =>(
          <ListaDinamica
          key={elemento.id}
          concluirAlteracao={concluirAlteracao} elemento={elemento} removeElemento={removeElemento}
          />
        ))}
 
      </div>
    );
  };
 
export default AnimalForm;