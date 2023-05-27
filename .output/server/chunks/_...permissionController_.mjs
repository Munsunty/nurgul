import { defineEventHandler, getQuery } from 'h3';
import { getPermission } from './pathController.mjs';

const ____permissionController_ = defineEventHandler((event) => ({
  // @ts-ignore
  dataList: getPermission(event.context.params.permissionController, getQuery(event)),
  query: getQuery(event)
}));

export { ____permissionController_ as default };
//# sourceMappingURL=_...permissionController_.mjs.map
