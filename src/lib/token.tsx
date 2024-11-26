import {create} from 'zustand';

interface TokenState {
    token: string;
    setToken: (newToken: string) => void;
}

// Crear el store
export const useStoreToken = create<TokenState>((set) => ({
    token: '', // Valor inicial
    setToken: (newToken) => set({ token: newToken }),
}));

interface LoginState {
    login: boolean;
    setLogin: (newLogin: boolean) => void;
}

export const useStoreLogin = create<LoginState>((set) => ({
    login: false, // Valor inicial
    setLogin: (newLogin) => set({ login: newLogin }),
}));