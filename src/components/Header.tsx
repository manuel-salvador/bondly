import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-purple-950 max-w-screen h-20 p-4 flex items-center w-full  z-20 fixed top-0 ">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center flex-1">
        <div className="flex gap-12 items-center">
          <Link href="/">
            <figure className="w-40">
              <img src="/logo.png" alt="Bondly logo" />
            </figure>
          </Link>
          <Link href="/explore" className="text-lg">
            Explore
          </Link>
        </div>
        <ConnectButton />
      </nav>
    </header>
  );
}
