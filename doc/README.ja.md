# Create NW.js React App

NW.js React アプリをビルド設定なしで作成します。

* [はじめに](#はじめに) – 新しいアプリを作成する方法
* [ユーザーガイド](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) – Create NW.js React App で生成されたアプリを開発する方法

Create NW.js React App は macOS、Windows、Linux で動作します。<br>
正常に動作しない場合は、[問題を報告](https://github.com/naviapps/create-nw-react-app/issues/new)してください。

*Language: [English](https://github.com/naviapps/create-nw-react-app/blob/master/README.md) / 日本語*

## 概要

```sh
npm install -g create-nw-react-app

create-nw-react-app my-app
cd my-app/
npm start
```

次にアプリを表示します。<br>
本番環境にリリースする準備が整ったら、`npm run build` でアプリを作成してください。

<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/npm_start.png' width='600' alt='npm start'>

### すぐに始められます

Webpack や Babel のようなツールをインストールまたは設定する必要はありません。<br>
それらはあらかじめ設定され隠されているので、コードに集中することが可能です。

すぐにプロジェクトを作成するといいでしょう。

## はじめに

### インストール

グローバル環境にインストールしてください。

```sh
npm install -g create-nw-react-app
```

**Node.js は 6 以上のバージョンが必要です**。 [nvm](https://github.com/creationix/nvm#installation) を使用すると、異なるプロジェクト間で簡単に Node.js のバージョンを切り替えることが出来ます。

### アプリの作成

新しいアプリを作成するには、次のコマンドを実行します。

```sh
create-nw-react-app my-app
cd my-app
```

現在のフォルダの中に `my-app` という名前のディレクトリが作成されます。<br>
そのディレクトリ内に、最初のプロジェクト構造が生成され推移的な依存関係がインストールされます。

```
my-app
├── README.md
├── node_modules
├── package.json
├── index.html
├── .gitignore
├── public
│   └── favicon.ico
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

設定や複雑なフォルダ構造はなく、アプリを構築するために必要なファイルだけです。<br>
インストールが完了したら、プロジェクトフォルダ内でいくつかのコマンドを実行することが出来ます。

### `npm start` または `yarn start`

開発モードでアプリを実行します。

コードを変更すると、ページは自動的にリロードされます。<br>
コンソールにビルドエラーと構文チェック警告が表示されます。

<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/build_errors.png' width='600' alt='Build errors'>

### `npm test` または `yarn test`

テスト監視をインタラクティブモードで実行します。<br>
デフォルトでは、最後のコミット以降に変更されたファイルを対象としてテストを実行します。

[Read more about testing.](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#running-tests)

### `npm run build` または `yarn build`

本番用のアプリを `build` フォルダにビルドします。<br>
NW.js と React を本番モードで正しくバンドルし、最適なパフォーマンスを得るために構築を最適化します。

ビルドは縮小され、ファイル名にはハッシュコードが含まれます。

ビルドしたアプリはすぐにリリース出来ます。

## ユーザーガイド

[ユーザーガイド](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) には、次のようなさまざまなトピックに関する情報が含まれています。

- [フォルダ構造](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#folder-structure)
- [Available Scripts](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#available-scripts)
- [Supported Language Features and Polyfills](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#syntax-highlighting-in-the-editor)
- [Adding a Stylesheet](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#adding-a-stylesheet)
- [Post-Processing CSS](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#post-processing-css)
- [Adding a CSS Preprocessor (Sass, Less etc.)](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- [Adding Images, Fonts, and Files](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#adding-images-fonts-and-files)

ユーザガイドのコピーは、プロジェクトフォルダに `README.md` として作成されます。

## 新しいバージョンにアップデートする方法

[ユーザーガイド](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#updating-to-new-releases)を参照してください。
