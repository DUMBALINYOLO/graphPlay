import axios from "axios";
import mockedData from "../mock/graph";

const MOCKED_DATA_URL = "https://mocks.neux.io/graph/03";

export const getGraphData = async () => {
  try {
    //const { data } = await axios.get(MOCKED_DATA_URL);
    return mockedData;
  } catch (err) {
    console.log(err.message);
  }
};
