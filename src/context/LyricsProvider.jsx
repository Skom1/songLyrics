import React from 'react';
import { useState, createContext } from "react";
import axios from "axios";

const LyricsContext = createContext()

const LyricsProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [loading, setLoading] = useState(false);

    const searchLyrics = async busqueda => {
        setLoading(true);
        try{
            const {artista, cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const { data } = await axios(url)
            setLyrics(data.lyrics)
            setAlerta('')
        } catch (e) {
            setAlerta('Cancion No Encontrada')
        }
        setLoading(false);
    }

    return (
        <LyricsContext.Provider
            value={{
                alerta,
                setAlerta,
                searchLyrics,
                lyrics,
                loading
            }}
        >
            {children}
        </LyricsContext.Provider>
    );
};

export {
    LyricsProvider
};

export default LyricsContext;