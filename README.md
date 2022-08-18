# 短網址產生器

使用Node.js 和 express 做出的短網址產生器

## 功能介紹

使用者可以在表單輸入原始網址，畫面會回傳短網址

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm init
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run start  / npm run dev
   ```

5. 安裝完畢後，如要載入種子資料：

   ```bash
   npm run seed
   ```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

7. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 使用版本
* Node.js - v16.15.1
* express - v 4.16.4
* express-handlebars - v 3.0.0
* nodemon - v 2.0.19
* method-override - V 3.0.0