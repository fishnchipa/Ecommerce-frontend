
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>


      <html lang="en">
        
        <body>

          {children}
          
        </body>
      </html>
    </RootLayout>
  )
}
