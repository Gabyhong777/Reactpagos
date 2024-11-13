import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentForm from './PaymentForm';
import Dashboard from './Dashboard'
import Profile from './Profile';
import RegistroUsuario from './Register.jsx';


function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [mostrarPaymentForm, setMostrarPaymentForm] = useState(false);
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [mostrarRegistroUsuario, setMostrarRegistroUsuario] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)

  }

  async function Ingresar() {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, clave })
      });

      if (response.ok) {
        alert("Ingresaste Correctamente");
        setLogueado(true);
      } else {
        alert("Usuario o Clave incorrectos");
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('Error al conectar con el servidor');
    }
  }

  function irAPaymentForm() {
    setMostrarPaymentForm(true);
    setMostrarPerfil(false);  
  }

  function irAProfile() {
    setMostrarPerfil(true);
    setMostrarPaymentForm(false);  
  }

  function irARegistroUsuario() {
    setMostrarRegistroUsuario(true);
    setMostrarPerfil(false);
    setMostrarPaymentForm(false);
  }

  function cerrarSesion() {
    setLogueado(false);
    setMostrarPerfil(false);
    setMostrarPaymentForm(false);
  }
  

  return (
    <>
{logueado ? (
      mostrarPerfil ? (
        <Profile
          usuario={usuario}
          ocupacion="estudiante" //
          nivelAcademico="Nivel 3" // 
          onCerrarSesion={cerrarSesion}
          onCambiarContraseña={() => alert("Funcionalidad para cambiar contraseña")}
        />
      ) : mostrarPaymentForm ? (
        <PaymentForm />
      ) : (
        <Dashboard
          onRealizarPagoClick={irAPaymentForm}
          irAProfile={irAProfile} 
        />
      )
    ) : mostrarRegistroUsuario ? (
      <RegistroUsuario />
    ) : (
        <div>
          <input
            type="text"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={cambiarUsuario}
            placeholder="Usuario"
          />
          <input
            type="password"
            name="clave"
            id="clave"
            value={clave}
            onChange={cambiarClave}
            placeholder="Contraseña"
          />
          <button onClick={Ingresar}>Ingresar</button>
          <div>
            <button onClick={irARegistroUsuario}>Crear Registro</button>
          </div>
        </div>
      )}
    </>
  );
}
export default App