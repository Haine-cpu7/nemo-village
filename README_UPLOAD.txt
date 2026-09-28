ねもの村 favicon 追加パッチ

GitHub: Haine-cpu7/nemo-village
基準: main（2026-09-28確認）

変更内容
- 採用したねもちゃん画像を favicon 化
- PCブラウザのタブ用 favicon.png / favicon-32x32.png
- iPhone/iPad「ホーム画面に追加」用 apple-touch-icon.png
- index.html の <head> に上記3ファイルの指定を追加
- Wallet / NFT / app.js / CSS 等は変更していません

反映方法
このZIPを展開し、4ファイルを nemo-village リポジトリ直下へアップロードしてください。
index.html は置き換え、画像3ファイルは新規追加です。

※ブラウザはfaviconを強くキャッシュするため、反映直後に旧アイコンが出る場合があります。
その場合はスーパーリロード、キャッシュ削除、または少し時間を置いて再確認してください。
