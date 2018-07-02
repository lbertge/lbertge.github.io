export default {
  post(id) {
    return {
      path: `json/${id}.json`,
      resolve: (response, mappers) => {
        let { title, content, description, tags, published, author } = response.results[0]
        content = '<p>' + content.split('\n\n').join('</p><p>') + '</p>'
        return mappers.merge({ title, content, description, tags, published, author })
      }
    }
  }
}
