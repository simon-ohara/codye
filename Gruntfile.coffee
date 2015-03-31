module.exports = (grunt) ->

  codeplate = 'codeplate'
  cwd = codeplate + 's/'

  Prism = require 'prismjs'

  generateCodePlateHtml = (content, filepath) ->
    language = filepath.substr(0, filepath.indexOf('.')).replace(cwd, '')
    return Prism.highlight(content, Prism.languages[language])

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    concat:
      client:
        src: 'scripts/**/*.js'
        dest: 'public/javascripts/codye-client.js'
        options:
          seperator: ';'

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
      client:
        files: ['scripts/**/*.js', 'spec/scripts/**/*-spec.js']
        tasks: ['client']

  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'default', ['watch']
  grunt.registerTask codeplate, ['copy:' + codeplate]
  grunt.registerTask 'client', ['concat:client']
  grunt.registerTask 'acceptance', ['protractor:e2e']

