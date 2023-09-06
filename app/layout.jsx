import Header from "@/components/Header/Header";
import "@/styles/globals.scss";
import Head from "next/head";

export const metadata = {
  title: "The Arcadia Index",
  description: "Explore and discover the world of Arcadia - The Golden Trilogy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
