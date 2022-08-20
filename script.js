let result ="";

for (let i = 0 ; i < 10; i++){
    for (let j = 0; j < i ; j++){
        result+="*";
        console.log(result);
    }

}



first : for (let i = 0 ; i < 3; i++){
    console.log(`First level : ${i}`);
    for (let j = 0; j < 3 ; j++){
        console.log(`Second level : ${j}`);
        for (let k = 0; k < 3 ; k++){
            if(k===2) break first;
            console.log(`Third level : ${k}`);
        }
    }
  
}

let i =2;
while(i>=2 && i<=16){
    i++;
    if(i%2===0){
        continue;
    } else{
        console.log(i);
    }
       
}

const data = [5, 10, 'Shopping', 20, 'Homework'];

// Пишем решение вот тут
for(let i = 0; i< data.length; i++){
    if(typeof(data[i])==='string')
    {
        data[i]=`${data[i]} - done`;
    }else{
        data[i]=data[i]*2;
    }
}

console.log(data);


const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];

const lines = 5;
let exit = '';

for (let i = lines; i<lines; i++){
    for(let j = 0; j<lines-i; j++ ){
        exit+=" ";
    }
    for(let k = 0; k<i; k++ ){
        exit+="*";
    }
    exit+="\n";
}
console.log(exit);