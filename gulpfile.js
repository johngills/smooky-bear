'use strict';

const Gulp = require('gulp');
const Eslint = require('gulp-eslint');
const Path = require('path');

const paths = {
    js: [
        Path.join(__dirname, 'config/**/*.js'),
        Path.join(__dirname, 'lib/**/*.js'),
        Path.join(__dirname, 'tests/**/*.js'),
        Path.join(__dirname, 'gulpfile.js'),
        Path.join(__dirname, 'server.js')
    ]
};

Gulp.task('eslint', () => {

    return Gulp.src(paths.js)
        .pipe(Eslint({ // eslint-disable-line new-cap
            config: '.eslintrc'
        }))
        .pipe(Eslint.format())
        .pipe(Eslint.failAfterError())
        .on('error', (error) => {

            return {
                title: 'ESLint Error',
                message: error.message
            };
        });
});

Gulp.task('watch-eslint', () => {

    Gulp.watch(paths.js, ['eslint']);
});

Gulp.task('default', [
    'eslint',
    'watch-eslint'
]);
