const covid19ImpactEstimator = (data) => {
  const input = data;
  const dailyRate1 = (input.reportedCases * 10 * 512) / 28;
  const dailyRate2 = (input.reportedCases * 50 * 512) / 28;
  return {
    input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * 512,
      estimator: {
        days: dailyRate1,
        weeks: dailyRate1 * 7,
        months: dailyRate1 * 30
      }
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 50 * 512,
      estimator: {
        days: dailyRate2,
        weeks: dailyRate2 * 7,
        months: dailyRate2 * 30
      }
    }
  };
};

export default covid19ImpactEstimator;
