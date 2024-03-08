import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './RegistrationApp.css';

export const DirectionCreate = () => {

    const [directionData, setDirectionData] = useState({
        UserLat: '',
        UserLong: '',
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setDirectionData({ ...directionData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Convert percorsoData to JSON string
            const directionDataJson = JSON.stringify(directionData);

            console.log('JSON to be sent:', directionDataJson); //MANNAGGIA A CHI SO IO

            // Make the API call with the JSON string
            const response = await axios.post('http://127.0.0.1:8000/api/Direction/', directionDataJson, {
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
            <h1>Aggiungi una nuova direction</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="UserLat">
                    Latitudine utente
                    <input
                        type="text"
                        name="UserLat"
                        value={directionData.UserLat}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="UserLong">
                    Longitudine utente
                    <input
                        type="text"
                        name="UserLong"
                        value={directionData.UserLong}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Aggiungi</button>
            </form>
        </div>
    );
};
