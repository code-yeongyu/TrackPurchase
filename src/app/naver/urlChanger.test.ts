import { NaverURLChanger } from "./urlChanger";

describe("URLChanger", () => {
  describe("moveToLoginURL", () => {
    it("Should move page to login", async () => {
      // given
      const urlChanger = new NaverURLChanger(page);
      const pageSpy = jest.spyOn(page, "goto");

      // when
      await urlChanger.moveToLoginURL();

      // then
      expect(pageSpy).toHaveBeenCalledWith(urlChanger.loginURL);
    });
  });
});
