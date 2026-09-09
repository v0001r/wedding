import "./globals.css";

export const metadata = {
  title: "Dilip & Gayatri | Wedding",
  description: "Wedding celebration of Dilip and Gayatri, December 2026 in Bhilai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}