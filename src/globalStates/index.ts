import { atom } from 'jotai';
import { IFile, ITab } from '../interfaces';
import { InitialFile, InitialFileTab } from '../config/config';

export const filesAtom = atom<IFile[]>([InitialFile]);

export const tabsAtom = atom<ITab[]>([InitialFileTab]);
