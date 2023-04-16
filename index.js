"use strict";

import { buttons, startApp } from "./src/ui/buttons.js";
import { changeLanguage } from "./src/ui/lang.js";
//TODO remove
import { printResult } from "./src/ui/result.js";

localStorage.clear();
buttons();
startApp();
changeLanguage();

//TODO remove
printResult();
