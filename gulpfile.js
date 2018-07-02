const gulp = require('gulp')
const marked = require('marked')
const yamlFront = require('yaml-front-matter')
const fs = require('fs')
const gulpfn = require('gulp-fn')

const mdSources = 'static/content/post/md/*.md'
const jsonDest = 'static/content/post/json/'

const parseMarkdownToJSON = function (filePath) {
    var filename = filePath.replace(/^.*[\\\/]/, '')
    filename = filename.substring(0, filename.lastIndexOf('.'))

    console.log(filename)
    const obj = {
        results: []
    }
    fs.readFile(filePath, 'utf-8', function(err, data) {
        if (err) {
            return console.log(err)
        }
        const result = yamlFront.loadFront(data)
        result.content = marked.parse(result.__content)
        result.published = Date()
        obj.results.push(result)

        const json = JSON.stringify(obj, null, 2)
        fs.writeFile(jsonDest + filename + '.json', json, 'utf8', function(err, data) {
            if (err){
                return console.log(err)
            }
        })
    })
}

gulp.task('watch', function () {
    gulp.watch(mdSources, function (event) {
        const filePath = event.path
        parseMarkdownToJSON(filePath)
    })
})

// can't get this to work for some reason
gulp.task('parse', function () {
    gulp.src(['./static/content/post/md/*.md'])
        .pipe(gulpfn(function (file) {
            parseMarkdownToJSON(file.path)
        })
    )
})

gulp.task('default', ['parse', 'watch'])
