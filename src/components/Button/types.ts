export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  icon?: string;
  children: string;
  handleClick?: () => void;
};
