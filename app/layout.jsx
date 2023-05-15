import "./globals.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Quill",
  description: "Quill management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">
        <Layout>
          <div className="mb-24">
            <Navbar />
          </div>
          <div className="mb-24">{children}</div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
