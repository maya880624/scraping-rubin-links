Skip to content

## Navigation Menu

Toggle navigation

Sign in 

  * Product 

    * Actions

Automate any workflow 

    * Packages

Host and manage packages 

    * Security

Find and fix vulnerabilities 

    * Codespaces

Instant dev environments 

    * GitHub Copilot

Write better code with AI 

    * Code review

Manage code changes 

    * Issues

Plan and track work 

    * Discussions

Collaborate outside of code 

Explore
    * All features 
    * Documentation 
    * GitHub Skills 
    * Blog 

  * Solutions 

By size
    * Enterprise 
    * Teams 
    * Startups 

By industry
    * Healthcare 
    * Financial services 
    * Manufacturing 

By use case
    * CI/CD & Automation 
    * DevOps 
    * DevSecOps 

  * Resources 

Topics
    * AI 
    * DevOps 
    * Security 
    * Software Development 

Explore
    * Learning Pathways 
    * White papers, Ebooks, Webinars 
    * Customer Stories 
    * Partners 

  * Open Source 

    * GitHub Sponsors

Fund open source developers 

    * The ReadME Project

GitHub community articles 

Repositories
    * Topics 
    * Trending 
    * Collections 

  * Enterprise 

    * Enterprise platform

AI-powered developer platform 

Available add-ons
    * Advanced Security

Enterprise-grade security features 

    * GitHub Copilot

Enterprise-grade AI features 

    * Premium Support

Enterprise-grade 24/7 support 

  * Pricing



Search or jump to...

# Search code, repositories, users, issues, pull requests...

Search 

Clear




Search syntax tips 

#  Provide feedback 

We read every piece of feedback, and take your input very seriously.

Include my email address so I can be contacted

Cancel  Submit feedback 

#  Saved searches 

## Use saved searches to filter your results more quickly

Name

Query

To see all available qualifiers, see our documentation. 

Cancel  Create saved search 

Sign in 

Sign up  Reseting focus

You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert

{{ message }}

lsst-sqre  / **kafkit ** Public

  * Notifications  You must be signed in to change notification settings
  * Fork 1
  * Star  20




Asyncio-based Python library for working with aiokafka, Confluent Schema Registry, and Kafka Broker APIs. 

kafkit.lsst.io

### License

MIT license 

20 stars  1 fork  Branches Tags Activity

Star 

Notifications  You must be signed in to change notification settings

  * Code
  * Issues 3
  * Pull requests 3
  * Actions
  * Projects 0
  * Security
  * Insights



Additional navigation options

  * Code 
  * Issues 
  * Pull requests 
  * Actions 
  * Projects 
  * Security 
  * Insights 



# lsst-sqre/kafkit

This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.

main

BranchesTags

Go to file

Code

## Folders and files

NameName

Last commit message

Last commit date  
  
## Latest commit

## History

173 Commits  
  
.github

.github  
  
changelog.d

changelog.d  
  
docs

docs  
  
licenses

licenses  
  
src/kafkit

src/kafkit  
  
tests

tests  
  
.flake8

.flake8  
  
.gitignore

.gitignore  
  
.pre-commit-config.yaml

.pre-commit-config.yaml  
  
.prettierignore

.prettierignore  
  
CHANGELOG.md

CHANGELOG.md  
  
LICENSE

LICENSE  
  
Makefile

Makefile  
  
README.md

README.md  
  
docker-compose.yaml

docker-compose.yaml  
  
pyproject.toml

pyproject.toml  
  
tox.ini

tox.ini  
  
View all files  
  
## Repository files navigation

  * README
  * MIT license



# Kafkit

Kafkit helps you write Kafka producers and consumers in Python with asyncio:

  * Kafkit provides a client for the Confluent Schema Registry's HTTP API. The `RegistryApi` client includes both high-level methods for managing subjects and schemas in a Registry, and direct low-level access to HTTP methods (GET, POST, PUT, PATCH, and DELETE). The high-level methods use caching so you can use the client as an integral part of your application's schema management. `RegistryApi` is implemented around aiohttp, but since the base class is designed with a sans IO architecture, a Registry client can be implemented with any asyncio HTTP library.

  * Kafkit provides Avro message serializers and deserializers that integrate with the Confluent Schema Registry: `Deserializer`, `Serializer`, and `PolySerializer`.

  * The `RecordNameSchemaManager` is a streamlined tool for serializing messages using the schemas maintained by your app, while also integrating with the Confluent Schema Registry.

  * The `kafkit.ssl` module helps you connect to SSL-secured Kafka brokers.




Learn more about Kafkit at https://kafkit.lsst.io.

## About

Asyncio-based Python library for working with aiokafka, Confluent Schema Registry, and Kafka Broker APIs. 

kafkit.lsst.io

### Topics

kafka  roundtable 

### Resources

Readme 

### License

MIT license 

Activity

Custom properties

### Stars

**20** stars 

### Watchers

**7** watching 

### Forks

**1** fork 

Report repository 

##  Releases 6

0.3.0 Latest 

Feb 23, 2023

\+ 5 releases 

##  Contributors 3

  *   *   * 


## Languages

  * Python 99.7%
  * Makefile 0.3%



## Footer

© 2024 GitHub, Inc. 

### Footer navigation

  * Terms
  * Privacy
  * Security
  * Status
  * Docs
  * Contact
  * Manage cookies 
  * Do not share my personal information 



You can’t perform that action at this time. 
