module.exports = (grunt) ->

  codeplate = 'codeplate'
  cwd = codeplate + 's/'

  Prism = require 'prismjs'

  generateCodePlateHtml = (content, filepath) ->
    language = filepath.substr(0, filepath.indexOf('.')).replace(cwd, '')
    return Prism.highlight(content, Prism.languages[language])

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    karma:
      unit:
        configFile: 'karma.conf.coffee'
        background: true

    zombie:
      options:
        targetfiles: 'spec/views/index-spec.js'

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
   grunt.registerTask 'acceptance', ['zombie']

