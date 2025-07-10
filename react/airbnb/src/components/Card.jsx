import React from 'react';
//Importar css do Card
import './css/Card.css';

//Importar dados de "back-end"
import { acomodacoes } from '../../backend/dados';

export default function Card() {

    function getRandonInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className='container-fluid'>
            <div className="container-airbnb row">
                {
                    acomodacoes.map((acomodacao, index) => (
                        <div key={acomodacao.id} className="col-xxl-2">
                            <img src={acomodacao.imagens[0]} className='img-fluid' />
                            <p className='d-flex justify-content-between mt-3 mb-0'>
                                <span style={{ border: '1px solid red', display: 'block', maxWidth: '160px' }} className='fw-bold text-truncate'>{acomodacao.cidade}, {acomodacao.pais}</span>
                                <span><i className="mdi mdi-star"></i>{acomodacao.nota}</span>
                            </p>
                            <p className='text-muted my-0'>{getRandonInt(10,800)} km de Distância</p>
                            <p className='text-muted'>{getRandonInt(1,31)} de jan - {getRandonInt(1,28)} de fev</p>
                            <p className='fw-bold'>R$ {acomodacao.preco.toLocaleString('pt-BR')} noite</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
