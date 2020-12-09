---
id: get-started
title: Get Started
---

## Sign up

Create your account at https://dashboard.hookdeck.io/signup

We support authentication by SSO with `Google` and `Github` along with passwordless sign in by `Email`

## Create your workspace

Upon signing up you will be prompted to create your first `Deck` which is commonly referred to as `Workspace`.

Enter your Deck name and fill in the form.

---

## Create a webhook connection

Here are two ways to create a webhook connection:

- Using the onboarding process (https://dashboard.hookdeck.io/onboarding)
- Using the API

:::note
For our example project, we will be using the first method by leveraging the right-hand side of the screen to create  [`Source`](sources), a [`Destination`](destinations), and a ruleset.
:::

The onboarding will guide you through creating your first webhook connection.

### Create A Source

A [`Source`](sources) is a representation of the service you are planning on receiving your webhooks from. That could be Shopify, Github, Olark, Stripe, or any other service.

_For our example project, we will create a Github Source._

![create-source](../static/img/introduction/create-source.png)

### Create a Destination

A [`Destination`](destinations) is a representation of your own API where the webhooks will be delivered. Each destination requires an HTTP URL that will receive a POST request with a JSON body payload. Each webhook event also contains Hookdeck metadata.

_For our example project, we will create a Hookdeck Mock Destination._

![create-destination](../static/img/introduction/create-destination.png)

### Create a Ruleset

A ruleset is a reusable set of configurations to set the retry logic and alert logic for any event associated with a webhook.

- The retry logic consists of a `retry count` and a `retry interval`. The `retry count` is the number of automatic retry for a failed event and the `retry interval` is the time between each automatic retry.
- The alert logic uses the `alert strategy` and the `alert interval`. The `alert strategy` defines the condition for which you wish to receive an email alert and the `alert interval` is the minimum time between each email alert.

:::info
Each workspace has a Default Ruleset that's configured with sensible defaults.
:::

_For our example project, we will use the Default Ruleset that will retry every hour minutes up to 5 times. It will send an email alert for the last failure, with up to 1 email per hour._

![create-ruleset](../static/img/introduction/create-ruleset.png)


## Update the endpoint in the Source

Hookdeck generates a unique URL for each [`Source`](sources). Replace your current endpoint in your [`Source`](sources) with Hookdeck's URL.

_For our example project, I will update the URL in the config of my GitHub webhook._

![copy-url](../static/img/introduction/copy-url.png)

_Github Webhooks UI_

![paste-url-github](../static/img/introduction/github-url.png)

---

## Validate the connection

After replacing the endpoint for Hookdeck's URL. Trigger an action in your source to validate the webhook connection.

:::info
You can send a test event from Hookdeck's dashboard
:::

_Our first event! 🎉_

![Hookdeck_Event_Test](../static/img/introduction/hookdeck-test-event.png)

---

## Congratulations!

You created your first webhook connection. You now have a reliable webhook infrastructure along with full visibility on incoming calls and tools to troubleshoot errors. You can sit back while Hookdeck safely handles and delivers your webhooks.

:::tip
You can now create as many connections as you want with the Dashboard or the API
:::
