import React from 'react';
import './css/PriceSlider.css';
import { useState, useEffect } from 'react';

export default function PriceSlider(props) {

    const[min, setMin] = useState(props.min);
    const[max, setMax] = useState(props.max);
    const[left, setLeft] = useState('0%');
    const[right, setRight] = useState('0%');

    function changeRangeMin(e) {
        setMin(parseInt(e.target.value));
        //console.log(e.target.value);
    }

    return (
        <div>
            <div className="slider">
                <div style={{left: left, right: right}} className="progress"></div>
            </div>
            <div className="range-input">
                <input onClick={changeRangeMin} type="range" id='range-min' value={min} min={props.min} max={props.max} step={props.step} />
                <input type="range" id='range-max' value={max} min={props.min} max={props.max} step={props.step} />
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label htmlFor="inputMin" className="text-muted">preço mínimo</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMin' type="text" class="form-control" placeholder="Min" />
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="inputMax" className="text-muted">preço máximo</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMax' type="text" class="form-control" placeholder="Max" />
                    </div>
                </div>
            </div>
        </div>
    )
}
