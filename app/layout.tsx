export const metadata = {
  title: 'Soltan',
  description: 'Premium retail dashboard for Soltan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
