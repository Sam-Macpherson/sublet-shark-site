import { api as axiosAPI } from "global/axios.config"

/**
 * Authentication.
 */

const AUTH_API_URLS = {
  LOGIN: "/users/login/",
  LOGOUT: "/users/logout/",
  REGISTER: "/users/register/",
  RESET_PASSWORD: "/users/reset-password/",
  ACTIVATE_ACCOUNT: "/users/activate/"
};

const login = (data: Object) =>
  axiosAPI.post(AUTH_API_URLS.LOGIN, {
    ...data,
  }).then(loginResponse => {
    localStorage.setItem("access_token", loginResponse.data.access);
    localStorage.setItem("refresh_token", loginResponse.data.refresh);
    axiosAPI.defaults.headers["Authorization"] =
      `Bearer ${localStorage.getItem("access_token")}`;
  }).catch(error => {
    console.log("Error logging in: ", error);
    return Promise.reject(error);
  });

const logout = () =>
  axiosAPI.post(AUTH_API_URLS.LOGOUT, {
    refresh_token: localStorage.getItem("refresh_token"),
  }).then(response => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosAPI.defaults.headers["Authorization"] = null;
  }).catch(error => {
    console.log("Error logging out: ", error);
    return Promise.reject(error);
  });

const register = (data: Object) =>
  axiosAPI.post(AUTH_API_URLS.REGISTER, {
    ...data,
  }).then(registerResponse => {
    // Do nothing?
  }).catch(error => {
    console.log("Error registering: ", error);
    return Promise.reject(error);
  });

const activateAccount = (params: ActivateAccountParamTypes) =>
  axiosAPI.patch(`${AUTH_API_URLS.ACTIVATE_ACCOUNT}${params.uidBase64}/${params.token}`, {
  }).then(activateResponse => {
    // Do nothing?
  }).catch(error => {
    console.log("Error activating: ", error);
    return Promise.reject(error);
  });

const requestPasswordResetEmail = (data: Object) =>
  axiosAPI.post(
    `${AUTH_API_URLS.RESET_PASSWORD}`, {...data},
  ).then(requestPasswordResetEmailResponse => {
    // Do nothing?
  }).catch(error => {
    console.log("Error requesting password reset email: ", error);
    return Promise.reject(error);
  });

const resetPassword = (params: ResetPasswordAccountParamTypes, data: Object) =>
  axiosAPI.patch(`${AUTH_API_URLS.RESET_PASSWORD}${params.uidBase64}/${params.token}`, {
    ...data,
  }).then(resetPasswordResponse => {
    // Do nothing?
  }).catch(error => {
    console.log("Error resetting password: ", error);
    return Promise.reject(error);
  });


/**
 * Institutions.
 */
const INSTITUTIONS_API_URLS = {
  FETCH_ALL: "/institutions/institutions",
};

const fetchInstitutions = () =>
  axiosAPI.get<Institution[]>(INSTITUTIONS_API_URLS.FETCH_ALL).then(
  response => Promise.resolve(response.data)
  ).catch(error => {
    console.log("Error fetching institutions: ", error);
    return Promise.reject(error)
  });

/**
 * Listings.
 */
const LISTINGS_API_URLS = {
  FETCH_ALL: "/listings/listings",
};

const fetchListings = () =>
  axiosAPI.get<Listing[]>(LISTINGS_API_URLS.FETCH_ALL).then(
    response => Promise.resolve(response.data)
  ).catch(error => {
    console.log("Error fetching listings: ", error);
    return Promise.reject(error)
  });


/**
 * Compose routes into an API wrapper.
 */
const API = {
  // Authentication.
  login: login,
  logout: logout,
  register: register,
  activateAccount: activateAccount,
  requestPasswordResetEmail: requestPasswordResetEmail,
  resetPassword: resetPassword,
  // Institutions.
  fetchInstitutions: fetchInstitutions,
  // Listings.
  fetchListings: fetchListings,
};

export default API;