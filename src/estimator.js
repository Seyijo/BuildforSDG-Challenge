const covid19ImpactEstimator = (data) => {
  const input = data;
  const dailyRate1 = Math.floor((input.reportedCases * 10 * 512) / 28);
  const dailyRate2 = Math.floor((input.reportedCases * 50 * 512) / 28);
  return {
    input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * 512,
      estimator() {
        let ans = 0;
        if (input.periodType === 'days') {
          ans = dailyRate1 * input.timeToElapse;
        } else if (input.periodType === 'weeks') {
          ans = dailyRate1 * input.timeToElapse * 7;
        } else {
          ans = dailyRate1 * input.timeToElapse * 30;
        }
        return ans;
      }
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 50 * 512,
      estimator() {
        let ans = 0;
        if (input.periodType === 'days') {
          ans = dailyRate2 * input.timeToElapse;
        } else if (input.periodType === 'weeks') {
          ans = dailyRate2 * input.timeToElapse * 7;
        } else {
          ans = dailyRate2 * input.timeToElapse * 30;
        }
        return ans;
      }
    }
  };
};

export default covid19ImpactEstimator;
