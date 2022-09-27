import { SearchFormProps } from './types';
import { FormGroup } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { useFormSubmit } from './hooks';
import { SelectFilterMock, SelectNumberOfResultsMock } from '../../mock/Select.mock';
import styles from './style.module.scss';

const { form, formButton, formInputs, formFilters } = styles;

export const SearchForm = ({ urlState, fetchData, currentPage, handleUrl }: SearchFormProps) => {
  const { handleSubmit } = useFormSubmit(fetchData, urlState, currentPage);
  const { phrase, user, fileType, resultQuantity } = urlState;

  return (
    <form className={form} action="/search" method="get" onSubmit={handleSubmit}>
      <div className={formInputs}>
        <FormGroup
          id="phrase"
          value={phrase}
          type="text"
          iconClassName="fa-solid fa-file"
          text="Search in file:"
          handleChange={handleUrl}
        />
        <FormGroup
          id="user"
          value={user}
          type="text"
          iconClassName="fa-solid fa-user"
          text="User Name:"
          handleChange={handleUrl}
        />
      </div>
      <div className={formFilters}>
        <Select {...SelectNumberOfResultsMock} value={resultQuantity} handleChange={handleUrl} />
        <Select {...SelectFilterMock} value={fileType} handleChange={handleUrl} />
      </div>
      <div className={formButton}>
        <Button type="submit" icon="fa-solid fa-magnifying-glass">
          Search
        </Button>
      </div>
    </form>
  );
};
