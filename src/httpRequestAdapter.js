// import our dependency
import axios from "axios";

// import necessary configurations, marvelBaseUrl & marvelApiKey
import commonConfig from "./config";

// write get method, taking 3 arguments [path, queryParams, commonConfig]
// returning axios call
function get(
  path,
  queryParams,
  { marvelBaseUrl, marvelApiKey } = commonConfig
) {
  return axios.get(
    `${marvelBaseUrl}/${path}?${queryParams}&apikey=${marvelApiKey}`
  );
}

// export httpRequest module w/ get method
export default {
  get
};
