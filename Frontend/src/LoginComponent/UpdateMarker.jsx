import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const UpdateMarker = () => {
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
    const [percorso, setPercorso] = useState(null);
    const [marker, setMarker] = useState(null);
    const [percorsi, setPercorsi] = useState([]);
    const [selectedPercorso, setSelectedPercorso] = useState(null);

    useEffect(() => {
        const fetchMarkerData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/Marker/${markerId}/`);
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
                setPercorso(markerData.percorso || null);
                setSelectedPercorso(markerData.percorso || null);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchPercorsi = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/Percorso/');
                setPercorsi(response.data); // Imposta i percorsi disponibili
            } catch (error) {
                console.error(error);
            }
        };

        fetchMarkerData();
        fetchPercorsi();
    }, [markerId]);

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Nome', Nome);
        formData.append('Indirizzo', Indirizzo);
        formData.append('Descrizione', Descrizione);
        formData.append('Desbrev', Desbrev);
        formData.append('Contatti', Contatti);
        formData.append('Orari', Orari);
        formData.append('Costi', Costi);
        formData.append('Latitudine', Latitudine);
        formData.append('Longitudine', Longitudine);
        formData.append('Sfida', Sfida);
        formData.append('Percorso', percorso);
        if (Immagine) {
            formData.append('Immagine', Immagine);
        }

        try {
            const response = await axios.put(`http://localhost:8000/api/Marker/${markerId}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            // Aggiungi qui la logica per gestire la risposta, ad esempio reindirizzando l'utente
        } catch (error) {
            console.error(error);
            // Gestisci l'errore, ad esempio mostrando un messaggio di errore
        }
    };

    const handleImageChange = (e) => {
        setImmagine(e.target.files[0]);
    };

    return (
        <div>
            <h1> Modifica il Marker </h1>
            {marker && (
             <div className="table-responsive">
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
                      <th>Percorso</th>
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
                      <td>{marker.Percorso}</td>
                    </tr>
                  </tbody>
                </table>
             </div>
            )}

            <h1> Modifica il Marker </h1>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    Nome:
                    <input type="text" value={Nome || ''} onChange={(e) => setNome(e.target.value)} />
                </label>
                <label>
                    Indirizzo:
                    <input type="text" value={Indirizzo} onChange={(e) => setIndirizzo(e.target.value)} />
                </label>
                <label>
                    Descrizione:
                    <input type="text" value={Descrizione} onChange={(e) => setDescrizione(e.target.value)} />
                </label>
                <label>
                    Desbrev:
                    <input type="text" value={Desbrev} onChange={(e) => setDesbrev(e.target.value)} />
                </label>
                <label>
                    Contatti:
                    <input type="text" value={Contatti} onChange={(e) => setContatti(e.target.value)} />
                </label>
                <label>
                    Orari:
                    <input type="text" value={Orari} onChange={(e) => setOrari(e.target.value)} />
                </label>
                <label>
                    Costi:
                    <input type="text" value={Costi} onChange={(e) => setCosti(e.target.value)} />
                </label>
                <label>
                    Latitudine:
                    <input type="text" value={Latitudine} onChange={(e) => setLatitudine(e.target.value)} />
                </label>
                <label>
                    Longitudine:
                    <input type="text" value={Longitudine} onChange={(e) => setLongitudine(e.target.value)} />
                </label>
                <label>
                    Sfida:
                    <input type="text" value={Sfida} onChange={(e) => setSfida(e.target.value)} />
                </label>
                <h2>Seleziona un Percorso</h2>
                <select value={selectedPercorso ? selectedPercorso.id : ''} onChange={(e) => setSelectedPercorso(percorsi.find(p => p.id === parseInt(e.target.value)))}>
                    <option value="">Seleziona un percorso</option>
                    {percorsi.map(percorso => (
                        <option key={percorso.id} value={percorso.id}>{percorso.Titolo}</option>
                    ))}
                </select>
                <label>
                    Immagine:
                    <input type="file" onChange={handleImageChange} />
                </label>
                <button type="submit" onClick={handleRefresh}>Aggiorna</button>
            </form>
        </div>
    );
};

export default UpdateMarker;
