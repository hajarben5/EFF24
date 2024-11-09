import React from 'react';

function Evenement({ evenements }) {
  const calculerCoutTotalEvenement = (event) => {
    return event.cout_journalier * event.durée;
  };

  const coutTotalTousEvenements = evenements.reduce((total, event) => {
    return total + calculerCoutTotalEvenement(event);
  }, 0);

  return (
    <div>
      <table className="table table-bordered table-striped table-responsive">
        <thead className="table-dark">
          <tr>
            <th>Thème</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Description</th>
            <th>Coût Journalier (DH)</th>
            <th>Durée (jours)</th>
            <th>Coût Total Event (DH)</th>
          </tr>
        </thead>
        <tbody>
          {evenements.map((event) => (
            <tr key={event.id}> 
              <td>{event.thème}</td>
              <td>{event.date_debut}</td>
              <td>{event.date_fin}</td>
              <td>{event.description}</td>
              <td>{event.cout_journalier} DH</td>
              <td>{event.durée}</td>
              <td>{calculerCoutTotalEvenement(event)} DH</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" className="text-end fw-bold">
              Total des coûts des événements assurés est :
            </td>
            <td className="fw-bold">{coutTotalTousEvenements} DH</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Evenement;
