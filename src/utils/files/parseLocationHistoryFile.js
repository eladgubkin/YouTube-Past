import _ from "lodash";
import moment from "moment";

export const parseLocationHistoryFile = (file, setLocationHistoryData) => {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const { locations } = JSON.parse(reader.result);
    let data = locations;

    data = data.map((dta) => ({
      timestamp: moment(_.toNumber(dta.timestampMs)),
      lat: dta.latitudeE7 / 10000000,
      long: dta.longitudeE7 / 10000000,
    }));

    // setState
    setLocationHistoryData(data);
  };
};
