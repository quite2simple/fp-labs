import { assertEquals } from "@std/assert";
import { divisibleBy3Only, dashJoin } from "./functions.ts";

Deno.test(function divisibleBy3OnlyTest() {
    assertEquals(divisibleBy3Only([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [3, 6, 9]);
    assertEquals(divisibleBy3Only([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [0, 3, 6, 9]);
    assertEquals(divisibleBy3Only([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), [-3, -6, -9]);
});

Deno.test(function dashJoinTest() {
    assertEquals(dashJoin(["a", "b", "c"]), "a-b-c");
    assertEquals(dashJoin(["a", "b", "c", "d"]), "a-b-c-d");
    assertEquals(dashJoin(["a", "b", "c", "d", "e"]), "a-b-c-d-e");
});