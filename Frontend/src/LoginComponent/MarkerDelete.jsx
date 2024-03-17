import React, { useState, useEffect } from 'react';
import './RegistrationApp.css';

export const MarkerDelete = () => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const deleteMarker = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/Marker/${id}', { method: 'DELETE' });
                if (!response.ok) {
                    throw new Error('Errore durante l\'eliminazione del marker');
                }
                setStatus('Eliminazione avvenuta con successo');
            } catch (error) {
                console.error('Errore durante l\'eliminazione del marker:', error);
                setStatus('Errore durante l\'eliminazione del marker');
            }
        };

        deleteMarker();
    }, []);

    return (
        <div>
            <h1>Elimina un Marker</h1>
            <p>{status}</p>
        </div>
    );
};
