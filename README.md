<p align="center">
  <img alt="credit card emoji" src="https://github.com/code-yeongyu/TrackPurchase/raw/master/docs/images/credit-card.png" width="130" />
  <h1 align="center">TrackPurchase</h1>
</p>

> 단 몇줄만의 코드로 다양한 쇼핑 플랫폼에서 결제 내역을 긁어오자!

## 지원 플랫폼 목록

- 지원 플랫폼은 계속해서 추가될 예정입니다.

![Naver Pay](https://developer.pay.naver.com/static/img/logo_black.png)

### 네이버 페이

```typescript
const browser = await puppeteer.launch();
const page = await browser.newPage();

const module = ModuleFactory.create(page);
const crawlService = new NaverService(module);

await crawlService.login(id, password);
const history = await crawlService.getHistory();
```

## 설치

- NPM 배포 이후 업데이트 될 예정입니다.
