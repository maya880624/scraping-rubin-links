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

lsst  / **pipe_tasks ** Public

  * Notifications  You must be signed in to change notification settings
  * Fork 18
  * Star  18




LSST Data Management: astronomical data processing tasks 

dm.lsst.org/

### License

GPL-3.0 license 

18 stars  18 forks  Branches Tags Activity

Star 

Notifications  You must be signed in to change notification settings

  * Code
  * Issues 1
  * Pull requests 18
  * Actions
  * Projects 0
  * Wiki
  * Security
  * Insights



Additional navigation options

  * Code 
  * Issues 
  * Pull requests 
  * Actions 
  * Projects 
  * Wiki 
  * Security 
  * Insights 



# lsst/pipe_tasks

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

4,343 Commits  
  
.github/workflows

.github/workflows  
  
bin.src

bin.src  
  
doc

doc  
  
python/lsst

python/lsst  
  
schemas

schemas  
  
tests

tests  
  
ups

ups  
  
.gitignore

.gitignore  
  
COPYRIGHT

COPYRIGHT  
  
LICENSE

LICENSE  
  
README.rst

README.rst  
  
SConstruct

SConstruct  
  
setup.cfg

setup.cfg  
  
View all files  
  
## Repository files navigation

  * README
  * GPL-3.0 license



# pipe_tasks

`pipe_tasks` is a package in the LSST Science Pipelines.

`pipe_tasks` provides many of the Task classes that drive the LSST Science Pipelines. The pipeline tasks listed here are useful data processing entry points for most users.

The repository also contains several Pipelines used for processing. You can also assemble your own pipelines by combining individual tasks through their Python APIs.

`pipe_tasks` does not provide all the tasks and command-line tasks in the LSST Science Pipelines. Tasks can be found in many other high-level packages in the Science Pipelines, such as ip_isr.

To learn more about the task framework in general, see the lsst.pipe.base module documentation.

The package namespace itself is mostly empty. Each specific processing tool must be imported directly from the module; for instance,

`from lsst.pipe.tasks.processCcd import ProcessCcdTask`

## About

LSST Data Management: astronomical data processing tasks 

dm.lsst.org/

### Resources

Readme 

### License

GPL-3.0 license 

Activity

Custom properties

### Stars

**18** stars 

### Watchers

**52** watching 

### Forks

**18** forks 

Report repository 

##  Releases 

662 tags

##  Packages 0

No packages published   


##  Contributors 63

  *   *   *   *   *   *   *   *   *   *   *   *   *   * 


\+ 49 contributors 

## Languages

  * Python 100.0%



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
