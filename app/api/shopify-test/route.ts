import { NextResponse } from "next/server"
import * as ShopifyAuth from "@/lib/shopify/authentication"

export async function GET() {
  try {
    // Test if we can access the authentication module
    const authStatus = {
      moduleLoaded: !!ShopifyAuth,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      shopifyVariables: {
        apiKeyExists: !!process.env.SHOPIFY_API_KEY,
        apiSecretExists: !!process.env.SHOPIFY_API_SECRET_KEY,
        shopifyStoreExists: !!process.env.SHOPIFY_STORE_DOMAIN,
      },
    }

    return NextResponse.json({
      status: "success",
      message: "Shopify authentication module loaded successfully",
      authStatus,
    })
  } catch (error) {
    console.error("Error testing Shopify authentication:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to load Shopify authentication module",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
