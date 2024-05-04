import { atomWithStorage } from 'jotai/utils';

export const nameAtom = atomWithStorage<string | null>('name', null);
export const unitAtom = atomWithStorage<string | null>('unit', null);
export const isLoggedInAtom = atomWithStorage<boolean>('isLoggedIn', false);
