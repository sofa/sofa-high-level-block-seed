# Sofa High Level Block Seed

Use this component seed as kickstarter for new sofa high level blocks. Make sure to
go through the following steps to get started.

## Installation

Clone the repository via git:

```sh
$ git clone https://github.com/sofa/sofa-high-level-block-seed.git sofa-block-name
```

Where `sofa-block-name` should be the actual name of your block. Here are
some examples:

- sofa-product-list
- sofa-catalouge

Next, navigate to your project and install all dependencies:

```sh
$ cd sofa-block-name
$ npm install
```

Once this is done you have to update a few files according to your block name.

## Preparation

### package.json

Please change the following properties in the `package.json` file accordingly:

- name - The block name
- description - Block description
- main - The distribution file
- repository.url - URL to the repository on GitHub
- bugs.url - URL to the issues list on GitHub

### README

Last but not least, don't forget to update the README.

## Developing

This component seed comes with a few grunt task to make your life easier when
developing your block.

- `gulp watch` - Tests your code, builds a production ready version, keeps watching
- `gulp build` - Builds a production ready version of your component
- `gulp test` - Only runs unit tests

Have fun!
