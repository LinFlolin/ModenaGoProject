import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './RegistrationApp.css';

export const MarkerCreate = () => {

    const [markerData, setMarkerData] = useState({
        Nome: '',
        Indirizzo: '',
        Descrizione: '',
        Desbrev: '',
        Contatti: '',
        Orari: '',
        Costi: '',
        Latitudine: '',
        Longitudine: '',
        Sfida: '',
        percorso: '',
    })

    const [markerFile, setMarkerFile] = useState({
        Immagine: '',
    });

    const [percorsi, setPercorsi] = useState([]);

    useEffect(() => {
        const fetchPercorsi = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/Percorso');
                setPercorsi(response.data);
                console.log('Percorsi caricati:', response.data);
            } catch (error) {
                console.error("Errore durante il caricamento dei percorsi", error);
            }
        };

        fetchPercorsi();
    }, []);

    const handleChangePercorsi = (event) => {
        const { name, value } = event.target;
        setMarkerData({ ...markerData, [name]: value });
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
            // Convert percorsoData to JSON string
            const markerDataJson = JSON.stringify(markerData, markerFile);

            console.log('JSON to be sent:', markerDataJson); //MANNAGGIA A CHI SO IO

            // Make the API call with the JSON string
            const response = await axios.post('http://127.0.0.1:8000/api/Marker/', markerDataJson, {
                headers: {
                    'Content-Type': 'application/json', // Specify the content type as JSON
                },
            });

            console.log('Aggiunta avvenuta con successo', response.data);
            // Handle successful registration, e.g., redirect or show success message
        } catch (error) {
            console.error("Errore durante l'aggiunta delle API", error);
        }
    };


    return (
        <div>
            <h1>Aggiungi un nuovo marker</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Nome">
                    Nome
                    <input
                        type="text"
                        name="Nome"
                        value={markerData.Nome}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Indirizzo">
                    Indirizzo
                    <input
                        type="text"
                        name="Indirizzo"
                        value={markerData.Indirizzo}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Descrizione">
                    Descrizione
                    <input
                        type="text"
                        name="Descrizione"
                        value={markerData.Descrizione}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Desbrev">
                    Descrizione breve
                    <input
                        type="text"
                        name="Desbrev"
                        value={markerData.Desbrev}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Contatti">
                    Contatti
                    <input
                        type="text"
                        name="Contatti"
                        value={markerData.Contatti}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Orari">
                    Orari
                    <input
                        type="text"
                        name="Orari"
                        value={markerData.Orari}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Costi">
                    Costi
                    <input
                        type="text"
                        name="Costi"
                        value={markerData.Costi}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Latitudine">
                    Latitudine
                    <input
                        type="text"
                        name="Latitudine"
                        value={markerData.Latitudine}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Longitudine">
                    Longitudine
                    <input
                        type="text"
                        name="Longitudine"
                        value={markerData.Longitudine}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="Sfida">
                    Sfida
                    <input
                        type="text"
                        name="Sfida"
                        value={markerData.Sfida}
                        onChange={handleChange}
                        required
                    />
                </label><label htmlFor="Immagine">
                    Immagine
                    <input
                        type="file"
                        name="Immagine"
                        onChange={handleFileChange}
                        required
                    />
                </label><label htmlFor="percorso">
                    Percorso
                    <select
                        name="percorso"
                        value={markerData.percorso}
                        onChange={handleChangePercorsi}
                        required
                    >
                        <option value="">Seleziona un percorso</option>
                        {percorsi.map((percorso, index) => (
                            <option key={percorso.id || index} value={percorso.id}>
                                {percorso.Titolo}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Aggiungi</button>
            </form>
            <Link to={'/list-marker'} >Torna alla lista </Link>

        </div>
    );
};