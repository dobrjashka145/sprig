import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import { deleteAsync } from 'del';
import gulp from 'gulp';
import csso from 'postcss-csso';
import htmlmin from 'gulp-htmlmin';
import less from 'gulp-less';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import webp from 'gulp-webp';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML

const minHTML = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
};

// Copy files

const copyFiles = () => {
  return gulp.src([
  'source/fonts/*.{woff2, woff}',
  'source/*.ico'
  ], {base: 'source'})
    .pipe(gulp.dest('build'));
}

// JS

const minJS = () => {
  return gulp.src('source/js/*.js')
    .pipe(terser())
    .pipe(rename(function (path) {
    path.basename += ".min";
  }))
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
}

// Images

const createWebp = () => {
  return gulp.src(['source/img/**/*.{jpg,png}'])
    .pipe(webp({quality: 80}))
    .pipe(gulp.dest('build/img'));
}

const copyImages = () => {
  return gulp.src([
  'source/img/**/*.{svg,webp,png,jpg}',
  ], {base: 'source'})
    .pipe(gulp.dest('build'));
}


// Clean

const clean = () => {
  return deleteAsync('build');
};

// Server

const server = (done) => {
  browser.init({
    server: {
    baseDir: 'source'
  },
    cors: true,
    notify: false,
    ui: false,
  });
    done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/*.js');
  gulp.watch('source/*.html').on('change', browser.reload);
}

// Build

export const build = gulp.series(
    clean,
    copyImages,
    gulp.parallel(
    copyFiles,
    styles,
    minHTML,
    minJS,
    createWebp
  )
);


export default gulp.series(
  clean,
  copyImages,
  gulp.parallel(
    copyFiles,
    styles,
    minHTML,
    minJS,
    createWebp,
  ),
  gulp.series(
    server,
    watcher
  )
);
