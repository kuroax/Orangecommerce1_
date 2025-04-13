import { NextResponse } from "next/server"

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN
  const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_TOKEN

  // Simple query to get shop information
  const query = `
    query {
      shop {
        name
        primaryDomain {
          url
        }
      }
    }
  `

  try {
    const response = await fetch(`https://${domain}/api/2023-07/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-SHOPIFY_PUBLIC_TOKEN": storefrontAccessToken,
      },
      body: JSON.stringify({ query }),
    })

    const data = await response.json()

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Shopify",
      shop: data.data.shop,
    })
  } catch (error) {
    console.error("Error connecting to Shopify:", error)
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
