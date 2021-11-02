# middy-basic-auth

A super minimal basic authentication middleware for use with [middy](https://github.com/middyjs/middy) in your [serverless](https://github.com/serverless/serverless)-based lambda functions.

## Install

```bash
npm install middy-basic-auth
```

## Quick Example Usage

```javascript
// src/myFunction/handler.{js,ts}

import middy from "@middy/core";
import basicAuth from "middy-basic-auth";

const myHandler = event => ({
  statusCode: 200,
  body: "This endpoint is protected with basic authentication!"
});

export const main = middy(myHandler)
  .use(basicAuth("actualUsername", "actualPassword"));
```

## Want Improvements?

PRs are welcome!