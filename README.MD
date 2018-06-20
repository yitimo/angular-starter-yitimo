# angular-starter-yitimo

Angular starter by yitimo. Bases on project created by angular-cli.

1. Use yarn for package managing.
2. Use SCSS for styling.
3. Use material UIs.
4. Add i18n ability.
5. Remove test related code.

## Build it by yourself

As this is a repo just based on angular-cli created, you can just build it manually. Just see as the following steps.

1. install yarn
2. install @angular/cli globally by ``yarn global add @angular/cli``
3. config angular-cli to use yarn defaultly by ``ng config -g cli.packageManager yarn``
4. ng new yourAppName --style=scss
5. delete test related files if you don't need them like me
6. move global config files to where you want
7. add material by ``yarn add @angular/material @angular/cdk`` and then import the css file
8. add shared module to put material modules or others common modules in
9. add core module to put global services/modules
10. add translate module and config it
11. add app routes and sub routes
12. start writing your fantastic app
