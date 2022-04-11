export const fetchRentApi = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",

  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-rent",
    hitsPerPage: "10",
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    "X-RapidAPI-Key": "ffd11a1487msheef7d873615b152p1df3a6jsnb369fcdfb23b",
  },
};

export const fetchSaleApi = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-sale",
    hitsPerPage: "10",
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    "X-RapidAPI-Key": "ffd11a1487msheef7d873615b152p1df3a6jsnb369fcdfb23b",
  },
};
