import React from 'react';
import './App.css';
import Routes from './routes';
// import Login from './components/login/Login.jsx'
// import Dashboard from './components/dashboard/Dashboard';
// import Client from './components/client/Client';

// let dashboards = [
//     { name: 'Voltagem', value: 5, unit: 'V' },
//     { name: 'Corrente', value: 5, unit: 'A' },
//     { name: 'Potência Ativa Total', value: 5, unit: 'W' },
//     { name: 'Potência Aparente Total', value: 5, unit: 'W' },
//     { name: 'Potência Reativa Total', value: 5, unit: 'W' },
//     { name: 'Fator de Potência Total', value: 5, unit: 'W' }
// ]

// let loadClient = () => {
//     return dashboards.map(d => {
//         return <Dashboard name={d.name} value={d.value} unit={d.unit}></Dashboard >
//     })
// }


function App() {

    return (
        <div className="App">
            <Routes />
        </div>
    )
}

export default App;
