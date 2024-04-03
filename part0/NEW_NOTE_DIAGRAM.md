sequenceDiagram
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->>browser: Status code 302 redirecting to /notes

Note left of server: The server add the new note

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>browser: HTML file

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: main.css

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: main.js

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: [{ "content": "hiiiiii", "date": "2024-04-02T17:58:41.811Z" }, ... ]

Note right of browser: The browser executes the callback function that renders the notes