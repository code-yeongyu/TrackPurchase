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
    return `${year}-${month}-${date}`;
  }

  searchPaymentHistoryURL =
    "https://new-m.pay.naver.com/api/timeline/searchPaymentHistory";
  async searchPaymentHistory(
    cookie: string,
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

  nextPaymentHistoryURL =
    "https://new-m.pay.naver.com/api/timeline/nextPaymentHistory";
  async nextPaymentHistory(
    cookie: string,
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
        Cookie: cookie,
        "content-type": "application/json;charset=UTF-8",
      },
    };

    const response = await axios.post(
      this.nextPaymentHistoryURL,
      data,
      options
    );

    return { status: response.status, data: response.data as string };
  }
}
