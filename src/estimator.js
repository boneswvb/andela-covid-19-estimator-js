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
  },
  data: {
    periodType: ''
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
    if (data.adata.periodType === 'days') {
      elapseTime = dwmdata.adata.timeToElapse;
    } else if (data.adata.periodType === 'weeks') {
      elapseTime = dwmdata.adata.timeToElapse * 7;
    } else if (data.adata.periodType === 'months') {
      elapseTime = dwmdata.adata.timeToElapse * 30;
    }
    return elapseTime;
  };
  calculateTimeToElapse(data);

  const calculateImpactCurrentlyInfected = (idata) => {
    const calCurrentlyInfected = idata.adata.reportedCases * 10 * calculateTimeToElapse(data);
    return (calCurrentlyInfected);
  };

  const calculateSevereImpactCurrentlyInfected = (sdata) => {
    const calSerCurrentlyInfected = sdata.adata.reportedCases * 50 * calculateTimeToElapse(data);
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

  const assignPeriodType = (adata) => {
    const dwmperiodType = adata.adata.periodType;
    return (dwmperiodType);
  };
  
  mydata.impact.currentlyInfected = calculateImpactCurrentlyInfected(data);
  mydata.severeImpact.currentlyInfected = calculateSevereImpactCurrentlyInfected(data);
  mydata.impact.infectionsByRequestedTime = calculateImpactinfectionsByRequestedTime(data);
  mydata.severeImpact
    .infectionsByRequestedTime = calculateSevereImpactinfectionsByRequestedTime(data);
  mydata.data.periodType = assignPeriodType(data);
};
// covid19ImpactEstimator(mydata);
//  console.log("mydata", mydata)
export default covid19ImpactEstimator;
