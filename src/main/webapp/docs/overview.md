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

This tutorial provides a detailed overview about : 

* CarbonData, 
* Working and File Format
* Features
* Supported Data Types
* Compatibility
* Packaging and Interfaces.

##  Introduction

CarbonData is a fully indexed columnar and Hadoop native data-store for processing heavy analytical workloads and detailed queries on big data. CarbonData allows  faster interactive query using advanced columnar storage, index, compression and encoding techniques to improve computing efficiency, in turn it will help speedup queries an order of magnitude faster over PetaBytes of data.
 
In customer benchmarks, CarbonData has proven to manage Petabyte of data running on extraordinarily low-cost hardware and answers queries around 10 times faster than the current open source solutions (column-oriented SQL on Hadoop data-stores).

Some of the Salient features of CarbonData are :
* Low-Latency for various types of data access patterns like Sequential,Random and OLAP.
* Allows fast query on fast data.
* Ensures Space Efficiency.
* General format available on Hadoop-ecosystem.

##  CarbonData File Structure

CarbonData file contains groups of data called blocklet, along with all required information like schema, offsets and indices, etc, in a file footer, co-located in HDFS.

The file footer can be read once to build the indices in memory, which can be utilized for optimizing the scans and processing for all subsequent queries.

Each blocklet in the file is further divided into chunks of data called Data Chunks. Each data chunk is organized either in columnar format or row format, and stores the data of either a single column or a set of columns. All blocklets in one file contain the same number and type of Data Chunks.

![Carbon File Structure](../docs/images/format/carbon_data_file_structure_new.png?raw=true)

Each Data Chunk contains multiple groups of data called as Pages. There are three types of pages.
* Data Page: Contains the encoded data of a column/group of columns.
* Row ID Page (optional): Contains the row id mappings used when the Data Page is stored as an inverted index.
* RLE Page (optional): Contains additional metadata used when the Data Page in RLE coded.

![Carbon File Format](../docs/images/format/carbon_data_format_new.png?raw=true)

##  Features

CarbonData file format is a columnar store in HDFS, it has many features that a modern columnar format has, such as splittable, compression schema ,complex data type etc, and CarbonData has following unique features:

* Stores data along with index: it can significantly accelerate query performance and reduces the I/O scans and CPU resources, where there are filters in the query. CarbonData index consists of multiple level of indices, a processing framework can leverage this index to reduce the task it needs to schedule and process, and it can also do skip scan in more finer grain unit (called blocklet) in task side scanning instead of scanning the whole file.
* Operable encoded data :Through supporting efficient compression and global encoding schemes, can query on compressed/encoded data, the data can be converted just before returning the results to the users, which is "late materialized".
* Column group: Allow multiple columns to form a column group that would be stored as row format. This reduces the row reconstruction cost at query time.
* Supports for various use cases with one single Data format : like interactive OLAP-style query, Sequential Access (big scan), Random Access (narrow scan).

##  Data Types

The following types are supported :

* Numeric Types
  * SMALLINT 
  * INT/INTEGER
  * BIGINT 
  * DOUBLE
  * DECIMAL

* Date/Time Types
  * TIMESTAMP
 
* String Types
  * STRING

* Complex Types
  * arrays: ARRAY<data_type>
  * structs: STRUCT<col_name : data_type [COMMENT col_comment], ...>
  
##  Compatibility

  
##  Packaging and Interfaces

###  Packaging
Carbon provides following JAR packages:

![carbon modules2](https://cloud.githubusercontent.com/assets/6500698/14255195/831c6e90-fac5-11e5-87ab-3b16d84918fb.png)

- **carbon-store.jar or carbondata-assembly.jar:** This is the main Jar for carbon project, the target user of it are both user and developer. 
      - For MapReduce application users, this jar provides API to read and write carbon files through CarbonInput/OutputFormat in carbon-hadoop module.
      - For developer, this jar can be used to integrate carbon with processing engine like spark and hive, by leveraging API in carbon-processing module.

- **carbon-spark.jar(Currently it is part of assembly jar):** provides support for spark user, spark user can manipulate carbon data files by using native spark DataFrame/SQL interface. Apart from this, in order to leverage carbon's builtin lifecycle management function, higher level concept like Managed Carbon Table, Database and corresponding DDL are introduced.

- **carbon-hive.jar(not yet provided):** similar to carbon-spark, which provides integration to carbon and hive.

###  Interfaces

####  API
Carbon can be used in following scenarios:

1. For MapReduce application user
   This User API is provided by carbon-hadoop. In this scenario, user can process carbon files in his MapReduce application by choosing CarbonInput/OutputFormat, and is responsible using it correctly.Currently only CarbonInputFormat is provided and OutputFormat will be provided soon.
   
2. For Spark user 
   This User API is provided by the Spark itself. There are also two levels of APIs
   * **Carbon File**
      
      Similar to parquet, json, or other data source in Spark, carbon can be used with data source API. For example(please refer to DataFrameAPIExample for the more detail):
      ```
      // User can create a DataFrame from any data source or transformation.
      val df = ...
  
      // Write data
      // User can write a DataFrame to a carbon file
      df.write
      .format("carbondata")
      .option("tableName", "carbontable")
      .mode(SaveMode.Overwrite)
      .save()
  
  
      // read carbon data by data source API
      df = carbonContext.read
      .format("carbondata")
      .option("tableName", "carbontable")
      .load("/path")
  
      // User can then use DataFrame for analysis
      df.count
      SVMWithSGD.train(df, numIterations)
  
      // User can also register the DataFrame with a table name, and use SQL for analysis
      df.registerTempTable("t1")  // register temporary table in SparkSQL catalog
      df.registerHiveTable("t2")  // Or, use a implicit funtion to register to Hive metastore
      sqlContext.sql("select count(*) from t1").show
      ```
   
   * **Managed Carbon Table**
   
      Carbon has in built support for high level concept like Table, Database, and supports full data lifecycle management, instead of dealing with just files, user can use carbon specific DDL to manipulate data in Table and Database level. Please refer [DDL](https://github.com/HuaweiBigData/carbondata/wiki/Language-Manual:-DDL) and [DML](https://github.com/HuaweiBigData/carbondata/wiki/Language-Manual:-DML)
      ```
      // Use SQL to manage table and query data
      create database db1;
      use database db1;
      show databases;
      create table tbl1 using org.apache.carbondata.spark;
      load data into table tlb1 path 'some_files';
      select count(*) from tbl1;
      ```
 
3.   For developer who want to integrate carbon into a processing engines like spark,hive or flink, use API provided by carbon-hadoop and carbon-processing:
       - **Query** : integrate carbon-hadoop with engine specific API, like spark data source API 
      
       - **Data life cycle management** : carbon provides utility functions in carbon-processing to manage data life cycle, like data loading, compact, retention, schema evolution. Developer can implement DDLs of their choice and leverage these utility function to do data life cycle management.
  
   






   


