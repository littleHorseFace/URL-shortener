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

4. npm載入完畢後，繼續安裝express，已執行環境：

   ```bash
   npm i express@4.16.4
   ```

5. express安裝完畢後，如要載入種子資料，或直接執行本機伺服器，清輸入以下指令：

   ```bash
   執行種子資料輸入  npm run seed  /  執行本機伺服器輸入  npm run dev
   ```

6. 若看見此行訊息則代表伺服器連線順利運行

   ```bash
   connect susessful
   ```

7. 打開瀏覽器進入到以下網址

```bash
   http://localhost:3000/
   ```

8. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 使用版本
* Node.js - v 16.16.0
* express - v 4.16.4
* express-handlebars - v 3.0.0
* nodemon - v 2.0.19
* method-override - V 3.0.0