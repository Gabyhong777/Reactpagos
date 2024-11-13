// Profile.jsx
import React from 'react';
import './Profile.css';

function Profile({ usuario, ocupacion, nivelAcademico, onCerrarSesion, onCambiarContraseña }) {
  return (
    <div className="profile">
      <header className="profile-header">
        <h1>Perfil de Usuario</h1>
        <p>Aquí puedes ver y editar tu información personal.</p>
      </header>

      <section className="profile-info">
        <div className="profile-item">
          <h2>Nombre:</h2>
          <p>{usuario}</p>
        </div>

        <div className="profile-item">
          <h2>Ocupación:</h2>
          <p>{ocupacion === 'acudiente' ? 'Acudiente' : 'Estudiante'}</p>
        </div>

        <div className="profile-item">
          <h2>Nivel Académico:</h2>
          <p>{nivelAcademico}</p>
        </div>
      </section>

      <section className="profile-actions">
        <button className="profile-button" onClick={onCambiarContraseña}>Cambiar Contraseña</button>
        <button className="profile-button logout" onClick={onCerrarSesion}>Cerrar Sesión</button>
      </section>
    </div>
  );
}

export default Profile;
