import axios from 'axios';
import React, { useState } from 'react';
import './RegistrationApp.css';

export const PercorsoCreate = () => {

    const [percorsoData, setPercorsoData] = useState({
        Titolo: '',
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setPercorsoData({ ...percorsoData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Convert percorsoData to JSON string
            const percorsoDataJson = JSON.stringify(percorsoData);

            console.log('JSON to be sent:', percorsoDataJson); //MANNAGGIA A CHI SO IO

            // Make the API call with the JSON string
            const response = await axios.post('http://127.0.0.1:8000/api/Percorso/', percorsoDataJson, {
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
            <h1>Aggiungi un nuovo percorso</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Titolo">
                    Titolo
                    <input
                        type="text"
                        name="Titolo"
                        value={percorsoData.Titolo}
                        onChange={handleChange}
                        required
                        />
                </label>
                <button type="submit">Aggiungi</button>
            </form>
        </div>
    );
};
