import Header from '@/app/(main)/components/Header';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
