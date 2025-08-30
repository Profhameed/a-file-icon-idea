// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Atom Material Icons',
      description: 'Beautiful material design icons for your JetBrains IDE',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/mallowigi/a-file-icon-idea',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'installation' },
          ],
        },
        {
          label: 'Usage',
          items: [
            { label: 'Basic Usage', slug: 'usage/basic' },
            { label: 'Configuration', slug: 'usage/configuration' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Icon Gallery', link: '/icons' },
          ],
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: 'macchiato', accent: 'sky' },
          light: { flavor: 'latte', accent: 'sky' },
        }),
      ],
    }),
  ],
});
