Apache CarbonData Website
=========================

This project contains the Apache CarbonData website.

## Build

You need a machine with Maven to build the website.

Checkout:

```
git clone https://git-wip-us.apache.org/repos/asf/incubator-carbondata-site
git checkout asf-site
```

## Publish

To publish the local website to the production location (http://carbondata.incubator.apache.org), you have to execute the following script:

```
./carbonscript.sh
```

This script will :

* Generate the PDF Documentation.
* Generate the HTML pages from MD files.
* Update the content folder.
