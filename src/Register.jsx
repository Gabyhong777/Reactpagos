// Register.jsx 
// Register.jsx
import React, { useState } from 'react';

function RegistroUsuario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleRegistro = async (evento) => {
    evento.preventDefault();

    const nuevoUsuario = {
      nombre,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoUsuario),
      });

      if (response.ok) {
        alert('Registro exitoso');
        // Puedes redirigir a otra página o limpiar el formulario si es necesario
        setNombre('');
        setEmail('');
        setPassword('');
      } else {
        alert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <form onSubmit={handleRegistro}>
      <h2>Registro de Nuevo Usuario</h2>

      <label>
        Nombre Completo:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>

      <label>
        Correo Electrónico:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegistroUsuario;
