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
//var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch');
gulp.task('default', function() {
    // place code for your default task here
});

var config = {
    watchPaths: {
        less: "resources/assets/less/**/*"
    }

}



gulp.task('minify-css', function() {
    return gulp.src('public/css/*.css')
            .pipe(minifyCss({compatibility: 'ie8'}))
            .pipe(gulp.dest('public/css/min'));
});
gulp.task('styles', function() {

    gulp.src(['resources/assets/less/welcome.less'])
            .pipe(less())
//          .pipe(minifyCss())
            .pipe(autoPrefixer())
            .pipe(gulp.dest('public/css/'));

    gulp.src(['resources/assets/less/main.less'])
        .pipe(less())
        //          .pipe(minifyCss())
        .pipe(autoPrefixer())
        .pipe(gulp.dest('public/css/'))

})
gulp.task('bower', function() {
    console.log('bower');
     gulp.src([
        //'./bower_components/angular-motion/dist/angular-motion.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-strap/dist/angular-strap.min.js',
        './bower_components/angular-strap/dist/angular-strap.tpl.min.js',
        './bower_components/angular-sanitize/angular-sanitize.min.js',
        './bower_components/angular-animate/angular-animate.min.js'
    ])
            .pipe(concat('all.js'))
            .pipe(gulp.dest('./public/bower_components/js/'));
    
    return gulp.src('./bower_components/angular-motion/dist/angular-motion.min.css')
            .pipe(concatCss("all.css"))
            .pipe(gulp.dest('./public/bower_components/css/'));
})

gulp.task('watch',function() {
    gulp.watch(config.watchPaths.less,["styles"]);
})