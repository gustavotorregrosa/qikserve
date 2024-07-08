import { AppStore, makeStore } from "@/store";
import "@/styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from "next/app";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  
  const storeRef = useRef<AppStore>()
  if(!storeRef.current){
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}><Component {...pageProps} /></Provider>;
}
