astro_metadata_translator

  * Forum
  * Docs
  * LSST.org â



### Navigation

  * next » 
  * astro_metadata_translator » 



# astro_metadata_translatorÂ¶

The `astro_metadata_translator` package provides generalized infrastructure for handling metadata extraction for astronomical instrumentation.

There are header translation classes implemented as subclasses of `MetadataTranslator`. These translation subclasses implement methods corresponding to each derived property defined in `ObservationInfo`. The methods are named `to_{property}` and can be implemented explicitly by a translation class, or implicitly by defining trivial mappings from a header item to a property, or constant mappings that are fixed for all headers independent of any header values. Defining a new translator subclass that inherits from `MetadataTranslator` and giving it a name, automatically registers the translator as being available for automated header translation. A translation class does not need to reside in the `astro_metadata_translator` package.

`ObservationInfo` is a class summarizing the information from the translators. An instance of this class can be instantiated from any `dict`-like header. By default the header translation class to use is determined by asking each registered translator whether it knows how to translate it. If an explicit translation class should be used it can be specified explicitly.

For details on the format of header correction files see `fix_header`.

Warning

The existing set of property names in `ObservationInfo` should be considered as beta quality. Some of the names could yet be changed for consistency with other data dictionaries.

## Project infoÂ¶

Repository
    

https://github.com/lsst/astro_metadata_translator

JIRA component
    

https://jira.lsstcorp.org/issues/?jql=component%3Dastro_metadata_translator

## Command Line UtilitiesÂ¶

### astrometadataÂ¶

Execute main click command-line.
    
    
    astrometadata [OPTIONS] COMMAND [ARGS]...
    

Options

\--log-level <log_level>Â¶
    

Python logging level to use.

Options:
    

CRITICAL | ERROR | WARNING | INFO | DEBUG

\--traceback, \--no-tracebackÂ¶
    

Give detailed trace back when any errors encountered.

-p, \--packages <packages>Â¶
    

Python packages to import to register additional translators. This is in addition to any packages specified in the METADATA_TRANSLATORS environment variable (colon-separated python module names).

#### dumpÂ¶

Dump data header to standard out in YAML format.
    
    
    astrometadata dump [OPTIONS] [FILES]...
    

Options

-n, \--hdrnum <hdrnum>Â¶
    

HDU number to read. If the HDU can not be found, a warning is issued but reading is attempted using the primary header. The primary header is always read and merged with this header. Negative number (the default) indicates that the second header will be merged if the FITS file supports extended FITS.

-m, \--mode <mode>Â¶
    

Output mode. âyamlâ dumps the header in YAML format (this is the default). âfixedâ dumps the header in YAML format after applying header corrections. âyamlnativeâ is as for âyamlâ but dumps the native (astropy vs PropertyList) native form. âyamlfixedâ is as for âfixedâ but dumps the native (astropy vs PropertyList) native form.

Options:
    

yaml | fixed | yamlnative | fixexnative

-r, \--regex <regex>Â¶
    

When looking in a directory, regular expression to use to determine whether a file should be examined. Default: â.fit[s]?bâ

Arguments

FILESÂ¶
    

Optional argument(s)

#### translateÂ¶

Translate metadata in supplied files and report.
    
    
    astrometadata translate [OPTIONS] [FILES]...
    

Options

-q, \--quiet, \--no-quietÂ¶
    

Do not report the translation content from each header. Only report failures.

-n, \--hdrnum <hdrnum>Â¶
    

HDU number to read. If the HDU can not be found, a warning is issued but reading is attempted using the primary header. The primary header is always read and merged with this header. Negative number (the default) indicates that the second header will be merged if the FITS file supports extended FITS.

-m, \--mode <mode>Â¶
    

Output mode. âverboseâ prints all available information for each file found. âtableâ uses tabular output for a cutdown set of metadata. âautoâ uses âverboseâ if one file found and âtableâ if more than one is found.

Options:
    

auto | verbose | table

-r, \--regex <regex>Â¶
    

When looking in a directory, regular expression to use to determine whether a file should be examined. Default: â.fit[s]?bâ

Arguments

FILESÂ¶
    

Optional argument(s)

#### write-indexÂ¶

Write JSON index file for entire directory.
    
    
    astrometadata write-index [OPTIONS] [FILES]...
    

Options

-n, \--hdrnum <hdrnum>Â¶
    

HDU number to read. If the HDU can not be found, a warning is issued but reading is attempted using the primary header. The primary header is always read and merged with this header. Negative number (the default) indicates that the second header will be merged if the FITS file supports extended FITS.

-r, \--regex <regex>Â¶
    

When looking in a directory, regular expression to use to determine whether a file should be examined. Default: â.fit[s]?bâ

-c, \--content <content>Â¶
    

Content to store in JSON file. Options are: âtranslatedâ stores translated metadata in the file; âmetadataâ stores raw FITS headers in the file.

Options:
    

translated | metadata

-o, \--outpath <outpath>Â¶
    

If given, write a single index with all information in specified location. Default is to write one index per directory where files are located.

Arguments

FILESÂ¶
    

Optional argument(s)

#### write-sidecarÂ¶

Write JSON sidecar files alongside each data file.
    
    
    astrometadata write-sidecar [OPTIONS] [FILES]...
    

Options

-n, \--hdrnum <hdrnum>Â¶
    

HDU number to read. If the HDU can not be found, a warning is issued but reading is attempted using the primary header. The primary header is always read and merged with this header. Negative number (the default) indicates that the second header will be merged if the FITS file supports extended FITS.

-r, \--regex <regex>Â¶
    

When looking in a directory, regular expression to use to determine whether a file should be examined. Default: â.fit[s]?bâ

-c, \--content <content>Â¶
    

Content to store in JSON file. Options are: âtranslatedâ stores translated metadata in the file; âmetadataâ stores raw FITS headers in the file.

Options:
    

translated | metadata

Arguments

FILESÂ¶
    

Optional argument(s)

## Python API referenceÂ¶

### astro_metadata_translator PackageÂ¶

#### FunctionsÂ¶

`cache_translation`(func[,Â method])

Cache the result of a translation method.  
  
`fix_header`(header[,Â search_path,Â ...])

Update, in place, the supplied header with known corrections.  
  
`makeObservationInfo`(*[,Â extensions])

Construct an `ObservationInfo` from the supplied parameters.  
  
`merge_headers`(headers[,Â mode,Â sort,Â first,Â last])

Merge multiple headers into a single dict.  
  
#### ClassesÂ¶

`DecamTranslator`(header[,Â filename])

Metadata translator for DECam standard headers.  
  
`FitsTranslator`(header[,Â filename])

Metadata translator for FITS standard headers.  
  
`HscTranslator`(header[,Â filename])

Metadata translator for HSC standard headers.  
  
`MegaPrimeTranslator`(header[,Â filename])

Metadata translator for CFHT MegaPrime standard headers.  
  
`MetadataTranslator`(header[,Â filename])

Per-instrument metadata translation support.  
  
`ObservationGroup`(members[,Â ...])

A collection of `ObservationInfo` headers.  
  
`ObservationInfo`(header[,Â filename,Â ...])

Standardized representation of an instrument header for a single exposure observation.  
  
`PropertyDefinition`(doc,Â str_type,Â py_type[,Â ...])

Definition of an instrumental property.  
  
`SdssTranslator`(header[,Â filename])

Metadata translator for SDSS standard headers.  
  
`StubTranslator`(header[,Â filename])

Translator where all the translations are stubbed out and issue warnings.  
  
`SubaruTranslator`(header[,Â filename])

Metadata translator for Subaru telescope headers.  
  
`SuprimeCamTranslator`(header[,Â filename])

Metadata translator for HSC standard headers.  
  
#### Class Inheritance DiagramÂ¶

Inheritance diagram of astro_metadata_translator.translators.decam.DecamTranslator, astro_metadata_translator.translators.fits.FitsTranslator, astro_metadata_translator.translators.hsc.HscTranslator, astro_metadata_translator.translators.megaprime.MegaPrimeTranslator, astro_metadata_translator.translator.MetadataTranslator, astro_metadata_translator.observationGroup.ObservationGroup, astro_metadata_translator.observationInfo.ObservationInfo, astro_metadata_translator.properties.PropertyDefinition, astro_metadata_translator.translators.sdss.SdssTranslator, astro_metadata_translator.translator.StubTranslator, astro_metadata_translator.translators.subaru.SubaruTranslator, astro_metadata_translator.translators.suprimecam.SuprimeCamTranslator

### astro_metadata_translator.indexing ModuleÂ¶

Functions to support file indexing.

#### FunctionsÂ¶

`read_index`()

Read an index file.  
  
`read_sidecar`(path)

Read a metadata sidecar file.  
  
`calculate_index`(headers,Â content_mode)

Calculate an index data structure from the supplied headers.  
  
`index_files`(files,Â root,Â hdrnum,Â ...[,Â ...])

Create an index from the supplied files.  
  
`process_index_data`()

Process the content read from a JSON index file.  
  
`process_sidecar_data`()

Process the content read from a JSON sidecar file.  
  
### astro_metadata_translator.file_helpers ModuleÂ¶

Support functions for script implementations.

These functions should not be treated as part of the public API.

#### FunctionsÂ¶

`find_files`(files,Â regex)

Find files for processing.  
  
`read_basic_metadata_from_file`(file,Â hdrnum)

Read a raw header from a file, merging if necessary.  
  
`read_file_info`(file,Â hdrnum[,Â print_trace,Â ...])

Read information from file.  
  
### On this page

  * astro_metadata_translator
    * Project info
    * Command Line Utilities
      * astrometadata
        * dump
        * translate
        * write-index
        * write-sidecar
    * Python API reference
      * astro_metadata_translator Package
        * Functions
        * Classes
        * Class Inheritance Diagram
      * astro_metadata_translator.indexing Module
        * Functions
      * astro_metadata_translator.file_helpers Module
        * Functions



Back to Top

Last built Jun 04, 2024. 

Created using Sphinx 6.2.1. Page design is based on Astropy's bootstrap-astropy theme in astropy-helpers.   
LSST documentation is proudly served through the Fastly CDN. 

© Copyright 2015-2024 LSST contributors.  


Financial support for LSST comes from the National Science Foundation (NSF) through Cooperative Agreement No. 1258333, the Department of Energy (DOE) Office of Science under Contract No. DE-AC02-76SF00515, and private funding raised by the LSST Corporation. The NSF-funded LSST Project Office for construction was established as an operating center under management of the Association of Universities for Research in Astronomy (AURA). The DOE-funded effort to build the LSST camera is managed by the SLAC National Accelerator Laboratory (SLAC). 
