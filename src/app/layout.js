import './styles/globals.css';

export const metadata = {
  title: 'Ticketing App',
  description: 'A simple ticketing system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
