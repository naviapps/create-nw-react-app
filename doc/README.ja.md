# Create NW.js React App

ビルド設定なしで NW.js React アプリケーションを作成します。

* [はじめに](#はじめに) – アプリケーションを作成方法
* [ユーザーガイド](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md) – Create NW.js React App で作成したアプリを開発する方法

Create NW.js React App は macOS、Windows 及び Linux で動作します。<br>
何か不具合などありましたら [問題を報告](https://github.com/naviapps/create-nw-react-app/issues/new) してください。

*Language: [English](https://github.com/naviapps/create-nw-react-app/blob/master/README.md) / 日本語*

## 概要

```sh
npm install -g create-nw-react-app

create-nw-react-app my-app
cd my-app/
npm start
```

それからアプリを見て下さい。<br>
本番環境にリリースする準備が出来たら、`npm run build` でアプリを作成してください。

<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/npm_start.png' width='600' alt='npm start'>

### すぐに始められます

Webpack や Babel といったツールをインストールまたは設定する必要はありません。<br>
それらはあらかじめ設定され隠されているので、コードのみに集中することが可能です。

すぐにプロジェクトを作成すると良いでしょう。

## はじめに

### インストール

グローバル環境にインストールします。

```sh
npm install -g create-nw-react-app
```

**Node.js は 6 以上のバージョンが必要です**。 [nvm](https://github.com/creationix/nvm#installation) を使用すると、異なるプロジェクト間で簡単に Node.js のバージョンを切り替えることが出来ます。

### アプリケーションを作成

新しいアプリケーションを作成するには、次のコマンドを実行します。

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

設定や複雑なフォルダ構造はなく、アプリを構築するために必要なファイルのみです。<br>
インストールが完了した後は、プロジェクトフォルダ内でいくつかのコマンドを実行することが出来ます。

### `npm start` or `yarn start`

開発モードでアプリケーションを実行します。

編集して保存するとページが自動リロードされます。<br>
ターミナルに構築エラーと構文チェック警告が表示されます。

<img src='https://raw.githubusercontent.com/naviapps/create-nw-react-app/master/.github/build_errors.png' width='600' alt='Build errors'>

### `npm test` or `yarn test`

テスト監視をインタラクティブモードで実行します。<br>
デフォルトでは、最後のコミット以降に変更されたファイルを対象としてテストを実行します。

[Read more about testing.](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

本番用のアプリケーションを `build` フォルダに構築します。<br>
NW.js と React を本番モードで正しくバンドルし、最適なパフォーマンスを得るために構築を最適化します。

ビルドすると縮小され、ファイル名にはハッシュコードが含まれます。

ビルドしたアプリはすぐにリリース可能です。

## ユーザーガイド

TODO

## 新しいバージョンにアップデートする方法

[ユーザーガイド](https://github.com/naviapps/create-nw-react-app/blob/master/packages/nw-react-scripts/template/README.md#updating-to-new-releases)を参照してください。


