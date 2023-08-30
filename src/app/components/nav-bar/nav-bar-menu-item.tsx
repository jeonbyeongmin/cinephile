'use client';

import { Icon, type IconName } from '@/components/base';
import { menuItem } from '@/styled-system/recipes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarMenuItemProps {
  name: string;
  path: string;
  iconName: IconName;
}

export default function NavBarMenuItem({ name, path, iconName }: NavBarMenuItemProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={menuItem({
          active: pathname === path,
        })}
      >
        <Icon name={iconName} />
        {name}
      </Link>
    </li>
  );
}
