<!--
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

![CarbonData_Logo](../docs/images/format/CarbonData_logo.png?raw=true)
# Quick Start
This tutorial provides a quick introduction to using CarbonData.

## Getting started with Apache CarbonData

* [Installation](#installation)
* [Interactive Analysis with Carbon-Spark Shell](#InteractiveAnalysis-with-Carbon-Spark-Shell)
   * [Basics](#basics)
   * [Executing Queries](#executing-queries)
      * [Prerequisites](#prerequisites)
      * [Create Table](#create-table)
      * [Load data to Table](#load-data-to-table)
      * [Query data from table](#query-data-from-table)
* [Carbon SQL CLI](#carbon-sql-cli)
   * [Basics](#basics)
   * [Execute Queries in CLI](#execute-queries-in-cli)
* [Building CarbonData]()


##  Installation
* Download released package of [Spark 1.5.0 to 1.6.2](http://spark.apache.org/downloads.html)
* Download and install [Apache Thrift 0.9.3](http://thrift-tutorial.readthedocs.io/en/latest/installation.html), make sure thrift is added to system path.
* Download [Apache CarbonData code](https://github.com/apache/incubator-carbondata) and build it. Please visit [Building CarbonData And IDE Configuration](Installing-CarbonData-And-IDE-Configuartion.md) for more information.
 
## Interactive Analysis with Carbon-Spark Shell
Carbon Spark shell is a wrapper around Apache Spark Shell, it provides a simple way to learn the API, as well as a powerful tool to analyze data interactively. Please visit [Apache Spark Documentation](http://spark.apache.org/docs/latest/) for more details on Spark shell.

#### Basics
Start Spark shell by running the following in the Carbon directory:
```
./bin/carbon-spark-shell
```
*Note*: In this shell SparkContext is readily available as sc and CarbonContext is available as cc.

CarbonData stores and writes the data in its specified format at the default location on the hdfs.
By default carbon.storelocation is set as :
```
hdfs://IP:PORT/Opt/CarbonStore
```
And you can provide your own store location by providing configuration using --conf option like:
```
./bin/carbon-spark-sql --conf spark.carbon.storepath=<storelocation>
```

#### Executing Queries

**Prerequisites**

Create sample.csv file in CarbonData directory. The CSV is required for loading data into Carbon.
```
$ cd carbondata
$ cat > sample.csv << EOF
  id,name,city,age
  1,david,shenzhen,31
  2,eason,shenzhen,27
  3,jarry,wuhan,35
  EOF
```

**Create table**

```
scala>cc.sql("create table if not exists test_table (id string, name string, city string, age Int) STORED BY 'carbondata'")
```

**Load data to table**
```
scala>val dataFilePath = new File("../carbondata/sample.csv").getCanonicalPath
scala>cc.sql(s"load data inpath '$dataFilePath' into table test_table")
```

**Query data from table**

```
scala>cc.sql("select * from test_table").show
scala>cc.sql("select city, avg(age), sum(age) from test_table group by city").show
```

## Carbon SQL CLI
The Carbon Spark SQL CLI is a wrapper around Apache Spark SQL CLI. It is a convenient tool to execute queries input from the command line. Please visit [Apache Spark Documentation](http://spark.apache.org/docs/latest/) for more information Spark SQL CLI.

#### Basics
Start the Carbon Spark SQL CLI, run the following in the Carbon directory :

```
./bin/carbon-spark-sql
```
CarbonData stores and writes the data in its specified format at the default location on the hdfs.
By default carbon.storelocation is set as :
```
hdfs://IP:PORT/Opt/CarbonStore
```

And you can provide your own store location by providing configuration using --conf option like:
```
./bin/carbon-spark-sql --conf spark.carbon.storepath=/home/root/carbonstore
```

####  Execute Queries in CLI
```
spark-sql> create table if not exists test_table (id string, name string, city string, age Int) STORED BY 'carbondata'
spark-sql> load data inpath '../sample.csv' into table test_table
spark-sql> select city, avg(age), sum(age) from test_table group by city
```
## Building CarbonData

To get started, get CarbonData from the [downloads]() on the [http://carbondata.incubator.apache.org.](http://carbondata.incubator.apache.org.)
CarbonData uses Hadoop’s client libraries for HDFS and YARN and Spark's libraries. Downloads are pre-packaged for a handful of popular Spark versions. 

If you’d like to build CarbonData from source,  Please visit [Building CarbonData And IDE Configuration]()







    


