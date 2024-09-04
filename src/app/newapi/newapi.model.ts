export type TDashboardDetailsResponse = {
    status: boolean;
    data: TDashboardDetailsData;
  };
  
  export type TDashboardDetailsData = {
    FULFILLED: string;
    NEW: string;
    DROPPED: string;
    ALLOCATED: string;
    lenderDetails: TLenderAllocation[];
  };
  
  export type TOverviewModel = {
    FULFILLED: string;
    NEW: string;
    DROPPED: string;
    ALLOCATED: string;
  };
  
  export type TLenderAllocation = {
    [lenderCode: string]: {
      lendercode: string;
      count: number;
      status: string;
    }[];
  };
  