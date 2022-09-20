import { ButtonProps } from './types';
import styles from './style.module.scss';

const { button } = styles;

export const Button = ({ type, icon, children }: ButtonProps) => (
  <button className={button} type={type}>
    {icon ? <i className={icon}></i> : null}
    {children}
  </button>
);
