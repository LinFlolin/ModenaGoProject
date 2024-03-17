import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './RegistrationApp.css';

export const MarkerDelete = () => {
    const { id } = useParams();

    useEffect(() => {
        const deleteMarker = async () => {
            try {
                const response = await axios.delete(`http://localhost:8000/api/Marker/${id}`);
                if (!response.ok) {
                    throw new Error('Errore nell\'eliminazione dei dati');
                }
            } catch (error) {
                // empty
            } finally {
                // empty
            }
        };

        deleteMarker();
    }, [id]);
};