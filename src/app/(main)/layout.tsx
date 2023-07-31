import Header from '@/app/(main)/components/Header';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="h-full">
      <Header />
      {children}
    </div>
  );
}
