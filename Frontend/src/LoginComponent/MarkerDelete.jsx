import axios from 'axios';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RegistrationApp.css';

export const MarkerDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Definisci navigate qui

    useEffect(() => {
        const deleteMarker = async () => {
            try {
                const response = await axios.delete(`http://localhost:8000/api/Marker/${id}`);
                if (response.status === 200) { // Assicurati che la risposta sia 200 per confermare la riuscita
                    console.log('Eliminazione dei dati avvenuta con successo');
                    navigate('/list-marker'); // Reindirizza qui
                }
            } catch (error) {
                console.error("Errore durante l'eliminazione del marker", error);
            }
        };

        deleteMarker();
    }, [id, navigate]); // Aggiungi navigate come dipendenza
};