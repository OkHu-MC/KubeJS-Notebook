---
title: Minecraftのmod環境を準備する
description: KubeJSの開発に必要なMinecraftのMOD環境（CurseForge等）の構築手順です。
sidebar:
  order: 2
---

import { Image } from 'astro:assets';

KubeJSを使った開発を進めるために、便利な拡張機能とエディタの構築

## エディタについて
~~notepad++はいいぞ~~vscodeを使ってください。  
もし、vsc以外を使用予定なのであればここから下の話は読み飛ばしてください  


---

## vscodeのインストール

バニラランチャー（公式ランチャー）でも開発は可能ですが、KubeJS本体、前提ライブラリ、一緒に導入する工業MODやアドオンの更新管理が非常に便利になるため、**CurseForge App** の利用を推奨します。

1. [Visual Studio Code 公式ダウンロードページ](https://code.visualstudio.com/) にアクセスします。
2. ページ内の **「Download for ○○」** をクリックします。
3. インストールします。



:::note[VSCインストールの詳細について]
VSCのインストールや言語設定などは他のサイトで調べて頑張ってください  
:::



---

## 拡張機能のインストール

[ProbeJS](https://www.curseforge.com/minecraft/mc-mods/probejs)を使用します。　　
KubeJSでのレシピ改変や統合開発において、便利な拡張機能です。  
ちなみに、作者はこのwikiのこのページを作るまで、約1年こいつを使わずに開発していました。  
つまり、最悪なくてもコピペして作るだけなら要りません。  

特にjsでフロントアプリ開発やったことある人ならあんまり気にならないかもしれません

---
