
/* For future reference on how to import types (remove spaces between / / /):
/ / / <reference path="src/forms/login-form/types.d.ts" />
*/

/**
 * Authentication.
 */
interface ActivateAccountParamTypes {
  uidBase64: string;
  token: string;
}

/**
 * Users.
 */
interface UserProfileParams {
  id: string;
}

interface User {
  id: string;
  first_name: string;
  last_name: string;
  sublet_status: number;
  bio: string;
  profile_picture: string;
}

interface ResetPasswordAccountParamTypes {
  uidBase64: string;
  token: string;
}

/**
 * Institutions.
 */
interface Institution {
  domains: string[];
  name: string;
  address: string;
}

/**
 * Listings.
 */
interface ListingImage {
  image_url: string;
}

interface Listing {
  id: string;
  accommodation_type: number;
  additional_info: string;
  address: string;
  start_date: string;
  end_date: string;
  images: ListingImage[];
}
