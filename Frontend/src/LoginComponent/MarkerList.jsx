import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export const MarkerList = ({data}) => {

    return (
        <div className='  m-32' >
            <Link to={'/add-marker'} >create</Link>
             { data.map(marker=>(
             <div key={marker.id} className="table-responsive">
                <table  className="table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Indirizzo</th>
                      <th>Descrizione</th>
                      <th>Contatti</th>
                      <th>Orari</th>
                      <th>Costi</th>
                      <th>Latitudine</th>
                      <th>Longitudine</th>
                      <th>Modifiche</th>
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
                      <div className=' flex gap-2'>
                        <Link>create</Link>
                        <Link>update</Link>
                  </div>
                    </tr>
                  </tbody>


                </table>
             </div>
            ))}
        </div>
    );
};
