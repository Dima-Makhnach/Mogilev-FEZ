'use strict';

/*
  gulp development - for development
  gulp production - full compile

  Normalize: In main file style.scss add '@import "normalize";'

  Style:
  In development insert link to html 'style.css'
  In full production link rename 'style.min.css'

  Image:
  All image for sprite save in sprite folder source
*/

// Common features include
const gulp  = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const rename = require("gulp-rename");
const server = require("browser-sync").create();
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');

// HTML include
const htmlmin = require('gulp-htmlmin');

// Pictires include
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");

// CSS include
const autoprefixer = require('gulp-autoprefixer');
const csso = require("gulp-csso");
const sass = require('gulp-sass');

// JS include
const uglify = require('gulp-uglify');


// Common task
gulp.task('clean', function() {
  return del('build');
});


// HTML
gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});


// Style
gulp.task('styles', function() {
  return gulp.src('source/sass/style.scss')
              .pipe(plumber())
              .pipe(sass({ 
                includePaths: require('node-normalize-scss').includePaths
              }).on('error', sass.logError))
              .pipe(rename('style.css'))
              .pipe(gulp.dest('build/css'))
              .pipe(server.stream());
});

gulp.task('styles-production', function() {
  return gulp.src('source/sass/style.scss')
              .pipe(sass({
                includePaths: require('node-normalize-scss').includePaths
              }).on('error', sass.logError))
              .pipe(autoprefixer({
                  browsers: ['last 2 versions'],
                  cascade: false
              }))
              .pipe(csso())
              .pipe(rename('style.min.css'))
              .pipe(gulp.dest('build/css'));
});


// Pictures
gulp.task("main_image", function () {
  return gulp.src("build/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("build/img/**/*.{png,jpg}")
  .pipe(webp({quality: 80}))
  .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/sprite/**/*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(gulp.dest("build/img/sprite/"));
});

gulp.task('clear-sprite', function() {
  return del('buid/img/sprite/');
});

// Copy image
gulp.task("copy-image", function () {
  return gulp.src([
      "source/img/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});

gulp.task("image-del", function () {
  return del('build/img/');
});

gulp.task('image', gulp.series( 'copy-image', 'clear-sprite', gulp.parallel("webp", 'sprite'), "main_image" ));

// JS
gulp.task('minifyjs', function () {
  return gulp.src('source/js/*.js')
              .pipe(plumber())
              .pipe(uglify())
              .pipe(gulp.dest('build/js'))
              .pipe(server.stream());
});


// Browser sync
gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.parallel('styles')).on("change", server.reload);
  gulp.watch("source/img/**/*.{png,jpg,svg}", gulp.series('image-del', 'copy-image')).on("change", server.reload);
  gulp.watch("source/*.html", gulp.parallel('html')).on("change", server.reload);
  gulp.watch("source/js/**/*.js", gulp.parallel('minifyjs')).on("change", server.reload);
});

// Copy main
gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

// Full production
gulp.task('production',
  gulp.series(
    "clean",
    "copy",
    "styles-production",
    "image",
    "html",
    "minifyjs"
));

gulp.task('development',
  gulp.series(
    "clean",
    "copy",
    "styles",
    "copy-image",
    "html",
    "minifyjs",
    "serve"
));