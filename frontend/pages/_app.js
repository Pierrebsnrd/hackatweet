import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user'



import {persistStore, persistReducer} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

// const reducers = combineReducers({user})
const persistConfig = {key: 'hackatweet', storage };

const store = configureStore({
  // reducer: persistReducer(persistConfig, reducers),
  // middleware : (getDefaultMiddleware) => getDefaultMiddleware ({serializableCheck:false})
  reducer: {user} // à virer lors du decomment
});

// const persistor =persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> /}
        <Head>
          <title>Hackatweet</title>
        </Head>
        <Header />
      <Component {...pageProps} />
      {/ </PersistGate> */}
      <Head>
          <title>Hackatweet</title>
      </Head>
        
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;