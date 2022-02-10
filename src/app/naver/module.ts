import {
  NaverURLChanger,
  NaverPageInteractor,
  NaverScraper,
  NaverParser,
} from ".";

export interface NaverModule {
  readonly urlChanger: NaverURLChanger;
  readonly pageInteractor: NaverPageInteractor;
  readonly scraper: NaverScraper;
  readonly parser: NaverParser;
}
