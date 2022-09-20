import { SelectMockProps } from '../components/Select/types';

export const SelectFilterMock: SelectMockProps = {
  id: 'fileType',
  text: 'Sort by:',
  options: [
    { value: 'js', text: 'JavaScript' },
    { value: 'ts', text: 'TypeScript' },
    { value: 'tsx', text: 'React-Typescript' },
    { value: 'java', text: 'Java' },
    { value: 'php', text: 'PHP' },
    { value: 'go', text: 'GO' },
  ],
};

export const SelectNumberOfResultsMock: SelectMockProps = {
  id: 'numberOfResults',
  text: 'Number of results:',
  options: [
    { value: '10', text: '10' },
    { value: '25', text: '20' },
    { value: '50', text: '25' },
    { value: '100', text: '100' },
  ],
};
