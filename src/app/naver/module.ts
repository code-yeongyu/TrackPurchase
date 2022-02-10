import { URLChanger, PageInteractor, NaverScraper, NaverParser } from ".";

export default interface Module {
  readonly urlChanger: URLChanger;
  readonly pageInteractor: PageInteractor;
  readonly scraper: NaverScraper;
  readonly parser: NaverParser;
}
