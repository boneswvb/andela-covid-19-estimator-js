const mydata = {
  adata: {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 10,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  }
};
const covid19ImpactEstimator = (data) => {
  const input = data;
  const impact = {};
  const severeImpact = {};
  const { periodType, timeToElapse, totalHospitalBeds } = data;
  const calculateTimeToElapse = () => {
    let elapseTime = 0;
    if (periodType === 'days') {
      elapseTime = timeToElapse;
    } else if (periodType === 'weeks') {
      elapseTime = timeToElapse * 7;
    } else if (periodType === 'months') {
      elapseTime = timeToElapse * 30;
    }
    return (elapseTime);
  };
  calculateTimeToElapse();
  impact.currentlyInfected = input
    .reportedCases * 10;
  severeImpact.currentlyInfected = input
    .reportedCases * 50;
  impact.infectionsByRequestedTime = impact
    .currentlyInfected * 2 ** Math.floor(calculateTimeToElapse() / 3);
  severeImpact.infectionsByRequestedTime = severeImpact
    .currentlyInfected * 2 ** Math.floor(calculateTimeToElapse(data) / 3);
  impact.severeCasesByRequestedTime = Math.floor(0.15 * impact
    .infectionsByRequestedTime);
  severeImpact.severeCasesByRequestedTime = Math.floor(0.15 * severeImpact
    .infectionsByRequestedTime);
  impact.hospitalBedsByRequestedTime = Math.floor((35 / 100) * totalHospitalBeds) - impact
    .severeCasesByRequestedTime;
  severeImpact
    .hospitalBedsByRequestedTime = Math.floor((35 / 100) * totalHospitalBeds) - severeImpact
    .severeCasesByRequestedTime;
  console.log('impact', impact)
  console.log('severeImpact', severeImpact)
  return {
    data,
    impact,
    severeImpact
  };
};
covid19ImpactEstimator(mydata.adata);
// export default covid19ImpactEstimator;

  // calculateSevereImpactsevereCasesByRequestedTime(data);
  // const calculateImpacthospitalBedsByRequestedTime = (idata) => {
  //   data.estimate.impact.hospitalBedsByRequestedTime = Math.floor((35 / 100) * idata
  //     .estimate.totalHospitalBeds) - data.impact.severeCasesByRequestedTime;
  // };
  // calculateImpacthospitalBedsByRequestedTime(data);
  //   const calculateSevereImpacthospitalBedsByRequestedTime = (sdata) => {

  //   };
  //   calculateSevereImpacthospitalBedsByRequestedTime(data);