export const FETCH_STATION_LIST = Symbol("FETCH_STATION_LIST");
export const REQUEST_STATION_LIST = Symbol("REQUEST_STATION_LIST");

export const fetchstationList = () => {
  return {
    type: REQUEST_STATION_LIST,
  };
};
