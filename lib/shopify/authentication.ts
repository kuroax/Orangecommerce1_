import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const publicAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = '2025-04'; // the most recent api version.

if (!storeDomain || !publicAccessToken) {
  throw new Error(
    'Credentials are not valid'
  );
}

export const client = createStorefrontApiClient({
  storeDomain,
  publicAccessToken,
  apiVersion,
});

