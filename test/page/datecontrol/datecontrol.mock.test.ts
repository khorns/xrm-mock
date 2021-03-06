import { DateAttributeMock } from "../../../src/xrm-mock/page/dateattribute/dateattribute.mock";
import { DateControlMock } from "../../../src/xrm-mock/page/datecontrol/datecontrol.mock";

describe("Xrm.Page.DateControl Mock", () => {
    let control: DateControlMock;
    beforeEach(() => {
        const att = new DateAttributeMock({name: "test"});
        control = new DateControlMock({
            attribute: att,
            name: att.name,
        });
    });

    it("should get show time", () => {
        expect(control.getShowTime()).toBe(false);
    });

    it("should update show time", () => {
        expect(control.getShowTime()).toBe(false);
        control.setShowTime(true);
        expect(control.getShowTime()).toBe(true);
    });
});
