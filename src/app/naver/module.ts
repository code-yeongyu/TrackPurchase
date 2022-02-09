import {
  URLChanger,
  PageInteractor,
  ElementParser,
  NaverScraper,
  NaverParser,
} from ".";
import { Module as BaseModule } from "../common";

export default interface Module extends BaseModule {
  readonly urlChanger: URLChanger;
  readonly pageInteractor: PageInteractor;
  readonly elementParser: ElementParser;
  readonly scraper: NaverScraper;
  readonly parser: NaverParser;
}
