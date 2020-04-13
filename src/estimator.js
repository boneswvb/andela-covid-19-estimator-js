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
    } else if (periodType === 'weeks') {
      elapseTime = timeToElapse * 7;
    } else if (periodType === 'months') {
      elapseTime = timeToElapse * 30;
    }
    return elapseTime;
  };
  calculateTimeToElapse(periodType, timeToElapse);
};

covid19ImpactEstimator(mydata.adata);

export default covid19ImpactEstimator;
