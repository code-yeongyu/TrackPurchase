import puppeteer from "puppeteer";
import { NaverModule, URLChanger, ElementParser, PageInteractor } from ".";

export default class NaverModuleFactory {
  static create(page: puppeteer.Page): NaverModule {
    const pageInteractor = new PageInteractor(page);
    const urlChanger = new URLChanger(page);
    const elementParser = new ElementParser(page);

    return {
      urlChanger,
      pageInteractor,
      elementParser,
    };
  }
}
