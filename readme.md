# extend-session

NodeJS middleware to include session data in response.

This middleware can be useful if you want to pass session data to templates.

Use with [express-session](https://github.com/expressjs/session)!

## Instalation

    $ npm install fogasl/extend-session

## API

```js
var extendSession = require("extend-session");
```

### extendSession(ns)

Where `ns` is a **string** which identifies session data inside `res.locals`. If omitted,
you can access session data via `res.locals.session`.

## Contributing

Feel free to fork. Everything is permitted.
