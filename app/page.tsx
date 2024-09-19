import { ProductList } from "./components/productList";

export default async function Home() {
  const url = process.env.PRODUCTS_API || '';
  const res = await fetch(url, {
    cache: 'no-store'
  });
  const products = await res.json();

  return (
    <>
      <nav>here nav</nav>
      <main>
        <ProductList products={products} />
      </main>
    </>
  );
}
