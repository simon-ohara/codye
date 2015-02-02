module.exports = (grunt) ->

  codeplate = 'codeplate'
  cwd = codeplate + 's/'

  Prism = require 'prismjs'

  generateCodePlateHtml = (content, filepath) ->
    language = filepath.substr(0, filepath.indexOf('.')).replace(cwd, '')
    return Prism.highlight(content, Prism.languages[language])

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    express:
      test:
        options:
          script: 'spec/test.js'

    karma:
      unit:
        configFile: 'karma.conf.coffee'
        background: true

    protractor:
      options:
        configFile: 'protractor.conf.js'
        keepAlive: true
      e2e:
        options:
          configFile: 'protractor.conf.js'
          keepAlive: true
          noColor: false

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
      codeplate:
        files: [cwd + '*']
        tasks: [codeplate]
      client:
        files: ['scripts/**/*.js', 'spec/scripts/**/*-spec.js']
        tasks: ['client']
      acceptance:
        files: ['views/**/*.jade', 'spec/views/**/*-spec.js']
        tasks: ['acceptance']

  require('load-grunt-tasks')(grunt)

  grunt.registerTask 'default', ['watch']
  grunt.registerTask codeplate, ['copy:' + codeplate]
  grunt.registerTask 'client', ['concat:client', 'karma:unit:run']
  grunt.registerTask 'acceptance', ['protractor:e2e']

