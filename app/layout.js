import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'smollkittens',
  description: '🐈',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        
        <meta name="description" content="🐈" />
        <meta data-n-head="ssr" data-hid="og:image:type" property="og:image:type" content="image/jpeg"/>
        <meta property="og:image" content='https://private-user-images.githubusercontent.com/65041082/273265442-1161d721-4576-400f-a193-a2c7aa1a01c8.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTY2MDc2NzgsIm5iZiI6MTY5NjYwNzM3OCwicGF0aCI6Ii82NTA0MTA4Mi8yNzMyNjU0NDItMTE2MWQ3MjEtNDU3Ni00MDBmLWExOTMtYTJjN2FhMWEwMWM4LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEwMDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMDA2VDE1NDkzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhYjYyOWFhMzFkN2QyOTlmNWFmODc1Nzg0NmJkNTU4MDRkOTRmM2RhMDkwZjE5MzVmNmE3YmU5OWIwYTJjN2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9ZsmFbu9gBeJhEXxsP8-9LOdjxvwtnIHqi9TBPq3qko' />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="icon" type="image/jpg" sizes="16x16" href="/favicon.jpg" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/favicon.jpg" />
        <link rel="icon" type="image/jpg" sizes="48x48" href="/favicon.jpg" />
        <link rel="icon" type="image/jpg" sizes="96x96" href="/favicon.jpg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.jpg" />
        <title>smollkittens</title> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
