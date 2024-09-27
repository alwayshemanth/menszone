
import React, { FC } from 'react';
import { LucideProps } from 'lucide-react';
import icons from '@/lib/icons';
export interface IconProps extends LucideProps {
  icon: keyof typeof icons;
}
const Icon: FC<IconProps> = ({ icon, ...props }) => {
  const Comp = icons[icon];
  return <Comp {...props} />;
};

export default Icon;
