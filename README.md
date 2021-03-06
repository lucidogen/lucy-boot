# Lucy Boot [![Build Status](https://travis-ci.org/lucidogen/lucy-boot.svg)](https://travis-ci.org/lucidogen/lucy-boot)

Part of [Lucidity](http://lucidity.io) project.

This is the code responsible for handling the top-level electron application
(main) process and native GUI. It is a very minimal library to just enable
booting the application. You should usually include `lucidity` which
contains other important libraries such as the runtime, live coding and
composition support.

Currently, there are no customization settings.

## Installation

  ```sh
  npm install lucy-boot --save
  ```

## Setup

Once installed, create an 'index.js' file in the root directory with:

  ```js
  require ( 'lucy-boot' )
  .boot ()
  ```

Now you can start Lucidity from within the root directory:

  ```sh
  electron .
  ```

Note: you can install electron with

  ```sh
  npm install -g electron-prebuilt
  ```

## Tests

  ```sh
  npm test
  ```

## Contributing

Please use ['jessy style'](http://github.com/lucidogen/jessy).

Add unit tests (when possible) for any new or changed functionality.

## Release History

  * 0.1.1 (2015-09-22) Fixed pipe errors, working gallery.
  * 0.1.0 (2015-09-02) Initial release.
