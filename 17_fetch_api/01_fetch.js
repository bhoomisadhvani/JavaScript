

// http = hyper text transfer protocol

// 5 ways
// get
// post
// patch
// put
// delete

// async / await //

async function fetchComments() {

    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/comments/1");

        const data = await res.json();

        if (!res.ok) {
            throw new Error("Failed to fetch ");
        }

        console.log("Data - 01_fetch.js:26", data);

    }
    catch (error) {

        console.log(error);

    }

}

fetchComments();


// promise //

const fetchCommentsPromise = fetch("https://jsonplaceholder.typicode.com/comments/1");

console.log("data - 01_fetch.js:44", fetchCommentsPromise);

fetchCommentsPromise.then(res => {

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();

})
.then(data => {

    console.log("Data - 01_fetch.js:57", data);

})
.catch(error => {

    console.log(error);

});