import React from 'react';
import PriceSlider from './PriceSlider';

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
