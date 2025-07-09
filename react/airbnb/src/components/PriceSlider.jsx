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
        var totalBarra = props.max - props.min;
        var percentLeft = parseInt((min-props.min)/(totalBarra)*100);
        setLeft(`${percentLeft}%`);
    }

    function changeRangeMax(e) {
        setMax(parseInt(e.target.value));
        var totalBarra = props.max - props.min;
        var percentRight = parseInt(((props.max-max)/(totalBarra)*100));
        setRight(`${percentRight}%`);
    }

    useEffect(()=>{
        document.getElementById('inputMin').value = min;
    }, [min]);

    useEffect(()=>{
        document.getElementById('inputMax').value = max==props.max ? `${max}+` : max;
    }, [max]);

    return (
        <div>
            <div className="slider">
                <div style={{left: left, right: right}} className="progress"></div>
            </div>
            <div className="range-input">
                <input onChange={changeRangeMin} type="range" id='range-min' value={min} min={props.min} max={props.max} step={props.step} />
                <input onChange={changeRangeMax} type="range" id='range-max' value={max} min={props.min} max={props.max} step={props.step} />
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label htmlFor="inputMin" className="text-muted">preço mínimo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMin' type="text" className="form-control" placeholder="Min" />
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="inputMax" className="text-muted">preço máximo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMax' type="text" className="form-control" placeholder="Max" />
                    </div>
                </div>
            </div>
        </div>
    )
}
