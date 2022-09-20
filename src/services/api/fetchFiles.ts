import axios from 'axios';
import { FetchFilesType } from '../../types/types';

const basicUrl = process.env.REACT_APP_GITHUB_API_SEARCH_CODE_BASE_URL as string;
const filterUrlPartial = process.env.REACT_APP_GITHUB_API_SEARCH_CODE_FILTER_URL as string;
const repoUrlPartial = process.env.REACT_APP_GITHUB_API_SEARCH_CODE_REPO_URL as string;

export const fetchFilesData: FetchFilesType = async ({ phrase, user, repo, fileType }) => {
  console.log(`${basicUrl}${phrase}${filterUrlPartial}${fileType}${repoUrlPartial}${user}/${repo}`);
  const data = await axios.get(
    `${basicUrl}${filterUrlPartial}${phrase}${fileType}${repoUrlPartial}${user}/${repo}`,
  );
  return data;
};