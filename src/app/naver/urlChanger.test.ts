import { URLChanger } from "./urlChanger";

describe("URLChanger", () => {
  describe("moveToLoginURL", () => {
    it("Should move page to login", async () => {
      // given
      const urlChanger = new URLChanger(page);
      const pageSpy = jest.spyOn(page, "goto");

      // when
      await urlChanger.moveToLoginURL();

      // then
      expect(pageSpy).toHaveBeenCalledWith(urlChanger.loginURL);
    });
  });
});
