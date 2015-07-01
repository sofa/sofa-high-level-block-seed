/**
 * sofa-high-level-block - v0.1.0 - Wed Jul 01 2015 12:55:00 GMT+0200 (CEST)
 * https://github.com/sofa/sofa-hight-level-block
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
define(['exports', 'angular', './sofaHighLevelBlock.tpl.js'], function (exports, _angular, _sofaHighLevelBlockTplJs) {
    'use strict';

    function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

    var _angular2 = _interopRequire(_angular);

    _angular2.module('sofaHighLevelBlock', []).directive('sofaHighLevelBlock', function () {
        return {
            templateUrl: 'sofaHighLevelBlock.tpl.js'
        };
    });
});}(sofa, document));
