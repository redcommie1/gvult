var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass')

// Paths
var pathHtml 		= 'themes/firstproject/*.html',
	pathScssStyle 	= 'themes/firstproject/scss/style.scss',
	pathScssAdmin	= 'themes/firstproject/scss/admin.scss',
	pathScssFonts	= 'themes/firstproject/scss/fonts.scss',
	pathCss 		= 'themes/firstproject/css/*.css',
	pathJs			= 'themes/firstproject/js/*.js',
	pathImgs		= 'themes/firstproject/images/*.*',
	pathFonts 		= 'themes/firstproject/fonts/*.*',
	pathPhp			= 'themes/firstproject/*.php',
	pathPlugins		= 'plugins/**/*.*',
	pathWooCom		= 'themes/firstproject/woocommerce/**/*.*'


// server connect
gulp.task('connect', function()
{
  connect.server(
  {
    root: 'dest',
    livereload: true
  })
})

// html
gulp.task('html', function()
{
	return gulp.src(pathHtml)
		.pipe(gulp.dest('dest/'))
		.pipe(connect.reload())		
})


// scss - style
gulp.task('scss', function ()
{
  return gulp.src(pathScssStyle)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution'))
    .pipe(gulp.dest('dest/css'))
    .pipe(connect.reload())
});

gulp.task('admin-scss', function ()
{
  return gulp.src(pathScssAdmin)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution\\css'))
    .pipe(gulp.dest('dest/css'))
    .pipe(connect.reload())
});

// scss - fonts
gulp.task('scss-fonts', function ()
{
  return gulp.src(pathScssFonts)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution\\fonts'))
    .pipe(connect.reload())
});

// css
gulp.task('css', function ()
{
	gulp.src(pathCss)
	.pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution\\css'))
	.pipe(connect.reload())

})

// js
gulp.task('js', function ()
{
	gulp.src(pathJs)
	.pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution\\js'))
	.pipe(connect.reload())

})

// imgs
gulp.task('imgs', function ()
{
	gulp.src(pathImgs)
	.pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution\\images'))
	.pipe(connect.reload())

})

// fonts
gulp.task('fonts', function ()
{
	gulp.src(pathFonts)
	.pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution\\fonts'))
	.pipe(connect.reload())

})

// php
gulp.task('php', function ()
{
	gulp.src(pathPhp)
	.pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution'))
	.pipe(connect.reload())

})

// plugins php
gulp.task('plugins-php', function ()
{
	gulp.src(pathPlugins)
	.pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\plugins'))
	.pipe(connect.reload())

})

// woocommerce php
gulp.task('woo-php', function ()
{
	gulp.src(pathWooCom)
	.pipe(gulp.dest('C:\\xampp\\htdocs\\firstproject\\wp-content\\themes\\smartsolution\\woocommerce'))
	.pipe(connect.reload())

})

// watch
gulp.task('watch', function ()
{
	gulp.watch(pathScssStyle, ['scss'])
	gulp.watch(pathScssAdmin, ['admin-scss'])
	gulp.watch(pathCss, ['css'])
	gulp.watch(pathScssFonts, ['scss-fonts'])
	gulp.watch(pathJs, ['js'])
	gulp.watch(pathImgs, ['imgs'])
	gulp.watch(pathFonts, ['fonts'])
	gulp.watch(pathPhp, ['php'])
	gulp.watch(pathPlugins, ['plugins-php'])
	gulp.watch(pathWooCom, ['woo-php'])
	gulp.watch(pathHtml, ['html'])
})

// default
gulp.task('default', ['connect', 
						'scss',
						'admin-scss',
						'scss-fonts',
						'css',
						'js',
						'imgs',
						'fonts',
						'php',
						'plugins-php',
						'woo-php',
						'html',
						'watch'])
