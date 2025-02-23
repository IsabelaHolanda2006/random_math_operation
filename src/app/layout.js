import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Random Math Operation",
  description: "A simple, fast and practical way to generate random math operations, made to you have fun and practice more math!",
  keywords: "random math operation, math, numbers, math game, github math game, operation generator",
  author: "Isabela Holanda",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col relative h-screen bg-[--color-bg] text-[--color-text] transition-colors'>
        <div className='mb-5'>
          <NavBar />
        </div>
        <div className='mb-5 flex flex-1 items-center justify-center'>

          <svg id="bg_image" xmlns="http://www.w3.org/2000/svg" width='200%' height='200%' className='fixed flex flex-1 fill-[--color-btn] -z-10'>
            <pattern id="bg-image" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="25" y="25" fontSize="20">
                + - * /
              </text>
              <animateTransform attributeName="patternTransform" by="100 100" dur="20s" repeatCount="indefinite">
              </animateTransform>
            </pattern>

            <rect width="100%" height="100%" fill="url(#bg-image)" />
          </svg>
          {children}
        </div>
      </body>
    </html>
  );
}