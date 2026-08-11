// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-two-papers-are-accepted-by-emnlp-2025-evolkv-and-tableeval",
          title: '🎉 Two papers are accepted by EMNLP 2025: EvolKV and TableEval.',
          description: "",
          section: "News",},{id: "news-sr-ki-is-accepted-by-aaai-2026",
          title: '🎉 SR-KI is accepted by AAAI 2026.',
          description: "",
          section: "News",},{id: "news-invited-to-tencent-project-up-qingyun-skyline-talent-dinner-at-aaai-2026",
          title: '🎫 Invited to Tencent Project Up (QingYun) Skyline Talent Dinner at AAAI 2026....',
          description: "",
          section: "News",},{id: "news-invited-to-tencent-project-up-qingyun-stars-of-the-future-technology-exchange-exhibition",
          title: '🎫 Invited to Tencent Project Up (QingYun), “Stars of the Future: Technology Exchange...',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-by-acl-2026-including-one-main-and-two-findings-papers",
          title: '🎉 Three papers are accepted by ACL 2026, including one Main and two...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
