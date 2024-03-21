import React, { useState } from 'react';
import axios from 'axios';
import './cep.css';

export default function BuscaCEP() {
  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState(null);

  const buscarCep = (e) => {
    e.preventDefault();

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        setDadosCep(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar o CEP", error);
        setDadosCep(null);
      });
  };

  return (
    <div className='buscar-cep'>
      <form onSubmit={buscarCep}>
        <label htmlFor="cep">CEP:</label>
        <input 
          id="cep"
          type="text" 
          value={cep} 
          onChange={(e) => setCep(e.target.value)} 
          placeholder="Insira o CEP" 
        />        
        <button className='button-cep' type="submit">Buscar</button>
      </form>

      {dadosCep && (
        <div>
          <p>CEP: {dadosCep.cep}</p>
          <p>Logradouro: {dadosCep.logradouro}</p>
          <p>Complemento: {dadosCep.complemento}</p>
          <p>Bairro: {dadosCep.bairro}</p>
          <p>Localidade: {dadosCep.localidade}</p>
          <p>UF: {dadosCep.uf}</p>
        </div>
      )}
    </div>
  );
}
