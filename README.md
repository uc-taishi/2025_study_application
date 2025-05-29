# 2025_study_application
総合学習プラットフォームをつくりたい。そういう思いを前から持っていました。
そろそろ技術力も少しは持ててきたと思うので、Next.js（TypeScript+AppRouter）を使って探り探り作ってみる。

## アプリケーションの起動方法
cloneしたら
```CMD
cd uc-study-platform
```
して
```CMD
npm run dev
```
すればとりあえずはローカルで立ち上げられる。
ただし、uc-study-platform直下に.env.localファイルを作成し、Superbaseの認証情報を記述しておく必要がある。
SuperbaseのPostgreSQLが無料で使えて便利だ。