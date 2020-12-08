---
id: idempotency
title: Implementing Idempotency
---

Most webhooks providers operate on a _at least once_ approach when a webhook event can be attempted more then once, even if it was successful. Hookdeck will identify those events as possible "duplicate" but will still deliver them (we plan on giving you the control around this in the future). We also operate on a _at least once_ delivery approach. This means that your API should make sure that any action it takes with an event is idempotent.
