Apache CarbonData Website
=========================

This project contains the Apache CarbonData website.

## Build

You need a machine with Maven to build the website.

Checkout:

```
git clone https://git-wip-us.apache.org/repos/asf/carbondata-site
```

If you need to maintain english webiste, please checkout :
```
git checkout asf-site  
```

if you need to maintain chinese website, please checkout : 
```
git checkout feature-newwebsite
```
BTW, the master branch only keeps readme file, don't store any website's content.

## Publish

To publish the local website to the production location (http://carbondata.apache.org), you have to use:

```
mvn install
```

It will update the content folder.
