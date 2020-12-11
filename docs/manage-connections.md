---
id: manage-connections
title: Managing Connections
description: How to manage webhook connection in Hookdeck
keywords:
  - webhook connection
---

Webhook connections are used to connect a [`Source`](sources) and a [`Destination`](destinations). By creating a connection you tell Hookdeck who will be sending the webhook events and where you wish them to be sent.

:::info
The number of connections you can have is based on your pricing plan. Each account, along with the free tier has 3 free connections included.
:::

## Browsing your connections

Connections are listed under the [_Connections_](https://dashboard.hookdeck.io/webhooks) page of your dashboard.

Connections are grouped by [`Source`](sources) and listed below each of your sources.

![connections-list](../static/img/connections/connections-list.png)

Each connection can be individually edited, with the options menu.

## Create a connection

Connections can be created with the **_Create_** button at the top of the page or by adding a connection to a [`Source`](sources) via the **_Add_** button bellow a [`Source`](sources).

![connection-create](../static/img/connections/connection-create.png)

The fields for creating a new webhook connection are:

| Field                         | Description                                                          | Required |
| ----------------------------- | -------------------------------------------------------------------- | -------- |
| [`Source`](sources)           | You can select an already existing source or create a new one        | true     |
| [`Destination`](destinations) | You can select an already existing destination or create a new one   | true     |
| [`Ruleset`](rulesets)         | If left empty it will default to `Default Ruleset`                   | false    |
| Label                         | If left empty it will default to `Source Label -> Destination Label` | false    |
| Alias                         | A human friendly unique ID to make API calls idempotent              | false    |

If your connection uses a new [`Source`](sources), you will be provided with a unique URL to copy and paste in your [`Source`](sources). Otherwise, your [`Source`](sources) has been set up, webhook events will now be sent to your configured [`Destination`](destinations).

:::info
Every connection with the same [`Source`](sources) uses the same URL to receive events. This means you can have a single URL to send events to multiple destinations.
:::

:::tip
You can also use a URL specific to your `Connection` rather than your [`Source`](sources) by appending your `webhook_id` to the event URL -> `https://events.hookdeck.io/e/WEBHOOK_ID`. We generally do not recommend doing this but it could be useful in some use cases.
:::

## Update a connection

A connection can be updated via the options menu. Every property of a webhook connection can be updated.

![connection-update](../static/img/connections/connection-update.png)

:::warning
Changing your connection [`Source`](sources) will also change the webhook URL since the URL is bound to the [`Source`](sources) not the connection itself. If you are creating a new source, make sure to set up this new webhook URL.
:::

## Delete a connection

Currently, for technical reasons, connections cannot be deleted. We generally recommend reusing a connection that's no longer useful. The options to archive / delete webhooks will be added in a future release.

:::info
If you absolutely need a connection removed, please contact us and we will take care of it.
:::

## Best Practices

A question that often comes up is "how to structure your connection?". There is no 'incorrect' approach. Here are two patterns that could best fit your use case.

### Connection per use case

You can structure your connections to map to a specific use case. For example, a webhook labeled `Shopify Order → Create Gift Card` would be used to describe a webhook for the Shopify webhook topic `order/created` and an endpoint on your service that executes the `createGiftCard` method (ie: https://my-api.com/webhooks/createGiftCard)

Since Hookdeck provides a single URL for each [`Source`](sources), you can create as many destinations for that source without adding the overhead of managing multiple webhook URL.

This approach is very convenient to help you troubleshoot issues and monitor events since it gives Hookdeck more information about the context of those webhook events.

Additionally, if you are worried about getting irrelevant events to your endpoint, you can also apply a filter to the connection. For example, we could set a filter to only receive orders that contain a Gift Card.

```json
{
  "items": {
    "type": "Gift"
  }
}
```

:::tip
When in doubt, we recommend taking this approach.
:::

### Connection per service

The alternative approach is to create a connection per service. You could set a connection labeled `Shopify → My API` with a [`Destination`](destinations) URL of `https://my-api.com/webhooks/shopify`. In this case, you would handle the routing to different methods within your API based on the content of the webhook.

The benefit of this approach is that you tend to have fewer connections but the tradeoff is losing a level of granularity within Hookdeck.
