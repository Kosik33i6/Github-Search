import axios from 'axios';
import { FetchFilesType } from '../../types/types';

const basicUrl = process.env.REACT_APP_GITHUB_API_SEARCH_CODE_BASE_URL as string;
const filterUrlPartial = process.env.REACT_APP_GITHUB_API_SEARCH_CODE_FILTER_URL as string;
const repoUrlPartial = process.env.REACT_APP_GITHUB_API_SEARCH_CODE_REPO_URL as string;
const repoUrlPartialPage = process.env.REACT_APP_GITHUB_API_SEARCH_PAGE as string;
const repoUrlPartialPerPage = process.env.REACT_APP_GITHUB_API_SEARCH_PER_PAGE as string;

export const fetchFilesData: FetchFilesType = async ({
  phrase,
  user,
  fileType,
  currentPage,
  resultQuantity,
}) => {
  const result = await axios.get(
    `${basicUrl}${phrase}${filterUrlPartial}${fileType}${repoUrlPartial}${user}${repoUrlPartialPage}${currentPage}${repoUrlPartialPerPage}${resultQuantity}`,
  );
  return result;
};
