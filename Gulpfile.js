// importando dependências
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    fontMagician = require('postcss-font-magician'),
    bootstrap = require('bootstrap-styl');

// task para compilar o styl
gulp.task('styl', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']}),
        fontMagician(),
        cssnano()
    ];

    return gulp.src(['./styl/*.styl','!./styl/_*.styl'])
               .pipe(plumber())
               .pipe(stylus({ use: bootstrap(), compress: false }))
               .pipe(postcss(processors))
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest('./css/'));
});

gulp.task('dev', function() {
    gulp.watch(['./styl/**/*.styl'],['styl']);
});
            
// task default que dispara o watch nos arquivos .styl
gulp.task('default', ['styl','dev']);