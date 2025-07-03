function FormReserva() { //Aula 14 - 14:30

    const [form, setForm] = React.useState({
        cliente: '',
        dia: '',
        horario: '',
        wifi: false,
        churras: false,
        piscina: false,
        obs: ''
    });

    const handleChange = (evento)=>{
        //console.log(evento);
        const auxForm = {...form}; //Copia objeto form
        auxForm[evento.target.name] = evento.target.type === "checkbox" ? evento.target.checked : evento.target.value;
        setForm(auxForm);
    };

    const enviarForm = (e) => {
        e.preventDefault(); //Evita atualização da página

        // PODE FAZER O QUE QUISER
        console.log(form);

        //Mandar para o back-end
        //Validação de campos
        console.log(form.cliente);
    };

    // React.useEffect(()=>{
    //     console.log(form);
    // }, [form]);

    return (
        <div className="container">
            <h2 className="text-center mt-5">Reserva</h2>
            <form onSubmit={enviarForm} className="P-5">

                <div className="mb-3">
                    <label htmlFor="cliente" className="fw-bold form-label">Nome Completo</label>
                    <input onChange={handleChange} type="text" className="form-control" id="cliente" name="cliente" placeholder="Digite aqui" />
                </div>

                <div className="mb-3">
                    <label htmlFor="dia" className="fw-bold form-label">Dia da Reserva</label>
                    <select onChange={handleChange} className="form-select" id="dia" name="dia" aria-label="Default select example">
                        <option value="">Selecione o dia</option>
                        <option value="segunda">Segunda</option>
                        <option value="terca">Terça</option>
                        <option value="quarta">Quarta</option>
                        <option value="quinta">Quinta</option>
                        <option value="sexta">Sexta</option>
                        <option value="sabado">Sábado</option>
                        <option value="domingo">Domingo</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="horario" className="fw-bold form-label">Horário</label>
                    <div className="form-check">
                        <input onChange={handleChange} className="form-check-input" type="radio" name="horario" id="manha" value="manha" />
                        <label className="form-check-label" htmlFor="manha">Manhã</label>
                    </div>
                    <div className="form-check">
                        <input onChange={handleChange} className="form-check-input" type="radio" name="horario" id="tarde" value="tarde" />
                        <label className="form-check-label" htmlFor="tarde">Tarde</label>
                    </div>
                    <div className="form-check">
                        <input onChange={handleChange} className="form-check-input" type="radio" name="horario" id="noite" value="noite" />
                        <label className="form-check-label" htmlFor="noite">Noite</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="adicionais" className="fw-bold form-label">Adicionais</label>
                    <div className="form-check">
                        <input onChange={handleChange} className="form-check-input" type="checkbox" name="wifi" id="wifi" />
                        <label className="form-check-label" htmlFor="wifi">Wifi</label>
                    </div>
                    <div className="form-check">
                        <input onChange={handleChange} className="form-check-input" type="checkbox" name="churras" id="churras" />
                        <label className="form-check-label" htmlFor="churras">Churrasqueira</label>
                    </div>
                    <div className="form-check">
                        <input onChange={handleChange} className="form-check-input" type="checkbox" name="piscina" id="piscina" />
                        <label className="form-check-label" htmlFor="Piscina">Piscina</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="obs" className="fw-bold form-label">Observações</label>
                    <textarea onChange={handleChange} className="form-control" id="obs" name="obs" rows="3" placeholder="Deixe sua mensagem" ></textarea>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">FAZER RESERVA</button>
                </div>

            </form>
        </div>
    );
}

function App() {
    return (
        <FormReserva />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);