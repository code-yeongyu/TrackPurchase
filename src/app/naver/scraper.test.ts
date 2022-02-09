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

  describe("nextPaymentHistory", () => {
    it("should create an post request", async () => {
      // given
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const cookie = "";
      const scraper = new NaverScraper();
      const postSpy = jest.spyOn(axios, "post");
      postSpy.mockImplementation(() => Promise.resolve({ data: {} }));

      // when
      await scraper.nextPaymentHistory(
        cookie,
        "order-1234",
        new Date().getTime() - day * 30
      );

      // then
      expect(postSpy).toBeCalledWith(
        scraper.nextPaymentHistoryURL,
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
