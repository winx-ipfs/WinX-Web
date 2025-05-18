"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Github,
  Download,
  Monitor,
  Server,
  Database,
  Users,
  Code,
  ExternalLink,
  Menu,
  Video,
  ImageIcon,
  Laptop,
  Apple,
  LaptopIcon as Linux,
  Network,
  Unplug,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/lib/config"

// 图标映射函数
function getIconComponent(iconName) {
  const icons = {
    Github,
    Download,
    Monitor,
    Server,
    Database,
    Users,
    Code,
    ExternalLink,
    Video,
    ImageIcon,
    Laptop,
    Apple,
    Linux,
    Network,
    Unplug,
  }

  return icons[iconName] || null
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 渲染英雄区域展示内容
  const renderShowcase = () => {
    const { showcase } = siteConfig.hero

    switch (showcase.type) {
      case "logo":
        return (
          <div
            className={`relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden border ${showcase.background}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={showcase.logo.src || "/placeholder.svg"}
                alt={showcase.logo.alt}
                width={showcase.logo.width}
                height={showcase.logo.height}
                className={showcase.logo.className}
              />
            </div>
          </div>
        )

      case "image":
        return (
          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden border">
            <Image
              src={showcase.image.src || "/placeholder.svg"}
              alt={showcase.image.alt}
              width={showcase.image.width}
              height={showcase.image.height}
              className="w-full h-auto"
            />
          </div>
        )

      case "video":
        return (
          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden border">
            <video
              src={showcase.video.src}
              poster={showcase.video.poster}
              autoPlay={showcase.video.autoplay}
              muted={showcase.video.muted}
              loop={showcase.video.loop}
              className="w-full h-auto"
              controls
            />
          </div>
        )

      case "custom":
        return (
          <div
            className={`relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden border ${showcase.background}`}
            dangerouslySetInnerHTML={{ __html: showcase.customHtml }}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="winx.svg" alt="Winx Logo" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" />
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">{siteConfig.name}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex items-center gap-2"
              onClick={() => window.open(siteConfig.github, "_blank")}
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">菜单</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {siteConfig.navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium py-2 transition-colors hover:text-primary"
                      onClick={() => document.querySelector(".close-sheet")?.click()}
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="mt-4 gap-2" onClick={() => window.open(siteConfig.github, "_blank")}>
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container py-10 space-y-24">
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-20 flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="space-y-4 max-w-3xl px-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{siteConfig.name}</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.hero.buttons.map((button, index) => {
              const IconComponent = getIconComponent(button.icon)
              // 如果是IPFS下载工具，使用白色样式
              const buttonVariant = button.text === "IPFS下载工具" ? "outline" : button.variant || "default"
              return (
                <Button
                  key={index}
                  size="lg"
                  variant={buttonVariant}
                  className="gap-2 min-w-[160px]"
                  onClick={() => window.open(button.href, "_blank")}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{button.text}</span>
                </Button>
              )
            })}
          </div>

          {renderShowcase()}
        </section>

        {/* About Section */}
        <section id="about" className="space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">关于我们</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              星萤无垠是一个专注于基于IPFS的分布式存储和镜像服务的开源团队，我们致力于创造简单易用且功能强大的网络服务。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.features.map((feature, index) => {
              const IconComponent = getIconComponent(feature.icon)
              return (
                <Card key={index}>
                  <CardHeader className="space-y-1">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                      {IconComponent && <IconComponent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">我们的项目</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              我们开发了两个主要项目，致力于提供基于IPFS的便捷下载和资源获取体验。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.projects.map((project, index) => {
              const IconComponent = getIconComponent(project.icon)

              return (
                <Card key={index} className="overflow-hidden border-2 border-emerald-100 dark:border-emerald-900/50">
                  <CardHeader className="pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{project.name}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/30 dark:to-teal-900/20 rounded-lg p-6 mb-6">
                      {IconComponent && (
                        <IconComponent className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                      )}
                      <p className="text-gray-700 dark:text-gray-300">{project.details}</p>
                    </div>

                    {/* 网站链接 */}
                    {project.websiteUrl && (
                      <div className="mb-6">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="gap-1"
                          onClick={() => window.open(project.websiteUrl, "_blank")}
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>访问网站</span>
                        </Button>
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      <span>查看源码</span>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">团队成员</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              我们的团队由一群充满热情的开发者和贡献者组成。
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">主要开发者</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {siteConfig.teamMembers.mainDevelopers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    {member.avatar && (
                      <div className="flex justify-center mb-4">
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={`${member.name} 头像`}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                    )}
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">{member.description}</p>
                    {member.github && (
                      <div className="mt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 p-0 h-auto"
                          onClick={() => window.open(member.github, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-xs">GitHub</span>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-10">团队成员</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {siteConfig.teamMembers.otherMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    {member.avatar && (
                      <div className="flex justify-center mb-4">
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={`${member.name} 头像`}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                    )}
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">{member.description}</p>
                    {member.github && (
                      <div className="mt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 p-0 h-auto"
                          onClick={() => window.open(member.github, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-xs">GitHub</span>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">赞助商</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              感谢以下赞助商的支持，让我们的项目能够持续发展。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.sponsors.map((sponsor, index) => {
              const IconComponent = getIconComponent(sponsor.icon)

              return (
                <Card key={index} className="border-2 border-emerald-100 dark:border-emerald-900/50">
                  <CardHeader>
                    <CardTitle>{sponsor.name}</CardTitle>
                    <CardDescription>{sponsor.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/30 dark:to-teal-900/20 rounded-lg p-6">
                      {IconComponent && (
                        <IconComponent className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                      )}
                      <p className="text-gray-700 dark:text-gray-300">{sponsor.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open(sponsor.website, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>访问网站</span>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">加入我们</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              无论你是开发者、设计师还是用户，都欢迎加入我们的开源社区，一起打造更好的工具。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" onClick={() => window.open(siteConfig.github, "_blank")}>
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(`mailto:${siteConfig.contact.email}`, "_blank")}
            >
              联系我们
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between py-10 md:h-24">
          <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <Image src="winx.svg" alt="Winx Logo" width={24} height={24} className="h-6 w-6" />
              <span className="font-semibold">
                {siteConfig.name} © {new Date().getFullYear()}
              </span>
            </div>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {siteConfig.icp}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {siteConfig.footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
