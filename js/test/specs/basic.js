"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../../src/enums");
const homepage_1 = require("../../src/pageobjects/homepage");
const assert = require("assert");
const environments_1 = require("../../src/environments");
describe('Launch TrueNth site', function () {
    // Run setup before executing test steps
    before(function () {
        environments_1.Environment.init();
    });
    it('Select life changes', function () {
        return __awaiter(this, void 0, void 0, function* () {
            homepage_1.default.selectLifeChanges(enums_1.LifeChanges.SexAndIntimacy);
            let apiArticles = yield environments_1.Environment.getArticlesFromApi(enums_1.LifeChanges.SexAndIntimacy);
            console.log("Api count ------" + apiArticles.length);
            let pageArticles = yield homepage_1.default.getResults();
            console.log("Page count ------" + pageArticles.length);
            assert.equal(apiArticles[0].title.title, pageArticles[0].title.title, "Title did not match.");
            assert.equal(apiArticles[0].subtitle, pageArticles[0].subtitle, "Subtitle did not match.");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L3NwZWNzL2Jhc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEM7QUFDOUMsNkRBQXNEO0FBQ3RELGlDQUFpQztBQUNqQyx5REFBcUQ7QUFHckQsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBRTVCLHdDQUF3QztJQUN4QyxNQUFNLENBQUM7UUFDSCwwQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztZQUV0QixrQkFBUSxDQUFDLGlCQUFpQixDQUFDLG1CQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFdkQsSUFBSSxXQUFXLEdBQWMsTUFBTSwwQkFBVyxDQUFDLGtCQUFrQixDQUFDLG1CQUFXLENBQUMsY0FBYyxDQUFDLENBQUE7WUFFN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckQsSUFBSSxZQUFZLEdBQWMsTUFBTSxrQkFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXZELE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUM5RixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9GLENBQUM7S0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQSJ9