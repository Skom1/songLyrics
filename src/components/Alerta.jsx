import React from 'react';
import useLyrics from "../hooks/useLyrics.jsx";

const Alerta = ({children}) => {

    const { loading } = useLyrics()

    return (
        <div className={'alerta'}>
            {loading? 'Cargando...' : children}
        </div>
    );
};

export default Alerta;