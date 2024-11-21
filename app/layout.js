
import './globals.css'
export const metadata = {
  title: "InteJobs | Home",
  description: "Better Help For Returning Citizens",
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
