(function() {

  var iso = {};

  // global on the server, window in the browser
  var root = this,
    previous_iso = root.iso;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = iso;
  } else {
    root.iso = iso;
  }

  iso.noConflict = function() {
    root.iso = previous_iso;
    return iso;
  };

  iso.version = '0.0.1';

  iso.countries = {
  "AF": {
    "value": "AF",
    "name": "Afghanistan",
    "formalname": "Islamic State of Afghanistan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kabul",
    "currency": "AFN",
    "tel": "+93",
    "iso3116-1": "004",
    "iso3116-1-2": "AF",
    "iso3116-1-3": "AFG",
    "tld": ".af",
    "sort": "1"
  },
  "AL": {
    "value": "AL",
    "name": "Albania",
    "formalname": "Republic of Albania",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tirana",
    "currency": "ALL",
    "tel": "+355",
    "iso3116-1": "008",
    "iso3116-1-2": "AL",
    "iso3116-1-3": "ALB",
    "tld": ".al",
    "sort": "2"
  },
  "DZ": {
    "value": "DZ",
    "name": "Algeria",
    "formalname": "People's Democratic Republic of Algeria",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Algiers",
    "currency": "DZD",
    "tel": "+213",
    "iso3116-1": "012",
    "iso3116-1-2": "DZ",
    "iso3116-1-3": "DZA",
    "tld": ".dz",
    "sort": "3"
  },
  "AD": {
    "value": "AD",
    "name": "Andorra",
    "formalname": "Principality of Andorra",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Andorra la Vella",
    "currency": "EUR",
    "tel": "+376",
    "iso3116-1": "020",
    "iso3116-1-2": "AD",
    "iso3116-1-3": "AND",
    "tld": ".ad",
    "sort": "4"
  },
  "AO": {
    "value": "AO",
    "name": "Angola",
    "formalname": "Republic of Angola",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Luanda",
    "currency": "AOA",
    "tel": "+244",
    "iso3116-1": "024",
    "iso3116-1-2": "AO",
    "iso3116-1-3": "AGO",
    "tld": ".ao",
    "sort": "5"
  },
  "AG": {
    "value": "AG",
    "name": "Antigua and Barbuda",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Saint John's",
    "currency": "XCD",
    "tel": "+1-268",
    "iso3116-1": "028",
    "iso3116-1-2": "AG",
    "iso3116-1-3": "ATG",
    "tld": ".ag",
    "sort": "6"
  },
  "AR": {
    "value": "AR",
    "name": "Argentina",
    "formalname": "Argentine Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Buenos Aires",
    "currency": "ARS",
    "tel": "+54",
    "iso3116-1": "032",
    "iso3116-1-2": "AR",
    "iso3116-1-3": "ARG",
    "tld": ".ar",
    "sort": "7"
  },
  "AM": {
    "value": "AM",
    "name": "Armenia",
    "formalname": "Republic of Armenia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Yerevan",
    "currency": "AMD",
    "tel": "+374",
    "iso3116-1": "051",
    "iso3116-1-2": "AM",
    "iso3116-1-3": "ARM",
    "tld": ".am",
    "sort": "8"
  },
  "AU": {
    "value": "AU",
    "name": "Coral Sea Islands",
    "formalname": "Coral Sea Islands Territory",
    "type": "Dependency",
    "subtype": "External Territory",
    "sovereignty": "Australia",
    "capital": "",
    "currency": "",
    "tel": "",
    "iso3116-1": "036",
    "iso3116-1-2": "AU",
    "iso3116-1-3": "AUS",
    "tld": ".au",
    "sort": "204"
  },
  "AT": {
    "value": "AT",
    "name": "Austria",
    "formalname": "Republic of Austria",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Vienna",
    "currency": "EUR",
    "tel": "+43",
    "iso3116-1": "040",
    "iso3116-1-2": "AT",
    "iso3116-1-3": "AUT",
    "tld": ".at",
    "sort": "10"
  },
  "AZ": {
    "value": "AZ",
    "name": "Nagorno-Karabakh",
    "formalname": "Nagorno-Karabakh Republic",
    "type": "Proto Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Stepanakert",
    "currency": "AMD",
    "tel": "+374-97",
    "iso3116-1": "031",
    "iso3116-1-2": "AZ",
    "iso3116-1-3": "AZE",
    "tld": ".az",
    "sort": "196"
  },
  "BS": {
    "value": "BS",
    "name": "Bahamas, The",
    "formalname": "Commonwealth of The Bahamas",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Nassau",
    "currency": "BSD",
    "tel": "+1-242",
    "iso3116-1": "044",
    "iso3116-1-2": "BS",
    "iso3116-1-3": "BHS",
    "tld": ".bs",
    "sort": "12"
  },
  "BH": {
    "value": "BH",
    "name": "Bahrain",
    "formalname": "Kingdom of Bahrain",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Manama",
    "currency": "BHD",
    "tel": "+973",
    "iso3116-1": "048",
    "iso3116-1-2": "BH",
    "iso3116-1-3": "BHR",
    "tld": ".bh",
    "sort": "13"
  },
  "BD": {
    "value": "BD",
    "name": "Bangladesh",
    "formalname": "People's Republic of Bangladesh",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Dhaka",
    "currency": "BDT",
    "tel": "+880",
    "iso3116-1": "050",
    "iso3116-1-2": "BD",
    "iso3116-1-3": "BGD",
    "tld": ".bd",
    "sort": "14"
  },
  "BB": {
    "value": "BB",
    "name": "Barbados",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bridgetown",
    "currency": "BBD",
    "tel": "+1-246",
    "iso3116-1": "052",
    "iso3116-1-2": "BB",
    "iso3116-1-3": "BRB",
    "tld": ".bb",
    "sort": "15"
  },
  "BY": {
    "value": "BY",
    "name": "Belarus",
    "formalname": "Republic of Belarus",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Minsk",
    "currency": "BYR",
    "tel": "+375",
    "iso3116-1": "112",
    "iso3116-1-2": "BY",
    "iso3116-1-3": "BLR",
    "tld": ".by",
    "sort": "16"
  },
  "BE": {
    "value": "BE",
    "name": "Belgium",
    "formalname": "Kingdom of Belgium",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Brussels",
    "currency": "EUR",
    "tel": "+32",
    "iso3116-1": "056",
    "iso3116-1-2": "BE",
    "iso3116-1-3": "BEL",
    "tld": ".be",
    "sort": "17"
  },
  "BZ": {
    "value": "BZ",
    "name": "Belize",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Belmopan",
    "currency": "BZD",
    "tel": "+501",
    "iso3116-1": "084",
    "iso3116-1-2": "BZ",
    "iso3116-1-3": "BLZ",
    "tld": ".bz",
    "sort": "18"
  },
  "BJ": {
    "value": "BJ",
    "name": "Benin",
    "formalname": "Republic of Benin",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Porto-Novo",
    "currency": "XOF",
    "tel": "+229",
    "iso3116-1": "204",
    "iso3116-1-2": "BJ",
    "iso3116-1-3": "BEN",
    "tld": ".bj",
    "sort": "19"
  },
  "BT": {
    "value": "BT",
    "name": "Bhutan",
    "formalname": "Kingdom of Bhutan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Thimphu",
    "currency": "BTN",
    "tel": "+975",
    "iso3116-1": "064",
    "iso3116-1-2": "BT",
    "iso3116-1-3": "BTN",
    "tld": ".bt",
    "sort": "20"
  },
  "BO": {
    "value": "BO",
    "name": "Bolivia",
    "formalname": "Republic of Bolivia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "La Paz (administrative/legislative) and Sucre (judical)",
    "currency": "BOB",
    "tel": "+591",
    "iso3116-1": "068",
    "iso3116-1-2": "BO",
    "iso3116-1-3": "BOL",
    "tld": ".bo",
    "sort": "21"
  },
  "BA": {
    "value": "BA",
    "name": "Bosnia and Herzegovina",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Sarajevo",
    "currency": "BAM",
    "tel": "+387",
    "iso3116-1": "070",
    "iso3116-1-2": "BA",
    "iso3116-1-3": "BIH",
    "tld": ".ba",
    "sort": "22"
  },
  "BW": {
    "value": "BW",
    "name": "Botswana",
    "formalname": "Republic of Botswana",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Gaborone",
    "currency": "BWP",
    "tel": "+267",
    "iso3116-1": "072",
    "iso3116-1-2": "BW",
    "iso3116-1-3": "BWA",
    "tld": ".bw",
    "sort": "23"
  },
  "BR": {
    "value": "BR",
    "name": "Brazil",
    "formalname": "Federative Republic of Brazil",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Brasilia",
    "currency": "BRL",
    "tel": "+55",
    "iso3116-1": "076",
    "iso3116-1-2": "BR",
    "iso3116-1-3": "BRA",
    "tld": ".br",
    "sort": "24"
  },
  "BN": {
    "value": "BN",
    "name": "Brunei",
    "formalname": "Negara Brunei Darussalam",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bandar Seri Begawan",
    "currency": "BND",
    "tel": "+673",
    "iso3116-1": "096",
    "iso3116-1-2": "BN",
    "iso3116-1-3": "BRN",
    "tld": ".bn",
    "sort": "25"
  },
  "BG": {
    "value": "BG",
    "name": "Bulgaria",
    "formalname": "Republic of Bulgaria",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Sofia",
    "currency": "BGN",
    "tel": "+359",
    "iso3116-1": "100",
    "iso3116-1-2": "BG",
    "iso3116-1-3": "BGR",
    "tld": ".bg",
    "sort": "26"
  },
  "BF": {
    "value": "BF",
    "name": "Burkina Faso",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Ouagadougou",
    "currency": "XOF",
    "tel": "+226",
    "iso3116-1": "854",
    "iso3116-1-2": "BF",
    "iso3116-1-3": "BFA",
    "tld": ".bf",
    "sort": "27"
  },
  "BI": {
    "value": "BI",
    "name": "Burundi",
    "formalname": "Republic of Burundi",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bujumbura",
    "currency": "BIF",
    "tel": "+257",
    "iso3116-1": "108",
    "iso3116-1-2": "BI",
    "iso3116-1-3": "BDI",
    "tld": ".bi",
    "sort": "28"
  },
  "KH": {
    "value": "KH",
    "name": "Cambodia",
    "formalname": "Kingdom of Cambodia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Phnom Penh",
    "currency": "KHR",
    "tel": "+855",
    "iso3116-1": "116",
    "iso3116-1-2": "KH",
    "iso3116-1-3": "KHM",
    "tld": ".kh",
    "sort": "29"
  },
  "CM": {
    "value": "CM",
    "name": "Cameroon",
    "formalname": "Republic of Cameroon",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Yaounde",
    "currency": "XAF",
    "tel": "+237",
    "iso3116-1": "120",
    "iso3116-1-2": "CM",
    "iso3116-1-3": "CMR",
    "tld": ".cm",
    "sort": "30"
  },
  "CA": {
    "value": "CA",
    "name": "Canada",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Ottawa",
    "currency": "CAD",
    "tel": "+1",
    "iso3116-1": "124",
    "iso3116-1-2": "CA",
    "iso3116-1-3": "CAN",
    "tld": ".ca",
    "sort": "31"
  },
  "CV": {
    "value": "CV",
    "name": "Cape Verde",
    "formalname": "Republic of Cape Verde",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Praia",
    "currency": "CVE",
    "tel": "+238",
    "iso3116-1": "132",
    "iso3116-1-2": "CV",
    "iso3116-1-3": "CPV",
    "tld": ".cv",
    "sort": "32"
  },
  "CF": {
    "value": "CF",
    "name": "Central African Republic",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bangui",
    "currency": "XAF",
    "tel": "+236",
    "iso3116-1": "140",
    "iso3116-1-2": "CF",
    "iso3116-1-3": "CAF",
    "tld": ".cf",
    "sort": "33"
  },
  "TD": {
    "value": "TD",
    "name": "Chad",
    "formalname": "Republic of Chad",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "N'Djamena",
    "currency": "XAF",
    "tel": "+235",
    "iso3116-1": "148",
    "iso3116-1-2": "TD",
    "iso3116-1-3": "TCD",
    "tld": ".td",
    "sort": "34"
  },
  "CL": {
    "value": "CL",
    "name": "Chile",
    "formalname": "Republic of Chile",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Santiago (administrative/judical) and Valparaiso (legislative)",
    "currency": "CLP",
    "tel": "+56",
    "iso3116-1": "152",
    "iso3116-1-2": "CL",
    "iso3116-1-3": "CHL",
    "tld": ".cl",
    "sort": "35"
  },
  "CN": {
    "value": "CN",
    "name": "China, People's Republic of",
    "formalname": "People's Republic of China",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Beijing",
    "currency": "CNY",
    "tel": "+86",
    "iso3116-1": "156",
    "iso3116-1-2": "CN",
    "iso3116-1-3": "CHN",
    "tld": ".cn",
    "sort": "36"
  },
  "CO": {
    "value": "CO",
    "name": "Colombia",
    "formalname": "Republic of Colombia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bogota",
    "currency": "COP",
    "tel": "+57",
    "iso3116-1": "170",
    "iso3116-1-2": "CO",
    "iso3116-1-3": "COL",
    "tld": ".co",
    "sort": "37"
  },
  "KM": {
    "value": "KM",
    "name": "Comoros",
    "formalname": "Union of Comoros",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Moroni",
    "currency": "KMF",
    "tel": "+269",
    "iso3116-1": "174",
    "iso3116-1-2": "KM",
    "iso3116-1-3": "COM",
    "tld": ".km",
    "sort": "38"
  },
  "CD": {
    "value": "CD",
    "name": "Congo, Democratic Republic of the (Congo – Kinshasa)",
    "formalname": "Democratic Republic of the Congo",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kinshasa",
    "currency": "CDF",
    "tel": "+243",
    "iso3116-1": "180",
    "iso3116-1-2": "CD",
    "iso3116-1-3": "COD",
    "tld": ".cd",
    "sort": "39"
  },
  "CG": {
    "value": "CG",
    "name": "Congo, Republic of the (Congo – Brazzaville)",
    "formalname": "Republic of the Congo",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Brazzaville",
    "currency": "XAF",
    "tel": "+242",
    "iso3116-1": "178",
    "iso3116-1-2": "CG",
    "iso3116-1-3": "COG",
    "tld": ".cg",
    "sort": "40"
  },
  "CR": {
    "value": "CR",
    "name": "Costa Rica",
    "formalname": "Republic of Costa Rica",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "San Jose",
    "currency": "CRC",
    "tel": "+506",
    "iso3116-1": "188",
    "iso3116-1-2": "CR",
    "iso3116-1-3": "CRI",
    "tld": ".cr",
    "sort": "41"
  },
  "CI": {
    "value": "CI",
    "name": "Cote d'Ivoire (Ivory Coast)",
    "formalname": "Republic of Cote d'Ivoire",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Yamoussoukro",
    "currency": "XOF",
    "tel": "+225",
    "iso3116-1": "384",
    "iso3116-1-2": "CI",
    "iso3116-1-3": "CIV",
    "tld": ".ci",
    "sort": "42"
  },
  "HR": {
    "value": "HR",
    "name": "Croatia",
    "formalname": "Republic of Croatia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Zagreb",
    "currency": "HRK",
    "tel": "+385",
    "iso3116-1": "191",
    "iso3116-1-2": "HR",
    "iso3116-1-3": "HRV",
    "tld": ".hr",
    "sort": "43"
  },
  "CU": {
    "value": "CU",
    "name": "Cuba",
    "formalname": "Republic of Cuba",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Havana",
    "currency": "CUP",
    "tel": "+53",
    "iso3116-1": "192",
    "iso3116-1-2": "CU",
    "iso3116-1-3": "CUB",
    "tld": ".cu",
    "sort": "44"
  },
  "CY": {
    "value": "CY",
    "name": "Northern Cyprus",
    "formalname": "Turkish Republic of Northern Cyprus",
    "type": "Proto Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Nicosia",
    "currency": "TRY",
    "tel": "+90-392",
    "iso3116-1": "196",
    "iso3116-1-2": "CY",
    "iso3116-1-3": "CYP",
    "tld": ".nc.tr",
    "sort": "197"
  },
  "CZ": {
    "value": "CZ",
    "name": "Czech Republic",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Prague",
    "currency": "CZK",
    "tel": "+420",
    "iso3116-1": "203",
    "iso3116-1-2": "CZ",
    "iso3116-1-3": "CZE",
    "tld": ".cz",
    "sort": "46"
  },
  "DK": {
    "value": "DK",
    "name": "Denmark",
    "formalname": "Kingdom of Denmark",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Copenhagen",
    "currency": "DKK",
    "tel": "+45",
    "iso3116-1": "208",
    "iso3116-1-2": "DK",
    "iso3116-1-3": "DNK",
    "tld": ".dk",
    "sort": "47"
  },
  "DJ": {
    "value": "DJ",
    "name": "Djibouti",
    "formalname": "Republic of Djibouti",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Djibouti",
    "currency": "DJF",
    "tel": "+253",
    "iso3116-1": "262",
    "iso3116-1-2": "DJ",
    "iso3116-1-3": "DJI",
    "tld": ".dj",
    "sort": "48"
  },
  "DM": {
    "value": "DM",
    "name": "Dominica",
    "formalname": "Commonwealth of Dominica",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Roseau",
    "currency": "XCD",
    "tel": "+1-767",
    "iso3116-1": "212",
    "iso3116-1-2": "DM",
    "iso3116-1-3": "DMA",
    "tld": ".dm",
    "sort": "49"
  },
  "DO": {
    "value": "DO",
    "name": "Dominican Republic",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Santo Domingo",
    "currency": "DOP",
    "tel": "+1-809 and 1-829",
    "iso3116-1": "214",
    "iso3116-1-2": "DO",
    "iso3116-1-3": "DOM",
    "tld": ".do",
    "sort": "50"
  },
  "EC": {
    "value": "EC",
    "name": "Ecuador",
    "formalname": "Republic of Ecuador",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Quito",
    "currency": "USD",
    "tel": "+593",
    "iso3116-1": "218",
    "iso3116-1-2": "EC",
    "iso3116-1-3": "ECU",
    "tld": ".ec",
    "sort": "51"
  },
  "EG": {
    "value": "EG",
    "name": "Egypt",
    "formalname": "Arab Republic of Egypt",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Cairo",
    "currency": "EGP",
    "tel": "+20",
    "iso3116-1": "818",
    "iso3116-1-2": "EG",
    "iso3116-1-3": "EGY",
    "tld": ".eg",
    "sort": "52"
  },
  "SV": {
    "value": "SV",
    "name": "El Salvador",
    "formalname": "Republic of El Salvador",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "San Salvador",
    "currency": "USD",
    "tel": "+503",
    "iso3116-1": "222",
    "iso3116-1-2": "SV",
    "iso3116-1-3": "SLV",
    "tld": ".sv",
    "sort": "53"
  },
  "GQ": {
    "value": "GQ",
    "name": "Equatorial Guinea",
    "formalname": "Republic of Equatorial Guinea",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Malabo",
    "currency": "XAF",
    "tel": "+240",
    "iso3116-1": "226",
    "iso3116-1-2": "GQ",
    "iso3116-1-3": "GNQ",
    "tld": ".gq",
    "sort": "54"
  },
  "ER": {
    "value": "ER",
    "name": "Eritrea",
    "formalname": "State of Eritrea",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Asmara",
    "currency": "ERN",
    "tel": "+291",
    "iso3116-1": "232",
    "iso3116-1-2": "ER",
    "iso3116-1-3": "ERI",
    "tld": ".er",
    "sort": "55"
  },
  "EE": {
    "value": "EE",
    "name": "Estonia",
    "formalname": "Republic of Estonia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tallinn",
    "currency": "EEK",
    "tel": "+372",
    "iso3116-1": "233",
    "iso3116-1-2": "EE",
    "iso3116-1-3": "EST",
    "tld": ".ee",
    "sort": "56"
  },
  "ET": {
    "value": "ET",
    "name": "Ethiopia",
    "formalname": "Federal Democratic Republic of Ethiopia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Addis Ababa",
    "currency": "ETB",
    "tel": "+251",
    "iso3116-1": "231",
    "iso3116-1-2": "ET",
    "iso3116-1-3": "ETH",
    "tld": ".et",
    "sort": "57"
  },
  "FJ": {
    "value": "FJ",
    "name": "Fiji",
    "formalname": "Republic of the Fiji Islands",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Suva",
    "currency": "FJD",
    "tel": "+679",
    "iso3116-1": "242",
    "iso3116-1-2": "FJ",
    "iso3116-1-3": "FJI",
    "tld": ".fj",
    "sort": "58"
  },
  "FI": {
    "value": "FI",
    "name": "Finland",
    "formalname": "Republic of Finland",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Helsinki",
    "currency": "EUR",
    "tel": "+358",
    "iso3116-1": "246",
    "iso3116-1-2": "FI",
    "iso3116-1-3": "FIN",
    "tld": ".fi",
    "sort": "59"
  },
  "FR": {
    "value": "FR",
    "name": "France",
    "formalname": "French Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Paris",
    "currency": "EUR",
    "tel": "+33",
    "iso3116-1": "250",
    "iso3116-1-2": "FR",
    "iso3116-1-3": "FRA",
    "tld": ".fr",
    "sort": "60"
  },
  "GA": {
    "value": "GA",
    "name": "Gabon",
    "formalname": "Gabonese Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Libreville",
    "currency": "XAF",
    "tel": "+241",
    "iso3116-1": "266",
    "iso3116-1-2": "GA",
    "iso3116-1-3": "GAB",
    "tld": ".ga",
    "sort": "61"
  },
  "GM": {
    "value": "GM",
    "name": "Gambia, The",
    "formalname": "Republic of The Gambia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Banjul",
    "currency": "GMD",
    "tel": "+220",
    "iso3116-1": "270",
    "iso3116-1-2": "GM",
    "iso3116-1-3": "GMB",
    "tld": ".gm",
    "sort": "62"
  },
  "GE": {
    "value": "GE",
    "name": "South Ossetia",
    "formalname": "Republic of South Ossetia",
    "type": "Proto Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tskhinvali",
    "currency": "RUB",
    "tel": "+995",
    "iso3116-1": "268",
    "iso3116-1-2": "GE",
    "iso3116-1-3": "GEO",
    "tld": ".ge",
    "sort": "200",
    "currencysecondary": "GEL"
  },
  "DE": {
    "value": "DE",
    "name": "Germany",
    "formalname": "Federal Republic of Germany",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Berlin",
    "currency": "EUR",
    "tel": "+49",
    "iso3116-1": "276",
    "iso3116-1-2": "DE",
    "iso3116-1-3": "DEU",
    "tld": ".de",
    "sort": "64"
  },
  "GH": {
    "value": "GH",
    "name": "Ghana",
    "formalname": "Republic of Ghana",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Accra",
    "currency": "GHS",
    "tel": "+233",
    "iso3116-1": "288",
    "iso3116-1-2": "GH",
    "iso3116-1-3": "GHA",
    "tld": ".gh",
    "sort": "65"
  },
  "GR": {
    "value": "GR",
    "name": "Greece",
    "formalname": "Hellenic Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Athens",
    "currency": "EUR",
    "tel": "+30",
    "iso3116-1": "300",
    "iso3116-1-2": "GR",
    "iso3116-1-3": "GRC",
    "tld": ".gr",
    "sort": "66"
  },
  "GD": {
    "value": "GD",
    "name": "Grenada",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Saint George's",
    "currency": "XCD",
    "tel": "+1-473",
    "iso3116-1": "308",
    "iso3116-1-2": "GD",
    "iso3116-1-3": "GRD",
    "tld": ".gd",
    "sort": "67"
  },
  "GT": {
    "value": "GT",
    "name": "Guatemala",
    "formalname": "Republic of Guatemala",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Guatemala",
    "currency": "GTQ",
    "tel": "+502",
    "iso3116-1": "320",
    "iso3116-1-2": "GT",
    "iso3116-1-3": "GTM",
    "tld": ".gt",
    "sort": "68"
  },
  "GN": {
    "value": "GN",
    "name": "Guinea",
    "formalname": "Republic of Guinea",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Conakry",
    "currency": "GNF",
    "tel": "+224",
    "iso3116-1": "324",
    "iso3116-1-2": "GN",
    "iso3116-1-3": "GIN",
    "tld": ".gn",
    "sort": "69"
  },
  "GW": {
    "value": "GW",
    "name": "Guinea-Bissau",
    "formalname": "Republic of Guinea-Bissau",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bissau",
    "currency": "XOF",
    "tel": "+245",
    "iso3116-1": "624",
    "iso3116-1-2": "GW",
    "iso3116-1-3": "GNB",
    "tld": ".gw",
    "sort": "70"
  },
  "GY": {
    "value": "GY",
    "name": "Guyana",
    "formalname": "Co-operative Republic of Guyana",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Georgetown",
    "currency": "GYD",
    "tel": "+592",
    "iso3116-1": "328",
    "iso3116-1-2": "GY",
    "iso3116-1-3": "GUY",
    "tld": ".gy",
    "sort": "71"
  },
  "HT": {
    "value": "HT",
    "name": "Haiti",
    "formalname": "Republic of Haiti",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Port-au-Prince",
    "currency": "HTG",
    "tel": "+509",
    "iso3116-1": "332",
    "iso3116-1-2": "HT",
    "iso3116-1-3": "HTI",
    "tld": ".ht",
    "sort": "72"
  },
  "HN": {
    "value": "HN",
    "name": "Honduras",
    "formalname": "Republic of Honduras",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tegucigalpa",
    "currency": "HNL",
    "tel": "+504",
    "iso3116-1": "340",
    "iso3116-1-2": "HN",
    "iso3116-1-3": "HND",
    "tld": ".hn",
    "sort": "73"
  },
  "HU": {
    "value": "HU",
    "name": "Hungary",
    "formalname": "Republic of Hungary",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Budapest",
    "currency": "HUF",
    "tel": "+36",
    "iso3116-1": "348",
    "iso3116-1-2": "HU",
    "iso3116-1-3": "HUN",
    "tld": ".hu",
    "sort": "74"
  },
  "IS": {
    "value": "IS",
    "name": "Iceland",
    "formalname": "Republic of Iceland",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Reykjavik",
    "currency": "ISK",
    "tel": "+354",
    "iso3116-1": "352",
    "iso3116-1-2": "IS",
    "iso3116-1-3": "ISL",
    "tld": ".is",
    "sort": "75"
  },
  "IN": {
    "value": "IN",
    "name": "India",
    "formalname": "Republic of India",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "New Delhi",
    "currency": "INR",
    "tel": "+91",
    "iso3116-1": "356",
    "iso3116-1-2": "IN",
    "iso3116-1-3": "IND",
    "tld": ".in",
    "sort": "76"
  },
  "ID": {
    "value": "ID",
    "name": "Indonesia",
    "formalname": "Republic of Indonesia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Jakarta",
    "currency": "IDR",
    "tel": "+62",
    "iso3116-1": "360",
    "iso3116-1-2": "ID",
    "iso3116-1-3": "IDN",
    "tld": ".id",
    "sort": "77"
  },
  "IR": {
    "value": "IR",
    "name": "Iran",
    "formalname": "Islamic Republic of Iran",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tehran",
    "currency": "IRR",
    "tel": "+98",
    "iso3116-1": "364",
    "iso3116-1-2": "IR",
    "iso3116-1-3": "IRN",
    "tld": ".ir",
    "sort": "78"
  },
  "IQ": {
    "value": "IQ",
    "name": "Iraq",
    "formalname": "Republic of Iraq",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Baghdad",
    "currency": "IQD",
    "tel": "+964",
    "iso3116-1": "368",
    "iso3116-1-2": "IQ",
    "iso3116-1-3": "IRQ",
    "tld": ".iq",
    "sort": "79"
  },
  "IE": {
    "value": "IE",
    "name": "Ireland",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Dublin",
    "currency": "EUR",
    "tel": "+353",
    "iso3116-1": "372",
    "iso3116-1-2": "IE",
    "iso3116-1-3": "IRL",
    "tld": ".ie",
    "sort": "80"
  },
  "IL": {
    "value": "IL",
    "name": "Israel",
    "formalname": "State of Israel",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Jerusalem",
    "currency": "ILS",
    "tel": "+972",
    "iso3116-1": "376",
    "iso3116-1-2": "IL",
    "iso3116-1-3": "ISR",
    "tld": ".il",
    "sort": "81"
  },
  "IT": {
    "value": "IT",
    "name": "Italy",
    "formalname": "Italian Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Rome",
    "currency": "EUR",
    "tel": "+39",
    "iso3116-1": "380",
    "iso3116-1-2": "IT",
    "iso3116-1-3": "ITA",
    "tld": ".it",
    "sort": "82"
  },
  "JM": {
    "value": "JM",
    "name": "Jamaica",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kingston",
    "currency": "JMD",
    "tel": "+1-876",
    "iso3116-1": "388",
    "iso3116-1-2": "JM",
    "iso3116-1-3": "JAM",
    "tld": ".jm",
    "sort": "83"
  },
  "JP": {
    "value": "JP",
    "name": "Japan",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tokyo",
    "currency": "JPY",
    "tel": "+81",
    "iso3116-1": "392",
    "iso3116-1-2": "JP",
    "iso3116-1-3": "JPN",
    "tld": ".jp",
    "sort": "84"
  },
  "JO": {
    "value": "JO",
    "name": "Jordan",
    "formalname": "Hashemite Kingdom of Jordan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Amman",
    "currency": "JOD",
    "tel": "+962",
    "iso3116-1": "400",
    "iso3116-1-2": "JO",
    "iso3116-1-3": "JOR",
    "tld": ".jo",
    "sort": "85"
  },
  "KZ": {
    "value": "KZ",
    "name": "Kazakhstan",
    "formalname": "Republic of Kazakhstan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Astana",
    "currency": "KZT",
    "tel": "+7",
    "iso3116-1": "398",
    "iso3116-1-2": "KZ",
    "iso3116-1-3": "KAZ",
    "tld": ".kz",
    "sort": "86"
  },
  "KE": {
    "value": "KE",
    "name": "Kenya",
    "formalname": "Republic of Kenya",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Nairobi",
    "currency": "KES",
    "tel": "+254",
    "iso3116-1": "404",
    "iso3116-1-2": "KE",
    "iso3116-1-3": "KEN",
    "tld": ".ke",
    "sort": "87"
  },
  "KI": {
    "value": "KI",
    "name": "Kiribati",
    "formalname": "Republic of Kiribati",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tarawa",
    "currency": "AUD",
    "tel": "+686",
    "iso3116-1": "296",
    "iso3116-1-2": "KI",
    "iso3116-1-3": "KIR",
    "tld": ".ki",
    "sort": "88"
  },
  "KP": {
    "value": "KP",
    "name": "Korea, Democratic People's Republic of (North Korea)",
    "formalname": "Democratic People's Republic of Korea",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Pyongyang",
    "currency": "KPW",
    "tel": "+850",
    "iso3116-1": "408",
    "iso3116-1-2": "KP",
    "iso3116-1-3": "PRK",
    "tld": ".kp",
    "sort": "89"
  },
  "KR": {
    "value": "KR",
    "name": "Korea, Republic of  (South Korea)",
    "formalname": "Republic of Korea",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Seoul",
    "currency": "KRW",
    "tel": "+82",
    "iso3116-1": "410",
    "iso3116-1-2": "KR",
    "iso3116-1-3": "KOR",
    "tld": ".kr",
    "sort": "90"
  },
  "KW": {
    "value": "KW",
    "name": "Kuwait",
    "formalname": "State of Kuwait",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kuwait",
    "currency": "KWD",
    "tel": "+965",
    "iso3116-1": "414",
    "iso3116-1-2": "KW",
    "iso3116-1-3": "KWT",
    "tld": ".kw",
    "sort": "91"
  },
  "KG": {
    "value": "KG",
    "name": "Kyrgyzstan",
    "formalname": "Kyrgyz Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bishkek",
    "currency": "KGS",
    "tel": "+996",
    "iso3116-1": "417",
    "iso3116-1-2": "KG",
    "iso3116-1-3": "KGZ",
    "tld": ".kg",
    "sort": "92"
  },
  "LA": {
    "value": "LA",
    "name": "Laos",
    "formalname": "Lao People's Democratic Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Vientiane",
    "currency": "LAK",
    "tel": "+856",
    "iso3116-1": "418",
    "iso3116-1-2": "LA",
    "iso3116-1-3": "LAO",
    "tld": ".la",
    "sort": "93"
  },
  "LV": {
    "value": "LV",
    "name": "Latvia",
    "formalname": "Republic of Latvia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Riga",
    "currency": "LVL",
    "tel": "+371",
    "iso3116-1": "428",
    "iso3116-1-2": "LV",
    "iso3116-1-3": "LVA",
    "tld": ".lv",
    "sort": "94"
  },
  "LB": {
    "value": "LB",
    "name": "Lebanon",
    "formalname": "Lebanese Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Beirut",
    "currency": "LBP",
    "tel": "+961",
    "iso3116-1": "422",
    "iso3116-1-2": "LB",
    "iso3116-1-3": "LBN",
    "tld": ".lb",
    "sort": "95"
  },
  "LS": {
    "value": "LS",
    "name": "Lesotho",
    "formalname": "Kingdom of Lesotho",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Maseru",
    "currency": "LSL",
    "tel": "+266",
    "iso3116-1": "426",
    "iso3116-1-2": "LS",
    "iso3116-1-3": "LSO",
    "tld": ".ls",
    "sort": "96"
  },
  "LR": {
    "value": "LR",
    "name": "Liberia",
    "formalname": "Republic of Liberia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Monrovia",
    "currency": "LRD",
    "tel": "+231",
    "iso3116-1": "430",
    "iso3116-1-2": "LR",
    "iso3116-1-3": "LBR",
    "tld": ".lr",
    "sort": "97"
  },
  "LY": {
    "value": "LY",
    "name": "Libya",
    "formalname": "Great Socialist People's Libyan Arab Jamahiriya",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tripoli",
    "currency": "LYD",
    "tel": "+218",
    "iso3116-1": "434",
    "iso3116-1-2": "LY",
    "iso3116-1-3": "LBY",
    "tld": ".ly",
    "sort": "98"
  },
  "LI": {
    "value": "LI",
    "name": "Liechtenstein",
    "formalname": "Principality of Liechtenstein",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Vaduz",
    "currency": "CHF",
    "tel": "+423",
    "iso3116-1": "438",
    "iso3116-1-2": "LI",
    "iso3116-1-3": "LIE",
    "tld": ".li",
    "sort": "99"
  },
  "LT": {
    "value": "LT",
    "name": "Lithuania",
    "formalname": "Republic of Lithuania",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Vilnius",
    "currency": "LTL",
    "tel": "+370",
    "iso3116-1": "440",
    "iso3116-1-2": "LT",
    "iso3116-1-3": "LTU",
    "tld": ".lt",
    "sort": "100"
  },
  "LU": {
    "value": "LU",
    "name": "Luxembourg",
    "formalname": "Grand Duchy of Luxembourg",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Luxembourg",
    "currency": "EUR",
    "tel": "+352",
    "iso3116-1": "442",
    "iso3116-1-2": "LU",
    "iso3116-1-3": "LUX",
    "tld": ".lu",
    "sort": "101"
  },
  "MK": {
    "value": "MK",
    "name": "Macedonia",
    "formalname": "Republic of Macedonia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Skopje",
    "currency": "MKD",
    "tel": "+389",
    "iso3116-1": "807",
    "iso3116-1-2": "MK",
    "iso3116-1-3": "MKD",
    "tld": ".mk",
    "sort": "102"
  },
  "MG": {
    "value": "MG",
    "name": "Madagascar",
    "formalname": "Republic of Madagascar",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Antananarivo",
    "currency": "MGA",
    "tel": "+261",
    "iso3116-1": "450",
    "iso3116-1-2": "MG",
    "iso3116-1-3": "MDG",
    "tld": ".mg",
    "sort": "103"
  },
  "MW": {
    "value": "MW",
    "name": "Malawi",
    "formalname": "Republic of Malawi",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Lilongwe",
    "currency": "MWK",
    "tel": "+265",
    "iso3116-1": "454",
    "iso3116-1-2": "MW",
    "iso3116-1-3": "MWI",
    "tld": ".mw",
    "sort": "104"
  },
  "MY": {
    "value": "MY",
    "name": "Malaysia",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kuala Lumpur (legislative/judical) and Putrajaya (administrative)",
    "currency": "MYR",
    "tel": "+60",
    "iso3116-1": "458",
    "iso3116-1-2": "MY",
    "iso3116-1-3": "MYS",
    "tld": ".my",
    "sort": "105"
  },
  "MV": {
    "value": "MV",
    "name": "Maldives",
    "formalname": "Republic of Maldives",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Male",
    "currency": "MVR",
    "tel": "+960",
    "iso3116-1": "462",
    "iso3116-1-2": "MV",
    "iso3116-1-3": "MDV",
    "tld": ".mv",
    "sort": "106"
  },
  "ML": {
    "value": "ML",
    "name": "Mali",
    "formalname": "Republic of Mali",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bamako",
    "currency": "XOF",
    "tel": "+223",
    "iso3116-1": "466",
    "iso3116-1-2": "ML",
    "iso3116-1-3": "MLI",
    "tld": ".ml",
    "sort": "107"
  },
  "MT": {
    "value": "MT",
    "name": "Malta",
    "formalname": "Republic of Malta",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Valletta",
    "currency": "MTL",
    "tel": "+356",
    "iso3116-1": "470",
    "iso3116-1-2": "MT",
    "iso3116-1-3": "MLT",
    "tld": ".mt",
    "sort": "108"
  },
  "MH": {
    "value": "MH",
    "name": "Marshall Islands",
    "formalname": "Republic of the Marshall Islands",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Majuro",
    "currency": "USD",
    "tel": "+692",
    "iso3116-1": "584",
    "iso3116-1-2": "MH",
    "iso3116-1-3": "MHL",
    "tld": ".mh",
    "sort": "109"
  },
  "MR": {
    "value": "MR",
    "name": "Mauritania",
    "formalname": "Islamic Republic of Mauritania",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Nouakchott",
    "currency": "MRO",
    "tel": "+222",
    "iso3116-1": "478",
    "iso3116-1-2": "MR",
    "iso3116-1-3": "MRT",
    "tld": ".mr",
    "sort": "110"
  },
  "MU": {
    "value": "MU",
    "name": "Mauritius",
    "formalname": "Republic of Mauritius",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Port Louis",
    "currency": "MUR",
    "tel": "+230",
    "iso3116-1": "480",
    "iso3116-1-2": "MU",
    "iso3116-1-3": "MUS",
    "tld": ".mu",
    "sort": "111"
  },
  "MX": {
    "value": "MX",
    "name": "Mexico",
    "formalname": "United Mexican States",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Mexico",
    "currency": "MXN",
    "tel": "+52",
    "iso3116-1": "484",
    "iso3116-1-2": "MX",
    "iso3116-1-3": "MEX",
    "tld": ".mx",
    "sort": "112"
  },
  "FM": {
    "value": "FM",
    "name": "Micronesia",
    "formalname": "Federated States of Micronesia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Palikir",
    "currency": "USD",
    "tel": "+691",
    "iso3116-1": "583",
    "iso3116-1-2": "FM",
    "iso3116-1-3": "FSM",
    "tld": ".fm",
    "sort": "113"
  },
  "MD": {
    "value": "MD",
    "name": "Pridnestrovie (Transnistria)",
    "formalname": "Pridnestrovian Moldavian Republic",
    "type": "Proto Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tiraspol",
    "currency": "",
    "tel": "+373-533",
    "iso3116-1": "498",
    "iso3116-1-2": "MD",
    "iso3116-1-3": "MDA",
    "tld": ".md",
    "sort": "198"
  },
  "MC": {
    "value": "MC",
    "name": "Monaco",
    "formalname": "Principality of Monaco",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Monaco",
    "currency": "EUR",
    "tel": "+377",
    "iso3116-1": "492",
    "iso3116-1-2": "MC",
    "iso3116-1-3": "MCO",
    "tld": ".mc",
    "sort": "115"
  },
  "MN": {
    "value": "MN",
    "name": "Mongolia",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Ulaanbaatar",
    "currency": "MNT",
    "tel": "+976",
    "iso3116-1": "496",
    "iso3116-1-2": "MN",
    "iso3116-1-3": "MNG",
    "tld": ".mn",
    "sort": "116"
  },
  "ME": {
    "value": "ME",
    "name": "Montenegro",
    "formalname": "Republic of Montenegro",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Podgorica",
    "currency": "EUR",
    "tel": "+382",
    "iso3116-1": "499",
    "iso3116-1-2": "ME",
    "iso3116-1-3": "MNE",
    "tld": ".me",
    "sort": "117",
    "tldsecondary": ".yu"
  },
  "MA": {
    "value": "MA",
    "name": "Morocco",
    "formalname": "Kingdom of Morocco",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Rabat",
    "currency": "MAD",
    "tel": "+212",
    "iso3116-1": "504",
    "iso3116-1-2": "MA",
    "iso3116-1-3": "MAR",
    "tld": ".ma",
    "sort": "118"
  },
  "MZ": {
    "value": "MZ",
    "name": "Mozambique",
    "formalname": "Republic of Mozambique",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Maputo",
    "currency": "MZM",
    "tel": "+258",
    "iso3116-1": "508",
    "iso3116-1-2": "MZ",
    "iso3116-1-3": "MOZ",
    "tld": ".mz",
    "sort": "119"
  },
  "MM": {
    "value": "MM",
    "name": "Myanmar (Burma)",
    "formalname": "Union of Myanmar",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Naypyidaw",
    "currency": "MMK",
    "tel": "+95",
    "iso3116-1": "104",
    "iso3116-1-2": "MM",
    "iso3116-1-3": "MMR",
    "tld": ".mm",
    "sort": "120"
  },
  "NA": {
    "value": "NA",
    "name": "Namibia",
    "formalname": "Republic of Namibia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Windhoek",
    "currency": "NAD",
    "tel": "+264",
    "iso3116-1": "516",
    "iso3116-1-2": "NA",
    "iso3116-1-3": "NAM",
    "tld": ".na",
    "sort": "121"
  },
  "NR": {
    "value": "NR",
    "name": "Nauru",
    "formalname": "Republic of Nauru",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Yaren",
    "currency": "AUD",
    "tel": "+674",
    "iso3116-1": "520",
    "iso3116-1-2": "NR",
    "iso3116-1-3": "NRU",
    "tld": ".nr",
    "sort": "122"
  },
  "NP": {
    "value": "NP",
    "name": "Nepal",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kathmandu",
    "currency": "NPR",
    "tel": "+977",
    "iso3116-1": "524",
    "iso3116-1-2": "NP",
    "iso3116-1-3": "NPL",
    "tld": ".np",
    "sort": "123"
  },
  "NL": {
    "value": "NL",
    "name": "Netherlands",
    "formalname": "Kingdom of the Netherlands",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Amsterdam (administrative) and The Hague (legislative/judical)",
    "currency": "EUR",
    "tel": "+31",
    "iso3116-1": "528",
    "iso3116-1-2": "NL",
    "iso3116-1-3": "NLD",
    "tld": ".nl",
    "sort": "124"
  },
  "NZ": {
    "value": "NZ",
    "name": "New Zealand",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Wellington",
    "currency": "NZD",
    "tel": "+64",
    "iso3116-1": "554",
    "iso3116-1-2": "NZ",
    "iso3116-1-3": "NZL",
    "tld": ".nz",
    "sort": "125"
  },
  "NI": {
    "value": "NI",
    "name": "Nicaragua",
    "formalname": "Republic of Nicaragua",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Managua",
    "currency": "NIO",
    "tel": "+505",
    "iso3116-1": "558",
    "iso3116-1-2": "NI",
    "iso3116-1-3": "NIC",
    "tld": ".ni",
    "sort": "126"
  },
  "NE": {
    "value": "NE",
    "name": "Niger",
    "formalname": "Republic of Niger",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Niamey",
    "currency": "XOF",
    "tel": "+227",
    "iso3116-1": "562",
    "iso3116-1-2": "NE",
    "iso3116-1-3": "NER",
    "tld": ".ne",
    "sort": "127"
  },
  "NG": {
    "value": "NG",
    "name": "Nigeria",
    "formalname": "Federal Republic of Nigeria",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Abuja",
    "currency": "NGN",
    "tel": "+234",
    "iso3116-1": "566",
    "iso3116-1-2": "NG",
    "iso3116-1-3": "NGA",
    "tld": ".ng",
    "sort": "128"
  },
  "NO": {
    "value": "NO",
    "name": "Norway",
    "formalname": "Kingdom of Norway",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Oslo",
    "currency": "NOK",
    "tel": "+47",
    "iso3116-1": "578",
    "iso3116-1-2": "NO",
    "iso3116-1-3": "NOR",
    "tld": ".no",
    "sort": "129"
  },
  "OM": {
    "value": "OM",
    "name": "Oman",
    "formalname": "Sultanate of Oman",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Muscat",
    "currency": "OMR",
    "tel": "+968",
    "iso3116-1": "512",
    "iso3116-1-2": "OM",
    "iso3116-1-3": "OMN",
    "tld": ".om",
    "sort": "130"
  },
  "PK": {
    "value": "PK",
    "name": "Pakistan",
    "formalname": "Islamic Republic of Pakistan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Islamabad",
    "currency": "PKR",
    "tel": "+92",
    "iso3116-1": "586",
    "iso3116-1-2": "PK",
    "iso3116-1-3": "PAK",
    "tld": ".pk",
    "sort": "131"
  },
  "PW": {
    "value": "PW",
    "name": "Palau",
    "formalname": "Republic of Palau",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Melekeok",
    "currency": "USD",
    "tel": "+680",
    "iso3116-1": "585",
    "iso3116-1-2": "PW",
    "iso3116-1-3": "PLW",
    "tld": ".pw",
    "sort": "132"
  },
  "PA": {
    "value": "PA",
    "name": "Panama",
    "formalname": "Republic of Panama",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Panama",
    "currency": "PAB",
    "tel": "+507",
    "iso3116-1": "591",
    "iso3116-1-2": "PA",
    "iso3116-1-3": "PAN",
    "tld": ".pa",
    "sort": "133"
  },
  "PG": {
    "value": "PG",
    "name": "Papua New Guinea",
    "formalname": "Independent State of Papua New Guinea",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Port Moresby",
    "currency": "PGK",
    "tel": "+675",
    "iso3116-1": "598",
    "iso3116-1-2": "PG",
    "iso3116-1-3": "PNG",
    "tld": ".pg",
    "sort": "134"
  },
  "PY": {
    "value": "PY",
    "name": "Paraguay",
    "formalname": "Republic of Paraguay",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Asuncion",
    "currency": "PYG",
    "tel": "+595",
    "iso3116-1": "600",
    "iso3116-1-2": "PY",
    "iso3116-1-3": "PRY",
    "tld": ".py",
    "sort": "135"
  },
  "PE": {
    "value": "PE",
    "name": "Peru",
    "formalname": "Republic of Peru",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Lima",
    "currency": "PEN",
    "tel": "+51",
    "iso3116-1": "604",
    "iso3116-1-2": "PE",
    "iso3116-1-3": "PER",
    "tld": ".pe",
    "sort": "136"
  },
  "PH": {
    "value": "PH",
    "name": "Philippines",
    "formalname": "Republic of the Philippines",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Manila",
    "currency": "PHP",
    "tel": "+63",
    "iso3116-1": "608",
    "iso3116-1-2": "PH",
    "iso3116-1-3": "PHL",
    "tld": ".ph",
    "sort": "137"
  },
  "PL": {
    "value": "PL",
    "name": "Poland",
    "formalname": "Republic of Poland",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Warsaw",
    "currency": "PLN",
    "tel": "+48",
    "iso3116-1": "616",
    "iso3116-1-2": "PL",
    "iso3116-1-3": "POL",
    "tld": ".pl",
    "sort": "138"
  },
  "PT": {
    "value": "PT",
    "name": "Portugal",
    "formalname": "Portuguese Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Lisbon",
    "currency": "EUR",
    "tel": "+351",
    "iso3116-1": "620",
    "iso3116-1-2": "PT",
    "iso3116-1-3": "PRT",
    "tld": ".pt",
    "sort": "139"
  },
  "QA": {
    "value": "QA",
    "name": "Qatar",
    "formalname": "State of Qatar",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Doha",
    "currency": "QAR",
    "tel": "+974",
    "iso3116-1": "634",
    "iso3116-1-2": "QA",
    "iso3116-1-3": "QAT",
    "tld": ".qa",
    "sort": "140"
  },
  "RO": {
    "value": "RO",
    "name": "Romania",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bucharest",
    "currency": "RON",
    "tel": "+40",
    "iso3116-1": "642",
    "iso3116-1-2": "RO",
    "iso3116-1-3": "ROU",
    "tld": ".ro",
    "sort": "141"
  },
  "RU": {
    "value": "RU",
    "name": "Russia",
    "formalname": "Russian Federation",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Moscow",
    "currency": "RUB",
    "tel": "+7",
    "iso3116-1": "643",
    "iso3116-1-2": "RU",
    "iso3116-1-3": "RUS",
    "tld": ".ru",
    "sort": "142",
    "tldsecondary": ".su"
  },
  "RW": {
    "value": "RW",
    "name": "Rwanda",
    "formalname": "Republic of Rwanda",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kigali",
    "currency": "RWF",
    "tel": "+250",
    "iso3116-1": "646",
    "iso3116-1-2": "RW",
    "iso3116-1-3": "RWA",
    "tld": ".rw",
    "sort": "143"
  },
  "KN": {
    "value": "KN",
    "name": "Saint Kitts and Nevis",
    "formalname": "Federation of Saint Kitts and Nevis",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Basseterre",
    "currency": "XCD",
    "tel": "+1-869",
    "iso3116-1": "659",
    "iso3116-1-2": "KN",
    "iso3116-1-3": "KNA",
    "tld": ".kn",
    "sort": "144"
  },
  "LC": {
    "value": "LC",
    "name": "Saint Lucia",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Castries",
    "currency": "XCD",
    "tel": "+1-758",
    "iso3116-1": "662",
    "iso3116-1-2": "LC",
    "iso3116-1-3": "LCA",
    "tld": ".lc",
    "sort": "145"
  },
  "VC": {
    "value": "VC",
    "name": "Saint Vincent and the Grenadines",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kingstown",
    "currency": "XCD",
    "tel": "+1-784",
    "iso3116-1": "670",
    "iso3116-1-2": "VC",
    "iso3116-1-3": "VCT",
    "tld": ".vc",
    "sort": "146"
  },
  "WS": {
    "value": "WS",
    "name": "Samoa",
    "formalname": "Independent State of Samoa",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Apia",
    "currency": "WST",
    "tel": "+685",
    "iso3116-1": "882",
    "iso3116-1-2": "WS",
    "iso3116-1-3": "WSM",
    "tld": ".ws",
    "sort": "147"
  },
  "SM": {
    "value": "SM",
    "name": "San Marino",
    "formalname": "Republic of San Marino",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "San Marino",
    "currency": "EUR",
    "tel": "+378",
    "iso3116-1": "674",
    "iso3116-1-2": "SM",
    "iso3116-1-3": "SMR",
    "tld": ".sm",
    "sort": "148"
  },
  "ST": {
    "value": "ST",
    "name": "Sao Tome and Principe",
    "formalname": "Democratic Republic of Sao Tome and Principe",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Sao Tome",
    "currency": "STD",
    "tel": "+239",
    "iso3116-1": "678",
    "iso3116-1-2": "ST",
    "iso3116-1-3": "STP",
    "tld": ".st",
    "sort": "149"
  },
  "SA": {
    "value": "SA",
    "name": "Saudi Arabia",
    "formalname": "Kingdom of Saudi Arabia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Riyadh",
    "currency": "SAR",
    "tel": "+966",
    "iso3116-1": "682",
    "iso3116-1-2": "SA",
    "iso3116-1-3": "SAU",
    "tld": ".sa",
    "sort": "150"
  },
  "SN": {
    "value": "SN",
    "name": "Senegal",
    "formalname": "Republic of Senegal",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Dakar",
    "currency": "XOF",
    "tel": "+221",
    "iso3116-1": "686",
    "iso3116-1-2": "SN",
    "iso3116-1-3": "SEN",
    "tld": ".sn",
    "sort": "151"
  },
  "RS": {
    "value": "RS",
    "name": "Serbia",
    "formalname": "Republic of Serbia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Belgrade",
    "currency": "RSD",
    "tel": "+381",
    "iso3116-1": "688",
    "iso3116-1-2": "RS",
    "iso3116-1-3": "SRB",
    "tld": ".rs",
    "sort": "152",
    "tldsecondary": ".yu"
  },
  "SC": {
    "value": "SC",
    "name": "Seychelles",
    "formalname": "Republic of Seychelles",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Victoria",
    "currency": "SCR",
    "tel": "+248",
    "iso3116-1": "690",
    "iso3116-1-2": "SC",
    "iso3116-1-3": "SYC",
    "tld": ".sc",
    "sort": "153"
  },
  "SL": {
    "value": "SL",
    "name": "Sierra Leone",
    "formalname": "Republic of Sierra Leone",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Freetown",
    "currency": "SLL",
    "tel": "+232",
    "iso3116-1": "694",
    "iso3116-1-2": "SL",
    "iso3116-1-3": "SLE",
    "tld": ".sl",
    "sort": "154"
  },
  "SG": {
    "value": "SG",
    "name": "Singapore",
    "formalname": "Republic of Singapore",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Singapore",
    "currency": "SGD",
    "tel": "+65",
    "iso3116-1": "702",
    "iso3116-1-2": "SG",
    "iso3116-1-3": "SGP",
    "tld": ".sg",
    "sort": "155"
  },
  "SK": {
    "value": "SK",
    "name": "Slovakia",
    "formalname": "Slovak Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bratislava",
    "currency": "SKK",
    "tel": "+421",
    "iso3116-1": "703",
    "iso3116-1-2": "SK",
    "iso3116-1-3": "SVK",
    "tld": ".sk",
    "sort": "156"
  },
  "SI": {
    "value": "SI",
    "name": "Slovenia",
    "formalname": "Republic of Slovenia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Ljubljana",
    "currency": "EUR",
    "tel": "+386",
    "iso3116-1": "705",
    "iso3116-1-2": "SI",
    "iso3116-1-3": "SVN",
    "tld": ".si",
    "sort": "157"
  },
  "SB": {
    "value": "SB",
    "name": "Solomon Islands",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Honiara",
    "currency": "SBD",
    "tel": "+677",
    "iso3116-1": "090",
    "iso3116-1-2": "SB",
    "iso3116-1-3": "SLB",
    "tld": ".sb",
    "sort": "158"
  },
  "SO": {
    "value": "SO",
    "name": "Somaliland",
    "formalname": "Republic of Somaliland",
    "type": "Proto Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Hargeisa",
    "currency": "",
    "tel": "+252",
    "iso3116-1": "706",
    "iso3116-1-2": "SO",
    "iso3116-1-3": "SOM",
    "tld": ".so",
    "sort": "199"
  },
  "ZA": {
    "value": "ZA",
    "name": "South Africa",
    "formalname": "Republic of South Africa",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judical)",
    "currency": "ZAR",
    "tel": "+27",
    "iso3116-1": "710",
    "iso3116-1-2": "ZA",
    "iso3116-1-3": "ZAF",
    "tld": ".za",
    "sort": "160"
  },
  "ES": {
    "value": "ES",
    "name": "Spain",
    "formalname": "Kingdom of Spain",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Madrid",
    "currency": "EUR",
    "tel": "+34",
    "iso3116-1": "724",
    "iso3116-1-2": "ES",
    "iso3116-1-3": "ESP",
    "tld": ".es",
    "sort": "161"
  },
  "LK": {
    "value": "LK",
    "name": "Sri Lanka",
    "formalname": "Democratic Socialist Republic of Sri Lanka",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Colombo (administrative/judical) and Sri Jayewardenepura Kotte (legislative)",
    "currency": "LKR",
    "tel": "+94",
    "iso3116-1": "144",
    "iso3116-1-2": "LK",
    "iso3116-1-3": "LKA",
    "tld": ".lk",
    "sort": "162"
  },
  "SD": {
    "value": "SD",
    "name": "Sudan",
    "formalname": "Republic of the Sudan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Khartoum",
    "currency": "SDG",
    "tel": "+249",
    "iso3116-1": "736",
    "iso3116-1-2": "SD",
    "iso3116-1-3": "SDN",
    "tld": ".sd",
    "sort": "163"
  },
  "SR": {
    "value": "SR",
    "name": "Suriname",
    "formalname": "Republic of Suriname",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Paramaribo",
    "currency": "SRD",
    "tel": "+597",
    "iso3116-1": "740",
    "iso3116-1-2": "SR",
    "iso3116-1-3": "SUR",
    "tld": ".sr",
    "sort": "164"
  },
  "SZ": {
    "value": "SZ",
    "name": "Swaziland",
    "formalname": "Kingdom of Swaziland",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Mbabane (administrative) and Lobamba (legislative)",
    "currency": "SZL",
    "tel": "+268",
    "iso3116-1": "748",
    "iso3116-1-2": "SZ",
    "iso3116-1-3": "SWZ",
    "tld": ".sz",
    "sort": "165"
  },
  "SE": {
    "value": "SE",
    "name": "Sweden",
    "formalname": "Kingdom of Sweden",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Stockholm",
    "currency": "SEK",
    "tel": "+46",
    "iso3116-1": "752",
    "iso3116-1-2": "SE",
    "iso3116-1-3": "SWE",
    "tld": ".se",
    "sort": "166"
  },
  "CH": {
    "value": "CH",
    "name": "Switzerland",
    "formalname": "Swiss Confederation",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bern",
    "currency": "CHF",
    "tel": "+41",
    "iso3116-1": "756",
    "iso3116-1-2": "CH",
    "iso3116-1-3": "CHE",
    "tld": ".ch",
    "sort": "167"
  },
  "SY": {
    "value": "SY",
    "name": "Syria",
    "formalname": "Syrian Arab Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Damascus",
    "currency": "SYP",
    "tel": "+963",
    "iso3116-1": "760",
    "iso3116-1-2": "SY",
    "iso3116-1-3": "SYR",
    "tld": ".sy",
    "sort": "168"
  },
  "TJ": {
    "value": "TJ",
    "name": "Tajikistan",
    "formalname": "Republic of Tajikistan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Dushanbe",
    "currency": "TJS",
    "tel": "+992",
    "iso3116-1": "762",
    "iso3116-1-2": "TJ",
    "iso3116-1-3": "TJK",
    "tld": ".tj",
    "sort": "169"
  },
  "TZ": {
    "value": "TZ",
    "name": "Tanzania",
    "formalname": "United Republic of Tanzania",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Dar es Salaam (administrative/judical) and Dodoma (legislative)",
    "currency": "TZS",
    "tel": "+255",
    "iso3116-1": "834",
    "iso3116-1-2": "TZ",
    "iso3116-1-3": "TZA",
    "tld": ".tz",
    "sort": "170"
  },
  "TH": {
    "value": "TH",
    "name": "Thailand",
    "formalname": "Kingdom of Thailand",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Bangkok",
    "currency": "THB",
    "tel": "+66",
    "iso3116-1": "764",
    "iso3116-1-2": "TH",
    "iso3116-1-3": "THA",
    "tld": ".th",
    "sort": "171"
  },
  "TL": {
    "value": "TL",
    "name": "Timor-Leste (East Timor)",
    "formalname": "Democratic Republic of Timor-Leste",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Dili",
    "currency": "USD",
    "tel": "+670",
    "iso3116-1": "626",
    "iso3116-1-2": "TL",
    "iso3116-1-3": "TLS",
    "tld": ".tp",
    "sort": "172",
    "tldsecondary": ".tl"
  },
  "TG": {
    "value": "TG",
    "name": "Togo",
    "formalname": "Togolese Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Lome",
    "currency": "XOF",
    "tel": "+228",
    "iso3116-1": "768",
    "iso3116-1-2": "TG",
    "iso3116-1-3": "TGO",
    "tld": ".tg",
    "sort": "173"
  },
  "TO": {
    "value": "TO",
    "name": "Tonga",
    "formalname": "Kingdom of Tonga",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Nuku'alofa",
    "currency": "TOP",
    "tel": "+676",
    "iso3116-1": "776",
    "iso3116-1-2": "TO",
    "iso3116-1-3": "TON",
    "tld": ".to",
    "sort": "174"
  },
  "TT": {
    "value": "TT",
    "name": "Trinidad and Tobago",
    "formalname": "Republic of Trinidad and Tobago",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Port-of-Spain",
    "currency": "TTD",
    "tel": "+1-868",
    "iso3116-1": "780",
    "iso3116-1-2": "TT",
    "iso3116-1-3": "TTO",
    "tld": ".tt",
    "sort": "175"
  },
  "TN": {
    "value": "TN",
    "name": "Tunisia",
    "formalname": "Tunisian Republic",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tunis",
    "currency": "TND",
    "tel": "+216",
    "iso3116-1": "788",
    "iso3116-1-2": "TN",
    "iso3116-1-3": "TUN",
    "tld": ".tn",
    "sort": "176"
  },
  "TR": {
    "value": "TR",
    "name": "Turkey",
    "formalname": "Republic of Turkey",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Ankara",
    "currency": "TRY",
    "tel": "+90",
    "iso3116-1": "792",
    "iso3116-1-2": "TR",
    "iso3116-1-3": "TUR",
    "tld": ".tr",
    "sort": "177"
  },
  "TM": {
    "value": "TM",
    "name": "Turkmenistan",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Ashgabat",
    "currency": "TMM",
    "tel": "+993",
    "iso3116-1": "795",
    "iso3116-1-2": "TM",
    "iso3116-1-3": "TKM",
    "tld": ".tm",
    "sort": "178"
  },
  "TV": {
    "value": "TV",
    "name": "Tuvalu",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Funafuti",
    "currency": "AUD",
    "tel": "+688",
    "iso3116-1": "798",
    "iso3116-1-2": "TV",
    "iso3116-1-3": "TUV",
    "tld": ".tv",
    "sort": "179"
  },
  "UG": {
    "value": "UG",
    "name": "Uganda",
    "formalname": "Republic of Uganda",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kampala",
    "currency": "UGX",
    "tel": "+256",
    "iso3116-1": "800",
    "iso3116-1-2": "UG",
    "iso3116-1-3": "UGA",
    "tld": ".ug",
    "sort": "180"
  },
  "UA": {
    "value": "UA",
    "name": "Ukraine",
    "formalname": "",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Kiev",
    "currency": "UAH",
    "tel": "+380",
    "iso3116-1": "804",
    "iso3116-1-2": "UA",
    "iso3116-1-3": "UKR",
    "tld": ".ua",
    "sort": "181"
  },
  "AE": {
    "value": "AE",
    "name": "United Arab Emirates",
    "formalname": "United Arab Emirates",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Abu Dhabi",
    "currency": "AED",
    "tel": "+971",
    "iso3116-1": "784",
    "iso3116-1-2": "AE",
    "iso3116-1-3": "ARE",
    "tld": ".ae",
    "sort": "182"
  },
  "GB": {
    "value": "GB",
    "name": "United Kingdom",
    "formalname": "United Kingdom of Great Britain and Northern Ireland",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "London",
    "currency": "GBP",
    "tel": "+44",
    "iso3116-1": "826",
    "iso3116-1-2": "GB",
    "iso3116-1-3": "GBR",
    "tld": ".uk",
    "sort": "183"
  },
  "US": {
    "value": "US",
    "name": "United States",
    "formalname": "United States of America",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Washington",
    "currency": "USD",
    "tel": "+1",
    "iso3116-1": "840",
    "iso3116-1-2": "US",
    "iso3116-1-3": "USA",
    "tld": ".us",
    "sort": "184"
  },
  "UY": {
    "value": "UY",
    "name": "Uruguay",
    "formalname": "Oriental Republic of Uruguay",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Montevideo",
    "currency": "UYU",
    "tel": "+598",
    "iso3116-1": "858",
    "iso3116-1-2": "UY",
    "iso3116-1-3": "URY",
    "tld": ".uy",
    "sort": "185"
  },
  "UZ": {
    "value": "UZ",
    "name": "Uzbekistan",
    "formalname": "Republic of Uzbekistan",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Tashkent",
    "currency": "UZS",
    "tel": "+998",
    "iso3116-1": "860",
    "iso3116-1-2": "UZ",
    "iso3116-1-3": "UZB",
    "tld": ".uz",
    "sort": "186"
  },
  "VU": {
    "value": "VU",
    "name": "Vanuatu",
    "formalname": "Republic of Vanuatu",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Port-Vila",
    "currency": "VUV",
    "tel": "+678",
    "iso3116-1": "548",
    "iso3116-1-2": "VU",
    "iso3116-1-3": "VUT",
    "tld": ".vu",
    "sort": "187"
  },
  "VA": {
    "value": "VA",
    "name": "Vatican City",
    "formalname": "State of the Vatican City",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Vatican City",
    "currency": "EUR",
    "tel": "+379",
    "iso3116-1": "336",
    "iso3116-1-2": "VA",
    "iso3116-1-3": "VAT",
    "tld": ".va",
    "sort": "188"
  },
  "VE": {
    "value": "VE",
    "name": "Venezuela",
    "formalname": "Bolivarian Republic of Venezuela",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Caracas",
    "currency": "VEB",
    "tel": "+58",
    "iso3116-1": "862",
    "iso3116-1-2": "VE",
    "iso3116-1-3": "VEN",
    "tld": ".ve",
    "sort": "189"
  },
  "VN": {
    "value": "VN",
    "name": "Vietnam",
    "formalname": "Socialist Republic of Vietnam",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Hanoi",
    "currency": "VND",
    "tel": "+84",
    "iso3116-1": "704",
    "iso3116-1-2": "VN",
    "iso3116-1-3": "VNM",
    "tld": ".vn",
    "sort": "190"
  },
  "YE": {
    "value": "YE",
    "name": "Yemen",
    "formalname": "Republic of Yemen",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Sanaa",
    "currency": "YER",
    "tel": "+967",
    "iso3116-1": "887",
    "iso3116-1-2": "YE",
    "iso3116-1-3": "YEM",
    "tld": ".ye",
    "sort": "191"
  },
  "ZM": {
    "value": "ZM",
    "name": "Zambia",
    "formalname": "Republic of Zambia",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Lusaka",
    "currency": "ZMK",
    "tel": "+260",
    "iso3116-1": "894",
    "iso3116-1-2": "ZM",
    "iso3116-1-3": "ZMB",
    "tld": ".zm",
    "sort": "192"
  },
  "ZW": {
    "value": "ZW",
    "name": "Zimbabwe",
    "formalname": "Republic of Zimbabwe",
    "type": "Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Harare",
    "currency": "ZWD",
    "tel": "+263",
    "iso3116-1": "716",
    "iso3116-1-2": "ZW",
    "iso3116-1-3": "ZWE",
    "tld": ".zw",
    "sort": "193"
  },
  "TW": {
    "value": "TW",
    "name": "China, Republic of (Taiwan)",
    "formalname": "Republic of China",
    "type": "Proto Independent State",
    "subtype": "",
    "sovereignty": "",
    "capital": "Taipei",
    "currency": "TWD",
    "tel": "+886",
    "iso3116-1": "158",
    "iso3116-1-2": "TW",
    "iso3116-1-3": "TWN",
    "tld": ".tw",
    "sort": "195"
  },
  "CX": {
    "value": "CX",
    "name": "Christmas Island",
    "formalname": "Territory of Christmas Island",
    "type": "Dependency",
    "subtype": "External Territory",
    "sovereignty": "Australia",
    "capital": "The Settlement (Flying Fish Cove)",
    "currency": "AUD",
    "tel": "+61",
    "iso3116-1": "162",
    "iso3116-1-2": "CX",
    "iso3116-1-3": "CXR",
    "tld": ".cx",
    "sort": "202"
  },
  "CC": {
    "value": "CC",
    "name": "Cocos (Keeling) Islands",
    "formalname": "Territory of Cocos (Keeling) Islands",
    "type": "Dependency",
    "subtype": "External Territory",
    "sovereignty": "Australia",
    "capital": "West Island",
    "currency": "AUD",
    "tel": "+61",
    "iso3116-1": "166",
    "iso3116-1-2": "CC",
    "iso3116-1-3": "CCK",
    "tld": ".cc",
    "sort": "203"
  },
  "HM": {
    "value": "HM",
    "name": "Heard Island and McDonald Islands",
    "formalname": "Territory of Heard Island and McDonald Islands",
    "type": "Dependency",
    "subtype": "External Territory",
    "sovereignty": "Australia",
    "capital": "",
    "currency": "",
    "tel": "",
    "iso3116-1": "334",
    "iso3116-1-2": "HM",
    "iso3116-1-3": "HMD",
    "tld": ".hm",
    "sort": "205"
  },
  "NF": {
    "value": "NF",
    "name": "Norfolk Island",
    "formalname": "Territory of Norfolk Island",
    "type": "Dependency",
    "subtype": "External Territory",
    "sovereignty": "Australia",
    "capital": "Kingston",
    "currency": "AUD",
    "tel": "+672",
    "iso3116-1": "574",
    "iso3116-1-2": "NF",
    "iso3116-1-3": "NFK",
    "tld": ".nf",
    "sort": "206"
  },
  "NC": {
    "value": "NC",
    "name": "New Caledonia",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Sui generis Collectivity",
    "sovereignty": "France",
    "capital": "Noumea",
    "currency": "XPF",
    "tel": "+687",
    "iso3116-1": "540",
    "iso3116-1-2": "NC",
    "iso3116-1-3": "NCL",
    "tld": ".nc",
    "sort": "207"
  },
  "PF": {
    "value": "PF",
    "name": "Clipperton Island",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Possession",
    "sovereignty": "France",
    "capital": "",
    "currency": "",
    "tel": "",
    "iso3116-1": "258",
    "iso3116-1-2": "PF",
    "iso3116-1-3": "PYF",
    "tld": ".pf",
    "sort": "215"
  },
  "YT": {
    "value": "YT",
    "name": "Mayotte",
    "formalname": "Departmental Collectivity of Mayotte",
    "type": "Dependency",
    "subtype": "Overseas Collectivity",
    "sovereignty": "France",
    "capital": "Mamoudzou",
    "currency": "EUR",
    "tel": "+262",
    "iso3116-1": "175",
    "iso3116-1-2": "YT",
    "iso3116-1-3": "MYT",
    "tld": ".yt",
    "sort": "209"
  },
  "GP": {
    "value": "GP",
    "name": "Guadeloupe",
    "formalname": "Overseas Region of Guadeloupe",
    "type": "Proto Dependency",
    "subtype": "Overseas Region",
    "sovereignty": "France",
    "capital": "Basse-Terre",
    "currency": "EUR",
    "tel": "+590",
    "iso3116-1": "312",
    "iso3116-1-2": "GP",
    "iso3116-1-3": "GLP",
    "tld": ".gp",
    "sort": "255"
  },
  "PM": {
    "value": "PM",
    "name": "Saint Pierre and Miquelon",
    "formalname": "Territorial Collectivity of Saint Pierre and Miquelon",
    "type": "Dependency",
    "subtype": "Overseas Collectivity",
    "sovereignty": "France",
    "capital": "Saint-Pierre",
    "currency": "EUR",
    "tel": "+508",
    "iso3116-1": "666",
    "iso3116-1-2": "PM",
    "iso3116-1-3": "SPM",
    "tld": ".pm",
    "sort": "212"
  },
  "WF": {
    "value": "WF",
    "name": "Wallis and Futuna",
    "formalname": "Collectivity of the Wallis and Futuna Islands",
    "type": "Dependency",
    "subtype": "Overseas Collectivity",
    "sovereignty": "France",
    "capital": "Mata'utu",
    "currency": "XPF",
    "tel": "+681",
    "iso3116-1": "876",
    "iso3116-1-2": "WF",
    "iso3116-1-3": "WLF",
    "tld": ".wf",
    "sort": "213"
  },
  "TF": {
    "value": "TF",
    "name": "French Southern and Antarctic Lands",
    "formalname": "Territory of the French Southern and Antarctic Lands",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "France",
    "capital": "Martin-de-Viviès",
    "currency": "",
    "tel": "",
    "iso3116-1": "260",
    "iso3116-1-2": "TF",
    "iso3116-1-3": "ATF",
    "tld": ".tf",
    "sort": "214"
  },
  "BV": {
    "value": "BV",
    "name": "Bouvet Island",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Territory",
    "sovereignty": "Norway",
    "capital": "",
    "currency": "",
    "tel": "",
    "iso3116-1": "074",
    "iso3116-1-2": "BV",
    "iso3116-1-3": "BVT",
    "tld": ".bv",
    "sort": "216"
  },
  "CK": {
    "value": "CK",
    "name": "Cook Islands",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Self-Governing in Free Association",
    "sovereignty": "New Zealand",
    "capital": "Avarua",
    "currency": "NZD",
    "tel": "+682",
    "iso3116-1": "184",
    "iso3116-1-2": "CK",
    "iso3116-1-3": "COK",
    "tld": ".ck",
    "sort": "217"
  },
  "NU": {
    "value": "NU",
    "name": "Niue",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Self-Governing in Free Association",
    "sovereignty": "New Zealand",
    "capital": "Alofi",
    "currency": "NZD",
    "tel": "+683",
    "iso3116-1": "570",
    "iso3116-1-2": "NU",
    "iso3116-1-3": "NIU",
    "tld": ".nu",
    "sort": "218"
  },
  "TK": {
    "value": "TK",
    "name": "Tokelau",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Territory",
    "sovereignty": "New Zealand",
    "capital": "",
    "currency": "NZD",
    "tel": "+690",
    "iso3116-1": "772",
    "iso3116-1-2": "TK",
    "iso3116-1-3": "TKL",
    "tld": ".tk",
    "sort": "219"
  },
  "GG": {
    "value": "GG",
    "name": "Guernsey",
    "formalname": "Bailiwick of Guernsey",
    "type": "Dependency",
    "subtype": "Crown Dependency",
    "sovereignty": "United Kingdom",
    "capital": "Saint Peter Port",
    "currency": "GGP",
    "tel": "+44",
    "iso3116-1": "831",
    "iso3116-1-2": "GG",
    "iso3116-1-3": "GGY",
    "tld": ".gg",
    "sort": "220"
  },
  "IM": {
    "value": "IM",
    "name": "Isle of Man",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Crown Dependency",
    "sovereignty": "United Kingdom",
    "capital": "Douglas",
    "currency": "IMP",
    "tel": "+44",
    "iso3116-1": "833",
    "iso3116-1-2": "IM",
    "iso3116-1-3": "IMN",
    "tld": ".im",
    "sort": "221"
  },
  "JE": {
    "value": "JE",
    "name": "Jersey",
    "formalname": "Bailiwick of Jersey",
    "type": "Dependency",
    "subtype": "Crown Dependency",
    "sovereignty": "United Kingdom",
    "capital": "Saint Helier",
    "currency": "JEP",
    "tel": "+44",
    "iso3116-1": "832",
    "iso3116-1-2": "JE",
    "iso3116-1-3": "JEY",
    "tld": ".je",
    "sort": "222"
  },
  "AI": {
    "value": "AI",
    "name": "Anguilla",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "The Valley",
    "currency": "XCD",
    "tel": "+1-264",
    "iso3116-1": "660",
    "iso3116-1-2": "AI",
    "iso3116-1-3": "AIA",
    "tld": ".ai",
    "sort": "223"
  },
  "BM": {
    "value": "BM",
    "name": "Bermuda",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Hamilton",
    "currency": "BMD",
    "tel": "+1-441",
    "iso3116-1": "060",
    "iso3116-1-2": "BM",
    "iso3116-1-3": "BMU",
    "tld": ".bm",
    "sort": "224"
  },
  "IO": {
    "value": "IO",
    "name": "British Indian Ocean Territory",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "",
    "currency": "",
    "tel": "+246",
    "iso3116-1": "086",
    "iso3116-1-2": "IO",
    "iso3116-1-3": "IOT",
    "tld": ".io",
    "sort": "225"
  },
  "VG": {
    "value": "VG",
    "name": "British Virgin Islands",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Road Town",
    "currency": "USD",
    "tel": "+1-284",
    "iso3116-1": "092",
    "iso3116-1-2": "VG",
    "iso3116-1-3": "VGB",
    "tld": ".vg",
    "sort": "227"
  },
  "KY": {
    "value": "KY",
    "name": "Cayman Islands",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "George Town",
    "currency": "KYD",
    "tel": "+1-345",
    "iso3116-1": "136",
    "iso3116-1-2": "KY",
    "iso3116-1-3": "CYM",
    "tld": ".ky",
    "sort": "228"
  },
  "FK": {
    "value": "FK",
    "name": "Falkland Islands (Islas Malvinas)",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Stanley",
    "currency": "FKP",
    "tel": "+500",
    "iso3116-1": "238",
    "iso3116-1-2": "FK",
    "iso3116-1-3": "FLK",
    "tld": ".fk",
    "sort": "229"
  },
  "GI": {
    "value": "GI",
    "name": "Gibraltar",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Gibraltar",
    "currency": "GIP",
    "tel": "+350",
    "iso3116-1": "292",
    "iso3116-1-2": "GI",
    "iso3116-1-3": "GIB",
    "tld": ".gi",
    "sort": "230"
  },
  "MS": {
    "value": "MS",
    "name": "Montserrat",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Plymouth",
    "currency": "XCD",
    "tel": "+1-664",
    "iso3116-1": "500",
    "iso3116-1-2": "MS",
    "iso3116-1-3": "MSR",
    "tld": ".ms",
    "sort": "231"
  },
  "PN": {
    "value": "PN",
    "name": "Pitcairn Islands",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Adamstown",
    "currency": "NZD",
    "tel": "",
    "iso3116-1": "612",
    "iso3116-1-2": "PN",
    "iso3116-1-3": "PCN",
    "tld": ".pn",
    "sort": "232"
  },
  "SH": {
    "value": "SH",
    "name": "Saint Helena",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Jamestown",
    "currency": "SHP",
    "tel": "+290",
    "iso3116-1": "654",
    "iso3116-1-2": "SH",
    "iso3116-1-3": "SHN",
    "tld": ".sh",
    "sort": "233"
  },
  "GS": {
    "value": "GS",
    "name": "South Georgia and the South Sandwich Islands",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "",
    "currency": "",
    "tel": "",
    "iso3116-1": "239",
    "iso3116-1-2": "GS",
    "iso3116-1-3": "SGS",
    "tld": ".gs",
    "sort": "234"
  },
  "TC": {
    "value": "TC",
    "name": "Turks and Caicos Islands",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "Grand Turk",
    "currency": "USD",
    "tel": "+1-649",
    "iso3116-1": "796",
    "iso3116-1-2": "TC",
    "iso3116-1-3": "TCA",
    "tld": ".tc",
    "sort": "235"
  },
  "MP": {
    "value": "MP",
    "name": "Northern Mariana Islands",
    "formalname": "Commonwealth of The Northern Mariana Islands",
    "type": "Dependency",
    "subtype": "Commonwealth",
    "sovereignty": "United States",
    "capital": "Saipan",
    "currency": "USD",
    "tel": "+1-670",
    "iso3116-1": "580",
    "iso3116-1-2": "MP",
    "iso3116-1-3": "MNP",
    "tld": ".mp",
    "sort": "236"
  },
  "PR": {
    "value": "PR",
    "name": "Puerto Rico",
    "formalname": "Commonwealth of Puerto Rico",
    "type": "Dependency",
    "subtype": "Commonwealth",
    "sovereignty": "United States",
    "capital": "San Juan",
    "currency": "USD",
    "tel": "+1-787 and 1-939",
    "iso3116-1": "630",
    "iso3116-1-2": "PR",
    "iso3116-1-3": "PRI",
    "tld": ".pr",
    "sort": "237"
  },
  "AS": {
    "value": "AS",
    "name": "American Samoa",
    "formalname": "Territory of American Samoa",
    "type": "Dependency",
    "subtype": "Territory",
    "sovereignty": "United States",
    "capital": "Pago Pago",
    "currency": "USD",
    "tel": "+1-684",
    "iso3116-1": "016",
    "iso3116-1-2": "AS",
    "iso3116-1-3": "ASM",
    "tld": ".as",
    "sort": "238"
  },
  "UM": {
    "value": "UM",
    "name": "Wake Island",
    "formalname": "",
    "type": "Dependency",
    "subtype": "Territory",
    "sovereignty": "United States",
    "capital": "",
    "currency": "",
    "tel": "",
    "iso3116-1": "850",
    "iso3116-1-2": "UM",
    "iso3116-1-3": "UMI",
    "tld": "",
    "sort": "249"
  },
  "GU": {
    "value": "GU",
    "name": "Guam",
    "formalname": "Territory of Guam",
    "type": "Dependency",
    "subtype": "Territory",
    "sovereignty": "United States",
    "capital": "Hagatna",
    "currency": "USD",
    "tel": "+1-671",
    "iso3116-1": "316",
    "iso3116-1-2": "GU",
    "iso3116-1-3": "GUM",
    "tld": ".gu",
    "sort": "240"
  },
  "VI": {
    "value": "VI",
    "name": "U.S. Virgin Islands",
    "formalname": "United States Virgin Islands",
    "type": "Dependency",
    "subtype": "Territory",
    "sovereignty": "United States",
    "capital": "Charlotte Amalie",
    "currency": "USD",
    "tel": "+1-340",
    "iso3116-1": "850",
    "iso3116-1-2": "VI",
    "iso3116-1-3": "VIR",
    "tld": ".vi",
    "sort": "248"
  },
  "HK": {
    "value": "HK",
    "name": "Hong Kong",
    "formalname": "Hong Kong Special Administrative Region",
    "type": "Proto Dependency",
    "subtype": "Special Administrative Region",
    "sovereignty": "China",
    "capital": "",
    "currency": "HKD",
    "tel": "+852",
    "iso3116-1": "344",
    "iso3116-1-2": "HK",
    "iso3116-1-3": "HKG",
    "tld": ".hk",
    "sort": "250"
  },
  "MO": {
    "value": "MO",
    "name": "Macau",
    "formalname": "Macau Special Administrative Region",
    "type": "Proto Dependency",
    "subtype": "Special Administrative Region",
    "sovereignty": "China",
    "capital": "Macau",
    "currency": "MOP",
    "tel": "+853",
    "iso3116-1": "446",
    "iso3116-1-2": "MO",
    "iso3116-1-3": "MAC",
    "tld": ".mo",
    "sort": "251"
  },
  "FO": {
    "value": "FO",
    "name": "Faroe Islands",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "",
    "sovereignty": "Denmark",
    "capital": "Torshavn",
    "currency": "DKK",
    "tel": "+298",
    "iso3116-1": "234",
    "iso3116-1-2": "FO",
    "iso3116-1-3": "FRO",
    "tld": ".fo",
    "sort": "252"
  },
  "GL": {
    "value": "GL",
    "name": "Greenland",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "",
    "sovereignty": "Denmark",
    "capital": "Nuuk (Godthab)",
    "currency": "DKK",
    "tel": "+299",
    "iso3116-1": "304",
    "iso3116-1-2": "GL",
    "iso3116-1-3": "GRL",
    "tld": ".gl",
    "sort": "253"
  },
  "GF": {
    "value": "GF",
    "name": "French Guiana",
    "formalname": "Overseas Region of Guiana",
    "type": "Proto Dependency",
    "subtype": "Overseas Region",
    "sovereignty": "France",
    "capital": "Cayenne",
    "currency": "EUR",
    "tel": "+594",
    "iso3116-1": "254",
    "iso3116-1-2": "GF",
    "iso3116-1-3": "GUF",
    "tld": ".gf",
    "sort": "254"
  },
  "MQ": {
    "value": "MQ",
    "name": "Martinique",
    "formalname": "Overseas Region of Martinique",
    "type": "Proto Dependency",
    "subtype": "Overseas Region",
    "sovereignty": "France",
    "capital": "Fort-de-France",
    "currency": "EUR",
    "tel": "+596",
    "iso3116-1": "474",
    "iso3116-1-2": "MQ",
    "iso3116-1-3": "MTQ",
    "tld": ".mq",
    "sort": "256"
  },
  "RE": {
    "value": "RE",
    "name": "Reunion",
    "formalname": "Overseas Region of Reunion",
    "type": "Proto Dependency",
    "subtype": "Overseas Region",
    "sovereignty": "France",
    "capital": "Saint-Denis",
    "currency": "EUR",
    "tel": "+262",
    "iso3116-1": "638",
    "iso3116-1-2": "RE",
    "iso3116-1-3": "REU",
    "tld": ".re",
    "sort": "257"
  },
  "AX": {
    "value": "AX",
    "name": "Aland",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "",
    "sovereignty": "Finland",
    "capital": "Mariehamn",
    "currency": "EUR",
    "tel": "+358-18",
    "iso3116-1": "248",
    "iso3116-1-2": "AX",
    "iso3116-1-3": "ALA",
    "tld": ".ax",
    "sort": "258"
  },
  "AW": {
    "value": "AW",
    "name": "Aruba",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "",
    "sovereignty": "Netherlands",
    "capital": "Oranjestad",
    "currency": "AWG",
    "tel": "+297",
    "iso3116-1": "533",
    "iso3116-1-2": "AW",
    "iso3116-1-3": "ABW",
    "tld": ".aw",
    "sort": "259"
  },
  "AN": {
    "value": "AN",
    "name": "Netherlands Antilles",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "",
    "sovereignty": "Netherlands",
    "capital": "Willemstad",
    "currency": "ANG",
    "tel": "+599",
    "iso3116-1": "530",
    "iso3116-1-2": "AN",
    "iso3116-1-3": "ANT",
    "tld": ".an",
    "sort": "260"
  },
  "SJ": {
    "value": "SJ",
    "name": "Svalbard",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "",
    "sovereignty": "Norway",
    "capital": "Longyearbyen",
    "currency": "NOK",
    "tel": "+47",
    "iso3116-1": "744",
    "iso3116-1-2": "SJ",
    "iso3116-1-3": "SJM",
    "tld": ".sj",
    "sort": "261"
  },
  "AC": {
    "value": "AC",
    "name": "Ascension",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "Dependency of Saint Helena",
    "sovereignty": "United Kingdom",
    "capital": "Georgetown",
    "currency": "SHP",
    "tel": "+247",
    "iso3116-1": "",
    "iso3116-1-2": "AC",
    "iso3116-1-3": "ASC",
    "tld": ".ac",
    "sort": "262"
  },
  "TA": {
    "value": "TA",
    "name": "Tristan da Cunha",
    "formalname": "",
    "type": "Proto Dependency",
    "subtype": "Dependency of Saint Helena",
    "sovereignty": "United Kingdom",
    "capital": "Edinburgh",
    "currency": "SHP",
    "tel": "+290",
    "iso3116-1": "",
    "iso3116-1-2": "TA",
    "iso3116-1-3": "TAA",
    "tld": "",
    "sort": "263"
  },
  "AQ": {
    "value": "AQ",
    "name": "British Antarctic Territory",
    "formalname": "",
    "type": "Antarctic Territory",
    "subtype": "Overseas Territory",
    "sovereignty": "United Kingdom",
    "capital": "",
    "currency": "",
    "tel": "",
    "iso3116-1": "010",
    "iso3116-1-2": "AQ",
    "iso3116-1-3": "ATA",
    "tld": ".aq",
    "sort": "272"
  },
  "CS": {
    "value": "CS",
    "name": "Kosovo",
    "formalname": "",
    "type": "Disputed Territory",
    "subtype": "",
    "sovereignty": "Administrated by the UN",
    "capital": "Pristina",
    "currency": "CSD",
    "tel": "+381",
    "iso3116-1": "891",
    "iso3116-1-2": "CS",
    "iso3116-1-3": "SCG",
    "tld": ".cs",
    "sort": "265",
    "tldsecondary": ".yu",
    "currencysecondary": "EUR"
  },
  "PS": {
    "value": "PS",
    "name": "Palestinian Territories (Gaza Strip and West Bank)",
    "formalname": "",
    "type": "Disputed Territory",
    "subtype": "",
    "sovereignty": "Administrated by Israel",
    "capital": "Gaza City (Gaza Strip) and Ramallah (West Bank)",
    "currency": "ILS",
    "tel": "+970",
    "iso3116-1": "275",
    "iso3116-1-2": "PS",
    "iso3116-1-3": "PSE",
    "tld": ".ps",
    "sort": "266"
  },
  "EH": {
    "value": "EH",
    "name": "Western Sahara",
    "formalname": "",
    "type": "Disputed Territory",
    "subtype": "",
    "sovereignty": "Administrated by Morocco",
    "capital": "El-Aaiun",
    "currency": "MAD",
    "tel": "+212",
    "iso3116-1": "732",
    "iso3116-1-2": "EH",
    "iso3116-1-3": "ESH",
    "tld": ".eh",
    "sort": "267"
  }
};

  iso.currencies = {
  "AFN": {
    "currency": "AFN",
    "name": "Afghani",
    "countries": [
      "AF"
    ]
  },
  "ALL": {
    "currency": "ALL",
    "name": "Lek",
    "countries": [
      "AL"
    ]
  },
  "DZD": {
    "currency": "DZD",
    "name": "Dinar",
    "countries": [
      "DZ"
    ]
  },
  "EUR": {
    "currency": "EUR",
    "name": "Euro",
    "countries": [
      "AD",
      "AT",
      "BE",
      "FI",
      "FR",
      "DE",
      "GR",
      "IE",
      "IT",
      "LU",
      "MC",
      "ME",
      "NL",
      "PT",
      "SM",
      "SI",
      "ES",
      "VA",
      "YT",
      "GP",
      "GP",
      "PM",
      "GF",
      "GP",
      "MQ",
      "RE",
      "AX",
      "CS"
    ]
  },
  "AOA": {
    "currency": "AOA",
    "name": "Kwanza",
    "countries": [
      "AO"
    ]
  },
  "XCD": {
    "currency": "XCD",
    "name": "Dollar",
    "countries": [
      "AG",
      "DM",
      "GD",
      "KN",
      "LC",
      "VC",
      "AI",
      "MS"
    ]
  },
  "ARS": {
    "currency": "ARS",
    "name": "Peso",
    "countries": [
      "AR"
    ]
  },
  "AMD": {
    "currency": "AMD",
    "name": "Dram",
    "countries": [
      "AM",
      "AZ"
    ]
  },
  "AUD": {
    "currency": "AUD",
    "name": "Dollar",
    "countries": [
      "AU",
      "KI",
      "NR",
      "TV",
      "CX",
      "CC",
      "NF"
    ]
  },
  "AZN": {
    "currency": "AZN",
    "name": "Manat",
    "countries": [
      "AZ"
    ]
  },
  "BSD": {
    "currency": "BSD",
    "name": "Dollar",
    "countries": [
      "BS"
    ]
  },
  "BHD": {
    "currency": "BHD",
    "name": "Dinar",
    "countries": [
      "BH"
    ]
  },
  "BDT": {
    "currency": "BDT",
    "name": "Taka",
    "countries": [
      "BD"
    ]
  },
  "BBD": {
    "currency": "BBD",
    "name": "Dollar",
    "countries": [
      "BB"
    ]
  },
  "BYR": {
    "currency": "BYR",
    "name": "Ruble",
    "countries": [
      "BY"
    ]
  },
  "BZD": {
    "currency": "BZD",
    "name": "Dollar",
    "countries": [
      "BZ"
    ]
  },
  "XOF": {
    "currency": "XOF",
    "name": "Franc",
    "countries": [
      "BJ",
      "BF",
      "CI",
      "GW",
      "ML",
      "NE",
      "SN",
      "TG"
    ]
  },
  "BTN": {
    "currency": "BTN",
    "name": "Ngultrum",
    "countries": [
      "BT"
    ]
  },
  "BOB": {
    "currency": "BOB",
    "name": "Boliviano",
    "countries": [
      "BO"
    ]
  },
  "BAM": {
    "currency": "BAM",
    "name": "Marka",
    "countries": [
      "BA"
    ]
  },
  "BWP": {
    "currency": "BWP",
    "name": "Pula",
    "countries": [
      "BW"
    ]
  },
  "BRL": {
    "currency": "BRL",
    "name": "Real",
    "countries": [
      "BR"
    ]
  },
  "BND": {
    "currency": "BND",
    "name": "Dollar",
    "countries": [
      "BN"
    ]
  },
  "BGN": {
    "currency": "BGN",
    "name": "Lev",
    "countries": [
      "BG"
    ]
  },
  "BIF": {
    "currency": "BIF",
    "name": "Franc",
    "countries": [
      "BI"
    ]
  },
  "KHR": {
    "currency": "KHR",
    "name": "Riels",
    "countries": [
      "KH"
    ]
  },
  "XAF": {
    "currency": "XAF",
    "name": "Franc",
    "countries": [
      "CM",
      "CF",
      "TD",
      "CG",
      "GQ",
      "GA"
    ]
  },
  "CAD": {
    "currency": "CAD",
    "name": "Dollar",
    "countries": [
      "CA"
    ]
  },
  "CVE": {
    "currency": "CVE",
    "name": "Escudo",
    "countries": [
      "CV"
    ]
  },
  "CLP": {
    "currency": "CLP",
    "name": "Peso",
    "countries": [
      "CL"
    ]
  },
  "CNY": {
    "currency": "CNY",
    "name": "Yuan Renminbi",
    "countries": [
      "CN"
    ]
  },
  "COP": {
    "currency": "COP",
    "name": "Peso",
    "countries": [
      "CO"
    ]
  },
  "KMF": {
    "currency": "KMF",
    "name": "Franc",
    "countries": [
      "KM"
    ]
  },
  "CDF": {
    "currency": "CDF",
    "name": "Franc",
    "countries": [
      "CD"
    ]
  },
  "CRC": {
    "currency": "CRC",
    "name": "Colon",
    "countries": [
      "CR"
    ]
  },
  "HRK": {
    "currency": "HRK",
    "name": "Kuna",
    "countries": [
      "HR"
    ]
  },
  "CUP": {
    "currency": "CUP",
    "name": "Peso",
    "countries": [
      "CU"
    ]
  },
  "CYP": {
    "currency": "CYP",
    "name": "Pound",
    "countries": [
      "CY"
    ]
  },
  "CZK": {
    "currency": "CZK",
    "name": "Koruna",
    "countries": [
      "CZ"
    ]
  },
  "DKK": {
    "currency": "DKK",
    "name": "Krone",
    "countries": [
      "DK",
      "FO",
      "GL"
    ]
  },
  "DJF": {
    "currency": "DJF",
    "name": "Franc",
    "countries": [
      "DJ"
    ]
  },
  "DOP": {
    "currency": "DOP",
    "name": "Peso",
    "countries": [
      "DO"
    ]
  },
  "USD": {
    "currency": "USD",
    "name": "Dollar",
    "countries": [
      "EC",
      "SV",
      "MH",
      "FM",
      "PW",
      "TL",
      "US",
      "VG",
      "TC",
      "MP",
      "PR",
      "AS",
      "GU",
      "VI"
    ]
  },
  "EGP": {
    "currency": "EGP",
    "name": "Pound",
    "countries": [
      "EG"
    ]
  },
  "ERN": {
    "currency": "ERN",
    "name": "Nakfa",
    "countries": [
      "ER"
    ]
  },
  "EEK": {
    "currency": "EEK",
    "name": "Kroon",
    "countries": [
      "EE"
    ]
  },
  "ETB": {
    "currency": "ETB",
    "name": "Birr",
    "countries": [
      "ET"
    ]
  },
  "FJD": {
    "currency": "FJD",
    "name": "Dollar",
    "countries": [
      "FJ"
    ]
  },
  "GMD": {
    "currency": "GMD",
    "name": "Dalasi",
    "countries": [
      "GM"
    ]
  },
  "GEL": {
    "currency": "GEL",
    "name": "Lari",
    "countries": [
      "GE",
      "GE"
    ]
  },
  "GHS": {
    "currency": "GHS",
    "name": "Cedi",
    "countries": [
      "GH"
    ]
  },
  "GTQ": {
    "currency": "GTQ",
    "name": "Quetzal",
    "countries": [
      "GT"
    ]
  },
  "GNF": {
    "currency": "GNF",
    "name": "Franc",
    "countries": [
      "GN"
    ]
  },
  "GYD": {
    "currency": "GYD",
    "name": "Dollar",
    "countries": [
      "GY"
    ]
  },
  "HTG": {
    "currency": "HTG",
    "name": "Gourde",
    "countries": [
      "HT"
    ]
  },
  "HNL": {
    "currency": "HNL",
    "name": "Lempira",
    "countries": [
      "HN"
    ]
  },
  "HUF": {
    "currency": "HUF",
    "name": "Forint",
    "countries": [
      "HU"
    ]
  },
  "ISK": {
    "currency": "ISK",
    "name": "Krona",
    "countries": [
      "IS"
    ]
  },
  "INR": {
    "currency": "INR",
    "name": "Rupee",
    "countries": [
      "IN"
    ]
  },
  "IDR": {
    "currency": "IDR",
    "name": "Rupiah",
    "countries": [
      "ID"
    ]
  },
  "IRR": {
    "currency": "IRR",
    "name": "Rial",
    "countries": [
      "IR"
    ]
  },
  "IQD": {
    "currency": "IQD",
    "name": "Dinar",
    "countries": [
      "IQ"
    ]
  },
  "ILS": {
    "currency": "ILS",
    "name": "Shekel",
    "countries": [
      "IL",
      "PS"
    ]
  },
  "JMD": {
    "currency": "JMD",
    "name": "Dollar",
    "countries": [
      "JM"
    ]
  },
  "JPY": {
    "currency": "JPY",
    "name": "Yen",
    "countries": [
      "JP"
    ]
  },
  "JOD": {
    "currency": "JOD",
    "name": "Dinar",
    "countries": [
      "JO"
    ]
  },
  "KZT": {
    "currency": "KZT",
    "name": "Tenge",
    "countries": [
      "KZ"
    ]
  },
  "KES": {
    "currency": "KES",
    "name": "Shilling",
    "countries": [
      "KE"
    ]
  },
  "KPW": {
    "currency": "KPW",
    "name": "Won",
    "countries": [
      "KP"
    ]
  },
  "KRW": {
    "currency": "KRW",
    "name": "Won",
    "countries": [
      "KR"
    ]
  },
  "KWD": {
    "currency": "KWD",
    "name": "Dinar",
    "countries": [
      "KW"
    ]
  },
  "KGS": {
    "currency": "KGS",
    "name": "Som",
    "countries": [
      "KG"
    ]
  },
  "LAK": {
    "currency": "LAK",
    "name": "Kip",
    "countries": [
      "LA"
    ]
  },
  "LVL": {
    "currency": "LVL",
    "name": "Lat",
    "countries": [
      "LV"
    ]
  },
  "LBP": {
    "currency": "LBP",
    "name": "Pound",
    "countries": [
      "LB"
    ]
  },
  "LSL": {
    "currency": "LSL",
    "name": "Loti",
    "countries": [
      "LS"
    ]
  },
  "LRD": {
    "currency": "LRD",
    "name": "Dollar",
    "countries": [
      "LR"
    ]
  },
  "LYD": {
    "currency": "LYD",
    "name": "Dinar",
    "countries": [
      "LY"
    ]
  },
  "CHF": {
    "currency": "CHF",
    "name": "Franc",
    "countries": [
      "LI",
      "CH"
    ]
  },
  "LTL": {
    "currency": "LTL",
    "name": "Litas",
    "countries": [
      "LT"
    ]
  },
  "MKD": {
    "currency": "MKD",
    "name": "Denar",
    "countries": [
      "MK"
    ]
  },
  "MGA": {
    "currency": "MGA",
    "name": "Ariary",
    "countries": [
      "MG"
    ]
  },
  "MWK": {
    "currency": "MWK",
    "name": "Kwacha",
    "countries": [
      "MW"
    ]
  },
  "MYR": {
    "currency": "MYR",
    "name": "Ringgit",
    "countries": [
      "MY"
    ]
  },
  "MVR": {
    "currency": "MVR",
    "name": "Rufiyaa",
    "countries": [
      "MV"
    ]
  },
  "MTL": {
    "currency": "MTL",
    "name": "Lira",
    "countries": [
      "MT"
    ]
  },
  "MRO": {
    "currency": "MRO",
    "name": "Ouguiya",
    "countries": [
      "MR"
    ]
  },
  "MUR": {
    "currency": "MUR",
    "name": "Rupee",
    "countries": [
      "MU"
    ]
  },
  "MXN": {
    "currency": "MXN",
    "name": "Peso",
    "countries": [
      "MX"
    ]
  },
  "MDL": {
    "currency": "MDL",
    "name": "Leu",
    "countries": [
      "MD"
    ]
  },
  "MNT": {
    "currency": "MNT",
    "name": "Tugrik",
    "countries": [
      "MN"
    ]
  },
  "MAD": {
    "currency": "MAD",
    "name": "Dirham",
    "countries": [
      "MA",
      "EH"
    ]
  },
  "MZM": {
    "currency": "MZM",
    "name": "Meticail",
    "countries": [
      "MZ"
    ]
  },
  "MMK": {
    "currency": "MMK",
    "name": "Kyat",
    "countries": [
      "MM"
    ]
  },
  "NAD": {
    "currency": "NAD",
    "name": "Dollar",
    "countries": [
      "NA"
    ]
  },
  "NPR": {
    "currency": "NPR",
    "name": "Rupee",
    "countries": [
      "NP"
    ]
  },
  "NZD": {
    "currency": "NZD",
    "name": "Dollar",
    "countries": [
      "NZ",
      "CK",
      "NU",
      "TK",
      "PN"
    ]
  },
  "NIO": {
    "currency": "NIO",
    "name": "Cordoba",
    "countries": [
      "NI"
    ]
  },
  "NGN": {
    "currency": "NGN",
    "name": "Naira",
    "countries": [
      "NG"
    ]
  },
  "NOK": {
    "currency": "NOK",
    "name": "Krone",
    "countries": [
      "NO",
      "SJ"
    ]
  },
  "OMR": {
    "currency": "OMR",
    "name": "Rial",
    "countries": [
      "OM"
    ]
  },
  "PKR": {
    "currency": "PKR",
    "name": "Rupee",
    "countries": [
      "PK"
    ]
  },
  "PAB": {
    "currency": "PAB",
    "name": "Balboa",
    "countries": [
      "PA"
    ]
  },
  "PGK": {
    "currency": "PGK",
    "name": "Kina",
    "countries": [
      "PG"
    ]
  },
  "PYG": {
    "currency": "PYG",
    "name": "Guarani",
    "countries": [
      "PY"
    ]
  },
  "PEN": {
    "currency": "PEN",
    "name": "Sol",
    "countries": [
      "PE"
    ]
  },
  "PHP": {
    "currency": "PHP",
    "name": "Peso",
    "countries": [
      "PH"
    ]
  },
  "PLN": {
    "currency": "PLN",
    "name": "Zloty",
    "countries": [
      "PL"
    ]
  },
  "QAR": {
    "currency": "QAR",
    "name": "Rial",
    "countries": [
      "QA"
    ]
  },
  "RON": {
    "currency": "RON",
    "name": "Leu",
    "countries": [
      "RO"
    ]
  },
  "RUB": {
    "currency": "RUB",
    "name": "Ruble",
    "countries": [
      "RU",
      "GE",
      "GE"
    ]
  },
  "RWF": {
    "currency": "RWF",
    "name": "Franc",
    "countries": [
      "RW"
    ]
  },
  "WST": {
    "currency": "WST",
    "name": "Tala",
    "countries": [
      "WS"
    ]
  },
  "STD": {
    "currency": "STD",
    "name": "Dobra",
    "countries": [
      "ST"
    ]
  },
  "SAR": {
    "currency": "SAR",
    "name": "Rial",
    "countries": [
      "SA"
    ]
  },
  "RSD": {
    "currency": "RSD",
    "name": "Dinar",
    "countries": [
      "RS"
    ]
  },
  "SCR": {
    "currency": "SCR",
    "name": "Rupee",
    "countries": [
      "SC"
    ]
  },
  "SLL": {
    "currency": "SLL",
    "name": "Leone",
    "countries": [
      "SL"
    ]
  },
  "SGD": {
    "currency": "SGD",
    "name": "Dollar",
    "countries": [
      "SG"
    ]
  },
  "SKK": {
    "currency": "SKK",
    "name": "Koruna",
    "countries": [
      "SK"
    ]
  },
  "SBD": {
    "currency": "SBD",
    "name": "Dollar",
    "countries": [
      "SB"
    ]
  },
  "SOS": {
    "currency": "SOS",
    "name": "Shilling",
    "countries": [
      "SO"
    ]
  },
  "ZAR": {
    "currency": "ZAR",
    "name": "Rand",
    "countries": [
      "ZA"
    ]
  },
  "LKR": {
    "currency": "LKR",
    "name": "Rupee",
    "countries": [
      "LK"
    ]
  },
  "SDG": {
    "currency": "SDG",
    "name": "Pound",
    "countries": [
      "SD"
    ]
  },
  "SRD": {
    "currency": "SRD",
    "name": "Dollar",
    "countries": [
      "SR"
    ]
  },
  "SZL": {
    "currency": "SZL",
    "name": "Lilangeni",
    "countries": [
      "SZ"
    ]
  },
  "SEK": {
    "currency": "SEK",
    "name": "Kronoa",
    "countries": [
      "SE"
    ]
  },
  "SYP": {
    "currency": "SYP",
    "name": "Pound",
    "countries": [
      "SY"
    ]
  },
  "TJS": {
    "currency": "TJS",
    "name": "Somoni",
    "countries": [
      "TJ"
    ]
  },
  "TZS": {
    "currency": "TZS",
    "name": "Shilling",
    "countries": [
      "TZ"
    ]
  },
  "THB": {
    "currency": "THB",
    "name": "Baht",
    "countries": [
      "TH"
    ]
  },
  "TOP": {
    "currency": "TOP",
    "name": "Pa'anga",
    "countries": [
      "TO"
    ]
  },
  "TTD": {
    "currency": "TTD",
    "name": "Dollar",
    "countries": [
      "TT"
    ]
  },
  "TND": {
    "currency": "TND",
    "name": "Dinar",
    "countries": [
      "TN"
    ]
  },
  "TRY": {
    "currency": "TRY",
    "name": "Lira",
    "countries": [
      "TR",
      "CY"
    ]
  },
  "TMM": {
    "currency": "TMM",
    "name": "Manat",
    "countries": [
      "TM"
    ]
  },
  "UGX": {
    "currency": "UGX",
    "name": "Shilling",
    "countries": [
      "UG"
    ]
  },
  "UAH": {
    "currency": "UAH",
    "name": "Hryvnia",
    "countries": [
      "UA"
    ]
  },
  "AED": {
    "currency": "AED",
    "name": "Dirham",
    "countries": [
      "AE"
    ]
  },
  "GBP": {
    "currency": "GBP",
    "name": "Pound",
    "countries": [
      "GB"
    ]
  },
  "UYU": {
    "currency": "UYU",
    "name": "Peso",
    "countries": [
      "UY"
    ]
  },
  "UZS": {
    "currency": "UZS",
    "name": "Som",
    "countries": [
      "UZ"
    ]
  },
  "VUV": {
    "currency": "VUV",
    "name": "Vatu",
    "countries": [
      "VU"
    ]
  },
  "VEB": {
    "currency": "VEB",
    "name": "Bolivar",
    "countries": [
      "VE"
    ]
  },
  "VND": {
    "currency": "VND",
    "name": "Dong",
    "countries": [
      "VN"
    ]
  },
  "YER": {
    "currency": "YER",
    "name": "Rial",
    "countries": [
      "YE"
    ]
  },
  "ZMK": {
    "currency": "ZMK",
    "name": "Kwacha",
    "countries": [
      "ZM"
    ]
  },
  "ZWD": {
    "currency": "ZWD",
    "name": "Dollar",
    "countries": [
      "ZW"
    ]
  },
  "TWD": {
    "currency": "TWD",
    "name": "Dollar",
    "countries": [
      "TW"
    ]
  },
  "XPF": {
    "currency": "XPF",
    "name": "Franc",
    "countries": [
      "NC",
      "PF",
      "WF"
    ]
  },
  "GGP": {
    "currency": "GGP",
    "name": "Pound",
    "countries": [
      "GG"
    ]
  },
  "IMP": {
    "currency": "IMP",
    "name": "Pound",
    "countries": [
      "IM"
    ]
  },
  "JEP": {
    "currency": "JEP",
    "name": "Pound",
    "countries": [
      "JE"
    ]
  },
  "BMD": {
    "currency": "BMD",
    "name": "Dollar",
    "countries": [
      "BM"
    ]
  },
  "KYD": {
    "currency": "KYD",
    "name": "Dollar",
    "countries": [
      "KY"
    ]
  },
  "FKP": {
    "currency": "FKP",
    "name": "Pound",
    "countries": [
      "FK"
    ]
  },
  "GIP": {
    "currency": "GIP",
    "name": "Pound",
    "countries": [
      "GI"
    ]
  },
  "SHP": {
    "currency": "SHP",
    "name": "Pound",
    "countries": [
      "SH",
      "AC",
      "TA"
    ]
  },
  "HKD": {
    "currency": "HKD",
    "name": "Dollar",
    "countries": [
      "HK"
    ]
  },
  "MOP": {
    "currency": "MOP",
    "name": "Pataca",
    "countries": [
      "MO"
    ]
  },
  "AWG": {
    "currency": "AWG",
    "name": "Guilder",
    "countries": [
      "AW"
    ]
  },
  "ANG": {
    "currency": "ANG",
    "name": "Guilder",
    "countries": [
      "AN"
    ]
  },
  "CSD": {
    "currency": "CSD",
    "name": "Dinar",
    "countries": [
      "CS"
    ]
  }
};

  iso.findCountryByCode = function(code) {
    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (iso.countries[prop]['iso3116-1-2'] == code || iso.countries[prop]['iso3116-1-3'] == code) return iso.countries[prop];
      }
    }
  };

  iso.findCountryByNumber = function(num) {
    num = parseInt(num, 10);
    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (parseInt(iso.countries[prop]['iso3116-1'], 10) == num) return iso.countries[prop];
      }
    }
  };

  iso.findCountryByName = function(name) {
    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (iso.countries[prop]['name'] == name) return iso.countries[prop];
      }
    }
  };

  iso.findCountriesByCountryCodedTLD = function(code) {
    if (!code) return undefined;
    if (code.charAt(0) !== '.') code = '.' + code;

    var results = [];

    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (iso.countries[prop]['tld'] == code || iso.countries[prop]['tldsecondary'] == code) {
          results.push(iso.countries[prop]);
        }
      }
    }
    if (!results.length) return undefined;
    return results;
  };


  iso.findCountriesByTLD = iso.findCountriesByCountryCodedTLD;

  iso.findCountriesByType = function(type) {
    var results = [];

    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (iso.countries[prop]['type'] == type) {
          results.push(iso.countries[prop]);
        }
      }
    }
    if (!results.length) return undefined;
    return results;
  };


  iso.findCountriesByTypes = function(types) {
    if (typeof types == 'string') {
      types = [types];
    }

    var results = [];

    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        for (var i = types.length - 1; i >= 0; i--) {
          if (types[i] == iso.countries[prop]['type']) {
            results.push(iso.countries[prop]);
          }
        }
      }
    }
    if (!results.length) return undefined;
    return results;
  };

  iso.independentStates = iso.findCountriesByType('Independent State');
  iso.states = iso.findCountriesByTypes(['Independent State','Proto Independent State']);

  iso.getSimpleCountryList = function() {
    var results = iso.states.map(function(c) {
      return {
        value: c.value,
        name: c.name
      };
    });

    return results.sort(function(a,b) {
      if (a.name < b.name)  return -1;
      if (a.name > b.name)  return 1;
      return 0;
    });
  };

  iso.findCurrency = function(currency) {
    for (var prop in iso.currencies) {
      if (iso.currencies.hasOwnProperty(prop)) {
        if (iso.currencies[prop]['currency'] == currency) return iso.currencies[prop];
      }
    }
  };

}());