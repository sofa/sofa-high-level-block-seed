

var args = require('yargs')
            .default('set', 'component')
            .alias('set', 'type')
            .argv,
    taskSetAliases = {
                app: 'shared-sofa-app-tasks',
                component: 'shared-sofa-component-tasks'
            },
    taskSet = require(taskSetAliases[args.set]);


taskSet(require('gulp'), {
    pkg: require('./package.json'),
    cwd: __dirname,
    baseDir: __dirname,
    paths: {
        html: 'src/*.html',
        scripts: {
            main: 'src/sofaHighLevelBlock.app.js',
            watch: ['src/*.js']
        },
        dest: 'appDist'
    }
});
