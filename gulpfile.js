const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');
require('./gulp/fontsDev.js');
require('./gulp/fontsDocs.js');
require('./gulp/php.js');
require('./gulp/phpdocs.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev', 'fontsDev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', gulp.series('svgStack:dev', 'svgSymbol:dev'), 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs', 'fontsDocs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', gulp.series('svgStack:docs', 'svgSymbol:docs'), 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);


gulp.task(
	'php',
	gulp.series(
		'clean:php', 'fontsDocs',
		gulp.parallel('html:php', 'sass:php', 'images:php', gulp.series('svgStack:php', 'svgSymbol:php'), 'files:php', 'js:php'),
		gulp.parallel('watch:php')
	)
);

gulp.task(
	'phpdocs',
	gulp.series(
		'clean:phpdocs', 'fontsDocs',
		gulp.parallel('html:phpdocs', 'sass:phpdocs', 'images:phpdocs', gulp.series('svgStack:phpdocs', 'svgSymbol:phpdocs'), 'files:phpdocs', 'js:phpdocs')
	)
);
