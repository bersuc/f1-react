import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import '../css/DriverDetail.css';


function DriverDetail({ match }) {

  useEffect(
    () => {
      infoPiloto();
    }, []);

  const [info, setInfo] = useState({});

  const infoPiloto = async () => {
    const dadoPiloto = await fetch(`http://ergast.com/api/f1/2019/drivers/${match.params.id}.json`, {
      crossDomain: true,
    });
    const dados2 = await dadoPiloto.json();
    const info = dados2.MRData.DriverTable.Drivers[0];
    setInfo(info);
  }

  return (
    <div id="driver-info">
      <h1 className="driver-name">{info.givenName} {info.familyName}</h1>

      <ul className="driver-details-table">
        <li className="header">Info</li>
        <li className="header">Data</li>
        <li className="cat">Car Number:</li>
        <li className="data">{info.permanentNumber}</li>
        <li className="cat">Race Cod:</li>
        <li className="data">{info.code}</li>
        <li className="cat">First Name:</li>
        <li className="data">{info.givenName}</li>
        <li className="cat">Last Name:</li>
        <li className="data">{info.familyName}</li>
        <li className="cat">Birth:</li>
        <li className="data">{Moment(info.dateOfBirth).format('Do  MMM YYYY')}</li>
        <li className="cat">Born: </li>
        <li className="data">{Moment(info.dateOfBirth).fromNow()}</li>
        <li className="cat">Nationality:</li>
        <li className="data">{info.nationality}</li>
      </ul>

      {/* <center>
        <table>
          <thead className="racer-data">
            <tr>
              <td>Info</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Car Number:</td>
              <td className="data">{info.permanentNumber}</td>
            </tr>
            <tr>
              <td>Race Cod:</td>
              <td className="data">{info.code}</td>
            </tr>
            <tr>
              <td>First Name:</td>
              <td className="data">{info.givenName}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td className="data">{info.familyName}</td>
            </tr>
            <tr>
              <td>Birth:</td>
              <td className="data">{Moment(info.dateOfBirth).format('Do  MMM YYYY')}</td>
            </tr>
            <tr>
              <td>Born: </td>
              <td className="data">{Moment(info.dateOfBirth).fromNow()}</td>
            </tr>
            <tr>
              <td>Nationality:</td>
              <td className="data">{info.nationality}</td>
            </tr>

          </tbody>
        </table>
      </center> */}
    </div>
  );
}

export default DriverDetail;
