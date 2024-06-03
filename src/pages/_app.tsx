import { StoreProvider } from "@/context/store";
import "@/styles/global.scss"

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
