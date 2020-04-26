import axios from "axios";

export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data },
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
});

export const fetchData = (input) => {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    return axios
      .get(`../api/${input}/`)
      .then((res) => dispatch(fetchDataSuccess(res.data)))
      .catch((error) => dispatch(fetchDataFailure(error.response)));
  };
};
