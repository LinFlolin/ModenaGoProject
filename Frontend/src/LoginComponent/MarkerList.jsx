import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

export const MarkerList = ({ data }) => {

  return (
    <div className='container mt-3'>
      <div className="mb-3">
        <Link to={'/add-marker'} className="btn btn-primary">Aggiungi un nuovo marker</Link>
      </div>
      {data.map(marker => (
        <div key={marker.id} className="table-responsive table-container">
          <table className="table mytable">
            <thead style={{ backgroundColor: '#0056b3' }}>
              <tr>
                <th>Nome</th>
                <th>Indirizzo</th>
                <th>Descrizione</th>
                <th>Contatti</th>
                <th>Orari</th>
                <th>Costi</th>
                <th>Latitudine</th>
                <th>Longitudine</th>
                <th>Percorso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{marker.Nome}</td>
                <td>{marker.Indirizzo}</td>
                <td>{marker.Descrizione}</td>
                <td>{marker.Contatti}</td>
                <td>{marker.Orari}</td>
                <td>{marker.Costi}</td>
                <td>{marker.Latitudine}</td>
                <td>{marker.Longitudine}</td>
                <td>{marker.percorso}</td>
              </tr>
              <tr>
                <td colSpan="9">
                  <div className='d-flex gap-2'>
                    <Link to={`/marker/${marker.id}`} className="btn btn-secondary">modifica</Link>
                    <Link to={`/delete-marker/${marker.id}`} className="btn btn-danger">elimina</Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
