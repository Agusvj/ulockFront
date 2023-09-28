import { Header } from "./components/Header.js";
import { Sidebar } from "./components/Sidebar.js";
import "../globals.css";

export default function DashboardAdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-400 min-h-screen">
        <Header />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
