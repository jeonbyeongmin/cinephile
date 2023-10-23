import { ThreadTabs } from '@/app/(pages)/profile/[id]/_components/thread-tabs';
import { Avatar } from '@/components';
import { css } from '@/styled-system/css';

export default function ProfilePage() {
  return (
    <>
      <div className={css({ p: 3 })}>
        <Avatar
          src=""
          alt="user"
          size="2xl"
          variant="outline"
          className={css({
            my: 5,
          })}
        />
        <div className={css({ p: 2 })}>
          <p className={css({ fontSize: 'xl', fontWeight: 'bold', lineClamp: 1 })}>전병민</p>
          <p className={css({ color: 'gray.400' })}>블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라</p>
        </div>
      </div>

      <ThreadTabs />
    </>
  );
}
