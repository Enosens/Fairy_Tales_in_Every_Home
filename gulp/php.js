const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const path = require('path');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const typograf = require('gulp-typograf');
const svgsprite = require('gulp-svg-sprite');
const replace = require('gulp-replace');
const imageminWebp = require('imagemin-webp');
const rename = require('gulp-rename');

gulp.task('clean:php', function (done) {
    if (fs.existsSync('./htdocs/website/')) {
        return gulp
            .src('./htdocs/website/', { read: false })
            .pipe(clean({ force: true }));
    }
    done();
});

gulp.task('create-htdocs-dir:php', function (done) {
    const dir = path.join(__dirname, '..', 'htdocs');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    done();
});

const fileIncludeSetting = {
    prefix: '@@',
    basepath: '@file',
};

const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false,
        }),
    };
};

gulp.task('html:php', function () {
    return gulp
        .src([
            './src/html/**/*.php',
            '!./**/blocks/**/*.*',
            '!./src/html/docs/**/*.*',
        ])
        .pipe(plumber(plumberNotify('PHP')))
        .pipe(fileInclude(fileIncludeSetting))
        .pipe(
            replace(
                /(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
                '$1./$4$5$7$1'
            )
        )
        .pipe(gulp.dest('./htdocs/website/'));
});

gulp.task('phpconfig:php', function () {
    return gulp
        .src([
            './src/phpconfig/**/*.php'
        ])
        .pipe(plumber(plumberNotify('PHP')))
        .pipe(fileInclude(fileIncludeSetting))
        .pipe(
            replace(
                /(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
                '$1./$4$5$7$1'
            )
        )
        .pipe(gulp.dest('./htdocs/website/phpconfig/'));
});

gulp.task('sass:php', function () {
	return gulp
		.src('./src/scss/*.scss')
		.pipe(changed('./htdocs/website/css/'))
		.pipe(plumber(plumberNotify('SCSS')))
		.pipe(sourceMaps.init())
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(
			replace(
				/(['"]?)(\.\.\/)+(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
				'$1$2$3$4$6$1'
			)
		)
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('./htdocs/website/css/'));
});

gulp.task('images:php', function () {
	return (
		gulp
			.src(['./src/img/**/*', '!./src/img/svgicons/**/*'])
			.pipe(changed('./htdocs/website/img/'))
			.pipe(
				imagemin([
					imageminWebp({
						quality: 85,
					}),
				])
			)
			.pipe(rename({ extname: '.webp' }))
			.pipe(gulp.dest('./htdocs/website/img/'))
			.pipe(gulp.src(['./src/img/**/*', '!./src/img/svgicons/**/*']))
			.pipe(changed('./htdocs/website/img/'))
			// .pipe(imagemin({ verbose: true }))
			.pipe(gulp.dest('./htdocs/website/img/'))
	);
});

const svgStack = {
	mode: {
		stack: {
			example: true,
		},
	},
	shape: {
		transform: [
			{
				svgo: {
					js2svg: { indent: 4, pretty: true },
				},
			},
		],
	},
};

const svgSymbol = {
	mode: {
		symbol: {
			sprite: '../sprite.symbol.svg',
		},
	},
	shape: {
		transform: [
			{
				svgo: {
					js2svg: { indent: 4, pretty: true },
					plugins: [
						{
							name: 'removeAttrs',
							params: {
								attrs: '(fill|stroke)',
							},
						},
					],
				},
			},
		],
	},
};

gulp.task('svgStack:php', function () {
	return gulp
		.src('./src/img/svgicons/**/*.svg')
		.pipe(plumber(plumberNotify('SVG:php')))
		.pipe(svgsprite(svgStack))
		.pipe(gulp.dest('./htdocs/website/img/svgsprite/'))
});

gulp.task('svgSymbol:php', function () {
	return gulp
		.src('./src/img/svgicons/**/*.svg')
		.pipe(plumber(plumberNotify('SVG:php')))
		.pipe(svgsprite(svgSymbol))
		.pipe(gulp.dest('./htdocs/website/img/svgsprite/'));
});

gulp.task('files:php', function () {
	return gulp
		.src('./src/files/**/*')
		.pipe(changed('./htdocs/website/files/'))
		.pipe(gulp.dest('./htdocs/website/files/'));
});

gulp.task('js:php', function () {
	return gulp
		.src('./src/js/*.js')
		.pipe(changed('./htdocs/website/js/'))
		.pipe(plumber(plumberNotify('JS')))
		// .pipe(babel())
		.pipe(webpack(require('./../webpack.config.js')))
		.pipe(gulp.dest('./htdocs/website/js/'));
});

const serverOptions = {
	livereload: true,
	open: true,
};

gulp.task('server:php', function () {
	return gulp.src('./htdocs/website/').pipe(server(serverOptions));
});

gulp.task('watch:php', function () {
	gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:php'));
	gulp.watch(
		['./src/html/**/*.php', './src/html/**/*.json'],
		gulp.parallel('html:php')
	);
	gulp.watch('./src/img/**/*', gulp.parallel('images:php'));
	gulp.watch('./src/files/**/*', gulp.parallel('files:php'));
	gulp.watch('./src/js/**/*.js', gulp.parallel('js:php'));
	gulp.watch(
		'./src/img/svgicons/*',
		gulp.series('svgStack:php', 'svgSymbol:php')
	);
});
