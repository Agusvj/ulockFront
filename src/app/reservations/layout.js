import "../globals.css";
import Navbar from "../components/layout/Navbar.js";
import Footer from "../components/layout/Footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
