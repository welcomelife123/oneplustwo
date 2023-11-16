//execute in integrated terminal with commad node exp10.js

const readline= require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question('Enter a number:',(number)=>{
    if(isNaN(number)){
        console.log('Please enter a valid number.');
        r1.close();
        return;
    }

    console.log(`Table of${number};`);
    for(let i=1;i<=10;i++){
        console.log(`${number} x ${i}= ${number*i}`);
    }
    r1.close();
})