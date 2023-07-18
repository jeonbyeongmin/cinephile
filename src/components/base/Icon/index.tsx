import { type IconName, iconMap } from './icon-map';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, fill = 'currentColor', stroke = 'currentColor', ...rest }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent width={size} height={size} fill={fill} stroke={stroke} {...rest} />;
}
