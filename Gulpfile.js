// importando dependências
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
    stylus = require('gulp-stylus'),
    cssmin = require('gulp-cssmin'),
    bootstrap = require('bootstrap-styl'),

// task para compilar o styl
gulp.task('styl', function () {
    return gulp.src(['./styl/*.styl','!./styl/_*.styl'])
               .pipe(plumber())
               .pipe(stylus({ use: bootstrap(), compress: false }))
               .pipe(gulp.dest('./css/'))
               .pipe(cssmin())
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest('./css/'));
});

gulp.task('dev', function() {
    gulp.watch(['./styl/**/*.styl'],['styl']);
});
            
// task default que dispara o watch nos arquivos .styl
gulp.task('default', ['styl','dev']);