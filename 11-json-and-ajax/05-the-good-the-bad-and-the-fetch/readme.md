# Differences between XMLHttpRequest and Fetch API with practical examples

## Introduction

`XMLHttpRequest` (XHR) has long been the standard method for making asynchronous HTTP requests in browsers. However, with the introduction of the `Fetch API`, developers now have access to a more modern, promise-based syntax that improves readability, maintainability, and error handling.

### Main Differences

| Feature                     | `XMLHttpRequest`              | `fetch`                              |
| --------------------------- | ----------------------------- | ------------------------------------ |
| Syntax                      | Verbose, callback-based       | Concise, promise-based               |
| Promise support             | No                            | Yes                                  |
| Data access                 | `responseText`, `responseXML` | `response.json()`, `response.text()` |
| Event handling              | `onload`, `onerror`, etc.     | `.then()`, `.catch()`                |
| Advanced CORS support       | Limited                       | Better handling                      |

---

## Examples: converting from XHR to `fetch`

### 1. Simple GET request with JSON parsing

**Code with XMLHttpRequest:**

```js
// instantiate a new request
const request = new XMLHttpRequest();
const endpoint = 'https://fakeapi.example.com/data';
// add event listeners
request.addEventListener('load', function () {
 // transform a string into a usable object
 console.log(JSON.parse(request.responseText));
});
// prepare the request
request.open('GET', endpoint, true); // third parameter makes an asynchronous request (default)
request.setRequestHeader('Content-type', 'application/json'); // not needed for GET requests
// send the request
request.send();
```

**Equivalent with Fetch:**

```js
const endpoint = 'https://fakeapi.example.com/data';
fetch(endpoint)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Errore:', error));
```

**Explanation:**
The Fetch API uses promises and a much simpler syntax. You do not need to set headers for a basic GET request. The `.json()` method parses the response body as JSON and returns a promise. Error handling is done with `.catch()`. This makes the code more readable and easier to maintain.

---

### 2. GET with status check and error handling

**Code with XMLHttpRequest:**

```js
// instantiate a new request
const request = new XMLHttpRequest();
const endpoint = 'https://fake.service.com/username?id=some-unique-id';
// prepare the request
request.open('GET', endpoint);
// shortcut for addEventListener with 'load' event
request.onload = function () {
 if (request.status === 200) {
 console.log("User's name is " + request.responseText);
 } else {
 console.log('Request failed. Returned status of ' + request.status);
 }
};
// send the request
request.send();
```

**Equivalent with Fetch:**

```js
const endpoint = 'https://fake.service.com/username?id=some-unique-id';
fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed. Returned status of ' + response.status);
    }
    return response.text();
  })
  .then(text => console.log("User's name is " + text))
  .catch(error => console.error(error));
```

**Explanation:**
With Fetch, you must check `response.ok` to handle HTTP errors, since fetch only rejects on network errors. The `.text()` method is used for plain text responses. Error handling is unified with `.catch()` for both HTTP and network errors.

---

### 3. GET with `readystatechange`

**Code with XMLHttpRequest:**

```js
const request = new XMLHttpRequest();
const method = 'GET';
const endpoint = 'https://developer.mozilla.org/';
request.open(method, endpoint);
request.onreadystatechange = function () {
  if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
    console.log(request.responseText);
  }
};
request.send();
```

**Equivalent with Fetch:**

```js
const endpoint = 'https://developer.mozilla.org/';
fetch(endpoint)
  .then(response => {
    if (!response.ok) throw new Error('Errore nella richiesta');
    return response.text();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**Explanation:**
Fetch does not use `readyState` or event listeners. The promise resolves when the response is ready, and you only need to check `response.ok` for HTTP errors. This makes the code more concise and easier to follow.

---

### 4. PUT with JSON payload

**Code with XMLHttpRequest:**

```js
const request = new XMLHttpRequest();
const endpoint = 'https://fake.service.com/user/1234';
const payload = { name: 'John Smith', age: 34 };
// prepare the request - specifying the content type and encoding
request.open('PUT', endpoint);
request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
request.onload = function () {
 if (request.status === 200) {
 let userInfo = JSON.parse(request.responseText);
 }
};
request.send(JSON.stringify(payload));
```

**Equivalent with Fetch:**

```js
const endpoint = 'https://fake.service.com/user/1234';
const payload = { name: 'John Smith', age: 34 };

fetch(endpoint, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: JSON.stringify(payload)
})
  .then(response => {
    if (!response.ok) throw new Error('Errore nella richiesta');
    return response.json();
  })
  .then(userInfo => {
    // usare userInfo
  })
  .catch(error => console.error(error));
```

**Explanation:**
With Fetch, you specify the HTTP method, headers, and body in an options object. The body must be a string for JSON, so you use `JSON.stringify`. The response is parsed with `.json()`. Error handling is again unified with `.catch()`.

---

### 5. GET with network error handling

**Code with XMLHttpRequest:**

```js
const request = new XMLHttpRequest();
request.open('GET', endpoint);
request.onload = function () {
  if (request.status === 200) {
    // do something useful with request
  } else {
    console.error("Request didn't load successfully. Error code:", request.statusText);
  }
};
request.onerror = function () {
  console.error('Network error');
};
request.send();
```

**Equivalent with Fetch:**

```js
fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error("Request didn't load successfully. Error code: " + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    // do something useful with data
  })
  .catch(error => console.error('Network or HTTP error:', error));
```

**Explanation:**
Fetch only rejects the promise on network errors, not on HTTP errors. Always check `response.ok` for HTTP status. Use `.catch()` for network or other errors. This approach centralizes error handling and makes the code more robust.

---

## Conclusion

Using the Fetch API improves clarity and error handling in modern HTTP requests. Unless you need to support very old browsers, it's recommended to prefer `fetch()` over `XMLHttpRequest` for any new implementation.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)