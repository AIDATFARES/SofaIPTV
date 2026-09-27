export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
}

import { article01 } from './articles/article-01';
import { article02 } from './articles/article-02';
import { article03 } from './articles/article-03';
import { article04 } from './articles/article-04';
import { article05 } from './articles/article-05';
import { article06 } from './articles/article-06';
import { article07 } from './articles/article-07';
import { article08 } from './articles/article-08';
import { article09 } from './articles/article-09';
import { article10 } from './articles/article-10';
import { article11 } from './articles/article-11';
import { article12 } from './articles/article-12';
import { article13 } from './articles/article-13';

export const blogPosts: BlogPost[] = [
  article01,
  article02,
  article03,
  article04,
  article05,
  article06,
  article07,
  article08,
  article09,
  article10,
  article11,
  article12,
  article13,
];
