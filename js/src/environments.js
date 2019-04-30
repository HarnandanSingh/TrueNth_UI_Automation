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
require("isomorphic-fetch");
exports.Environment = {
    TEST: "https://test.truenth.org/",
    PROD: "https://truenth.org/",
    init: () => {
        browser.url(exports.Environment[process.env.environment] + "en-gb");
    },
    getArticlesFromApi: (lifeChange = '', treatment = '') => __awaiter(this, void 0, void 0, function* () {
        lifeChange = lifeChange === undefined ? '' : lifeChange;
        treatment = treatment === undefined ? '' : treatment;
        return fetch(`https://truenth.org/en-gb/api/articles/?life_change=${lifeChange}&treatment=${treatment}`)
            .then(response => {
            return response.json().then(res => {
                let result = JSON.parse(JSON.stringify(res));
                return result;
            });
        });
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vudmlyb25tZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNEJBQTBCO0FBR2IsUUFBQSxXQUFXLEdBQUc7SUFDdkIsSUFBSSxFQUFFLDJCQUEyQjtJQUVqQyxJQUFJLEVBQUUsc0JBQXNCO0lBRTVCLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsa0JBQWtCLEVBQUUsQ0FBTyxVQUFVLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBRTtRQUMxRCxVQUFVLEdBQUcsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDeEQsU0FBUyxHQUFHLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JELE9BQU8sS0FBSyxDQUFDLHVEQUF1RCxVQUFVLGNBQWMsU0FBUyxFQUFFLENBQUM7YUFDL0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5QixJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQTtDQUNKLENBQUEifQ==