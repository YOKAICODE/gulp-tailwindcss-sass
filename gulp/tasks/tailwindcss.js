import tailwindcss from "tailwindcss";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import rename from "gulp-rename";

import tailwindConfig from "../../tailwind.config.cjs";

const tailwind = () => {
  return app.gulp
    .src(app.path.src.tailwindcss)
    .pipe(
      postcss([
        tailwindcss(tailwindConfig),
        autoprefixer()
      ])
    )
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.tempCss))
    .pipe(app.plugins.browsersync.stream());
};

export {tailwind};
