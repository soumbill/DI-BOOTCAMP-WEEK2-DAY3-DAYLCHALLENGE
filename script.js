//1) Write a JavaScript program that recreates the pattern below.
let n = 10;
let string = "";
for (let i = 1; i <= n; i++) {
    string += "*".repeat(i);
    string += "\n";
}
console.log(string);

//2) Do this challenge twice: first by using one loop, then by using two nested for loops

const width = 13;
for(let i = 0; i < width; i++)
{
    let line = "";
    
    for(let j = 0; j <= i; j++)
    {
        line += "*";
    }
    console.log(line);
}