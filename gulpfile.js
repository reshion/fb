//var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir(function(mix) {
//    mix.less('app.less');
//});
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var lr = require('tiny-lr');
var refresh = require('gulp-livereload');
var server = lr(); 
var autoPrefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    // place code for your default task here
});


gulp.task('minify-css', function() {
    return gulp.src('public/css/*.css')
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('public/css/min'));
});
gulp.task('styles', function() {
    gulp.src(['resources/assets/less/app.less'])
	.pipe(less())
//	.pipe(minifyCss())
        .pipe(autoPrefixer())
	.pipe(gulp.dest('public/css/'))
    gulp.src(['resources/assets/less/welcome.less'])
	.pipe(less())
//	.pipe(minifyCss())
        .pipe(autoPrefixer())
	.pipe(gulp.dest('public/css/'))
//	.pipe(refresh(server))

    gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/min'));
})

