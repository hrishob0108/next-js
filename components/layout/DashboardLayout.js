import Navbar from "../Navbar";
import Footer from "../Footer";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="p-6">{children}</main>
      <Footer />
    </div>
  );
}
