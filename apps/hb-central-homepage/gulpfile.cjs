"use strict";

const build = require("@microsoft/sp-build-web");

build.tscCmd.enabled = false;
build.lintCmd.enabled = false;

build.initialize(require("gulp"));
