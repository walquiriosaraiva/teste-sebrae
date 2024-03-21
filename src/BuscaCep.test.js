import '@testing-library/jest-dom';
import axios from 'axios';

jest.mock('axios');

describe('BuscaCep Component', () => {
  // Configuração do mock do axios antes de cada teste
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { 
      cep: '72115560', 
      logradouro: 'Endereço de casa'
      // outros dados...
    }});
  });

  // Seus testes aqui...
});
