import React, { useState } from 'react';

function Formulaire({ experts }) {
  const [formData, setFormData] = useState({
    thème: '',
    date_debut: '',
    date_fin: '',
    coût: '',
    expert: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Informations saisies : ' + JSON.stringify(formData));
  };

  return (
    <div>
      <h3>Créer un événement</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Thème</label>
          <input
            type="text"
            name="thème"
            value={formData.thème}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Date de début</label>
          <input
            type="date"
            name="date_debut"
            value={formData.date_debut}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Date de fin</label>
          <input
            type="date"
            name="date_fin"
            value={formData.date_fin}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Coût</label>
          <input
            type="number"
            name="coût"
            value={formData.coût}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Expert</label>
          <select
            name="expert"
            value={formData.expert}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Sélectionner un expert</option>
            {experts.map((expert) => (
              <option key={expert.id} value={expert.nom_complet}>
                {expert.nom_complet}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Confirmer
        </button>
      </form>
    </div>
  );
}

export default Formulaire;
