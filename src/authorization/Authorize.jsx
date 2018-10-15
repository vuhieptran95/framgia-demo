import Functions from "./Functions";

export const hasRoleViewUserDetails = loginUser => {
  if (loginUser) {
    return loginUser.role.includes(Functions.VIEW_USER_DETAILS);
  }
  return false;
};

export const hasRoleAddNew = loginUser => {
  if (loginUser) {
    return loginUser.role.includes(Functions.ADD_NEW_USER);
  }
  return false;
};

export const hasRoleEdit = loginUser => {
  if (loginUser) {
    return loginUser.role.includes(Functions.EDIT_USER);
  }
  return false;
};

export const hasRoleDelete = loginUser => {
  if (loginUser) {
    return loginUser.role.includes(Functions.DELETE_USER);
  }
  return false;
};

export default {
  hasRoleAddNew: hasRoleAddNew,
  hasRoleEdit: hasRoleEdit,
  hasRoleDelete: hasRoleDelete,
  hasRoleViewUserDetails: hasRoleViewUserDetails
};
