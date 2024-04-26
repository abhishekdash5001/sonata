import { describe, expect, test } from "vitest";
import { factory } from "./factory";

describe("Normal test with single isntance of counter", () => {
    let startCounter = 1;
    let stepCounter = 1;

    test("creates a count function", function() {

        const count = factory(startCounter, stepCounter);
        expect(count()).toBe(2);
        expect(count()).toBe(3);
    });

    test("creates a count starting from 10 with a step of 5", function() {
        startCounter = 10;
        stepCounter = 5;
        const count = factory(startCounter, stepCounter);
        expect(count()).toBe(15);
        expect(count()).toBe(20);
    });

    test("defaults to start 0, step 1 when no arguments passed", function() {
        const count = factory();
        expect(count()).toBe(1);
        expect(count()).toBe(2);
    });
})

describe("Test with new instance of counter", () => {
    let startCounter = 5;
    let stepCounter = 6;
    let count = factory(startCounter, stepCounter);
    test("one more instance of counter", () => {

        expect(count()).toBe(11);
        startCounter = 10;
        count = factory(startCounter, stepCounter);
        expect(count()).toBe(16);
        expect(count()).toBe(22)

    })
    test("one more instance of counter with stepchange", () => {
        stepCounter = 10;
        count = factory(startCounter, stepCounter);
        expect(count()).toBe(20);
        expect(count()).toBe(30);


    })
})
