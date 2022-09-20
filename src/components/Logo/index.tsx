import { LogoProps } from './types';
import styles from './style.module.scss';

const { wrapper } = styles;

export const Logo = ({ href, className }: LogoProps) => {
  return (
    <div className={wrapper}>
      <a href={href}>
        <i className={className}></i>
      </a>
    </div>
  );
};
