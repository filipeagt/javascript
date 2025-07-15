import React from 'react';
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//Importar CSS do componente
import './css/Categorias.css'

//Importar os dados de categorias
import { categorias } from '../../backend/dados';

export default function Categorias({ changeCat }) {

    const [idClicado, setIdClicado] = useState(1);

    const handleClick = (e, id) => {
        //console.log(`A categoria clicada atual é: ${id}`);
        setIdClicado(id);
        changeCat(id);
    }

    return (
        <div style={{ marginTop: '80px', position: 'fixed', top: '0px', zIndex: 998 }} className='bg-white pt-2 container-fluid d-flex align-items-center justify-content-between'>
            <div className="container-airbnb d-flex align-items-center row">
                <div className="col-sm-11">
                    <Swiper
                        // slidesPerView={14}
                        // slidesPerGroup={13}
                        // spaceBetween={7}
                        breakpoints={{
                            100: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 1
                            },
                            //Janela > 576 (sm)
                            576: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 4
                            },
                            //Janela > 768 (md)
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 7
                            },
                            //Janela > 992 (lg)
                            992: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            //Janela > 1200 (xl)
                            1200: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            //Janela > 1400
                            1400: {
                                slidesPerView: 10,
                                slidesPerGroup: 10,
                                spaceBetween: 7
                            },
                            //Janela >= 1600 (xxl)
                            1600: {
                                slidesPerView: 14,
                                slidesPerGroup: 13,
                                spaceBetween: 7
                            }
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            categorias.map((dados, index) => (
                                <SwiperSlide
                                    key={dados.id}
                                    virtualIndex={index}
                                    className={dados.id === idClicado ? 'active' : ''}
                                    onClick={(e) => handleClick(e, dados.id)}
                                >
                                    <img className='mb-2' src={dados.imagem} />
                                    <span>{dados.titulo}</span>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="col-sm-1">
                    <button className='d-none w-100 btn btn-filtro d-md-flex d-lg-none justify-content-center float-end' data-bs-toggle='modal' data-bs-target='#filterModal' >
                        <i className="mdi mdi-filter-variant me-2"></i>
                    </button>
                    <button className='d-none btn btn-filtro d-lg-flex float-end' data-bs-toggle='modal' data-bs-target='#filterModal' >
                        <i className="mdi mdi-filter-variant me-2"></i>
                        Filtros
                    </button>
                </div>
            </div>
        </div>
    )
}
