import { SelectMockProps } from '../components/Select/types';

export const SelectMock: SelectMockProps = {
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
