import { URLChanger, PageInteractor, NaverScraper, NaverParser } from ".";
import { Module as BaseModule } from "../common";

export default interface Module extends BaseModule {
  readonly urlChanger: URLChanger;
  readonly pageInteractor: PageInteractor;
  readonly scraper: NaverScraper;
  readonly parser: NaverParser;
}
