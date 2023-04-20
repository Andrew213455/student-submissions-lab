"use strict";
const submissions = [
    { name: "Jane", score: 95, date: "Today", passed: true },
    { name: "Joe", score: 77, date: "Today", passed: true },
    { name: "Jack", score: 59, date: "Today", passed: false },
    { name: "Jill", score: 88, date: "Today", passed: true },
  ];

const oldSubmissions = [
    {name: "Andrea", score: 20, date: "2018-01-24", passed: false}
]

  // 2.
  const addSubmission = (array, newName, newScore, newDate) => {
    let newPassed = null;
    if(newScore >= 60) {
        newPassed = true;
    } else {
        newPassed = false;
    }
    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed
    };
    array.push(newSubmission);
  };

  addSubmission(oldSubmissions, "james", 10, "2018-01-24");
  console.log(oldSubmissions);
  addSubmission(submissions, "james", 90, "2018-01-24");
  console.log(submissions);

  const addSubmissionV2 = (array, name, score, date) => {
    const newSubmission = {
        //name: name,
        // shorthand: we can only do this bc te key (left of :) is spelled the same as the variable (right of the :)
        name,
        score: score,
        date: date,
        passed: newScore >= 60
    };
    array.push(newSubmission);
  }

  const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
  }

deleteSubmissionByIndex(oldSubmissions, 0);
console.log(oldSubmissions);


//4 not finished
const deleteSubmissionByName = (array, name) => {
    array.findIndex((thing) => {
        return thing.name === name;
    })
}

deleteSubmissionByName(submissions, "joe");
console.log(submissions);

//5

const editSubmission = (array, index, score) => {
    array.forEach((input) => {
        input[index] === score;
    })
    if (score < 60) {
        return false;
    } else {
        return true;
    }
}

editSubmission(submissions, 2, 70);
console.log(submissions);


// 7  deck of cards
const findLowestScore = (array) => {
    //1. assign lowestScore to first element
    let lowestScoreHolder = array[0]; // array[0] is an object
    // 2. loop through all the things
    array.forEach((submissionFromArray) => {
        //3a. check if there is a lower score
        //3b. ... IF there is: hand over the title of lowest score
        if(submissionFromArray.score < lowestScoreHolder.score){
            lowestScoreHolder = submissionFromArray;
        }
    })
    //4. once were done looping thru entire array, return lowest score
    return lowestScoreHolder;
}



