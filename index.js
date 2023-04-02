"use strict";

import { buttons, startApp } from "./src/ui/buttons.js";
import { changeLanguage } from "./src/ui/lang.js";
localStorage.clear();
buttons();
startApp();
changeLanguage();
