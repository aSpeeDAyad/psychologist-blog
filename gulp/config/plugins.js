import replace from "gulp-replace";//Поиск и замена
import plumber from "gulp-plumber";//Обработка ошибок
import notify from "gulp-notify";//Сообщения(подсказки)
import browsersync from "browser-sync";//Локальный серевер
import newer from "gulp-newer";//Проверка обновления
import ifPlugin from "gulp-if";//Условное ветвление 

//Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    browsersync: browsersync,
    newer: newer,
    notify:notify,
    if: ifPlugin
};