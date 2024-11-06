import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentForm from './PaymentForm';
import Dashboard from './Dashboard'


function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [mostrarPaymentForm, setMostrarPaymentForm] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)

  }

  function Ingresar() {
    if (usuario == 'Admin' && clave == 'Admin') {
      alert("Ingresaste Correctamente");
      setLogueado(true)
    }
    else {
      alert("Usuario o Clave incorrectos")
    }
  }

  function irAPaymentForm() {
    setMostrarPaymentForm(true);
  }

  return (
    <>
        {logueado ? (
        mostrarPaymentForm ? (
          <PaymentForm />
        ) : (
          <Dashboard onRealizarPagoClick={irAPaymentForm} />
        )
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
        </div>
      )}
    </>
  );
}

export default App;