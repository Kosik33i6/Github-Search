import { useQuery } from 'react-query';
import { useUrlState } from '../../hooks/useUrlState';
import { fetchFilesData } from '../../services/api/fetchFiles';
import { SearchForm } from '../SearchForm';
import styles from './style.module.scss';

const { wrapper } = styles;

export const Search = () => {
  const { urlState, handleUrl } = useUrlState();
  const { phrase, user, repo, fileType } = urlState;

  const { data, status, isFetching, refetch } = useQuery(
    'filesData',
    () => fetchFilesData({ phrase, user, repo, fileType }),
    { enabled: false },
  );
  console.log(data);
  return (
    <section className={wrapper}>
      <SearchForm urlState={urlState} fetchData={refetch} handleUrl={handleUrl} />
    </section>
  );
};
