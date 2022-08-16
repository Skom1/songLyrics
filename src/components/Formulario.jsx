import React from 'react';
import { useState } from "react";
import useLyrics from "../hooks/useLyrics";
import Alerta from "./Alerta.jsx";

const Formulario = () => {

    const { setAlerta, searchLyrics } = useLyrics()

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Coloca Nombre De Alerta Y Cancion')
            return
        }

        searchLyrics(busqueda)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <legend>Busca Por Artistas y Cancion</legend>

            <div className={'form-grid'}>
                <div>
                    <label>Artista</label>
                    <input
                        type={'text'}
                        name={'artista'}
                        placeholder={'Nombre Artista'}
                        value={busqueda.artista}
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        }) }
                    />
                </div>

                <div>
                    <label>Cancion</label>
                    <input
                        type={'text'}
                        name={'cancion'}
                        placeholder={'Nombre Cancion'}
                        value={busqueda.cancion}
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        }) }
                    />
                </div>

                <input
                    type={'submit'}
                    value={'Buscar'}
                />
            </div>
        </form>
    );
};

export default Formulario;