import axios from "axios";
import { NaverScraper } from "./scraper";
describe("Scraper", () => {
  describe("searchPaymentHistory", () => {
    it("should create an post request", async () => {
      // given
      const cookies = "";
      const scraper = new NaverScraper();
      const postSpy = jest.spyOn(axios, "post");
      postSpy.mockImplementation(() => Promise.resolve({ data: {} }));

      // when
      await scraper.searchPaymentHistory(cookies);

      // then
      expect(postSpy).toBeCalledWith(
        scraper.searchPaymentHistoryURL,
        expect.any(Object),
        expect.objectContaining({
          headers: expect.objectContaining({
            Cookie: cookies,
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

      const cookies = "";
      const scraper = new NaverScraper();
      const postSpy = jest.spyOn(axios, "post");
      postSpy.mockImplementation(() => Promise.resolve({ data: {} }));

      // when
      await scraper.nextPaymentHistory(
        cookies,
        "order-1234",
        new Date().getTime() - day * 30
      );

      // then
      expect(postSpy).toBeCalledWith(
        scraper.nextPaymentHistoryURL,
        expect.any(Object),
        expect.objectContaining({
          headers: expect.objectContaining({
            Cookie: cookies,
          }),
        })
      );
    });
  });
});
