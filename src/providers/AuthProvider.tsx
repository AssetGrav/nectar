import { User } from 'firebase/auth';
import React, { createContext, useMemo, useState } from 'react';
import { db, login, logout, register } from '../firebase';
import { addDoc } from '@firebase/firestore';
import { Alert } from 'react-native';

interface IContext {
    user: User | null;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const registerHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const { user } = await register(email, password);

            await addDoc(collection(db, 'users'), {
                _id: user.uid,
                displayName: 'No name',
            });
        } catch (error: any) {
            // eslint-disable-next-line no-alert
            Alert.alert('Error reg:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            await login(email, password);
        } catch (error: any) {
            // eslint-disable-next-line no-alert
            Alert.alert('Error login:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logoutHandler = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (error: any) {
            // eslint-disable-next-line no-alert
            Alert.alert('Error logout:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const value = useMemo(() => ({}), []);
    return value;
};
