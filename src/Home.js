import React, { useEffect, useState } from "react";
import BuscaCEP from "./BuscaCep";
import ContaList from "./ContaLista";
import AdicionarConta from './AdicionarConta';
import ContaModal from './ContaModal';
import axios from 'axios';

export default function Home() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [contas, setContas] = useState([]);
    const [contaEditavel, setContaEditavel] = useState(null);

    const toggleModal = () => {
        if (isModalVisible) {
            setContaEditavel(null);
        }
        setIsModalVisible(!isModalVisible);
    };

    const fetchContas = () => {
        axios.get('http://localhost:3333/Conta')
            .then(response => {
                setContas(response.data);
            })
            .catch(error => console.error('Erro ao buscar contas:', error));
    };

    useEffect(() => {
        fetchContas();
    }, []);

    const handleEdit = (conta) => {
        setContaEditavel(conta);
        setIsModalVisible(true);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3333/Conta/${id}`)
            .then(() => {
                alert('Conta deletada com sucesso!');
                fetchContas(); // Rebusca as contas após a deleção
            })
            .catch(error => console.error('Erro ao deletar conta:', error));
    };

    return (
        <div>
            <BuscaCEP />
            <button onClick={toggleModal}>Adicionar Conta</button>

            <ContaModal isVisible={isModalVisible} onClose={toggleModal}>
                {contaEditavel ? (
                    <AdicionarConta conta={contaEditavel} contaAdicionada={fetchContas} fechar={() => setIsModalVisible(false)} />
                ) : (
                    <AdicionarConta contaAdicionada={fetchContas} fechar={() => setIsModalVisible(false)} />
                )}
            </ContaModal>
            <ContaList contas={contas} editarConta={handleEdit} excluirConta={handleDelete} />
        </div>
    );
}