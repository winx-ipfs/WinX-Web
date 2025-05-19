/**
 * 网站配置文件
 * 在这里可以集中管理网站的各种链接和配置
 */

export const siteConfig = {
  // 网站基本信息
  name: "星萤无垠",
  description: "我们是一支充满热情的开源团队，致力于开发实用工具和服务，让技术更加便捷可及。",
  url: "https://winx.run",

  // 备案信息
  icp: "黑ICP备2025037666号-1",

  // 社交媒体链接
  github: "https://github.com/winx-ipfs",

  // 导航链接
  navLinks: [
    {
      name: "关于我们",
      href: "#about",
    },
    {
      name: "项目",
      href: "#projects",
    },
    {
      name: "团队",
      href: "#team",
    },
    {
      name: "赞助商",
      href: "#sponsors",
    },
  ],

  // 英雄区域配置
  hero: {
    // 主要按钮配置
    buttons: [
      {
        text: "Windows镜像站",
        icon: "Monitor", // 使用 Lucide 图标名称
        variant: "default", // default, outline, ghost, link
        href: "https://mirror.winx.run/",
        primary: true,
      },
      {
        text: "IPFS下载工具",
        icon: "Download",
        variant: "default",
        href: "https://ipfs.winx.run/",
        primary: true,
      },
      {
        text: "GitHub",
        icon: "Github",
        variant: "outline",
        href: "https://github.com/winx-ipfs",
        primary: false,
      },
    ],
    // 展示区域配置
    showcase: {
      type: "logo", // logo, image, video, custom
      logo: {
        src: "winx.svg",
        alt: "Winx Logo",
        width: 200,
        height: 200,
        className: "h-32 w-32 md:h-40 md:w-40 opacity-90",
      },
      // 背景样式
      background: "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/30 dark:to-teal-900/20",
      // 自定义HTML (如果type设置为custom)
      customHtml: `
        <div class="flex flex-col items-center justify-center h-full">
          <h3 class="text-2xl font-bold mb-4">基于IPFS的分布式镜像站</h3>
          <p class="text-center max-w-md">再也不需要迅雷了！通过IPFS网络高速下载Windows系统镜像。</p>
        </div>
      `,
    },
  },

  // 项目信息
  projects: [
    {
      name: "Windows镜像站",
      description: "基于IPFS的Windows系统镜像站",
      status: "开发中",
      details:
        "一个基于 IPFS 的镜像站！再也不需要迅雷了！通过分布式网络提供各版本Windows系统镜像的下载服务，确保下载速度和稳定性。",
      tags: ["IPFS", "Windows", "镜像", "分布式"],
      github: "https://github.com/winx-ipfs/Mirror-Web",
      icon: "Monitor", // Lucide 图标名称
      websiteUrl: "https://mirror.winx.run/",
    },
    {
      name: "IPFS下载工具",
      description: "基于IPFS的在线下载工具",
      status: "开发中",
      details: "基于IPFS协议的高效在线下载工具，支持分布式内容获取，提供更快速、更稳定的下载体验，无需安装客户端。",
      tags: ["IPFS", "P2P", "分布式", "Web应用"],
      github: "https://github.com/winx-ipfs/ipfs-web-Download",
      icon: "Download", // Lucide 图标名称
      websiteUrl: "https://ipfs.winx.run/",
    },
  ],

  // 关于我们的特点
  features: [
    {
      title: "全分布式",
      description: "这技术是一种内容可寻址的对等超级分布式协议。在IPFS网络中的节点构成一个分布式文件系统。",
      icon: "Network",
    },
    {
      title: "去中心化",
      description: "IPFS是一个去中心化的文件存储和共享系统。旨在替代 HTTP 协议，构建更加安全、高效和去中心化的网络。",
      icon: "Unplug",
    },
    {
      title: "开源精神",
      description: "我们相信开源的力量，所有项目均以开源方式发布，欢迎社区贡献。",
      icon: "Code",
    },
  ],

  // 赞助商信息
  sponsors: [
    {
      name: "道之云网络",
      role: "赞助 & 服务器",
      description: "提供服务器资源支持，为项目提供稳定的运行环境。",
      website: "https://idc.daozhiyun.cn",
      icon: "Server", // Lucide 图标名称
    },
    {
      name: "Crust Network",
      role: "存储层支持",
      description: "提供分布式存储技术支持，为IPFS下载工具提供底层存储服务。",
      website: "https://crust.network",
      icon: "Database", // Lucide 图标名称
    },
  ],

  // 团队成员
  teamMembers: {
    // 主要开发者
    mainDevelopers: [
      {
        name: "小破",
        role: "站长 & 开发",
        description: "团队创始人，负责项目整体规划和核心开发工作。",
        avatar: "xidopo.webp?height=100&width=100", // 可选头像
        github: "https://github.com/1522526209", // 可选社交链接
      },
      {
        name: "LWDJD",
        role: "开发 & IPFS",
        description: "专注于IPFS及分布式开发，负责分布式相关开发。",
        avatar: "LWDJD.webp?height=100&width=100",
        github: "https://github.com/LWDJD",
      },
      {
        name: "梦文博",
        role: "网站 & 开发",
        description: "负责网站开发和维护，核心开发工作。",
        avatar: "m.webp?height=100&width=100",
        github: "https://github.com/ao-x",
      },
    ],
    // 其他团队成员
    otherMembers: [
      {
        name: "TangerinePeel🍊",
        role: "辅助 & 网站",
        description: "负责网站辅助开发和用户支持工作。",
        avatar: "TangerinePeel.webp?height=100&width=100",
      },
      {
        name: "小白",
        role: "技术 & 服务器",
        description: "负责技术支持工作。",
        avatar: "xidoba.webp?height=100&width=100",
        github: "https://github.com/xiaobaimc",
      },
      {
        name: "XLST",
        role: "贡献 & 宣传",
        description: "负责项目宣传和镜像工作。",
        avatar: "XLST.webp?height=100&width=100",
        github: "https://github.com/XLST-Qemu",
      },
    ],
  },

  // 联系方式
  contact: {
    email: "admin@winx.run",
  },

  // 页脚链接
  footerLinks: [
    {
      name: "GitHub",
      href: "https://github.com/winx-ipfs",
    },
    {
      name: "联系我们",
      href: "mailto:admin@winx.run",
    },
    {
      name: "隐私政策",
      href: "/privacy",
    },
  ],

  // SEO 配置
  seo: {
    title: "星萤无垠 - 基于IPFS的Windows镜像站",
    description: "我们是一支充满热情的开源团队，致力于开发实用工具和服务，让技术更加便捷可及。",
    keywords: "星萤无垠, IPFS, Windows镜像, 开源, 分布式存储",
    ogImage: "winx.svg",
  },
}

// 导出图标映射函数，用于将字符串转换为实际的图标组件
export function getIconByName(iconName) {
  // 这个函数将在页面组件中实现
  // 它会根据字符串名称返回相应的Lucide图标组件
  return iconName
}
