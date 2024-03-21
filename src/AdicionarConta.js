import React, { useState } from 'react';
import axios from 'axios';
import './conta.css';

export default function AdicionarConta({ onContaAdded }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/Conta', {
        nome,
        descricao
      });

      console.log('Conta adicionada:', response.data);
      setNome('');
      setDescricao('');
      alert('Conta adicionada com sucesso!');
      onContaAdded();
    } catch (error) {
      console.error('Erro ao adicionar conta:', error);
      alert('Erro ao adicionar conta. Por favor, tente novamente.');
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
