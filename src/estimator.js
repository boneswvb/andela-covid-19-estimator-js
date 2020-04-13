const mydata = {
  adata: {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 28,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  }
};

const covid19ImpactEstimator = (data) => {
  const { periodType, timeToElapse } = data;
  
  const calculateTimeToElapse = () => {
    let elapseTime = 0;
    if (periodType === 'days') {
      elapseTime = timeToElapse;
      console.log('days', elapseTime)
    } else if (periodType === 'weeks') {
      elapseTime = timeToElapse * 7;
    } else if (periodType === 'months') {
      elapseTime = timeToElapse * 30;
    }
    return elapseTime;
  };
  calculateTimeToElapse(periodType, timeToElapse);
}

covid19ImpactEstimator(mydata.adata);

// const input = data;
// const impact = {};
// const severeImpact = {};
// export default covid19ImpactEstimator;
  // const calculateImpactCurrentlyInfected = (idata) => {
  //   const calCurrentlyInfected = idata.adata.reportedCases * 10 * calculateTimeToElapse(data);
  //   return (calCurrentlyInfected);
  // };
  // const calculateSevereImpactCurrentlyInfected = (sdata) => {
  //   const calSerCurrentlyInfected = sdata.adata.reportedCases * 50 * calculateTimeToElapse(data);
  //   return (calSerCurrentlyInfected);
  // };
  // const calculateImpactinfectionsByRequestedTime = (idata) => {
  //   const calInfectionsByRequestedTime = idata.impact
  //     .currentlyInfected * 2 ** Math.floor(calculateTimeToElapse(data) / 3);
  //   return (calInfectionsByRequestedTime);
  // };
  // const calculateSevereImpactinfectionsByRequestedTime = (sdata) => {
  //   const calSerInfectionsByRequestedTime = sdata.severeImpact
  //     .currentlyInfected * 2 ** Math.floor(calculateTimeToElapse(data) / 3);
  //   return (calSerInfectionsByRequestedTime);
  // };
// console.log('impact', impact);
// console.log('severeImpact', severeImpact);