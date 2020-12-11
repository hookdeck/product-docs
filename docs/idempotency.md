---
id: idempotency
title: Implementing Idempotency
description: How to manage idempotency with Hookdeck
keywords:
  - webhook idempotency
---

Most webhooks providers operate on a _at least once_ approach when a webhook event can be attempted more than once (even if it was successful). Hookdeck will identify those events as possible "duplicate" but will still deliver them to you (we plan on giving you the ability to control this in the future). We also operate on a _at least once_ delivery approach. This means that your API should make sure that any action it takes with an event is idempotent.
