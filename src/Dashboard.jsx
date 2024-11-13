// src/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

function Dashboard({onRealizarPagoClick, irAProfile}) {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Bienvenido al Dashboard de Pagosofá</h1>
        <p>Gestiona tus pagos y consulta el estado de tu cuenta.</p>
      </header>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h2>Total Pagado</h2>
          <p>$1,200</p>
        </div>
        <div className="stat-card">
          <h2>Pagos Pendientes</h2>
          <p>$300</p>
        </div>
        <div className="stat-card">
          <h2>Último Pago</h2>
          <p>01 Nov, 2024</p>
        </div>
      </section>

      <section className="upcoming-payments">
        <h2>Pagos Próximos</h2>
        <ul>
          <li>Curso de Nivel 3 - $150 - Vence: 15 Nov, 2024</li>
          <li>Curso de Nivel 4 - $150 - Vence: 30 Nov, 2024</li>
        </ul>
      </section>

      <section className="payment-history">
        <h2>Historial de Pagos</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01 Nov, 2024</td>
              <td>$150</td>
              <td>Pagado</td>
            </tr>
            <tr>
              <td>15 Oct, 2024</td>
              <td>$150</td>
              <td>Pagado</td>
            </tr>
            <tr>
              <td>01 Sep, 2024</td>
              <td>$150</td>
              <td>Pagado</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="dashboard-footer">
        <button className="action-button" onClick={onRealizarPagoClick}>Realizar Pago</button>
        <button className="action-button" onClick={irAProfile}>Configurar Perfil</button>
      </footer>
    </div>
  );
}

export default Dashboard;