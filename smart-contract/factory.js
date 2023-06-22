import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xdEE1cDE33612da7DbD2995FCd3319Da217d44B70"
);

export default instance;
