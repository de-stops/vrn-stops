const exportStops = require("efa-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "https://www.vrn.de/mngvrn/XSLT_COORD_REQUEST?&jsonp=&boundingBox=&boundingBoxLU={minx}%3A{miny}%3AWGS84%5BDD.DDDDD%5D&boundingBoxRL={maxx}%3A{maxy}%3AWGS84%5BDD.DDDDD%5D&coordOutputFormat=WGS84%5BGGZHTXX%5D&type_1=STOP&outputFormat=json&inclFilter=1";
const DISTRICT_CODES = [
	"06431",
	"07311",
	"07312",
	"07313",
	"07314",
	"07316",
	"07317",
	"07318",
	"07319",
	"07320",
	"07331", // Together with RNN, Teilweise
	"07332",
	"07333",
	"07335",
	"07336",
	"07337",
	"07338",
	"07340",
	"08128",
	"08221",
	"08222",
	"08225",
	"08226"
];

exportStops(ENDPOINT_BASE_URL_TEMPLATE, 5, 47, 15, 56, DISTRICT_CODES);
