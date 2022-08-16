import React from 'react';
import { useContext } from "react";
import LyricsContext from "../context/LyricsProvider";

const UseLyrics = () => {
    return useContext(LyricsContext);
};

export default UseLyrics;