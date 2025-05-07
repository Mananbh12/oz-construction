import './global.css';
import  {OzNavbar} from '../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Oz - Expert in Concrete and Construction in Australia',
  description: 'Oz, your trusted partner for concrete and construction services in Australia. Discover our projects and get in touch!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OzNavbar />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <footer className="bg-gray-700 text-white py-6">
          <div className="container">
            <div className="border-t border-yellow-500 mb-4"></div>
            <div className="text-center">
              <h4 className="text-lg font-bold mb-2">Oz Construction</h4>
              <p className="text-sm">Email: info@ozmatesconcreting.com.au | Phone: +61 123 456 789</p>
              <p className="text-sm mt-2">© 2025 Oz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}