import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "orangecommerce1.myshopify.com"
const publicAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
const apiVersion = '2025-04'; // the most recent api version.

export const client = createStorefrontApiClient({
  storeDomain,
  publicAccessToken,
  apiVersion,
});

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string
  variables?: Record<string, any>
}): Promise<T> {
  try {
    const result = await client.request(query, { variables })

    // The API response includes data at the top level
    return result as T
  } catch (error) {
    console.error("Shopify API Error:", error)
    throw new Error("Failed to fetch data from Shopify")
  }
}