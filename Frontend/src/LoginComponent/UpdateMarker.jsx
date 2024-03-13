import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateMarker = () => {
    const { markerId } = useParams(); // Estrai l'ID del Marker dall'URL
    const [nome, setNome] = useState('');
    const [indirizzo, setIndirizzo] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [desbrev, setDesbrev] = useState('');
    const [contatti, setContatti] = useState('');
    const [orari, setOrari] = useState('');
    const [costi, setCosti] = useState('');
    const [latitudine, setLatitudine] = useState('');
    const [longitudine, setLongitudine] = useState('');
    const [sfida, setSfida] = useState('');
    const [immagine, setImmagine] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Nome', nome);
        formData.append('Indirizzo', indirizzo);
        formData.append('Descrizione', descrizione);
        formData.append('Desbrev', desbrev);
        formData.append('Contatti', contatti);
        formData.append('Orari', orari);
        formData.append('Costi', costi);
        formData.append('Latitudine', latitudine);
        formData.append('Longitudine', longitudine);
        formData.append('Sfida', sfida);
        if (immagine) {
            formData.append('Immagine', immagine);
        }

        try {
            const response = await axios.put(`http://localhost:8000/api/Marker/${markerId}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            // Gestisci la risposta, ad esempio mostrando un messaggio di successo
        } catch (error) {
            console.error(error);
            // Gestisci l'errore, ad esempio mostrando un messaggio di errore
        }
    };

    const handleImageChange = (e) => {
        setImmagine(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label>
                Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <label>
                Indirizzo:
                <input type="text" value={indirizzo} onChange={(e) => setIndirizzo(e.target.value)} />
            </label>
            {/* Aggiungi gli altri campi qui */}
            <label>
                Immagine:
                <input type="file" onChange={handleImageChange} />
            </label>
            <button type="submit">Aggiorna</button>
        </form>
    );
};

export default UpdateMarker;