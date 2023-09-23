import { atom } from 'jotai';

export const filesAtom = atom([]);
export const tabsAtom = atom([
  {
    id: '1',
    title: 'index.html',
    language: 'html',
  },
  {
    id: '2',
    title: 'style.css',
    language: 'css',
  },
  {
    id: '3',
    title: 'app.js',
    language: 'javascript',
  },
  {
    id: '4',
    title: 'main.ts',
    language: 'typescript',
  },
  {
    id: '5',
    title: 'main.py',
    language: 'python',
  },
]);
