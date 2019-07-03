import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Pilotos.css';


function Pilotos() {
  const pilotoStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  useEffect(
    () => {
      pegaPiloto();
    },[]);

  const [info, setDrivers] = useState([]);  

  const pegaPiloto = async () => {
    const dadoPiloto = await fetch('http://ergast.com/api/f1/2019/drivers.json', {
      crossDomain:true,
    });
    const dados2 = await dadoPiloto.json();
    const info = dados2.MRData.DriverTable.Drivers;
    setDrivers(info);
  }

  return (
    <div id="lista-pilotos">
      <h1 className="title">Drivers</h1>
      <div className="lala">lalal</div>
      <table className="pilotos" align="center">
        <thead className="head-drivers">
          <tr>
            <td>Car #</td>
            <td>Name</td>
            <td>Nationality</td>
          </tr>
        </thead>
        <tbody>
          {info.map(quem=>(
            <tr key={quem.permanentNumber}>
              <td className="car-number">{quem.permanentNumber}</td>
              
              <td className="driver">
              <Link style={pilotoStyle} to={`/pilotos/${quem.driverId}`}>
                {quem.givenName} <strong> {quem.familyName}</strong>
              </Link>
              </td>
              
              <td className="country">{quem.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pilotos;
