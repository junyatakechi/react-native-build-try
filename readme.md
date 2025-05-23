# 環境変数の管理

### 概要

- [**Environment variables in EAS](https://docs.expo.dev/eas/environment-variables)を利用する。**
- 環境変数はExpo/EASのクラウドサーバーに保存。
- [Webダッシュボード](https://expo.dev/accounts/bangster/projects/react-native-build-try/environment-variables)でも管理できる。
- 各環境プロファイル毎に管理できる。
- ローカル開発時はEASサーバーから環境変数をダウンロードして`.env`ファイルとして使える。

### 可視性レベルの設定

- **Plain text**: ウェブサイトやCLI、ログで確認可能
- **Sensitive**: ログでは隠蔽、ウェブサイトでは切り替えで表示可能
- **Secret**: EASサーバー外では読み取り不可、最も機密性が高い

## コマンド

- 全環境の変数一覧表示: `eas env:list`
- 作成: `eas env:create`
- 削除: `eas env:delete`

### コマンドオプション

- 共通オプション
    - `-environment`: 対象環境の指定 (development, preview, production)
    - `-non-interactive`: 非インタラクティブモード
    - `-scope`: スコープ指定 (project, account)
- 可視性オプション (`create`/`update`時)
    - `-visibility plain`: プレーンテキスト
    - `-visibility sensitive`: 機密情報
    - `-visibility secret`: 秘密情報

## ローカル開発時

- EASサーバーから環境変数をダウンロード
    - `eas env:pull --environment development`
- キャッシュをクリアし、生成された`.env.local`ファイルを使用
    - `npx expo start -c`

## EXPO_PUBLIC_の有無

- 有り
    - **アプリのJavaScriptコード内**で使用
    - ランタイムでアクセス可能
- 無し
    - **app.config.js/ts**での設定解決時のみ
    - ビルド時の設定に使用