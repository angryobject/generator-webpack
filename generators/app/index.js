const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
   constructor: function () {
      generators.Base.apply(this, arguments);

      this.option('react');
   },

   writing: {
      projectfiles: function () {
         this.copy('_bower.json', 'bower.json');
         this.template('_package.json', 'package.json');

         this.copy('editorconfig', '.editorconfig');
         this.template('eslintrc', '.eslintrc');
         this.copy('gitattributes', '.gitattributes');
         this.copy('gitignore', '.gitignore');
         this.copy('gulpfile.js');
         this.template('webpack.config.js');
         this.copy('README.md');

         this.copy('src/index.html');
         this.directory('src/scripts');
         this.directory('src/styles');
         this.template('src/styles/main.sass');

         if (this.options.react) {
            this.directory('src/components');
         }
      }
   },


   install: function () {
      this.installDependencies();
   }
});
