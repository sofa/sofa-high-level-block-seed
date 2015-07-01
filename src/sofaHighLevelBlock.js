
import angular from 'angular';
import './sofaHighLevelBlock.tpl.js';

angular.module('sofaHighLevelBlock', [])
    .directive('sofaHighLevelBlock', function() {
        return {
            templateUrl: 'sofaHighLevelBlock.tpl.js'
        };
    });
