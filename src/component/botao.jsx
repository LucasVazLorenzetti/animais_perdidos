import React from 'react';
 
function MeuBotao() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };
 
  return (
    <div>
      <button onClick={handleClick}>Clique em mim!</button>
    </div>
  );
}
 
export default MeuBotao;