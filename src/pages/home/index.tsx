import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-xl mx-auto px-4 py-14 h-screen flex flex-col gap-4">
        <header className="flex justify-between">
          <img src="/logo.png" alt="Bondly Logo" className="w-64" />
          <ConnectButton accountStatus={'address'} chainStatus={'icon'} />
        </header>
        <main className="flex-1 w-full pt-8 flex flex-col">
          <h1 className="mb-12 text-center text-pink-200 text-5xl font-semibold">Bienvenido Bondler</h1>
          <div className="flex gap-14 flex-1 px-20">
            <Link
              href="/dashboard"
              className="bg-[#5a33c4] border-[#9c7bf7] border-l-8 border-r-8 flex flex-col items-center justify-center h-full gap-6 text-center flex-1 px-4"
            >
              <figure className="w-2/3 aspect-square">
                <img src="/dashboard.png" alt="Dashboard Image" className="w-full h-full object-contain" />
              </figure>
              <h3 className="text-2xl font-bold">Dashboard</h3>
              <p className="text-lg">Display global balances and balances on all EVM blockchains</p>
            </Link>
            <Link
              href="/create"
              className="bg-[#5a33c4] border-[#9c7bf7] border-l-8 border-r-8 flex flex-col items-center justify-center h-full gap-6 text-center flex-1 px-4"
            >
              <figure className="w-2/3 aspect-square">
                <img src="/new-project.png" alt="new-project Image" className="w-full h-full object-contain" />
              </figure>
              <h3 className="text-2xl font-bold">New Project</h3>
              <p className="text-lg">{"It's time to start a new adventure"}</p>
            </Link>
            <Link
              href="/projects"
              className="bg-[#5a33c4] border-[#9c7bf7] border-l-8 border-r-8 flex flex-col items-center justify-center h-full gap-6 text-center flex-1 px-4"
            >
              <figure className="w-2/3 aspect-square">
                <img src="/projects.png" alt="projects Image" className="w-full h-full object-contain" />
              </figure>
              <h3 className="text-2xl font-bold">All Projects</h3>
              <p className="text-lg">View a detailed history of all your completed projects</p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
