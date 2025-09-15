import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import Sidebar from "@/components/base/Sidebar"; // Importa tu Sidebar

function LayoutWithFooter({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar /> {/* Sidebar incluido */}
      {children}
      <Footer />
    </>
  );
}

function LayoutWithoutFooter({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar /> {/* Sidebar incluido */}
      {children}
      {/* No hay Footer */}
    </>
  );
}

export { LayoutWithFooter, LayoutWithoutFooter };
