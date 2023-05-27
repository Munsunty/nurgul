import {getDataFromURL} from "~/server/api/pathController";

export default defineEventHandler(event => ({
    dataList: getDataFromURL(event.context.params.menuHandler,getQuery(event)),
    query: getQuery(event),
}))
