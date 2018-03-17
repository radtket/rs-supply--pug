/* eslint-disable */
import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import data from 'gulp-data';
import del from 'del';
import gulp from 'gulp';
import path from 'path';
import prefix from 'gulp-autoprefixer';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';

/*
 * Directories here
 */
const paths = {
	docs: './docs/',
	sass: './src/sass/',
	css: './docs/css/',
	js: './docs/js/',
	data: './src/_data/',
};


/*  Clean the /dist directory (gulp clean)
  ************************* */
 gulp.task('clean', () => del([paths.docs]));

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */
gulp.task('pug', () => {
	return gulp
		.src('./src/*.pug')
		.pipe(data(file => require(`${paths.data + path.basename(file.path)}.json`)))
		.pipe(pug())
		.on('error', function(err) {
			process.stderr.write(`${err.message}\n`);
			this.emit('end');
		})
		.pipe(gulp.dest(paths.docs));
});

gulp.task('js', () =>
	gulp
		.src('./src/js/**/*.js')
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.pipe(uglify())
		.pipe(gulp.dest(paths.js))
);

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', ['pug'], () => {
	browserSync.reload();
});

/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'pug', 'js'], () => {
	browserSync({
		server: {
			baseDir: paths.docs,
    },
    open: true,
		notify: false,
	});
});

/**
 * Compile .scss files into docs css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function() {
	return gulp
		.src(paths.sass + '*.scss')
		.pipe(
			sass({
				includePaths: [paths.sass],
				outputStyle: 'compressed',
			})
		)
		.on('error', sass.logError)
		.pipe(
			prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
				cascade: true,
			})
		)
		.pipe(gulp.dest(paths.css))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function() {
	gulp.watch(paths.sass + '**/*.scss', ['sass']);
	gulp.watch('./src/**/*.pug', ['rebuild']);
	gulp.watch('src/js/**/*.js', ['js']);
});

// Build task compile sass and pug.
gulp.task('build', ['clean', 'sass', 'pug', 'js']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch']);
