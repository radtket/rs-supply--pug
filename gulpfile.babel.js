import gulp from "gulp";
import autoprefixer from "autoprefixer";
import browsersync from "browser-sync";
import cssnano from "cssnano";
import data from "gulp-data";
import del from "del";
import eslint from "gulp-eslint";
import htmlmin from "gulp-htmlmin";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import path from "path";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import pugCompile from "gulp-pug";
import rename from "gulp-rename";
import sass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import sourcemaps from "gulp-sourcemaps";
// import webpack from "webpack";
// import webpackstream from "webpack-stream";
// import webpackconfig from "./webpack.config";
// import babel from "gulp-babel";

browsersync.create();

// project
const project = { root: __dirname };
project.dist = `${project.root}/docs`;

project.assets = `${project.root}/src`;
project.data = `${project.assets}/_data/`;
project.documents = `${project.assets}/documents`;
project.favicon = `${project.assets}/favicon`;
project.img = `${project.assets}/img`;
project.js = `${project.assets}/js`;
project.pug = `${project.assets}/html`;
project.scss = `${project.assets}/scss`;
project.video = `${project.assets}/video`;

// BrowserSync
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: `${project.dist}/`
		},
		port: 3000
	});
	done();
}

// BrowserSync Reload
function browserSyncReload(done) {
	browsersync.reload();
	done();
}

// Clean assets
function clean() {
	return del([`${project.dist}`]);
}

// Copy Favicon Assets
function favicon() {
	return gulp.src(`${project.favicon}/**/*`).pipe(gulp.dest(`${project.dist}`));
}

// Copy Document Assets
function documents() {
	return gulp
		.src(`${project.documents}/**/*`)
		.pipe(gulp.dest(`${project.dist}/documents/`));
}

// Copy Pug Assets
function pug() {
	return gulp
		.src(`${project.assets}/*.pug`)
		.pipe(
			data(file => require(`${project.data + path.basename(file.path)}.json`))
		)
		.pipe(
			pugCompile({
				pretty: true
			})
		)
		.on("error", function(err) {
			process.stderr.write(`${err.message}\n`);
			this.emit("end");
		})
		.pipe(gulp.dest(`${project.pug}`))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(`${project.dist}`));
}

// Optimize Images
function images() {
	return gulp
		.src(`${project.img}/**/*`)
		.pipe(newer(`${project.dist}/img/`))
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [
						{
							removeViewBox: false,
							collapseGroups: true
						}
					]
				})
			])
		)
		.pipe(gulp.dest(`${project.dist}/img/`));
}

// CSS task
function css() {
	return gulp
		.src(`${project.scss}/**/*.scss`)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(gulp.dest(`${project.dist}/css/`))
		.pipe(rename({ suffix: ".min" }))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(gulp.dest(`${project.dist}/css/`))
		.pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
	return gulp
		.src([`${project.js}/**/*`, "./gulpfile.babel.js"])
		.pipe(plumber())
		.pipe(eslint())
		.pipe(eslint.format());
	// .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
	return (
		gulp
			.src([`${project.js}/**/*`])
			// .pipe(babel())
			// .pipe(plumber())
			// .pipe(webpackstream(webpackconfig, webpack))
			// folder only, filename is specified in webpack config
			.pipe(gulp.dest(`${project.dist}/js/`))
			.pipe(browsersync.stream())
	);
}

// Watch files
function watchFiles() {
	gulp.watch(`${project.assets}/*.pug`, gulp.series(browserSyncReload, pug));
	gulp.watch(`${project.scss}/**/*`, css);
	gulp.watch(`${project.js}/**/*`, gulp.series(scriptsLint, scripts));
	gulp.watch(`${project.img}/**/*`, images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(
	clean,
	gulp.parallel(css, documents, favicon, images, js, pug)
);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
export { images, documents, favicon, pug, css, js, clean, build, watch };

export default build;
