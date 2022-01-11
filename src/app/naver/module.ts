import { URLChanger, PageInteractor, ElementParser } from ".";
import { Module as BaseModule } from "../common";

export default interface Module extends BaseModule {
  readonly urlChanger: URLChanger;
  readonly pageInteractor: PageInteractor;
  readonly elementParser: ElementParser;
}
