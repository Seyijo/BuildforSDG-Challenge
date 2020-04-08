const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * 512,
      periodInDays: 12,
      periodInWeeks: 2,
      periodInMonths: 1
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 50 * 512,
      periodInDays: 24,
      periodInWeeks: 3,
      periodInMonths: 2

    }
  };
};

export default covid19ImpactEstimator;
