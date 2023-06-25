import "@/styles/globals.css";
import { MyAuthContext } from "@/context/MyAuthContext";

import NavLayout from "@/components/navigation/navLayout";

// Optimized Font
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <MyAuthContext>
      <NavLayout>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
          ,
          h1 {
            font-family: ${poppins.style.fontFamily};
            weight: 700;
          }
        `}</style>

        <Component {...pageProps} />
      </NavLayout>
    </MyAuthContext>
  );
}
