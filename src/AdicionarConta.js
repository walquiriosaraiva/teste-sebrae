import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './conta.css';

export default function AdicionarConta({ conta, contaAdicionada, fechar }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (conta) {
      setNome(conta.nome);
      setDescricao(conta.descricao);
    }
  }, [conta]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:3333/Conta' + (conta ? `/${conta.id}` : '');
    const method = conta ? 'put' : 'post';

    try {
      await axios({ method, url, data: { nome, descricao } });
      alert('Conta ' + (conta ? 'atualizada' : 'adicionada') + ' com sucesso!');
      contaAdicionada();
      fechar();
    } catch (error) {
      console.error('Erro ao ' + (conta ? 'atualizar' : 'adicionar') + ' conta:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Conta</h2>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Descrição:
          <textarea
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}
