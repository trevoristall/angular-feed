var gulp = require('gulp'),
jshint = require('gulp-jshint'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
concat = require('gulp-concat');

// Scripts
gulp.task('scripts', function () {
    return gulp.src([
        'app/bower_components/jquery/dist/jquery.js',
        'app/bower_components/angular/angular.js',
        'app/bower_components/bootstrap/dist/js/bootstrap.js',
        'app/bower_components/jquery-bridget/jquery.bridget.js',
        'app/bower_components/angular-animate/angular-animate.js',
        'app/bower_components/angular-resource/angular-resource.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-touch/angular-touch.js',
        'app/bower_components/get-style-property/get-style-property.js',
        'app/bower_components/get-size/get-size.js',
        'app/bower_components/eventie/eventie.js',
        'app/bower_components/doc-ready/doc-ready.js',
        'app/bower_components/eventEmitter/EventEmitter.js',
        'app/bower_components/matches-selector/matches-selector.js',
        'app/bower_components/fizzy-ui-utils/utils.js',
        'app/bower_components/outlayer/item.js',
        'app/bower_components/outlayer/outlayer.js',
        'app/bower_components/masonry/masonry.js',
        'app/bower_components/imagesloaded/imagesloaded.js',
        'app/bower_components/angular-masonry/angular-masonry.js',
        'app/app.js',
        'app/view-home/home.js',
        'app/view-about/about.js',
        'app/view-category/category.js',
        'app/components/version/version.js',
        'app/components/version/version-directive.js',
        'app/components/version/interpolate-filter.js',
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', function () {
    gulp.start('scripts');
});

// Watch
gulp.task('watch', function () {

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

});
