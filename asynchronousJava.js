// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'Alice' };
        callback(data);
    }, 1000);
}

fetchData(data => {
    console.log(data); // { name: 'Alice' }
});

// Promises
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Bob' };
            resolve(data);
        }, 1000);
    });
}

fetchDataPromise()
    .then(data => console.log(data)) // { name: 'Bob' }
    .catch(error => console.error(error));


// Async and Await
async function getData() {
    try {
        const data = await fetchDataPromise();
        console.log(data); // { name: 'Carol' }
    } catch (error) {
        console.error(error);
    }
}

getData();