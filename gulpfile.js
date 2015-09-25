var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

var paths = {
	html: ['*.html'],
	css: ['css/*.css'],
	js: ['js/*.js']
};

gulp.task('js', function () {
	gulp.src(webpackConfig.entry)
		.pipe(webpack(webpackConfig))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
	gulp.watch(paths.js, ['js']);
});


gulp.task('default', ['js', 'watch']);