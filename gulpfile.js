var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint');
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	gulpPlumber = require('gulp-plumber'),
	connect = require('gulp-connect'),
	stylish = require('jshint-stylish'),
	csslint = require('gulp-csslint');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('scripts',function(){
	gulp.src('js/resumeBuilder.js')
		.pipe(gulpPlumber()) 
		.pipe(uglify())
		.pipe(rename('resumeBuilder.min.js'))
		.pipe(gulp.dest('js/'))
		.pipe(connect.reload());
});

gulp.task('jshint', function(){
	return gulp.src('js/resumeBuilder.js')
	.pipe(jshint())
	.pipe(jshint.reporter(stylish));
});

gulp.task('styles', function(){
	//gulp.src('src/css/*.css')
	//	.pipe(csslint())
	//	.pipe(gulpPlumber()) 
	//	.pipe(minifyCSS())
	//	.pipe(gulp.dest('build/css/'))
	//	.pipe(connect.reload());
});

gulp.task('watch',function(){
	 gulp.watch('js/resumeBuilder.js',['scripts']);
	//gulp.watch('src/css/*.css',['styles']);
});

gulp.task('default', ['connect','watch']);