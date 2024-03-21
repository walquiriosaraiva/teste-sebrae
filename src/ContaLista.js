import React from 'react';

export default function ContaList({ contas }) {

  if(!contas){
    return <div>sem contas adicionadas</div>
  }

  return (
    <div>      
      <h2>Lista de Contas</h2>
      <ul className="conta-list">
        {contas.map(conta => (
          <li className="conta-item" key={conta.id}>{conta.nome}: {conta.descricao}</li>
        ))}
      </ul>
    </div>
  );
}
