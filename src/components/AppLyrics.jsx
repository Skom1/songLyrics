import React from 'react';
import Formulario from "./Formulario";
import useLyrics from "../hooks/useLyrics";
import Alerta from "./Alerta";
import Lyrics from "./Lyrics";

const AppLyrics = () => {

    const { alerta, lyrics, loading } = useLyrics()

    return (
        <>
            <header>
                Letras De Canciones
            </header>

            <Formulario />

            <main>
                {alerta ? <Alerta>{alerta}</Alerta> :
                    lyrics ? <Lyrics /> :
                        loading ? 'Cargando...' :
                <p className={'text-center'}>
                    Busca Letras De Artistas
                </p>}
            </main>
        </>
    );
};

export default AppLyrics;