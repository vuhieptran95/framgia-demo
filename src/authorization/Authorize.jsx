export const hasRoleAddNew = loginUser => {
  if (loginUser) {
    return loginUser.role.includes("addnew");
  }
  return false;
};

export const hasRoleEdit = loginUser => {
  if (loginUser) {
    return loginUser.role.includes("edit");
  }
  return false;
};

export const hasRoleDelete = loginUser => {
  if (loginUser) {
    return loginUser.role.includes("delete");
  }
  return false;
};

export default {
  hasRoleAddNew: hasRoleAddNew,
  hasRoleEdit: hasRoleEdit,
  hasRoleDelete: hasRoleDelete
};
