import React, {useEffect, useState} from "react";
import BuscaCEP from "./BuscaCep";
import ContaList from "./ContaLista";
import AdicionarConta from './AdicionarConta';
import ContaModal from './ContaModal';
import axios from 'axios';

export default function Home() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => setIsModalVisible(!isModalVisible);
    const [contas, setContas] = useState([]);

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

    return (
        <div>
            <BuscaCEP />

            <button onClick={toggleModal}>Adicionar Conta</button>
            <ContaModal isVisible={isModalVisible} onClose={toggleModal}>
                <AdicionarConta onContaAdded={fetchContas} />
            </ContaModal>
            <ContaList contas={contas} />
        </div>
    );
}