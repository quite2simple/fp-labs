import { dashJoin, loggedFunctionCall } from "./functions.ts";

const arr = ["a", "b", "c"];

const loggedDashJoin = loggedFunctionCall(dashJoin);

loggedDashJoin(arr);