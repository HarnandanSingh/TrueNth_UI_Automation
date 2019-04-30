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
const article_1 = require("../models/article");
class Homepage {
    selectLifeChanges(lifeChange) {
        $$(`button[data-value=${lifeChange}]`)[1].click();
    }
    getResults() {
        return __awaiter(this, void 0, void 0, function* () {
            let articles = [];
            const results = yield $$("a.results-item");
            for (var i = 0; i < results.length; i++) {
                yield new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    let titleElement = yield $(`a.results-item > p:nth-child(1)`);
                    let subtitleElement = yield $(`a.results-item > p:nth-child(2)`);
                    let article = new article_1.Article();
                    let t = new article_1.Title();
                    // titleElement.scrollIntoView();
                    // subtitleElement.scrollIntoView();
                    t.title = yield titleElement.getText();
                    article.title = t;
                    article.subtitle = yield subtitleElement.getText();
                    articles.push(article);
                    return resolve(article);
                }));
            }
            return articles;
        });
    }
}
exports.default = new Homepage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZW9iamVjdHMvaG9tZXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUFtRDtBQUduRCxNQUFNLFFBQVE7SUFDVixpQkFBaUIsQ0FBQyxVQUFrQjtRQUNoQyxFQUFFLENBQUMscUJBQXFCLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVLLFVBQVU7O1lBQ1osSUFBSSxRQUFRLEdBQWMsRUFBRSxDQUFDO1lBRTdCLE1BQU0sT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFM0MsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBTSxPQUFPLEVBQUMsRUFBRTtvQkFDOUIsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFFakUsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7b0JBRXBCLGlDQUFpQztvQkFDakMsb0NBQW9DO29CQUVwQyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN2QyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFDTjtZQUVELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9