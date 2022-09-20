export type SelectMockProps = {
  id: string;
  text: string;
  options: { [key: string]: string }[];
};

export interface SelectProps extends SelectMockProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
