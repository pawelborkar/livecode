import { atom } from 'jotai';

export const filesAtom = atom([
  {
    id: '1',
    title: 'index.html',
  },
  {
    id: '2',
    title: 'style.css',
  },
  {
    id: '3',
    title: 'app.js',
  },
  {
    id: '4',
    title: 'main.ts',
  },
]);

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
  // {
  //   id: '6',
  //   title: 'index.html',
  //   language: 'html',
  // },
  // {
  //   id: '7',
  //   title: 'style.css',
  //   language: 'css',
  // },
  // {
  //   id: '8',
  //   title: 'app.js',
  //   language: 'javascript',
  // },
  // {
  //   id: '9',
  //   title: 'main.ts',
  //   language: 'typescript',
  // },
  // {
  //   id: '10',
  //   title: 'main.py',
  //   language: 'python',
  // },
  // {
  //   id: '11',
  //   title: 'app.js',
  //   language: 'javascript',
  // },
  // {
  //   id: '12',
  //   title: 'main.ts',
  //   language: 'typescript',
  // },
  // {
  //   id: '13',
  //   title: 'main.py',
  //   language: 'python',
  // },
]);
