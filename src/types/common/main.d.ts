
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
