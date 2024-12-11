const CONFIG = {
  // profile setting (required)
  profile: {
    name: "EE PEI Jaime de Oliveira",
    image: "/escolajaimedeoliveira.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "📍 Ponte Alta, Barra do Chapéu - SP",
    bio: "📍 Ponte Alta, Barra do Chapéu - SP",
    email: "escolajaime@gmail.com",
    linkedin: "eduardoslompo",
    github: "eduardoslompo",
    instagram: "eduslompo",
    facebook: "escolajaime",
    phone: "1535546001"
  },
  projects: [
    {
      name: `EE PEI Jaime de Oliveira`,
      href: "#",
    },
  ],
  // blog setting (required)
  blog: {
    title: "EE PEI Jaime de Oliveira",
    description: "Bem vindo!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://blog-j.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "pt-BR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60*2, // revalidate time for [slug], index
}

module.exports = { CONFIG }
