import { getPermission} from "~/server/api/pathController";

export default defineEventHandler(event => ({
    // @ts-ignore
    dataList: getPermission(event.context.params.permissionController,getQuery(event)),
    query: getQuery(event),
}))
