const Receb = (num) => {
    if(isNaN(num)){
        return num;
}else if(num%3 !== 0 && num%5 !== 0){
    return num;
}else if(num%3 === 0 && num%5 === 0){
    return 'FizzBuzz';
}else if(num%3 ===0){
    return 'Buzz';
}else{
    return 'Fizz';
}
}
for(let i = 0;i<=100;i++){
    console.log(i,Receb(i));
}