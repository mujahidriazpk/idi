import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {
    console.log("loaded")
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-PWSTJFZS" />
            <body>{children}</body>
        </html>
    )
}