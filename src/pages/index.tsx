import Lottie from 'react-lottie';
import animationData from '@/lotties/data-management-2.json';
import { CustomConnnectButton } from '@/components/CustomConnectButton';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function LoginPage() {
  const { status } = useAccount();

  return (
    <main className="h-screen w-screen bg-primary">
      <div className="max-w-screen-xl mx-auto p-8 h-full flex flex-col items-center justify-center md:flex-row gap-8 ">
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-8">
          <img src="/logo.png" alt="Bondly logo" className="w-3/4" />
          <p className="text-2xl text-center">Your management system for the decentralized world</p>
          <CustomConnnectButton></CustomConnnectButton>
          {status === 'connected' && (
            <Link href="/home" className="bg-gray-800 px-4 py-2 rounded-md block">
              Go to Home
            </Link>
          )}
        </div>
        <div className="pointer-events-none md:w-1/2 flex justify-center items-center">
          <div className="w-96 aspect-square">
            <Lottie options={defaultOptions}></Lottie>
          </div>
        </div>
      </div>
    </main>
  );
}
