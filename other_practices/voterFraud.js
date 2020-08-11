/*
Given a two dimensional list of integers votes, 
where each list has two elements [candidate_id, voter_id], 
report whether any voter has voted more than once.
*/

class Solution {
  solve(votes) {
    // Write your code here
    let compareVoters = [];
    votes.forEach((e) => {
      compareVoters.push(e[1]);
    });

    let unique = [...compareVoters];

    let sortArr = unique
      .reduce((a, x) => (a.includes(x) ? a : [...a, x]), [])
      .sort();

    if (sortArr.length !== unique.length) {
      return true;
    } else {
      return false;
    }
  }
}
