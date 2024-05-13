import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, it } from "vitest";
import { Button } from "./index";

describe("Greeting component", () => {
    it("component renders correctly", () => {
        const component = renderer.create(<Button />);

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("prop working", () => {
        const component = renderer.create(<Button label={"Universe"} />);

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
