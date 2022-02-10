import { URLChanger, PageInteractor, NaverScraper, NaverParser } from ".";

export interface NaverModule {
  readonly urlChanger: URLChanger;
  readonly pageInteractor: PageInteractor;
  readonly scraper: NaverScraper;
  readonly parser: NaverParser;
}
