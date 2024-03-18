import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const MarkerGet = () => {
    const { markerId } = useParams();
    const [Nome, setNome] = useState('');
    const [Indirizzo, setIndirizzo] = useState('');
    const [Descrizione, setDescrizione] = useState('');
    const [Desbrev, setDesbrev] = useState('');
    const [Contatti, setContatti] = useState('');
    const [Orari, setOrari] = useState('');
    const [Costi, setCosti] = useState('');
    const [Latitudine, setLatitudine] = useState('');
    const [Longitudine, setLongitudine] = useState('');
    const [Sfida, setSfida] = useState('');
    const [Immagine, setImmagine] = useState(null);
    const [allMarkers, setAllMarkers] = useState([]);

    useEffect(() => {
        const fetchMarkerData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/Marker/`);
                const markerData = response.data;
                setMarker(markerData);
                setNome(markerData.Nome || '');
                setIndirizzo(markerData.Indirizzo || '');
                setDescrizione(markerData.Descrizione || '');
                setDesbrev(markerData.Desbrev || '');
                setContatti(markerData.Contatti || '');
                setOrari(markerData.Orari || '');
                setCosti(markerData.Costi || '');
                setLatitudine(markerData.Latitudine || '');
                setLongitudine(markerData.Longitudine || '');
                setSfida(markerData.Sfida || '');
                setImmagine(markerData.Immagine || '')
            } catch (error) {
                console.error(error);
            }
        };

        const fetchAllMarkers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/Marker/');
                setAllMarkers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMarkerData();
        fetchAllMarkers();
    }, [markerId]);


    return (
        <div>
            <h1> Marker creati </h1>
            {allMarkers.map(marker => (
             <div className="table-responsive" key={marker.id}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Indirizzo</th>
                      <th>Descrizione</th>
                      <th>Desbrev</th>
                      <th>Contatti</th>
                      <th>Orari</th>
                      <th>Costi</th>
                      <th>Latitudine</th>
                      <th>Longitudine</th>
                      <th>Sfida</th>
                      <th>Immagine</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{marker.Nome}</td>
                      <td>{marker.Indirizzo}</td>
                      <td>{marker.Descrizione}</td>
                      <td>{marker.Desbrev}</td>
                      <td>{marker.Contatti}</td>
                      <td>{marker.Orari}</td>
                      <td>{marker.Costi}</td>
                      <td>{marker.Latitudine}</td>
                      <td>{marker.Longitudine}</td>
                      <td>{marker.Sfida}</td>
                      <td>{marker.Immagine}</td>
                    </tr>
                  </tbody>
                </table>
             </div>
            ))}


        </div>
    );
};

export default MarkerGet;