import "@/styles/globals.css";
import { MyAuthContext } from "@/context/MyAuthContext";

import NavLayout from "@/components/navigation/navLayout";

export default function App({ Component, pageProps }) {
  return (
    <MyAuthContext>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </MyAuthContext>
  );
}
