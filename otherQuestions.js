// 1. power of 3
const powerOf3 = (n) => {
    if (n < 1) {
        return false
    }
    while (n % 3 == 0) {
        n /= 3
    }
    return n == 1
}
// console.log(powerOf3(1))

// 2. find the smallest missing positive integer
const findSmallest = (arr) => {
    if (!arr.includes(1)) return 1;
    return arr.filter(num => num > 0).sort((a, b) => a - b).reduce((acc, cur) => {
        return acc === cur ? cur + 1 : acc
    }, 1)
}

// console.log(findSmallest([3,4,-1,1]));

// 3. return an array of the non-overlapping intervals that cover all the intervals in the input.
const mergeIntervals = (intervals) => {
    if (intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0])

    let previous = intervals[0];
    const result_arr = [];

    for (let i = 1; i < intervals.length; i++) {
        if (previous[1] >= intervals[i][0]) {
            previous = [previous[0], Math.max(previous[1], intervals[i][1])]
        } else {
            result_arr.push(previous);
            previous = intervals[i];
        }
    }

    result_arr.push(previous);

    return result_arr;
};

// const intervals = [[1,3],[2,6],[8,10],[15,18]];
// console.log(mergeIntervals(intervals));