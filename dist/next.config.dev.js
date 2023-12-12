"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {};
module.exports = nextConfig;

var path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
//# sourceMappingURL=next.config.dev.js.map
