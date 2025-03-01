import { assertEquals } from "@std/assert";
import { divisibleBy3Only, dashJoin, sortByCredits, CreditedUser } from "./functions.ts";

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

Deno.test(function sortByCreditsTest() {
    const arr = [
        {id: 549, username: "jh442", credits: 100},
        {id: 4992, username: "boe-6", tester: true, credits: 45},
        {id: 4, username: "Arson", credits: 2},
        {id: 4, username: "Lemming", credits: 11},
    ];
    assertEquals(sortByCredits<CreditedUser>(arr, true), arr.sort((a, b) => a.credits - b.credits));
    assertEquals(sortByCredits<CreditedUser>(arr, false), arr.sort((a, b) => b.credits - a.credits));
});