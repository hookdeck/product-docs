---
id: event-vs-attempt
title: Events & Attempts
---

## What's an event?

A webhook event represents a webhook received from one of your sources. Events are used to keep track of all the webhooks received and their state.

- **Status**: The event status (pending, failed, or successful)
- **Event Date**: The date the event was received
- **Attempts**: The count of attempt that has been made
- **Webhook Connection**: The webhook connection the webhook event is associated with
- **Next Attempt At**: Automatically scheduled date for the next retry (attempt)

Each event also has an associated `Event Request` that contains the `Headers` and `Body` of the original webhook request.

The `Headers` is a `JSON` document and the `Body` can be a simple primitive (`boolean`, `string`, `number`, `null`) or `JSON`

:::info
If you have multiple webhook connections for a source, Hookdeck will create as many events as there are connections.
:::

## What's an attempt?

For each Event, an initial attempt is made to deliver the request to your [`Destination`](destinations). If the request is successful, the retry strategy is disabled and your event will only have a single attempt.

Alternatively, new attempts will be made over time according to your retry strategy. Any given event can have up to 50 attempts. Each attempt can be browsed within the Event List by clicking an event or by going directly to the event page.

- **Status**: The attempt status (pending, failed, or successful)
- **Attempt Date**: The date the attempt was made
- **Attempt Number**: The number of the attempt (nth position) for the associated event

Each attempt also has an associated `Attempt Response` that contains the `HTTP Status` and `Body` of the server response.

![Attempts example](../static/img/events/attempts-example.png)


### Error codes

If your destination was unreachable or failed to respond you will see the `ERR` code. A more specific error code can be found by clicking on the event.

The possible codes are:

- **CONNECTION_REFUSED**: The request to your destination could not be made because the connection was refused.
- **CONNECTION_RESET**: The request to your destination could not be made because the connection was forcibly closed by your server.
- **NOT_FOUND**: The request to your destination could not be made because the domain or host was not found or unavailable.
- **TIMEOUT**: The request to your destination exceeded the 30 seconds timeout. The request might have still been processed by your destination.
- **UNKNOWN**: A uncategorized error occurred. If one of these errors is triggered, the technical team is notified and will investigate the situation.
