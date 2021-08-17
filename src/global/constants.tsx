
export const ACCOMMODATION_TYPES = [undefined, "Apartment", "House", "Condominium"];

export const SUBLET_STATUS_DISPLAY = (user: User | undefined) => {
  switch(user?.sublet_status) {
    case 20:
      return "Searching";
    case 30:
      return "Offering";
    default:
      return "None";
  }
};
