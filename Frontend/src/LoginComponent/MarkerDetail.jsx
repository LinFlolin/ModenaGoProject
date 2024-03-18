import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MarkerDetail = () => {
    const { id } = useParams();
    const [marker, setMarker] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarker = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:8000/api/Marker/${id}`);
                if (!response.ok) {
                    throw new Error('Errore nel recupero dei dati');
                }
                const data = await response.json();
                setMarker(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMarker();
    }, [id]);

    if (isLoading) {
        return <p>Caricamento...</p>;
    }

    if (error) {
        return <p>Errore: {error}</p>;
    }

    return (
        <div>
            <h2>{marker.id} - {marker.Nome}</h2>
            <p>Indirizzo: {marker.Indirizzo}</p>
            <p>Descrizione: {marker.Descrizione}</p>
            <p>Descrizione breve: {marker.Desbrev}</p>
            <p>Contatti: {marker.Contatti}</p>
            <p>Orari: {marker.Orari}</p>
            <p>Costi: {marker.Costi}</p>
            <p>Latitudine: {marker.Latitudine}</p>
            <p>Longitudine: {marker.Longitudine}</p>
            <p>Sfida: {marker.Sfida}</p>
        </div>
    );
};
