import { type IconBaseProps } from 'react-icons';
import { iconMap, type IconName } from './icon-map';

export type IconProps = IconBaseProps & {
  name: IconName;
};

export const Icon = ({ name, size = 24, color = 'currentColor', className, ...rest }: IconProps) => {
  const IconComponent = iconMap[name];
  return <IconComponent size={size} color={color} {...rest} />;
};
