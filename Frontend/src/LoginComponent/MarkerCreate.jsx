import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './RegistrationApp.css';

export const MarkerCreate = () => {

    const [markerData, setMarkerData] = useState({
        nome: '',
        indirizzo: '',
        descrizione: '',
        desbrev: '',
        contatti: '',
        orari: '',
        costi: '',
        latitudine: '',
        longitudine: '',
        sfida: '',
        immagine: '',
    })
    
    const [markerFile, setMarkerFile] = useState({
        immagine: '',
    });

    const navigate = useNavigate(); // Otteniamo la funzione di navigazione

    const handleMarkerClick = () => {
        // Reindirizzamento alla pagina delle api quando viene cliccato il pulsante
        navigate('/api/Marker');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMarkerData({ ...markerData, [name]: value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setMarkerFile({ ...markerFile, immagine: file });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            Object.keys(markerData).forEach(key => {
                formData.append(key, markerData[key]);
            });

            const response = await axios.post('http://localhost:8000/api/Marker/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Dati inviati con successo", response.data);
            navigate('/api/Marker');
        } catch (error) {
            console.error("Errore durante l'aggiunta delle API", error.response.data);
        }
    };

    const routeChange = () => {
        navigate('/api/Marker'); // Naviga alla pagina dei marker
    };


    return (
        <div>
            <h1>Aggiungi un nuovo marker</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome
                    <input
                        type="text"
                        name="nome"
                        value={markerData.nome}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="indirizzo">
                    Indirizzo
                    <input
                        type="text"
                        name="indirizzo"
                        value={markerData.indirizzo}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="descrizione">
                    Descrizione
                    <input
                        type="text"
                        name="descrizione"
                        value={markerData.descrizione}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="desbrev">
                    Descrizione breve
                    <input
                        type="text"
                        name="desbrev"
                        value={markerData.desbrev}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="contatti">
                    Contatti
                    <input
                        type="text"
                        name="contatti"
                        value={markerData.contatti}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="orari">
                    Orari
                    <input
                        type="text"
                        name="orari"
                        value={markerData.orari}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="costi">
                    Costi
                    <input
                        type="text"
                        name="costi"
                        value={markerData.costi}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="latitudine">
                    Latitudine
                    <input
                        type="text"
                        name="latitudine"
                        value={markerData.latitudine}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="longitudine">
                    Longitudine
                    <input
                        type="text"
                        name="longitudine"
                        value={markerData.longitudine}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="sfida">
                    Sfida
                    <input
                        type="text"
                        name="sfida"
                        value={markerData.sfida}
                        onChange={handleChange}
                        required
                    />
                </label><label htmlFor="immagine">
                    Immagine
                    <input
                        type="file"
                        name="immagine"
                        onChange={handleFileChange}
                        required
                    />
                </label>
                <button type="submit">Aggiungi</button>
            </form>
        </div>
    );
};