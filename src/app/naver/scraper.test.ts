import axios from "axios";
import { NaverScraper } from "./scraper";
describe("Scraper", () => {
  describe("searchPaymentHistory", () => {
    it("should create an post request", async () => {
      // given
      const cookie = "";
      const scraper = new NaverScraper();
      const postSpy = jest.spyOn(axios, "post");
      postSpy.mockImplementation(() => Promise.resolve({ data: {} }));

      // when
      await scraper.searchPaymentHistory(cookie);

      // then
      expect(postSpy).toBeCalledWith(
        scraper.searchPaymentHistoryURL,
        expect.any(Object),
        expect.objectContaining({
          headers: expect.objectContaining({
            Cookie: cookie,
          }),
        })
      );
    });
  });
});
