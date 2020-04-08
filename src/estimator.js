const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * Math.pow(2,Math.floor(input.timeToElapse/3))
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 50 * Math.pow(2,Math.floor(input.timeToElapse/3))
    }
  };
};

export default covid19ImpactEstimator;
// 