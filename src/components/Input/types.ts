export type FormGroupProps = {
  id: string;
  type: string;
  text: string;
  value: string;
  iconClassName: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
