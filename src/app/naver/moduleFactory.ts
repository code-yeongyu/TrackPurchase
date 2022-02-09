import puppeteer from "puppeteer";
import {
  Module,
  URLChanger,
  ElementParser,
  PageInteractor,
  NaverScraper,
  NaverParser,
} from ".";

export default class ModuleFactory {
  static create(page: puppeteer.Page): Module {
    const urlChanger = new URLChanger(page);
    const elementParser = new ElementParser(page);
    const pageInteractor = new PageInteractor(page, elementParser);
    const scraper = new NaverScraper();
    const parser = new NaverParser();

    return {
      urlChanger,
      pageInteractor,
      elementParser,
      scraper,
      parser,
    };
  }
}
