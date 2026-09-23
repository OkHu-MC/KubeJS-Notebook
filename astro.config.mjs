// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// defineConfig の手前で宣言する
const isCI = Boolean(process.env.GITHUB_ACTIONS);
// https://astro.build/config
export default defineConfig({
  site: 'https://okhu-mc.github.io',
  base: isCI ? '/KubeJS-Notebook' : '/',

	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
{
          label: 'はじめに',
          items: [
            { label: '環境構築 (CurseForge)', link: 'guides/setup/' },
            { label: 'Prism Launcher (任意)', link: 'guides/setup_pr/' },
            { label: 'Hello World (初回実行)', link: 'guides/helloworld/' },

          ],
        },
		{
			label: 'バニラ要素の変更',
			items: [
				{ label: 'レシピの追加', link: 'guides/recipe/' },
				{ label: 'リソース・テクスチャの配置', link: 'guides/texture/' },
				{ label: 'アイテムの追加', link: 'guides/custom_item/' }

			]


		},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
