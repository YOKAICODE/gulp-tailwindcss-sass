import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";

const mergeStyles = () => {
  return app.gulp
    .src(`${app.path.build.tempCss}*.css`)
    .pipe(concat("style.min.css"))
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};

export {mergeStyles};
