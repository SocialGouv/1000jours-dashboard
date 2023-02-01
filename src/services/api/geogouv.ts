import axios from "axios";

const GeoGouvApi = {
  getDepartments: () => {
    return axios.get(`https://geo.api.gouv.fr/departements`)
  }
}

export default GeoGouvApi;