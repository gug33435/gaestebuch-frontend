import {test, describe, expect, it} from "vitest";
import { mount } from '@vue/test-utils'
import NavBar from "@/components/NavBar.vue";

function sum(a, b) {
    return a+b
}

test("add 2 numbers", () => {
    expect(sum(2,3)).toEqual(5)
})