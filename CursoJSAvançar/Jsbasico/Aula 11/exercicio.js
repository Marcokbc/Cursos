let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]
/* 
varA1 = varA;
varA = varB;
varB = varC;
varC = varA1;
*/

console.log(varA, varB, varC);
