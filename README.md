<p align="center">
  <img alt="credit card emoji" src="https://github.com/code-yeongyu/TrackPurchase/raw/master/docs/images/credit-card.png" width="130" />
  <h1 align="center">TrackPurchase</h1>
</p>

[![NPM version](https://badgen.net/npm/v/trackpurchase)](https://www.npmjs.com/package/trackpurchase)

> 단 몇줄만의 코드로 다양한 쇼핑 플랫폼에서 결제 내역을 긁어오자!

## 🛒 지원 플랫폼 목록

- 지원 플랫폼은 계속해서 추가될 예정입니다.

![Naver Pay](https://developer.pay.naver.com/static/img/logo_black.png)

## 📦 설치

```sh
yarn add trackpurchase
```

## 🚀 사용

### 네이버 페이

```typescript
import { NaverApp } from "trackpurchase"
const browser = await puppeteer.launch()
const page = await browser.newPage()

const module = NaverApp.ModuleFactory.create(page)
const crawlService = new NaverApp.Service(module)

await crawlService.login(id, password)
const history = await crawlService.getHistory()
console.log(history)
```
