// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Next.js Loading Example",
  description: "Demo of loading UI with app router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
