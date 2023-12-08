import React from 'react';
 
function ListaDinamica({elemento,concluirAlteracao,removeElemento}) {
 
  return (
    <>
    <div className='list'>
      <h3 style={{textDecoration: elemento.isConcluido? 'line-through' : ''}}>{elemento.descricao}</h3>
      <h3 style={{textDecoration: elemento.isConcluido? 'line-through' : ''}}>{elemento.lugar}</h3>
      <h3 style={{textDecoration: elemento.isConcluido? 'line-through' : ''}}>{elemento.tipo}</h3>
      <div>
      <button className='feito' onClick={() => concluirAlteracao(elemento.id)}>Concluido</button>
      <button className='remove' onClick={() => removeElemento(elemento.id)}>Remover</button>
      </div>
    </div>
    </>
  );
}
 
export default ListaDinamica;