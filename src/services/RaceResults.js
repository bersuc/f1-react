const axios = require("axios");

// https://ergast.com/api/f1/2021/19.json

async function getRaceResults(id) {
  let page = `http://ergast.com/api/f1/2021y/${id}/results.json`;
  axios.get(page).then((res) => {
    const raceDetails = res.data.MRData.RaceTable.Races[0];
    const { Results } = raceDetails;
    console.log(raceDetails.Results[0].Driver.driverId);
    console.log(Results);
    console.log(
      Results.map((driver) => {
        let piloto = driver.Driver.driverId;
        if (piloto !== null) {
          console.log({ piloto });
        }
      })
    );
  });
}

async function teste() {}

getRaceResults(5);
module.exports = {
  getRaceResults,
  teste: (variavel) => {
    console.log(variavel);
  },
};
