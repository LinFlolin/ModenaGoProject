import axios from 'axios';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RegistrationApp.css';

export const MarkerDelete = () => {
    const { id } = useParams();

    useEffect(() => {
        const deleteMarker = async () => {
            try {
                const response = await axios.delete(`http://localhost:8000/api/Marker/${id}`);
                if (response.ok) {
                    console.log('Eliminazione dei dati avvenuta con successo');
                }
            } catch (error) {
                console.error("Errore durante l'eliminazione del marker", error);
            }
            const navigate = useNavigate();
            const routeChange = () => {
                navigate('/list-marker');
              };
            routeChange();
        };

        deleteMarker();
    }, [id]);
};