import React from 'react';
import './css/PriceSlider.css';
import { useState, useEffect } from 'react';

export default function PriceSlider(props) {

    const[min, setMin] = useState(props.min);
    const[max, setMax] = useState(props.max);
    const[left, setLeft] = useState('0%');
    const[right, setRight] = useState('0%');

    function changeRangeMin(e) {

        if(max - parseInt(e.target.value) <= props.step) {
            //console.log('Limite mínimo alcançado!');
        } else {
            setMin(parseInt(e.target.value));
            //console.log(e.target.value);
            var totalBarra = props.max - props.min;
            var percentLeft = parseInt((min-props.min)/(totalBarra)*100);
            setLeft(`${percentLeft}%`);
        }
    }

    function changeRangeMax(e) {
        if(parseInt(e.target.value) - min <= props.step) {
            //console.log('Limite máximo alcançado!');
        } else {
            setMax(parseInt(e.target.value));
            var totalBarra = props.max - props.min;
            var percentRight = parseInt(((props.max-max)/(totalBarra)*100));
            setRight(`${percentRight}%`);
        }
    }

    useEffect(()=>{
        document.getElementById('inputMin').value = min;
    }, [min]);

    useEffect(()=>{
        document.getElementById('inputMax').value = max==props.max ? `${max}+` : max;
    }, [max]);

    function validacao(e) {
        //Pegar o valor do campo input
        let valor = parseInt(e.target.value);
        //Se o campo for inputMin
        if (e.target.id == 'inputMin') {
            //Verificar se o campo é vazio ou nulo
            if (e.target.value=='' || e.target.value==null) {
                //Setar para o mínimo permitido
                setMin(props.min);
                setLeft('0%');
                //Mudar o valor do campo inputMin para o valor mínimo
                e.target.value = props.min;
            } else {
                //Verificar se valor é < mínimo
                if (valor < props.min) {
                    //Setar para o mínimo permitido
                    setMin(props.min);
                    setLeft('0%');
                    //Mudar o valor do campo inputMin para o valor mínimo
                    e.target.value = props.min;                
                } else {
                    //Valor > mínimo permitido
                    //Verificar se o mínimo é > máximo
                    if (valor >= max) {
                        let corrige = max - props.step;
                        setMin(corrige);

                        var totalBarra = props.max - props.min;
                        var percentLeft = parseInt(((valor-props.min)/(totalBarra)*100));
                        setLeft(`${percentLeft}%`);
                        e.target.value = corrige;
                    } else {
                        //Tudo certo
                        setMin(valor);
                        var totalBarra = props.max - props.min;
                        var percentLeft = parseInt(((valor-props.min)/(totalBarra)*100));
                        setLeft(`${percentLeft}%`);
                        e.target.value = corrige;
                    }
                }
            }
        } else if (e.target.id == 'inputMax') {
            //Verificar se o valor digitado é vazio 
            if (e.target.value == '' || e.target.value == null) {
                //Setar para o máximo permitido
                setMax(props.max);
                setRight('0%');
                e.target.value = props.max + '+';
            } else {

                //Se o valor digitado for > máximo permitido
                if (valor > props.max) {
                    //Setar para o máximo permitido
                    setMax(props.max);
                    setRight('0%');
                    //Mudar o campo par o máximo +
                    e.target.value = props.max + '+';
                } else {
                    //Valor digitado é menor que o máximo permitido
                    //Verificar se o máximo é menor que o mínimo
                    if (valor <= min) {
                        let corrige = min + props.step;
                        setMax(corrige);

                        var totalBarra = props.max - props.min;
                        var percentRight = parseInt(((props.max - valor)/(totalBarra)*100));
                        setRight(`${percentRight}%`);
                        e.target.value = corrige; 
                    } else {
                        //Tudo certo
                        //Verificar se valor digitado é > min
                        setMax(valor);
                        var totalBarra = props.max - props.min;
                        var percentRight = parseInt(((props.max - valor)/(totalBarra)*100));
                        setRight(`${percentRight}%`);
                        e.target.value = corrige;
                    }

                }
            }
        }
    }

    function soNumero(e) {
        var teclasPermitidas = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
        if (!/[0-9]/.test(e.key) && !teclasPermitidas.includes(e.key)) {
            e.preventDefault();
        }
    }

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
                        <input id='inputMin' onBlur={validacao} onKeyDown={(e)=>{(e.key == 'Enter' ? validacao(e) : soNumero(e))}} type="text" className="form-control" placeholder="Min" />
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="inputMax" className="text-muted">preço máximo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMax' onBlur={validacao} onKeyDown={(e)=>{(e.key == 'Enter' ? validacao(e) : soNumero(e))}} type="text" className="form-control" placeholder="Max" />
                    </div>
                </div>
            </div>
        </div>
    )
}
