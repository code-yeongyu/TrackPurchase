import ElementParser from "./elementParser";
import PageInteractor from "./pageInteractor";
import URLChanger from "./urlChanger";
import Module from "../common/module";

export default interface NaverModule extends Module {
  readonly urlChanger: URLChanger;
  readonly pageInteractor: PageInteractor;
  readonly elementParser: ElementParser;
}
