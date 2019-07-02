import React, { useState, useEffect }  from 'react';
import '../css/flag-icon.css';
import '../css/Tabela.css';
import Moment from 'moment';



function Tabela() {


  useEffect(
    () => {
      pegaPiloto();
    },[]);

  const [info, setDrivers] = useState([]);  

  const pegaPiloto = async () => {
    const dadoPiloto = await fetch('http://ergast.com/api/f1/2019.json', {
      crossDomain:true,
    });
    const dados2 = await dadoPiloto.json();
    const info = dados2.MRData.RaceTable.Races;
    setDrivers(info);
  }

  return (
    <table className="tabela-corrida">
      <thead>
        <tr>
          <td>#</td>
          <td>Circuit</td>
          <td>Race Day</td>
          <td>Local</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody>
        {info.map(
          circuit => (
            <tr key={circuit.raceName}>
              <td>{circuit.round}</td>
              <td>{circuit.raceName}</td>
              <td>{Moment(circuit.date).format("DD/MM/YYYY")}</td>
              <td>{circuit.Circuit.Location.locality}</td>
              <td>{circuit.Circuit.Location.country}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
          }
export default Tabela;
