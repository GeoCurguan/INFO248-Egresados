// Import CSS GLOBAL
import "@/styles/globals.css";
// Import USER AUTH
import { MyAuthContext } from "@/context/MyAuthContext";

// Import Components
import NavLayout from "@/components/navigation/navLayout";

// Import Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </NavLayout>
    </MyAuthContext>
  );
}
