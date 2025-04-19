import { NextResponse } from "next/server"
import { shopifyFetch } from "@/lib/shopify/auth"
import { SHOP_QUERY } from "@/lib/shopify/queries"

// This route handler will test if your Shopify connection is working
export async function GET() {
  try {
    // Test the connection by fetching shop info
    const response = await shopifyFetch<{
      data: { shop: { name: string; primaryDomain: { url: string; host: string } } }
    }>({
      query: SHOP_QUERY,
    })

    if (!response || !response.data || !response.data.shop) {
      throw new Error("Invalid response from Shopify API")
    }

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Shopify",
      shop: response.data.shop,
    })
  } catch (error) {
    console.error("Error testing Shopify connection:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect to Shopify",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
