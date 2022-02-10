import puppeteer from "puppeteer";
import {
  NaverModule,
  URLChanger,
  PageInteractor,
  NaverScraper,
  NaverParser,
} from ".";

export class ModuleFactory {
  static create(page: puppeteer.Page): NaverModule {
    const urlChanger = new URLChanger(page);
    const pageInteractor = new PageInteractor(page);
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
