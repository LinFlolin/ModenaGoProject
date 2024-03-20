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
    const [selectedPercorso, setSelectedPercorso] = useState(null);
    const [percorsi, setPercorsi] = useState([]);
    const [allMarkers, setAllMarkers] = useState([]);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        const fetchMarkerData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/Marker/${markerId}/`);
                const markerData = response.data;
                console.log(markerData);
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
                setPercorso(markerData.percorso || '');
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
        //fetchAllMarkers();
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
        <div className="container ">
            <h1 className="text-center fw-bold fs-2"> Modifica il Marker </h1>
            <div>
                        {marker && (
          <div className="row mt-4 d-flex p-2">
            <div className="col">
              <div className="table-responsive text-center sm:text-left ">
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
                    <tr>qui
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
            </div>
          </div>
        )}
            </div>


            <div className="container-fluid">
             <div className="row mt-4">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                    <h1 className="text-center fw-bold fs-2"> Modifica il Marker </h1>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome:</label>
                            <input type="text" className="form-control" id="nome" value={Nome || ''} onChange={(e) => setNome(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="indirizzo" className="form-label">Indirizzo:</label>
                            <input type="text" className="form-control" id="indirizzo" value={Indirizzo} onChange={(e) => setIndirizzo(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="descrizione" className="form-label">Descrizione:</label>
                            <input type="text" className="form-control" id="descrizione" value={Descrizione} onChange={(e) => setDescrizione(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="desbrev" className="form-label">Desbrev:</label>
                            <input type="text" className="form-control" id="desbrev" value={Desbrev} onChange={(e) => setDesbrev(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="contatti" className="form-label">Contatti:</label>
                            <input type="text" className="form-control" id="contatti" value={Contatti} onChange={(e) => setContatti(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="orari" className="form-label">Orari:</label>
                            <input type="text" className="form-control" id="orari" value={Orari} onChange={(e) => setOrari(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="costi" className="form-label">Costi:</label>
                            <input type="text" className="form-control" id="costi" value={Costi} onChange={(e) => setCosti(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="latitudine" className="form-label">Latitudine:</label>
                            <input type="text" className="form-control" id="latitudine" value={Latitudine} onChange={(e) => setLatitudine(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="longitudine" className="form-label">Longitudine:</label>
                            <input type="text" className="form-control" id="longitudine" value={Longitudine} onChange={(e) => setLongitudine(e.target.value)} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="sfida" className="form-label">Sfida:</label>
                            <input type="text" className="form-control" id="sfida" value={Sfida} onChange={(e) => setSfida(e.target.value)} />
                          </div>

                        <div className="mb-3">
                            <label htmlFor="immagine" className="form-label">Immagine:</label>
                            <input type="file" className="form-control" id="immagine" onChange={handleImageChange} />
                        </div>
                        <button className="btn bg-blue-950 text-yellow-50 my-1.5" type="submit" onClick={handleRefresh}>Aggiorna</button>
                    </form>
                </div>
             </div>
         </div>
       </div>
    );
};


export default UpdateMarker;