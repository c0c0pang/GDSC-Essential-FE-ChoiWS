import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="ko" style={{ height: '100%' }}>
      <body style={{ height: '100%' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
