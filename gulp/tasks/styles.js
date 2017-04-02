var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	sass = require('gulp-sass');

gulp.task('styles', function() {
	
	return gulp.src('./app/assets/styles/styles.scss')
			.pipe(sass([autoprefixer]))
			.on('error', function(errorInfo) {
				console.log(errorInfo.toString());
				this.emit('end');
			})
			.pipe(gulp.dest('./app/temp/styles'));
});