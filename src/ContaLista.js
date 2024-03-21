import React from 'react';

export default function ContaList({ contas, editarConta, excluirConta }) {

  if(!contas || contas.length === 0){
    return <div>sem contas adicionadas</div>
  }

  return (
    <div>      
      <h2>Lista de Contas</h2>
      <ul className="conta-list">
        {contas.map(conta => (
          <li className="conta-item" key={conta.id}>
            <div>
              <p><strong>{conta.nome}:</strong> {conta.descricao}</p>
            </div>
            <div>
              <button onClick={() => editarConta(conta)}>Editar</button>
              <button onClick={() => excluirConta(conta.id)} className='button-excluir'>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
