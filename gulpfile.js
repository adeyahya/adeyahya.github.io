var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

gulp.task('styles',function(){
	return gulp.src("sass/**/*.scss")
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('css'));
});

gulp.task('scripts',function(){
	return gulp.src("devjs/**/*.js")
	.pipe(uglify())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('watch',function(){
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('devjs/**/*.js',['scripts']);
});