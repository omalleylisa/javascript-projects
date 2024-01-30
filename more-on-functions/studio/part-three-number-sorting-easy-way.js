//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

let nums1A = [5, 10, 2, 42];
let nums2A = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3A = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

nums1A.sort(function(a, b) {
    return a - b;
});
nums2A.sort(function(a, b) {
    return a - b;
});
nums3A.sort(function(a, b) {
    return a - b;
});

console.log("Ascending Order:");
console.log("nums1A:", nums1A);
console.log("nums2A:", nums2A);
console.log("nums3A:", nums3A);

//Sort each array in decending order.
let nums1B = [5, 10, 2, 42];
let nums2B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3B = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

nums1B.sort(function(a, b) {
    return b - a;
});
nums2B.sort(function(a, b) {
    return b - a;
});
nums3B.sort(function(a, b) {
    return b - a;
});

console.log("Descending Order:");
console.log("nums1B:", nums1B);
console.log("nums2B:", nums2B);
console.log("nums3B:", nums3B);