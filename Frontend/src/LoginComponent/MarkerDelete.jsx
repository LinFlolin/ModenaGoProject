import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RegistrationApp.css';

export const MarkerDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteMarker = async () => {
            try {
                const response = await axios.delete(`http://localhost:8000/api/Marker/${id}`);
                if (response.status === 200) {
                    console.log('Eliminazione dei dati avvenuta con successo');
                    navigate('/list-marker');
                }
            } catch (error) {
                console.error("Errore durante l'eliminazione del marker", error);
            }
        };

        deleteMarker();
    }, [id, navigate]);
};