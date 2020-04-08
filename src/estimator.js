const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * 512,
      periodInDays: "",
      periodInWeeks: "",
      periodInMonths: ""
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 50 * 512,
      periodInDays: 23,
      periodInWeeks: 3,
      periodInMonths: 2

    }
  };
};

export default covid19ImpactEstimator;
