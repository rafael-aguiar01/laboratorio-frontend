'use client'; 

import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { PropsWithChildren } from 'react';

export function Provider({ children }: PropsWithChildren) {
    return <ReduxProvider store={store}>{children}</ReduxProvider>; 
  }