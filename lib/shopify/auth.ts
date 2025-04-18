import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "orangecommerce1.myshopify.com"
const publicAccessToken = process.env.SHOPIFY_PUBLIC_TOKEN
const privateAccessToken = process.env.SHOPIFY_PRIVATE_TOKEN
const apiVersion = '2024-04'; // the most recent api version.

export const client = createStorefrontApiClient({
  storeDomain,
  publicAccessToken,
  privateAccessToken,
  apiVersion,
});
