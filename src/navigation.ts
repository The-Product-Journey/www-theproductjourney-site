import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Services',
      href: '/#services',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: "Let's Chat", href: '/contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Who We Are',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'What We Do',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Projects', href: getPermalink('/projects') },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Copyright © ${new Date().getFullYear()} · The Product Journey · All rights reserved.
  `,
};
