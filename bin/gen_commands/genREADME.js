"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genREADME = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var chalk_1 = __importDefault(require("chalk"));
var inquirer = require("inquirer");
var genREADME = function (destinationOption) { return __awaiter(void 0, void 0, void 0, function () {
    var inquirerQuestions, inquirerResponse, finalReadMe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inquirerQuestions = [
                    {
                        type: "input",
                        name: "packageName",
                        message: "name of package?",
                    },
                    {
                        type: "input",
                        name: "packageDesc",
                        message: "description of package?",
                    },
                    {
                        type: "input",
                        name: "twitterName",
                        message: "what do you go by on twitter?",
                    },
                    {
                        type: "input",
                        name: "twitterLink",
                        message: "url to your twitter?",
                    },
                ];
                return [4 /*yield*/, inquirer.prompt(inquirerQuestions)];
            case 1:
                inquirerResponse = _a.sent();
                finalReadMe = "\n<h1 style=\"font-weight:bold\" align=\"center\">".concat(inquirerResponse.packageName, "</h1>\n<div align=\"center\">\n  <strong>").concat(inquirerResponse.packageDesc, "</strong>\n</div>\n<div align=\"center\">\n  <br>\n</div>\n\n<div align=\"center\">\n  <!-- Stability -->\n  <a href=\"https://nodejs.org/api/documentation.html#documentation_stability_index\">\n    <img src=\"https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square\"\n      alt=\"API stability\" />\n  </a>\n</div>\n<div align=\"center\">\n  <sub>just a quick personal project by\n  <a href=\"").concat(inquirerResponse.twitterLink, "\">").concat(inquirerResponse.twitterName, "</a>\n</div>\n\n&nbsp;\n\n## instructions\n\n**1. install packages**\n\n- use `npm i` to install the dependencies\n\n## notes\n\n- this will continue to support more quick setups\n- first time doing javascript/typescript in a long time\n\n---\n\n&nbsp;\n\n<h1 align=\"center\">dev</h1>\n\n## features\n\n- [x] doesn't do anything yet\n\n       ");
                fs_1.default.writeFile(path_1.default.join(destinationOption, "README.md"), finalReadMe, function (e) {
                    if (e) {
                        if (e === null || e === void 0 ? void 0 : e.message.includes("no such file or directory")) {
                            fs_1.default.mkdir(path_1.default.join(destinationOption), { recursive: true }, function (e) {
                                if (e) {
                                    console.log(chalk_1.default.bgRed("could not create specified directory...maybe try not specifiying directory, which will put file in current location"));
                                }
                                else {
                                    fs_1.default.writeFile(path_1.default.join(destinationOption, "README.md"), finalReadMe, function (e) {
                                        if (e) {
                                            console.log(chalk_1.default.bgRed("this failed because we built this program really fast...try not specifying a directory if you did"));
                                        }
                                        else {
                                            console.log(chalk_1.default.bgGreen("README.md file created successfully"));
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            console.log(chalk_1.default.bgRed("this failed because we built this program really fast...try not specifying a directory if you did"));
                        }
                    }
                    else {
                        console.log(chalk_1.default.bgGreen("README.md file created successfully"));
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
exports.genREADME = genREADME;
