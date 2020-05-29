const gulp = require('gulp')
const { series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    console.log('Tarefa de copiar!')
    return cb()
}

const fim = cb => {
    /* gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) 
        .pipe(transformacaoA())
        .pipe(transformacaoB())
        .pipe(transformacaoB()) */
        gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)