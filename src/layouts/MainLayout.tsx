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
      <main className={`min-h-screen mt-20 max-w-screen-xl mx-auto p-4 ${className ? className : ''}`}>{children}</main>
    </>
  );
}
