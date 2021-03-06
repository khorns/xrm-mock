import { AttributeMock } from "../../../src/xrm-mock/page/attribute/attribute.mock";
import { BooleanAttributeMock } from "../../../src/xrm-mock/page/booleanattribute/booleanattribute.mock";
import { EnumAttributeMock } from "../../../src/xrm-mock/page/enumattribute/enumattribute.mock";

describe("Xrm.Page.BooleanAttribute Mock", () => {
    beforeEach(() => {
        this.booleanAttribute = new BooleanAttributeMock(new EnumAttributeMock(new AttributeMock({
            isDirty: false,
            name: "new_isHavingFun",
            value: true,
        })));
    });

    it("should instantiate", () => {
        expect(this.booleanAttribute).toBeDefined();
        expect(BooleanAttributeMock.create("empty").getName()).toBe("empty");
    });

    it("should have an initial value of true", () => {
        expect(this.booleanAttribute.getInitialValue()).toBe(true);
    });
});
