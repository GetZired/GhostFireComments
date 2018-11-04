/**
 * Reusing most npm modules that casper theme already installed in node_modules
 * If you're experience any issues, in your ghost-fire-comments directory, install the
 * missing npm modules
 */

const gulp							= require('gulp'),
			source						= require('vinyl-source-stream'),
			buffer  					= require('vinyl-buffer'),
			rename  					= require('gulp-rename'),
			sourcemaps				= require('gulp-sourcemaps'),
			livereload 				= require('gulp-livereload'),
			browserify 				= require('browserify'),
			coffeeify  				= require('coffeeify'),
			babelify   				= require('babelify'),
			easyimport				= require('postcss-easy-import'),
			customProperties	= require('postcss-custom-properties'),
			colorFunction 		= require('postcss-color-function'),
			autoprefixer 			= require('autoprefixer'),
			cssnano 					= require('cssnano'),
			postcss 					= require('gulp-postcss'),
			sass 							= require('gulp-sass');

// Building the JavaScript files in components/*
const config = {
    js: {
        src: './js/main.js',       // Entry point
        outputDir: './js/build/',  // Directory to save bundle to
        mapDir: './maps/',      // Subdirectory to save maps to
        outputFile: 'bundle.js' // Name to use for bundle
    },
};

// Reusing Ghost Gulp Task CSS Function
// where we point to the theme's assets folder
var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
}

gulp.task('css', () => {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ];

    return gulp.src(['../assets/css/*.css'])
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sass({ errLogToConsole: true }))

        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../assets/built/'))
        .pipe(livereload());
});

const bundle = (bundler) => {
  bundler
    .bundle()
    .pipe(source(config.js.src))
    .pipe(buffer())
    .pipe(rename(config.js.outputFile))
    .pipe(sourcemaps.init({ loadMaps : true }))
    .pipe(sourcemaps.write(config.js.mapDir))
    .pipe(gulp.dest(config.js.outputDir))
    .pipe(livereload());
};

gulp.task('watch', () => {
    gulp.watch('../assets/css/**', ['css']);

    // We use node-sass-chokidar to watch for file changes in package.json "watch-css"
    // We watch the compiles css files instead of our sass files
    gulp.watch('*.css', ['css']);
    gulp.watch('components/*/*.css', ['css']);

    // Watch files in Ghost Fire Comments Directory
    gulp.watch('components/**/*.js', ['bundle']);
});

gulp.task('bundle', () => {
  const bundler = browserify(config.js.src)
                .transform(coffeeify)
                .transform(babelify, { presets : [ 'es2015' ] });

  bundle(bundler);
});


gulp.task('default', ['bundle'], () => {
    gulp.start('watch');
});
