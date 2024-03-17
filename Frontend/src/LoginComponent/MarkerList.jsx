import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationApp.css';

export const MarkerList = () => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/Marker');
                const data = await response.json();
                setMarkers(data);
                console.log(data);
            } catch (error) {
                console.error('Errore durante il recupero dei marker:', error);
            }
        };

        fetchMarkers();
    }, []);

    return (
        <div>
            {markers.map(marker => (
                <div key={marker.id}>
                    <p>{marker.Nome}</p>
                    <Link to={`/marker/${marker.id}`}>Visualizza dettagli</Link>
                </div>
            ))}
        </div>
    );
};
