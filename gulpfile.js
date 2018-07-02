var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default',function(){
    console.log('halil güler');
});

gulp.task('html',function(){
    console.log('HTML5 is Great!');
});

gulp.task('styles',function(){
    console.log('CSS3 is Great!');
});


gulp.task('watch',function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css',function(){
        gulp.start('styles');
    });
});