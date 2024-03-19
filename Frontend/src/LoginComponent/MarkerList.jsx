import React from 'react';
import { Link } from 'react-router-dom';

export const MarkerList = ({ data }) => {

  return (
    <div className='  m-32' >
      <Link to={'/add-marker'} >create</Link>
      {data.map(marker => (
        <div key={marker.id} className="table-responsive">
          <table className="table ">
            <thead>
              <tr >
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
            <tbody key={marker.id} >
              <tr >
                <td>{marker.Nome}</td>
                <td>{marker.Indirizzo}</td>
                <td>{marker.Descrizione}</td>
                <td>{marker.Contatti}</td>
                <td>{marker.Orari}</td>
                <td>{marker.Costi}</td>
                <td>{marker.Latitudine}</td>
                <td>{marker.Longitudine}</td>
                <td>{marker.percorso}</td>
                <div className=' flex gap-2'>
                  <Link to={`/edit-marker/${marker.id}`}>modifica</Link>
                  <Link to={`/delete-marker/${marker.id}`}>elimina</Link>
                </div>
              </tr>
            </tbody>


          </table>
        </div>
      ))}
    </div>
  );
};
