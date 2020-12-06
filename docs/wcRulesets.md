---
id: rulesets
title: Rulesets
---

## What is a Ruleset?

The ruleset component defines the retry logic and alert logic for your webhook connection. A ruleset has a label, a retry logic and an alert logic.

The retry logic is composed of two elements:

- The **Maximum Retry Count** is number of automatic retry the event will attempt when there's a failure. The automatic retry stops when there's a successful event.
- The **Retry Interval** is the time interval between each one of the automatic retries.

The alert logic is composed of two elements:

- The **Alert Strategy** determines when Hookdeck's will send you alerts for failed events.
- The **Alert Interval** is the time interval between each alert.

:::note
Alerts are bound to a single webhook connection. You will receive multiple alerts from Hookdeck within the same time interval if you have failed events from different webhook connections.
:::

## Why a Ruleset?

Hookdeck wants to make sure you receive all your webhooks and warn you when there's an error.

Control on the retry logic means you can specify what works best for your use cases. You can stop learning every API provider's different retry logic!  
:::tip
We recommend that your high priority webhook connections have a short retry interval and a high maximum retry count.
:::

Receiving alerts in a timely manner results in a more proactive approach to troubleshooting. You don't need to wait for customer support to report an issue to be aware of a problem that will impact the client.
:::tip
You can manually replay all your failed events after fixing the issue. This can avoid accidentally forgetting a case.
:::

## Create a Destinaton

To create a Destination follow these two steps:
![Hookdeck_Create_A_Destination](../static/img/webhookConnections/wcDestination/create_a_destination_1.png)

## Edit a Destination

You can edit a Destination by following these two steps:

_Step 1_
![Hookdeck_Update_A_Destination_1](../static/img/webhookconnections/wcDestination/update_a_destination_1.png)

_Step 2_
![Hookdeck_Update_A_Destination_2](../static/img/webhookconnections/wcDestination/update_a_destination_2.png)

:::note
After editing a Destination, it will also update the Destination of linked events.
:::

## Archive a Destination

You have the option to archive a Destination you do not use anymore.

:::note
You can only archive Destination that are not linked with any webhook connections.
:::

![Hookdeck_Archive_A_Destination](../static/img/webhookconnections/wcDestination/archive_a_destination_1.png)

You can easily unarchive a Destination if you decide to want to use it again.

![Hookdeck_Unarchive_A_Destination](../static/img/webhookconnections/wcDestination/archive_a_destination_2.png)
