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

//Importar dados de "back-end" (simulação)
// import { acomodacoes } from '../../backend/dados';

export default function Card({ dados }) {

    function getRandonInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function animar(e) {
        e.target.classList.toggle('animate');
    }

    if(dados.length == 0) {
        return(
            <div className='d-flex justify-content-center align-itens-center mt-5 py-5'>
                <div className="container-airbnb mt-5 py-5">
                    <div className="col mt-5">
                        <div className="card text-center">
                            <div className="card-body">
                                Nenhuma acomodação encontrada para esta categoria.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div className='container-fluid mt-5 py-5'>
                <div className="container-airbnb row mt-5 py-5">
                    {
                        dados.map((acomodacao, index) => (
                            <div key={acomodacao.id} className="position-relative mt-4 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
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
}
