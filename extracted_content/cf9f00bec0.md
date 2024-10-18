Skip to main content

__ `Ctrl`+`K`

Documenteer

Site Navigation 

  * Rubin user guides 
  * Technical notes 
  * Sphinx extensions 
  * Change Log 
  * Development 

More 

  * Rubin docs 




__

______

  * __ GitHub



__

Site Navigation 

  * Rubin user guides 
  * Technical notes 
  * Sphinx extensions 
  * Change Log 
  * Development 

More 

  * Rubin docs 




______

  * __ GitHub



# DocumenteerÂ¶

**Sphinx extensions, configurations, and tooling for Rubin Observatory documentation projects.**

Documenteer is developed on GitHub at lsst-sqre/documenteer. Find other versions of the documentation at https://documenteer.lsst.io/v

## InstallationÂ¶

pip

The core package provides Documenteerâs Sphinx extensions:
    
    
    pip install documenteer
    

To use Documenteerâs configurations for specific Rubin documentation use cases, youâll need to install Documenteer with specific âextrasâ to bring in the necessary dependencies.

For Rubin user guide projects:
    
    
    pip install "documenteer[guide]"
    

For technote projects:
    
    
    pip install "documenteer[technote]"
    

For LSST Science Pipelines projects and other EUPS stacks:
    
    
    pip install "documenteer[pipelines]"
    

See Installing Documenteer for pipelines.lsst.io for more information.

conda

Documenteer is available from conda-forge for Conda users. First, enable the conda-forge channel:
    
    
    conda config --add channels conda-forge
    conda config --set channel_priority strict
    

The core package provides Documenteerâs Sphinx extensions:
    
    
    conda install documenteer
    

To use Documenteerâs configurations for specific Rubin documentation use cases, youâll need to install Documenteer with specific âextrasâ to bring in the necessary dependencies.

To install Documenteer for technote projects:
    
    
    conda-install lsst-documenteer-technote
    

To install Documenteer for LSST Stack projects (such as https://pipelines.lsst.io and EUPS packages):
    
    
    conda-install lsst-documenteer-pipelines
    

## Project guidesÂ¶

Documenteer provides centralized Sphinx configuration and support for Rubin Observatory documentation projects. This section describes how to use Documenteer for specific types of projects, from single-page technical notes to user guides, to LSST Science Pipelines package documentation.

  * Rubin user guides
    * Rubin user guide features
    * Setting up the Documenteer configuration for Rubin user guides
    * Organizing content in a Rubin user guide
    * Configuring Python projects in documenteer.toml
    * Embedding a Redoc subsite for OpenAPI (HTTP API) documentation
    * Using the rst epilog for common links and substitutions
    * Redirecting pages when reorganizing content
    * Extending conf.py directly
    * Diagrams as code
    * Badges
    * Tab sets
    * Embedded videos
    * Using Markdown syntax in Rubin Observatory documentation
    * Including Jupyter notebooks in documentation
    * Pipelines
    * documenteer.toml reference
    * The documenteer.conf.guide configuration preset
  * Technical notes
    * Start a new technote
    * Edit a technote on your own computer
    * Editing a technote with the GitHub web UI
    * How your technote gets published to the web
    * Migrate legacy reStructuredText/Sphinx technical notes
    * Maintaining author metadata
    * Describing the document status (draft, deprecated, or stable)
    * Accommodating wide content (tables, code blocks, and images)
    * Configuring the Sphinx build
    * Sphinx extensions in technotes



## Sphinx extensionsÂ¶

Documenteer provides several Sphinx extensions. These extensions are designed for Rubin Observatory documentation projects, but are may be generally useful:

  * Sphinx extensions
    * Jira reference roles
    * LSST document reference roles
    * BibTeX style extension for Rubin Observatory
    * Sourcing BibTeX files from GitHub
    * The remote code block extension
    * Including OpenAPI documentation for web applications (documenteer.ext.openapi)
    * The autodocreset extension for resetting automodapiâs autodoc enhancements
    * Sphinx extensions for the LSST Science Pipelines task framework
    * The autocppapi extension for listing Doxylink C++ APIs through Doxylink
    * Package toctree extension for LSST Stack documentation



## Developer guideÂ¶

  * Development
    * Development guide
    * Release procedure
    * Theming architecture overview
    * Python API



next

User guides

__

© Copyright 2015-2022 Association of Universities for Research in Astronomy, Inc. (AURA).  


Built with the  PyData Sphinx Theme  0.12.0. 

Created using Sphinx 7.3.7.  

