import { Header } from "../components/header";
import { ShoppingCart } from "../components/shoppingCart/ShoppingCart";

const PRODUCTS = [
    { id: 1, count: 2, name: 'Mens Cotton Jacket', price: 111.5 },
    { id: 2, count: 1, name: 'Mens Casual Shirt', price: 34.5 },
    { id: 2, count: 2, name: 'Product 3', price: 22.30 },
];

const CartPage = () => {
    return (
        <>
            <Header />
            <main>
                <section className="container md:py-20 py-10 flex flex-col gap-5">
                    <h1 className="text-2xl">Your Shopping Cart</h1>
                    <ShoppingCart products={PRODUCTS} />
                    <a href="/" className="w-fit self-center text-white bg-[#8a89c7] hover:bg-[#7574aa] px-8 py-5 rounded-xl">GO TO SHOPPING</a>
                </section>
            </main>
        </>
    );
};

export default CartPage;
