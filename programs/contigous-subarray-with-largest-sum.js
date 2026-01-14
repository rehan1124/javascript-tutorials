/**
 * Maximum Subarray (53): Find the contiguous subarray with the largest sum (Kadane's Algorithm/DP).
 */

function maxSubArray(givenArray) {
    let currentSum = givenArray[0], maxSum = givenArray[0];

    console.log('Given array:', givenArray);
    console.log(`Initial current sum = ${currentSum} and Max sum = ${maxSum}`);


    for (let i = 1; i < givenArray.length; i++) {
        const num = givenArray[i];
        console.log(`Pointer at index ${i} with value ${num}`);

        console.log('Comparing num with (current sum + num):', [num, currentSum + num]);
        currentSum = Math.max(num, currentSum + num);
        console.log('New current sum:', currentSum);

        console.log('Comparing max sum with current sum:', [maxSum, currentSum]);
        maxSum = Math.max(maxSum, currentSum);
        console.log('New max sum:', maxSum);
    }

    return maxSum;

}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
