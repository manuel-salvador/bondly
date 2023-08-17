import { ReactNode } from 'react';
import Header from '@/components/Header';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function MainLayout({ className, children }: Props) {
  return (
    <>
      <Header />
      <main className={`min-h-screen py-20 max-w-screen-xl mx-auto px-4`}>{children}</main>
    </>
  );
}
