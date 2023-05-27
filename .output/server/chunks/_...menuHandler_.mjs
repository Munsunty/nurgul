import { defineEventHandler, getQuery } from 'h3';
import { getDataFromURL } from './pathController.mjs';

const ____menuHandler_ = defineEventHandler((event) => ({
  dataList: getDataFromURL(event.context.params.menuHandler, getQuery(event)),
  query: getQuery(event)
}));

export { ____menuHandler_ as default };
//# sourceMappingURL=_...menuHandler_.mjs.map
