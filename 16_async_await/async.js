async function cook(){
    return"currently i am cooking"
}

console.log(cook())

function play(){
    return Promise.resolve("i am playing")
}

console.log(play())