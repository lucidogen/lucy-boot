# Lucidity Boot

This is the code responsible for handling the top-level electron application
(main) process and native GUI.

Currently, there are no settings or customization settings.

Install with:

  ```Shell
  npm install lucy-boot --save
  ```

Once installed, create an 'index.js' file in the root directory with:

  ```Javascript
  require ( 'lucy-boot' )
  .boot ()
  ```

Now you can start Lucidity from within the root directory:

  ```Shell
  electron .
  ```

Note: you can install electron with

  ```Shell
  npm install -g electron-prebuilt
  ```

## Release History

* 0.1.0 Initial release
