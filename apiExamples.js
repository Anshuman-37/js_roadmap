// XMLHttpRequest

// Create object
const xhr = new XMLHttpRequest();

// Opening request
xhr.open('GET', 'https://api.example.com/data', true);

// Sending the request
xhr.send();

// Handling the response
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        } else {
            console.error('Error:', xhr.statusText);
        }
    }
};

//Example: GET Request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/users', true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            console.log(users);
        } else {
            console.error('Error fetching users');
        }
    }
};

xhr.send();


// Example: POST Request
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/users', true);
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

const data = JSON.stringify({ name: 'Alice', age: 30 });

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 201) {
            console.log('User created:', JSON.parse(xhr.responseText));
        } else {
            console.error('Error creating user');
        }
    }
};

xhr.send(data);

// Fetch API

// Example: GET request
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Example: POST request
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Bob', age: 25 })
})
    .then(response => response.json())
    .then(data => console.log('User created:', data))
    .catch(error => console.error('Error:', error));

// Using Async/Await with Fetch
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

