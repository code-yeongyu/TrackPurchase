import puppeteer from "puppeteer";
import { Module, URLChanger, ElementParser, PageInteractor } from ".";

export default class ModuleFactory {
  static create(page: puppeteer.Page): Module {
    const urlChanger = new URLChanger(page);
    const elementParser = new ElementParser(page);
    const pageInteractor = new PageInteractor(page, elementParser);

    return {
      urlChanger,
      pageInteractor,
      elementParser,
    };
  }
}
