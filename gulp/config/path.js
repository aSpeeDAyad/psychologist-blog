//Получаем имя папкинашего проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        html: `${buildFolder}/`
        
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        html: `${srcFolder}/*.html`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`

    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
};
