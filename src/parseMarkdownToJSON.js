const marked = require('marked')
const yamlFront = require('yaml-front-matter')
const fs = require('fs')

parse = (filename) => {
    const obj = {
        results: []
    }
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err) {
            return console.log(err)
        }
        const result = yamlFront.loadFront(data)
        result.__content = marked.parse(result.__content)
        result.published = Date()
        obj.results.push(result)

        const json = JSON.stringify(obj, null, 2)
        fs.writeFile(filename + '.json', json, 'utf8', function(err, data) {
            if (err){
                return console.log(err)
            }
        })
    })
}

parse('../static/api/post/hello.md')