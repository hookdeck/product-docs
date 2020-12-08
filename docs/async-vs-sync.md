---
id: async-vs-sync
title: Sync versus Async handling
---

It's common knowledge that you should not take action immediately when receiving webhooks and differ processing asyncronisly via a queue. However, that's precisely why we are building Hookdeck. With Hookdeck you can perform operations directly upon receiving an event. We allow for up to a 30 seconds timeout for your operations and it's safe to take action syncronously. Implementing a queue on top of the events received from hookdeck would be redundant. You will find Hookdeck most useful when performing processing syncronously and returning representative response and HTTP status code of what occured on your server.
