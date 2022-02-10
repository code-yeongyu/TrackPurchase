import puppeteer from "puppeteer";
import {
  Module,
  URLChanger,
  PageInteractor,
  NaverScraper,
  NaverParser,
} from ".";

export default class ModuleFactory {
  static create(page: puppeteer.Page): Module {
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
