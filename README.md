# eslint-issues

This repo is for reproducing problems with rules in any of the following ESLint plugins:

* [`eslint-plugin-etc`](https://github.com/cartant/eslint-plugin-etc)
* [`eslint-plugin-rxjs`](https://github.com/cartant/eslint-plugin-rxjs)
* [`eslint-plugin-rxjs-angular`](https://github.com/cartant/eslint-plugin-rxjs-angular)

If you open an issue in any of the above repos, I might ask you to create a PR to reproduce the problem here. For an example, have a look at the `src/eslint-plugin-rxjs/46` directory.

Specifically, you'll need to:

* ensure the versions in the `package.json` are exactly what you're using;
* you've disabled all rules except for the rule you are using; and
* provide a minimal linted source file that effects the problem you're reporting.