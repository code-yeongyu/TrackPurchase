import { CommonResponse } from "app/common/types/response";
import axios from "axios";
import { ServiceGroup } from "./types/serviceGroup";
import { StatusGroup } from "./types/statusGroup";

export class NaverScraper {
  private async getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const monthString = month >= 10 ? month : "0" + month;
    const dateString = date >= 10 ? date : "0" + date;
    return `${year}-${monthString}-${dateString}`;
  }

  searchPaymentHistoryURL =
    "https://new-m.pay.naver.com/api/timeline/searchPaymentHistory";
  async searchPaymentHistory(
    cookies: string,
    searchOptions?: {
      keyword: string;
      serviceGroup: ServiceGroup;
      statusGroup: StatusGroup;
    }
  ): Promise<CommonResponse> {
    const data = {
      keyword: searchOptions?.keyword || null,
      startDate: "2000-01-01",
      endDate: await this.getTodayString(),
      serviceGroup: searchOptions?.serviceGroup || null,
      statusGroup: searchOptions?.statusGroup || null,
    };
    const options = {
      headers: {
        Cookie: cookies,
        "content-type": "application/json;charset=UTF-8",
      },
    };
    const response = await axios.post(
      this.searchPaymentHistoryURL,
      data,
      options
    );

    return { status: response.status, data: JSON.stringify(response.data) };
  }

  nextPaymentHistoryURL =
    "https://new-m.pay.naver.com/api/timeline/nextPaymentHistory";
  async nextPaymentHistory(
    cookies: string,
    lastHistoryId: string,
    lastHistoryDateTimestamp: number,
    searchOptions?: {
      keyword: string;
      serviceGroup: ServiceGroup;
      statusGroup: StatusGroup;
    }
  ): Promise<CommonResponse> {
    const data = {
      keyword: searchOptions?.keyword || null,
      startDate: "2000-01-01",
      endDate: await this.getTodayString(),
      serviceGroup: searchOptions?.serviceGroup || null,
      statusGroup: searchOptions?.statusGroup || null,
      lastId: lastHistoryId,
      lastDate: lastHistoryDateTimestamp,
    };
    const options = {
      headers: {
        Cookie: cookies,
        "content-type": "application/json;charset=UTF-8",
      },
    };
    const response = await axios.post(
      this.nextPaymentHistoryURL,
      data,
      options
    );
    return { status: response.status, data: JSON.stringify(response.data) };
  }
}
