import { Cart, Logo } from "../icons"

export function Header() {

    return (
        <nav className="bg-[#bbc0dd]">
            <div className='container flex justify-between py-2'><Logo /><Cart className="h-16" /></div>
        </nav>
    )
}
