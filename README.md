# volto-europa-analytics

[![Releases](https://img.shields.io/github/v/release/eea/volto-europa-analytics)](https://github.com/eea/volto-europa-analytics/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-europa-analytics%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-europa-analytics/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-europa-analytics%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-europa-analytics/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-europa-analytics-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-europa-analytics-develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF
s
## Getting started

### Add volto-europa-analytics to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-europa-analytics"
   ],

   "dependencies": {
       "@eeacms/volto-europa-analytics": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-europa-analytics
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-europa-analytics/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-europa-analytics/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-europa-analytics/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)



[European Environment Agency (EU)](http://eea.europa.eu)
