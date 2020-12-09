---
id: async-vs-sync
title: Sync versus Async handling
---

It's common knowledge that you should not take action immediately when receiving webhooks and differ processing asynchronously via a queue. However, that's precisely why we are building Hookdeck. With Hookdeck you can perform operations directly upon receiving an event. We allow for "up to a 30 seconds timeout" for your operations so it's safe to take action synchronously. Implementing a queue on top of the events received from Hookdeck is considered to be redundant. You will find Hookdeck most useful when performing processing synchronously and returning a representative response and HTTP status code based on what occurred on your server.
