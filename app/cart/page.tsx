import { Header } from "../components/header";
import { ShoppingCart } from "../components/shoppingCart/ShoppingCart";

const CartPage = () => {
    return (
        <>
            <Header />
            <main>
                <section className="container md:py-20 py-10 flex flex-col gap-5">
                    <h1 className="text-2xl">Your Shopping Cart</h1>
                    <ShoppingCart />
                    <a href="/" className="w-fit self-center text-white bg-[#8a89c7] hover:bg-[#7574aa] px-8 py-5 rounded-xl">GO TO SHOPPING</a>
                </section>
            </main>
        </>
    );
};

export default CartPage;
