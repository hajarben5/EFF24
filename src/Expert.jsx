import React from 'react';
import Evenement from './Evenement'; 
import expertsData from './data'; 

function Expert() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des Experts</h2>
      
      
      {expertsData.map((expert) => (
        <div key={expert.id}>
          <h4>Événements de {expert.nom_complet}</h4>
          {expert.événements.length === 0 ? (
            <p>Aucun événement pour cet expert.</p>
          ) : (
            <Evenement evenements={expert.événements} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Expert;
