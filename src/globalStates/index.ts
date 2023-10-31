import { atom, useAtom } from 'jotai';
import { IClient, IFile, ITab } from '../interfaces';
import { InitialFile, InitialFileTab } from '../config/config';

export const filesAtom = atom<IFile[]>([InitialFile]);

export const tabsAtom = atom<ITab[]>([InitialFileTab]);

export const roomIdAtom = atom<string>('');

export const userNameAtom = atom<string>('');

export const connectedUsersAtom = atom<IClient[]>([]);

export const selectedThemeAtom = atom('light'); // Default theme

export const activeTabAtom = atom<string>('');

export const useSelectedTheme = () => useAtom(selectedThemeAtom);
