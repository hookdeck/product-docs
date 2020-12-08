---
id: signature-verification
title: Signature Verification
---
As of right now, Hookdeck does not verify the webhook signature, you should perform the verification yourself. Each provider has their own approach to sign their request and the correct approach can be found in their documentation. Signature verification is critical to ensure bad actors are not causing side effects in your systems by sending forged request to your webhook endpoints. Hookdeck only append headers to the request hedars and the original headers from the provider remains available to perform the verification. 

:::info
In the future, we plan for Hookdeck to help you with verification.
:::
