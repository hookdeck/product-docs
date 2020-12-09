---
id: using-the-api
title: Using the API
---

Instead of using Hookdeck's UI, you can leverage the REST API. Everything done in the UI can be done programmatically.

[Hookdeck's API documentation](https://docs.hookdeck.io)

## How to use the API

It's considered best practice to configure your webhook connections with the API. Many features, like the [`Connection Event Filters`](connection-filters) can be version controlled within your code when creating and updating connections from your server. It's also very useful to integrate Hookdeck in your CD & CI workflow

### Examples

The following examples are in Javascript using **Axios** for HTTP requests.

#### Creating a connection

When starting your server, you would want to make sure your webhook endpoints are properly configured in Hookdeck. You can programmatically create your connection to do so.

```javascript
Axios.post("https://api.hookdeck.io/webhooks", {
  auth: {
    user: "REPLACE_WITH_API_KEY",
  },
  data: {
    alias: "my-api-prod",
    // Using an alias will make the request indempotent, it's completely fine to create the same connection over and over again.
    source: {
      label: "Github",
      alias: "github-prod",
    },
    destination: {
      label: "My API",
      alias: "my-api-prod",
      url: ENDPOINT_URL,
    },
  },
});
```

#### Version control your Event Filters

[`Connection Event Filters`](connection-filters) are a powerful feature of Hookdeck to only receive meaningful events.

```javascript
// Receive only events when Shopify product inventory is now 0 (product sold out)
Axios.post("https://api.hookdeck.io/webhooks/:YOUR_WEBHOOK_ID", {
  auth: {
    user: "REPLACE_WITH_API_KEY",
  },
  data: {
    filters: {
      body: {
        type: "product/updated",
        variants: {
          inventory_quantity: 0,
          old_inventory_quantity: {
            $gte: 0,
          },
        },
      },
    },
  },
});
```
