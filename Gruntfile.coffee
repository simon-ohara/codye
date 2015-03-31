module.exports = (grunt) ->

  codeplate = 'codeplate'
  cwd = codeplate + 's/'
  sass = require 'node-sass'

  Prism = require 'prismjs'

  generateCodePlateHtml = (content, filepath) ->
    language = filepath.substr(0, filepath.indexOf('.')).replace(cwd, '')
    return Prism.highlight(content, Prism.languages[language])

  generateStyles = () ->
    themeFile = 'public/stylesheets/theme.css'

    themeData = sass.renderSync({
      file: 'styles/theme.scss'
      outFile: themeFile
      sourceComments: true
      includePaths: require('node-neat').includePaths
    })

    grunt.file.write themeFile, themeData.css

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

      styles:
        files: ['styles/**/*.scss']
        tasks: ['styles']

  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'default', ['watch']
  grunt.registerTask codeplate, ['copy:' + codeplate]
  grunt.registerTask 'client', ['concat:client']
  grunt.registerTask 'acceptance', ['protractor:e2e']
  grunt.registerTask 'styles', 'Generate the theme for CoDye', generateStyles
