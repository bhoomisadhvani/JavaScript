

const num = [0, 1, 2, 3, 4, 5];

const max = (num) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum = num[i] + sum;
  }

  console.log(sum);
};

max(num)


// using another method

const total=(num)=>{
    let sum=0;

    for(let i of num){
        sum+=i;
    }

    console.log("total is - 02_find_sum.js:27",sum)

};

total(num)