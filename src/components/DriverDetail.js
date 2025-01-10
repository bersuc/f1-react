import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Moment from 'moment'; // ou use date-fns
import '../css/DriverDetail.css';

function DriverDetail() {
  const { id } = useParams(); // Obtém o parâmetro da URL
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverInfo = async () => {
      try {
        const response = await fetch(
          `http://ergast.com/api/f1/2019/drivers/${id}.json`,
          { crossDomain: true }
        );
        if (!response.ok) throw new Error('Erro ao buscar os dados');
        const data = await response.json();
        const driverInfo = data.MRData.DriverTable.Drivers[0];
        setInfo(driverInfo);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchDriverInfo();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div id="driver-info">
      <h1 className="driver-name">
        {info.givenName} {info.familyName}
      </h1>

      <ul className="driver-details-table">
        <li className="header">Info</li>
        <li className="header">Data</li>
        <li className="cat">Car Number:</li>
        <li className="data">{info.permanentNumber || 'N/A'}</li>
        <li className="cat">Race Cod:</li>
        <li className="data">{info.code || 'N/A'}</li>
        <li className="cat">First Name:</li>
        <li className="data">{info.givenName}</li>
        <li className="cat">Last Name:</li>
        <li className="data">{info.familyName}</li>
        <li className="cat">Birth:</li>
        <li className="data">
          {info.dateOfBirth
            ? Moment(info.dateOfBirth).format('Do MMM YYYY')
            : 'N/A'}
        </li>
        <li className="cat">Born: </li>
        <li className="data">
          {info.dateOfBirth ? Moment(info.dateOfBirth).fromNow() : 'N/A'}
        </li>
        <li className="cat">Nationality:</li>
        <li className="data">{info.nationality}</li>
      </ul>
    </div>
  );
}

export default DriverDetail;
