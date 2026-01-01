import { nanoid } from 'nanoid';
import type { Page } from './types';

export const createPage = () => {
  const slug = nanoid();
  const id = nanoid();

  const page: Page = {
    title: "Untitled",
    id,
    slug,
    nodes: [],
    cover: "OIP-3568889237.jpeg"
  }
  return page;
}