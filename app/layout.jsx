import './globals.css';

export const metadata = {
  title: 'Manish Thota - Portfolio',
  description: 'Personal Portfolio Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
