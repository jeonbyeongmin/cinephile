import { Icon, IconButton } from '@/components/primitive';

export function HomeThreadButtons() {
  return (
    <>
      <IconButton
        icon={<Icon name="heart" fill="none" size={18} />}
        aria-label="like button"
        size="sm"
        variant="ghost"
        rounded="full"
      />
      <IconButton
        icon={<Icon name="reply" fill="none" size={18} />}
        aria-label="reply button"
        size="sm"
        variant="ghost"
        rounded="full"
      />
      <IconButton
        icon={<Icon name="share" fill="none" size={18} />}
        aria-label="share button"
        size="sm"
        variant="ghost"
        rounded="full"
      />
    </>
  );
}
