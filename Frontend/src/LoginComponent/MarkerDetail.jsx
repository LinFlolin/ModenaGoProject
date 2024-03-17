import React from 'react';
import { useParams } from 'react-router-dom';
import './RegistrationApp.css';

export const MarkerDetail = ({ markers }) => {
    const { id } = useParams();
    const marker = markers.find(marker => marker.id === id);

    return (
        <div>
            <h2>{marker.Nome}</h2>
            <p>{marker.Indirizzo}</p>
            <p>{marker.Descrizione}</p>
            <p>{marker.Desbrev}</p>
            <p>{marker.Contatti}</p>
            <p>{marker.Orari}</p>
            <p>{marker.Costi}</p>
            <p>{marker.Latitudine}</p>
            <p>{marker.Longitudine}</p>
            <p>{marker.Sfida}</p>
        </div>
    );
};
