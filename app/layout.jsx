import Header from "@/components/Header/Header";
import "@/styles/globals.scss";
import meda from "@/data/header.json";

export const metadata = {
  title: meda.pages.home.title,
  description: meda.pages.home.desc,
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
