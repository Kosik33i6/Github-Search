import { v4 as uuidv4 } from 'uuid';
import { SelectProps } from './types';
import styles from './style.module.scss';

const { wrapper, label, select } = styles;

export const Select = ({ id, text, options, value, handleChange }: SelectProps) => {
  return (
    <div className={wrapper}>
      <label className={label} htmlFor={id}>
        {text}
      </label>
      <select className={select} name={id} id={id} onChange={handleChange} value={value}>
        {options.map(({ value, text }) => (
          <option key={uuidv4()} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};
