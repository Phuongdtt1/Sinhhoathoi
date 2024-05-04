import { atomWithStorage } from 'jotai/utils';

export const nameAtom = atomWithStorage<string>('name', '');
export const unitAtom = atomWithStorage<string>('unit', '');
export const isLoggedInAtom = atomWithStorage<boolean>('isLoggedIn', false);
