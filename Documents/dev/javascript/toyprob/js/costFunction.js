// https://www.codewars.com/kata/simple-linear-regression-cost-function-machine-learning/train/javascript

/*
For this Kata, you need to write a cost function J(θ1, θ2) that will calculate how good a fit a line is to the given data.

Say we are given this training set:

x | y
2 | 1
2 | 4
5 | 4
5 | 8
9 | 8
9 | 11

Cost function J is defined as,
J(θ1, θ2) = (1/2m) * (∑ sum of (h(x) - y)^2)

Hypothesis function h(x) is defined as,
h(x) = θ1 + θ2*x
m = the number of x,y pairs we have.
Let's define the above table as an array to pass into our J function.

var trainingSet = [[2, 1], [2, 4], [5, 4], [5, 8], [9, 8], [9, 11]];

The result of J(trainingSet, 0.5, 1) would be 1.625.
To find that, we first take the ∑ sum of (h(x) - y)^2 for every x,y pair in our training set.

The first one would be, ((0.5 + 2) - 1)^2 = 2.25
The second one would be, ((0.5 + 2) - 4)^2 = 2.25
The third one would be, ((0.5 + 5) - 4)^2 = 2.25
The fourth one would be, ((0.5 + 5) - 8)^2 = 6.25
The fifth one would be, ((0.5 + 9) - 8)^2 = 6.25
The sixth and final one would be, ((0.5 + 9) - 11)^2 = 0.25

The ∑ sum of these values is 19.5
Then we multiply 1/2m * 19.5, where m is 6 (number of x,y pairs in our training set) = 1.625
Therefore, J(trainingSet, 0.5, 1) = 1.625.
The result of J(trainingSet, 1, 1) should be 18/12 = 1.5.
This Kata will look for answers rounded to three decimal places.

In machine learning, we want to find the parameters θ1, θ2 that will minimize the cost function.
A result of 0 from the J(θ1, θ2) means we have a perfect fit for the data.
We can find the best θ1, θ2 by using the gradient descent algorithm, but that is out of scope for this Kata.
*/

function costFunctionJ(trainingSet, theta1, theta2)
{
  var sum = trainingSet.reduce(function(total, b) {
    return total + Math.pow( theta1 + theta2 * b[0] - b[1], 2 );
  }, 0);

  var len = trainingSet.length * 2;

  return Math.round( sum / len * 1000 ) / 1000;
};

module.exports = costFunctionJ;

// best practice
function costFunctionJ(trainingSet, theta1, theta2) {
  return Math.round(1 / (2 * trainingSet.length) * trainingSet.reduce(function(p, c) {
    return p + Math.pow(theta1 + theta2 * c[0] - c[1], 2);
  }, 0) * 1000) / 1000;
}
