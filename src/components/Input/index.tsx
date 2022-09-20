import { FormGroupProps } from './types';

import styles from './style.module.scss';

const { wrapper, wrapperInput, wrapperLabel, label, icon, input } = styles;

export const FormGroup = ({ id, type, text, value, iconClassName, handleChange }: FormGroupProps) => {
  return (
    <div className={wrapper}>
      <div className={wrapperLabel}>
        <label className={label} htmlFor={id}>
          {text}
        </label>
      </div>
      <div className={wrapperInput}>
        <input
          className={input}
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={handleChange}
          required
          min={1}
          max={100}
        />
        <i className={`${iconClassName} ${icon}`}></i>
      </div>
    </div>
  );
};
