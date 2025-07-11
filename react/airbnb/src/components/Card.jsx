import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

    function animar(e) {
        e.target.classList.toggle('animate');
    }

    return (
        <div className='container-fluid'>
            <div className="container-airbnb row">
                {
                    acomodacoes.map((acomodacao, index) => (
                        <div key={acomodacao.id} className="position-relative mt-4 col-xxl-2">
                            <div onClick={animar} className="heart-animation position-absolute top-0 end-0"></div>
                            <Swiper
                                className='img-content'
                                pagination={true}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                            >
                                {
                                    acomodacao.imagens.map((imagem, index) => (
                                        <SwiperSlide className='swiper-img' key={index} >
                                            <img className='img-fluid card-image' src={imagem} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <p className='d-flex justify-content-between mt-3 mb-0'>
                                <span style={{ display: 'block', maxWidth: '160px' }} className='fw-bold text-truncate'>{acomodacao.cidade}, {acomodacao.pais}</span>
                                <span><i className="mdi mdi-star"></i>{acomodacao.nota}</span>
                            </p>
                            <p className='text-muted my-0'>{getRandonInt(10, 800)} km de Distância</p>
                            <p className='text-muted'>{getRandonInt(1, 31)} de jan - {getRandonInt(1, 28)} de fev</p>
                            <p className='fw-bold'>R$ {acomodacao.preco.toLocaleString('pt-BR')} noite</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
