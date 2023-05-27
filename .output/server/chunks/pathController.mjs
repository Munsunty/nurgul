const mc = [
	"newStartView",
	"partSearchLayout",
	"tableView",
	"containorLayout1",
	"bomOrgChart",
	"ProjectPMSGantt"
];

const getDataFromURL = (url, query) => {
  let result;
  if (url == "menuList") {
    result = mc;
  }
  return result;
};
const getPermission = (url, opt) => {
  let result;
  if (url == "partSearch") {
    if (opt.fromPage == "bomEdit") {
      result = {
        create: false,
        add: true,
        bom: true
      };
    } else {
      result = {
        create: true,
        add: false,
        bom: false
      };
    }
  }
  return result;
};

export { getDataFromURL, getPermission };
//# sourceMappingURL=pathController.mjs.map
