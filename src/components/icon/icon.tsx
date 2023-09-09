import { type IconBaseProps } from 'react-icons';
import { iconMap, type IconName } from './icon-map';

export type IconProps = IconBaseProps & {
  name: IconName;
};

export const Icon = (props: IconProps) => {
  const { name, size = 24, color = 'currentColor', ...rest } = props;
  const IconComponent = iconMap[name];

  return <IconComponent size={size} color={color} {...rest} />;
};
