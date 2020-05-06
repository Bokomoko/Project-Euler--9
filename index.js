/*
Project Euler: Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a² + b² = c²
For example, 3² + 4² = 5² , 9 + 16 = 25 

Find Pytriplet such that a + b + c = n.
*/

function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 // mind the fors starts and ends ..
 // since a < b thus b has to be at least a+1 
 // sinca a + b + c = n means that a + b max at n - 1
  for (let a = 1; a < n-2; a++) {
    for (let b = a+1; b < n-1; b++) {
      let c = n - a - b;
      if (c > 0) {
        if (c ** 2 == a ** 2 + b ** 2) {
          return a * b * c;
        }
      }
    }
  }}

specialPythagoreanTriplet(1000);
