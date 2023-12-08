import React, { useState } from 'react';
 
function Cadastro({ adicionar }) {
    const [descricao, setDescricao] = useState('');
    const [lugar, setLoc] = useState('')
    const [tipo, setTipo] = useState('')
 
const Lucas = () => {
    if  (descricao === '', lugar === '', tipo === ''){
    return;}
 
    adicionar(
      descricao,
      lugar,
      tipo
  )
  setDescricao('')
  setLoc('')
  setTipo('')
 
  }
 
  return (
    <div>
      <h2>Cadastro</h2>
     
        <label>Fale sobre o animal: </label>
        <input type="text" value={descricao} onChange={(e)=>setDescricao(e.target.value)}/>
 
        <label>Localidade do animal:</label>
        <input type="text" value={lugar} onChange={(e)=>setLoc(e.target.value)}/>
 
        <label>Tipo do animal:</label>
        <input type="text" value={tipo} onChange={(e)=>setTipo(e.target.value)}/>
       
        <button type="submit" onClick={Lucas}>Cadastrar</button>
    </div>
);
 
}
 
export default Cadastro;