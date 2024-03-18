import React, { useState, useEffect } from 'react';

export const MarkerList = () => {
    const [markers, setMarkers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:8000/api/Marker');
                if (!response.ok) {
                    throw new Error('Errore nel recupero dei dati');
                }
                const data = await response.json();
                setMarkers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMarkers();
    }, []);

    if (isLoading) {
        return <p>Caricamento...</p>;
    }

    if (error) {
        return <p>Errore: {error}</p>;
    }

    return (
        <div>
            {markers.map(marker => (
                <h3>{marker.id} - {marker.Nome}</h3>
            ))}
        </div>
    );
};
