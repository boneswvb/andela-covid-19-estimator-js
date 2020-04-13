const mydata = {
  data: {
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
  },
  impact: {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0,
    severeCasesByRequestedTime: 0,
    hospitalBedsByRequestedTime: 0,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
    dollarsInFlight: 0
  },
  severeImpact: {
    currentlyInfected: 1,
    infectionsByRequestedTime: 0,
    severeCasesByRequestedTime: 0,
    hospitalBedsByRequestedTime: 0,
    casesForICUByRequestedTime: 0,
    casesForVentilatorsByRequestedTime: 0,
    dollarsInFlight: 0
  }
};

const covid19ImpactEstimator = (data) => {
  const calculateTimeToElapse = (dwmdata) => {
    let elapseTime = 0;
    if (data.data.periodType === 'days') {
      elapseTime = dwmdata.data.timeToElapse;
    } else if (data.data.periodType === 'weeks') {
      elapseTime = dwmdata.data.timeToElapse * 7;
    } else if (data.data.periodType === 'months') {
      elapseTime = dwmdata.data.timeToElapse * 30;
    }
    return elapseTime;
  };
  calculateTimeToElapse(data);

  const calculateImpactCurrentlyInfected = (idata) => {
    const calCurrentlyInfected = idata.data.reportedCases * 10 * calculateTimeToElapse(data);
    return (calCurrentlyInfected);
  };

  const calculateSevereImpactCurrentlyInfected = (sdata) => {
    const calSerCurrentlyInfected = sdata.data.reportedCases * 50 * calculateTimeToElapse(data);
    return (calSerCurrentlyInfected);
  };

  const calculateImpactinfectionsByRequestedTime = (idata) => {
    const calInfectionsByRequestedTime = idata.impact
      .currentlyInfected * 2 ** Math.floor(calculateTimeToElapse(data) / 3);
    return (calInfectionsByRequestedTime);
  };


  const calculateSevereImpactinfectionsByRequestedTime = (sdata) => {
    const calSerInfectionsByRequestedTime = sdata.severeImpact
      .currentlyInfected * 2 ** Math.floor(calculateTimeToElapse(data) / 3);
    return (calSerInfectionsByRequestedTime);
  };

  const assignperiodType = (adata) => {
    const periodType = adata.periodType;
    return (periodType);
  };

  mydata.impact.currentlyInfected = calculateImpactCurrentlyInfected(data);
  mydata.severeImpact.currentlyInfected = calculateSevereImpactCurrentlyInfected(data);
  mydata.impact.infectionsByRequestedTime = calculateImpactinfectionsByRequestedTime(data);
  mydata.severeImpact
    .infectionsByRequestedTime = calculateSevereImpactinfectionsByRequestedTime(data);
  mydata.periodType = assignperiodType(data);
};
// covid19ImpactEstimator(mydata);
//  console.log("mydata", mydata)
export default covid19ImpactEstimator;
