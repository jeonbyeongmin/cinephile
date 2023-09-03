import { HomeHeader } from '@/app/(pages)/home/components/header';
import { HomeMain } from '@/app/(pages)/home/components/main';
import { css } from '@/styled-system/css';

export default function HomePage() {
  return (
    <div className={css({ w: 'full' })}>
      <HomeHeader />
      <HomeMain />
    </div>
  );
}
