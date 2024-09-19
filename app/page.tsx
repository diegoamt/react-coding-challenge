import { Header } from "./components/header";
import { ProductList } from "./components/productList";

export default async function Home() {
  const url = process.env.PRODUCTS_API || '';
  const res = await fetch(url, {
    cache: 'no-store'
  });
  const products = await res.json();

  return (
    <>
      <Header isSearchVisible />
      <main className="bg-[#f5f5f5]">
        <ProductList products={products} />
      </main>
    </>
  );
}
