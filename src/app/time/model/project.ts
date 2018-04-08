import { Topic } from './topic';
export interface Project {
  title: string;
  jira: string;
  topics: Array<Topic>;
}
