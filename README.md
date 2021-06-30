Apache CarbonData Website
=========================

The branch of "feature-newwebsite" is for maintaining chinese website content.

## Build

You need a machine with Maven to build the website.

Checkout:

```
git clone https://git-wip-us.apache.org/repos/asf/carbondata-site
git checkout feature-newwebsite
```

## Publish

To publish the local website to the production location (http://carbondata.apache.org), you have to use:

```
mvn install
```

It will update the content folder.
