import React from 'react';
import PriceSlider from './PriceSlider';
import ButtonGroup from './ButtonGroup';

export default function ModalFilter() {
    return (
        <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <button type="button" className="btn-close opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h1 className="modal-title fs-5 w-100 fw-bold" id="exampleModalLabel">Filtros</h1>
                    </div>
                    <div className="modal-body">
                        <section className='px-2 mb-4 border-bottom'>
                            <span className="fs-4 fw-bold">Faixa de preço</span>
                            <p className='text-muted'>Opreço médio por noite é de R$ 730</p>
                            <PriceSlider min={50} max={2000} step={1} />
                        </section>
                        <section className='px-2 mb-4 border-bottom'>
                            <span className="fs-4 fw-bold">Tipo de lugar</span>
                            <div className="row mt-4">
                                <div className="col-md-6 mb-4">
                                    <div className="form-check ms-3">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="inteiro" />
                                        <label className="ps-2 form-check-label" htmlFor="inteiro">
                                            Espaço Inteiro <br />
                                            <small className="text-muted">Um lugar só para você</small>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-check ms-3 px-4">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="quartInteiro" />
                                        <label className="ps-2 form-check-label" htmlFor="quartInteiro">
                                            Quarto Inteiro <br />
                                            <small className="text-muted">Seu próprio quarto em uma casa ou hotel, além de alguns espaços comuns compartilhados</small>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="form-check ms-3">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="quartCompartilhado" />
                                        <label className="ps-2 form-check-label" htmlFor="quartCompartilhado">
                                            Quarto Compartilhado <br />
                                            <small className="text-muted">Um espaço para dormir e áreas comuns que podem ser compartilhadas com outras pessoas</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="px-2 mb-4 border-bottom">
                            <span className="fs-4 fw-bold">Quartos e Camas</span>
                            <p className='mt-3 px-1'>Quartos</p>
                            <ButtonGroup buttons={["Qualquer um", '1', '2', '3', '4', '5', '6', '7', '8+']} />
                            <p className='mt-3 px-1'>Camas</p>
                            <ButtonGroup buttons={["Qualquer um", '1', '2', '3', '4', '5', '6', '7', '8+']} />
                            <p className='mt-3 px-1'>Banheiros</p>
                            <ButtonGroup buttons={["Qualquer um", '1', '2', '3', '4', '5', '6', '7', '8+']} />
                        </section>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
