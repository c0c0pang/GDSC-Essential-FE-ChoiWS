import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" style={{ height: '100%' }}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
