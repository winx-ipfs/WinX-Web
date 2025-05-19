import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "星萤无垠（WinX）| 开源团队 ",
  description: "我们是一支充满热情的开源团队，致力于开发实用工具和服务，让技术更加便捷可及。",
  keywords: ["WinX", "winx", "星萤无垠", "开源团队", "Windows镜像站" , "windows" , "Windows 11" , "Windows 10" ,"IPFS下载工具", "Crust Network" , "开源精神", "GitHub", "IPFS镜像站"],
  openGraph: {
    title: "星萤无垠 | 开源团队",
    description: "我们是一支充满热情的开源团队，致力于开发实用工具和服务，让技术更加便捷可及。",
    url: "https://www.winx.run",
    siteName: "星萤无垠",
    images: [{ url: "https://www.winx.run/winx.png" }],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "星萤无垠 | 开源团队",
    description: "我们是一支充满热情的开源团队，致力于开发实用工具和服务，让技术更加便捷可及。",
    images: ["https://www.winx.run/winx.png"],
  },
  icons: {
    icon: "winx.svg",
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 结构化数据 (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org ",
              "@type": "Organization",
              "name": "星萤无垠",
              "alternateName": "WinX",
              "url": "https://www.winx.run ",
              "logo": "https://www.winx.run/winx.svg ",
              "sameAs": ["https://github.com/winx-ipfs "],
              "description": "我们是一支充满热情的开源团队，致力于开发实用工具和服务，让技术更加便捷可及。"
            }
          `}
        </script>
          <script src="Clarity.js" type="text/javascript"></script>
      </head>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>
      </html>
  )
}