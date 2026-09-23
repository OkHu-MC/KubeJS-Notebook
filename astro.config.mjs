// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// defineConfig の引数をアロー関数にする（({ command }) => { ... })
export default defineConfig(({ command }) => {
  // command には Astro から 'dev' または 'build' という文字列が自動で入る
  const isBuild = command === 'build';
  return {
    site: 'https://okhu-mc.github.io',
    base: isBuild ? '/KubeJS-Notebook' : '/',

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
}});

