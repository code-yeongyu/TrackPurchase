import { CommonResponse } from "app/common/response";
import axios from "axios";

export class NaverScraper {
  private async getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  }

  searchPaymentHistoryURL =
    "https://new-m.pay.naver.com/api/timeline/searchPaymentHistory";
  async searchPaymentHistory(cookie: string): Promise<CommonResponse> {
    const data = {
      keyword: null,
      startDate: "2000-01-01",
      endDate: await this.getTodayString(),
      serviceGroup: null,
      statusGroup: null,
    };
    const options = {
      headers: {
        Cookie: cookie,
        "content-type": "application/json;charset=UTF-8",
      },
    };

    const response = await axios.post(
      this.searchPaymentHistoryURL,
      data,
      options
    );

    return { status: response.status, data: response.data as string };
  }
}
