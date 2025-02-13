export default async function ProductDetails ({
  params,
}: {
  params: Promise<{ ProductId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Details about the product {productId}</h1>
} 


/*export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <div>My Post: {slug}</div>
}*/
