import { Cart, Logo } from "../icons";
import { Search } from "../search";

interface HeaderProps {
    isSearchVisible?: boolean;
}

export function Header({ isSearchVisible }: HeaderProps) {

    return (
        <nav className="bg-[#bbc0dd]">
            <div className='container flex items-center justify-between py-2'>
                <Logo />
                {isSearchVisible ? <Search placeholder="Search products ..." /> : null}
                <a href="/cart">
                    <Cart className="h-16 fill-gray-100 hover:fill-gray-200" />
                </a>
            </div>
        </nav>
    )
}
