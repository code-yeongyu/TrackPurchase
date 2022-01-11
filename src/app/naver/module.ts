import { URLChanger, PageInteractor, ElementParser } from ".";
import { Module } from "../common/";

export default interface NaverModule extends Module {
  readonly urlChanger: URLChanger;
  readonly pageInteractor: PageInteractor;
  readonly elementParser: ElementParser;
}
