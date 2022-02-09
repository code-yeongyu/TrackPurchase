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

  describe("parseInformationForNextPaymentHistory", () => {
    it("should parse", () => {
      // given
      const parser = new NaverParser();

      // when
      const result = parser.parseInformationForNextPaymentHistory(
        searchPaymentHistoryJson
      );

      // then
      expect(result.hasNext).toBe(true);
      expect(result.lastHistoryId).toBe("order-2021110243152861");
      expect(result.lastHistoryDateTimestamp).toBe(1635853254000);
    });
  });
});
