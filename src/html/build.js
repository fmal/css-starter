'use strict';

var template = require('lodash').template,
    fs = require('fs'),
    path = require('path'),
    pkg = require('../../package.json');

var tpl = template(fs.readFileSync(path.join(__dirname, './template.html'), 'utf8')),
    compiled;

pkg.title = capitalize(pkg.name.replace(/\-/g, ' '));

compiled = tpl(pkg);

fs.writeFileSync(path.join(__dirname, '../../dist/index.html'), compiled);

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}