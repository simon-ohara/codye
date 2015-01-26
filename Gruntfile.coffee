module.exports = (grunt) ->

  codeplate = 'codeplate'
  cwd = codeplate + 's/'

  Prism = require 'prismjs'

  generateCodePlateHtml = (content, filepath) ->
    language = filepath.substr(0, filepath.indexOf('.')).replace(cwd, '')
    return Prism.highlight(content, Prism.languages[language])

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    copy:
      codeplate:
        expand: true
        cwd: cwd
        src: '*.*'
        dest: 'views/' + cwd
        rename: (dest, src) -> dest + src.substring(0, src.indexOf('.')) + '.html'
        options:
          process: generateCodePlateHtml

    watch:
      files: [cwd + '*']
      tasks: [codeplate]

   require('load-grunt-tasks')(grunt)

   grunt.registerTask 'default', ['watch']
   grunt.registerTask codeplate, ['copy:' + codeplate]

