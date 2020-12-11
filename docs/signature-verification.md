---
id: signature-verification
title: Signature Verification
description: Signature Verification in Hookdeck
keywords:
  - webhook signature verification
---

As of right now, Hookdeck does not verify the webhook signature. You should perform the verification yourself. Each provider has their own approach to sign their request and the correct approach can be found in their documentation. Signature verification is critical to ensure bad actors are not causing side effects in your systems by sending forged requests to your webhook endpoints. Hookdeck only appends headers to the request headers. The original headers from the provider remain available to perform the verification.

:::info
In the future, we plan for Hookdeck to help you with verification.
:::
