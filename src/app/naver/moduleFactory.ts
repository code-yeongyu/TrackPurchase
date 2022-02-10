import puppeteer from "puppeteer";
import {
  NaverModule,
  NaverURLChanger,
  NaverPageInteractor,
  NaverScraper,
  NaverParser,
} from ".";

export class NaverModuleFactory {
  static create(page: puppeteer.Page): NaverModule {
    const urlChanger = new NaverURLChanger(page);
    const pageInteractor = new NaverPageInteractor(page);
    const scraper = new NaverScraper();
    const parser = new NaverParser();

    return {
      urlChanger,
      pageInteractor,
      scraper,
      parser,
    };
  }
}
