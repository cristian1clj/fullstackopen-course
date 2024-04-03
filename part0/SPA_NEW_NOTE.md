```mermaid
sequenceDiagram
participant browser
participant server
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->>browser: Status code 201
Note left of server: The server add the new note
Note right of browser: Re-rendered the notes list
```