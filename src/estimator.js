const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * 512,
      estimator() {
        let ans = 0;

        if (input.periodType === 'days') {
          ans =
            2 ** Math.floor(input.timeToElapse / 3) * input.reportedCases * 10;
        } else if (input.periodType === 'weeks') {
          let days = input.timeToElapse * 7;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 10;
        } else {
          let days = input.timeToElapse * 30;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 10;
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
          ans =
            2 ** Math.floor(input.timeToElapse / 3) * input.reportedCases * 50;
        } else if (input.periodType === 'weeks') {
          let days = input.timeToElapse * 7;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 50;
        } else {
          let days = input.timeToElapse * 30;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 50;
        }
        return ans;
      }
    }
  };
};

export default covid19ImpactEstimator;
