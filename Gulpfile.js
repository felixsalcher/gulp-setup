var gulp = require('gulp'),
    express = require('express');

gulp.task('express', function () {
    var app = express();
    app.use(express.static(__dirname));
    app.listen(4000, '0.0.0.0');
});

gulp.task('default', ['express'], function () {
    
});