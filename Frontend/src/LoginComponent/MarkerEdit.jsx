











// NON FUNZIONA ANCORA












import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './RegistrationApp.css';

const MarkerEdit = () => {

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
    });

    const navigate = useNavigate(); // Otteniamo la funzione di navigazione

    const handleMarkerClick = () => {
        // Reindirizzamento alla pagina delle api quando viene cliccato il pulsante
        navigate('/api/Marker/:id');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMarkerData({ ...markerData, [name]: value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setMarkerData(prevState => ({ ...prevState, immagine: file }));
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            // Effettua la chiamata per la schermata delle API dei marker
            const response = await axios.put('http://localhost:8000/api/Marker/:id');
            console.log("Errore durante l'aggiunta delle API", result.response.data);
            // Effettua il reindirizzamento o mostra un messaggio di successo
        } catch (error) {
            console.error("Errore durante l'aggiunta delle API", error.response.data);
            // Gestisci gli errori, ad esempio mostrando un messaggio di errore all'utente
        }
    };

    const routeChange = () => {
        navigate('/api/Marker'); // Naviga alla pagina dei marker
    };


    return (
        <div>
            <h1>Aggiungi un nuovo marker</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nomemarker">
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
                <label htmlFor="nomedescrizione">
                    Descrizione
                    <input
                        type="text"
                        name="descrizione"
                        value={markerData.descrizione}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="numerolatitudine">
                    Latitudine
                    <input
                        type="text"
                        name="latitudine"
                        value={markerData.latitudine}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="numerolongitudine">
                    Longitudine
                    <input
                        type="text"
                        name="longitudine"
                        value={markerData.longitudine}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="provesfida">
                    Sfida
                    <input
                        type="text"
                        name="sfida"
                        value={markerData.sfida}
                        onChange={handleChange}
                        required
                    />
                </label><label htmlFor="img">
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

export default MarkerEdit;
