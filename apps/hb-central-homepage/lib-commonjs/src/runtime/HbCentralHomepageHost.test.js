var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { HbCentralHomepageHost } from "./HbCentralHomepageHost";
import { HOMEPAGE_COMPOSITION_MANIFEST } from "./homepageComposition";
describe("HbCentralHomepageHost", function () {
    it("defines the static non-hero composition manifest order for Prompt-07", function () {
        expect(HOMEPAGE_COMPOSITION_MANIFEST.map(function (entry) { return entry.id; })).toEqual([
            "people",
            "newsRecognition",
            "personalizedLowerZone",
            "footerGlobalUtility",
        ]);
    });
    it("renders ready-state sections in stable order without optional personalized zone by default", function () {
        render(_jsx(HbCentralHomepageHost, {}));
        var wrappers = screen
            .getAllByTestId(/homepage-section-/)
            .map(function (node) { return node.getAttribute("data-section-id"); });
        expect(wrappers).toEqual([
            "people",
            "newsRecognition",
            "footerGlobalUtility",
        ]);
        expect(screen.queryByTestId("homepage-section-hero")).not.toBeInTheDocument();
        expect(screen.queryByTestId("homepage-section-projects")).not.toBeInTheDocument();
        expect(screen.queryByTestId("homepage-section-pulse")).not.toBeInTheDocument();
    });
    it("renders optional personalized lower zone when enabled", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    render(_jsx(HbCentralHomepageHost, { includePersonalizedLowerZone: true }));
                    expect(screen.getByTestId("homepage-section-personalizedLowerZone")).toBeInTheDocument();
                    _a = expect;
                    return [4 /*yield*/, screen.findByRole("heading", { name: /personalized lower zone seam/i })];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders wrappers for each zone type", function () {
        render(_jsx(HbCentralHomepageHost, { includePersonalizedLowerZone: true }));
        expect(screen.getByTestId("homepage-section-people")).toHaveAttribute("data-zone", "mosaic");
        expect(screen.getByTestId("homepage-section-newsRecognition")).toHaveAttribute("data-zone", "mosaic");
        expect(screen.getByTestId("homepage-section-footerGlobalUtility")).toHaveAttribute("data-zone", "full-width");
    });
    it("does not mount featured projects or company pulse in the non-hero host", function () {
        render(_jsx(HbCentralHomepageHost, {}));
        expect(screen.queryByRole("heading", { name: /featured projects showcase/i })).not.toBeInTheDocument();
        expect(screen.queryByRole("heading", { name: /company pulse band/i })).not.toBeInTheDocument();
    });
    it("mounts the people moments surface in its section slot", function () {
        render(_jsx(HbCentralHomepageHost, {}));
        expect(screen.getByRole("heading", { name: /people and culture moments/i })).toBeInTheDocument();
    });
    it("does not mount quick actions in the non-hero host", function () {
        render(_jsx(HbCentralHomepageHost, {}));
        expect(screen.queryByRole("heading", { name: /quick actions deck/i })).not.toBeInTheDocument();
        expect(screen.queryByRole("link", { name: /open action daily log/i })).not.toBeInTheDocument();
    });
    it("mounts the news recognition spotlight mosaic in the newsRecognition slot", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    render(_jsx(HbCentralHomepageHost, {}));
                    _a = expect;
                    return [4 /*yield*/, screen.findByRole("heading", { name: /news, recognition, and spotlight mosaic/i })];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBeInTheDocument();
                    _b = expect;
                    return [4 /*yield*/, screen.findAllByRole("link", { name: /open .* item/i })];
                case 2:
                    _b.apply(void 0, [(_c.sent()).length]).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it("mounts page-local global utility footer in the footerGlobalUtility slot", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    render(_jsx(HbCentralHomepageHost, {}));
                    _a = expect;
                    return [4 /*yield*/, screen.findByRole("heading", { name: /global utility footer/i })];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBeInTheDocument();
                    _b = expect;
                    return [4 /*yield*/, screen.findByRole("link", { name: /help center/i })];
                case 2:
                    _b.apply(void 0, [_c.sent()]).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it("renders loading slot behavior without data-fetch coupling", function () {
        render(_jsx(HbCentralHomepageHost, { shellState: "loading" }));
        expect(screen.getByText(/homepage shell loading/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/homepage shell loading placeholder/i)).toBeInTheDocument();
    });
    it("renders empty slot behavior without data-fetch coupling", function () {
        render(_jsx(HbCentralHomepageHost, { shellState: "empty" }));
        expect(screen.getByText(/composition is ready but no surfaces are configured/i)).toBeInTheDocument();
    });
    it("renders error slot behavior without data-fetch coupling", function () {
        render(_jsx(HbCentralHomepageHost, { shellState: "error" }));
        expect(screen.getByText(/shell could not render configured surfaces/i)).toBeInTheDocument();
    });
});
//# sourceMappingURL=HbCentralHomepageHost.test.js.map