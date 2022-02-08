import { NaverParser } from "./parser";
import {
  expectedPaymentHistoryItems,
  searchPaymentHistoryJson,
} from "./testFixture";

describe("NaverParser", () => {
  describe("parsePaymentHistory", () => {
    it("should parse", () => {
      // given
      const parser = new NaverParser();

      // when
      const result = parser.parsePaymentHistory(searchPaymentHistoryJson);

      // then
      expect(result).toEqual(expectedPaymentHistoryItems);
    });
  });
});
