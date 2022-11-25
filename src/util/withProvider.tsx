import React from 'react';
import { Provider } from 'mobx-react';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from '@src/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function withProvider(components: JSX.Element): JSX.Element {
  return (
    <Provider {...store}>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-right"
          containerStyle={{ borderRadius: '10px' }}
        />
        {components}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

export default withProvider;
