const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: input.reportedCases * 10 * 512,
      periodInDays() {
        let ans = 0;
        const days = input.timeToElapse;
          ans = 2 ** (days / 3) * input.reportedCases * 10;
          return ans;
      },
        periodInWeeks(){
          let ans = 0;
          const days = input.timeToElapse * 7;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 10;
        return ans;
        },
        periodInMonths(){
          let ans = 0;
          const days = input.timeToElapse * 30;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 10;
          return ans;
        }
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: input.reportedCases * 50 * 512,
      periodInDays() {
        let ans = 0;
        const days = input.timeToElapse;
          ans = 2 ** (days / 3) * input.reportedCases * 50;
          return ans;
      },
        periodInWeeks(){
          let ans = 0;
          const days = input.timeToElapse * 7;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 50;
        return ans;
        },
        periodInMonths(){
          let ans = 0;
          const days = input.timeToElapse * 30;
          ans = 2 ** Math.floor(days / 3) * input.reportedCases * 50;
          return ans;
        }
        
      }
    }
  };
};

export default covid19ImpactEstimator;
