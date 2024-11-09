import React, { useState, useEffect } from 'react';

function Experts2() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const fetchedExperts = [
      {
        id: 1,
        nom_complet: "Dupont Jean",
        événements: [
          {
            thème: "Développement Web",
            date_debut: "2024-03-01",
            date_fin: "2024-03-06",
            description: "Introduction au développement web moderne",
            cout_journalier: 400,
            durée: 7
          },
          {
            thème: "Applications Mobiles",
            date_debut: "2024-04-01",
            date_fin: "2024-04-04",
            description: "Conception et développement d’applications mobiles",
            cout_journalier: 600,
            durée: 4
          }
        ]
      },
      {
        id: 2,
        nom_complet: "Martin Sophie",
        événements: [
          {
            thème: "Sécurité informatique",
            date_debut: "2024-03-10",
            date_fin: "2024-03-12",
            description: "Ateliers avancés sur la sécurité informatique",
            cout_journalier: 600,
            durée: 3
          },
          {
            thème: "Big Data Analytics",
            date_debut: "2024-05-01",
            date_fin: "2024-05-02",
            description: "Analyse de données massives avec les technologies Big Data",
            cout_journalier: 800,
            durée: 2
          }
        ]
      }
    ];
    setExperts(fetchedExperts);
  }, []);

  return (
    <div>
      <h2>Liste des Experts et leurs Événements</h2>
      {experts.length > 0 ? (
        <ul>
          {experts.map((expert) => (
            <li key={expert.id}>
              <strong>{expert.nom_complet}</strong>
              <ul>
                {expert.événements.map((event, index) => (
                  <li key={index}>
                    <strong>Thème :</strong> {event.thème} <br />
                    <strong>Date de début :</strong> {event.date_debut} <br />
                    <strong>Date de fin :</strong> {event.date_fin} <br />
                    <strong>Description :</strong> {event.description} <br />
                    <strong>Coût journalier :</strong> {event.cout_journalier} DH <br />
                    <strong>Durée :</strong> {event.durée} jours
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun expert trouvé.</p>
      )}
    </div>
  );
}

export default Experts2;
