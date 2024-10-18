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

rubin-dp0  / **tutorial-notebooks ** Public

  * Notifications  You must be signed in to change notification settings
  * Fork 16
  * Star  31




  * Code
  * Issues 0
  * Pull requests 2
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



## Commit

Permalink

This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.

small edits 

Browse files Browse the repository at this point in the history

  * Loading branch information



MelissaGraham authored and jeffcarlin committed Jun 13, 2024

1 parent a27b6c5 commit 8d39236

Showing **1 changed file** with **100 additions** and **31 deletions**. 

  * Whitespace
  * Ignore whitespace



  * Split
  * Unified



##  There are no files selected for viewing 

131 changes: 100 additions & 31 deletions  131  DP02_14_Injecting_Synthetic_Sources.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -12,7 +12,7 @@  
"<img align=\"left\" src = https://project.lsst.org/sites/default/files/Rubin-O-Logo_0.png width=250 style=\"padding: 10px\" alt=\"Rubin Observatory logo, a graphical representation of turning stars into data.\">\n",  
"<br>\n",  
"Contact author: Jeff Carlin <br>\n",  
"Last verified to run: 2024-06-10 <br>\n",  
"Last verified to run: 2024-06-12 <br>\n",  
"LSST Science Pipelines version: Weekly 2024_16 <br>\n",  
"Container Size: medium <br>\n",  
"Targeted learning level: advanced <br>"  
Expand Down Expand Up @@ -135,8 +135,26 @@  
"import lsst.geom as geom\n",  
"from lsst.source.injection import ingest_injection_catalog, generate_injection_catalog\n",  
"from lsst.source.injection import VisitInjectConfig, VisitInjectTask\n",  
"from lsst.ip.diffim.subtractImages import AlardLuptonSubtractTask, AlardLuptonSubtractConfig\n",  
"from lsst.ip.diffim.subtractImages import AlardLuptonSubtractTask, AlardLuptonSubtractConfig"  
]  
},  
{  
"cell_type": "markdown",  
"id": "662aa3ce-e9e5-4703-b3e3-15f554c7c325",  
"metadata": {},  
"source": [  
"### 1.2 Define functions and parameters\n",  
"\n",  
"Set `afwDisplay` to use `matplotlib`, and use colorblind-friendly colors."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "8e75e7d7-4af9-4e2f-b25f-08b84d01823a",  
"metadata": {},  
"outputs": [],  
"source": [  
"afwDisplay.setDefaultBackend('matplotlib')\n",  
"plt.style.use('tableau-colorblind10')"  
]  
Expand Down Expand Up @@ -231,15 +249,27 @@  
"tract = 3828\n",  
"where = f\"instrument='LSSTCam-imSim' AND skymap='DC2' AND \\\\\n",  
" tract={tract} AND detector=19 AND band='g'\"\n",  
"\n",  
"calexp_g_DatasetRefs = sorted(list(set(butler.registry.queryDatasets('calexp', where=where))))\n",  
"\n",  
"print(f'Identified {len(calexp_g_DatasetRefs)} calexp DatasetRefs')\n",  
"\n",  
"# This uses the index \"5\" to select an arbitrary dataId.\n",  
"# Change this index to select a different image.\n",  
"print(f'Identified {len(calexp_g_DatasetRefs)} calexp DatasetRefs')"  
]  
},  
{  
"cell_type": "markdown",  
"id": "217d700a-de66-488b-bdd6-ae90728993fb",  
"metadata": {},  
"source": [  
"Use index \"5\" to select an arbitrary `dataId`.\n",  
"Change this index to another integer to select a different image."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "12a63560-6f9c-4c21-954e-2163b8a6be43",  
"metadata": {},  
"outputs": [],  
"source": [  
"dataId_g = calexp_g_DatasetRefs[5].dataId\n",  
"\n",  
"print(f\"{dataId_g = }\")"  
]  
},  
Expand Down Expand Up @@ -268,7 +298,9 @@  
"source": [  
"#### 2.2.2 Retrieve additional information about the image\n",  
"\n",  
"To generate synthetic sources to be injected into the image, you will need to know the coordinates of its bounding box. Retrieve the image's WCS and bounding box, and print its central coordinate to the screen:"  
"To generate synthetic sources to be injected into the image, the coordinates of its bounding box are necessary.\n",  
"\n",  
"Retrieve the image's WCS and bounding box, and print its central coordinate to the screen:"  
]  
},  
{  
Expand Down Expand Up @@ -296,7 +328,9 @@  
"source": [  
"#### 2.2.3 Figure out how large the image is on the sky\n",  
"\n",  
"Note that above the bounding box is roughly 4000 x 4000 pixels. Use the `bbox.getDimensions` and `wcs.getPixelScale` methods to estimate how large this image is in sky coordinates:"  
"Note that above the bounding box is roughly 4000 x 4000 pixels.\n",  
"\n",  
"Use the `bbox.getDimensions` and `wcs.getPixelScale` methods to estimate how large this image is in sky coordinates."  
]  
},  
{  
Expand Down Expand Up @@ -333,7 +367,7 @@  
"metadata": {},  
"outputs": [],  
"source": [  
"inject_size = 0.2/2 # in degrees"  
"inject_size = 0.2/2"  
]  
},  
{  
Expand Down Expand Up @@ -475,7 +509,7 @@  
"source": [  
"#### 3.2.1 Create an entry in the injection catalog for the postage stamp image\n",  
"\n",  
"Add a postage stamp entry into the injection catalog, using `vstack` to add an astropy `Table` containing a single row. You must specify its position, magnitude, and \"source_type = Stamp,\" in addition to the filename of the image to inject. (It is OK to leave unnecessary columns empty.)"  
"Add a postage stamp entry into the injection catalog, using `vstack` to add an astropy `Table` containing a single row. Specify its position, magnitude, and \"source_type = Stamp,\" in addition to the filename of the image to inject. (It is OK to leave unnecessary columns empty.)"  
]  
},  
{  
Expand Down Expand Up @@ -524,9 +558,11 @@  
"source": [  
"#### 3.2.2 Create a rotated version of the stamp image, and add an entry for it into the injection catalog\n",  
"\n",  
"If you would like to apply a rotation to the postage stamp image before injecting it into the `calexp`, the \"rotateExposure\" function created above will do that for you. Here we will read the image, apply a rotation to it, then write it out as a new image. Then we will follow the same steps as the previous section to add it to the injection catalog.\n",  
"To apply a rotation to the postage stamp image before injecting it into the `calexp`, use the `rotateExposure` function created above.\n",  
"\n",  
"The process is to read the image, apply a rotation to it, write it out as a new image, and then follow the same steps as the previous section to add it to the injection catalog.\n",  
"\n",  
"First, read the postage stamp image using the `afwImage` package (it's OK to ignore the warning that will pop up):"  
"First, read the postage stamp image using the `afwImage` package. It's OK to ignore the warning about an expected extension type that will pop up."  
]  
},  
{  
Expand Down Expand Up @@ -616,7 +652,7 @@  
"id": "f3e476fa-b40e-4d3b-a9c8-f0d0a05f99c1",  
"metadata": {},  
"source": [  
"Write the rotated stamp to an output file in your home directory:"  
"Write the rotated stamp to an output file in the home directory."  
]  
},  
{  
Expand All @@ -635,7 +671,7 @@  
"id": "b5987196-89b5-4b10-91c4-445b86c4275f",  
"metadata": {},  
"source": [  
"Add an entry to the injection catalog for the rotated stamp:"  
"Add an entry to the injection catalog for the rotated stamp."  
]  
},  
{  
Expand Down Expand Up @@ -683,28 +719,61 @@  
"### 3.3 Ingest the synthetic source catalog into a butler collection\n",  
"\n",  
"#### 3.3.1 Register the source injection collection\n",  
"The input `inject_cat` will be ingested into a collection called `u/{user}/test_injection_inputs` (where \"user\" will be your username) in the butler repository. You must register this collection for subsequent use.\n",  
"\n",  
"First, instantiate a writeable `butler`. Butlers are instantiated in read-only mode by default. By setting the argument `writeable` to `True`, a butler can also be made to be writeable.\n",  
"The input `inject_cat` will be ingested into a collection called `u/{user}/test_injection_inputs` (where \"user\" will be the account username) in the butler repository. \n",  
"\n",  
"> Warning: take care when working with a writeable butler, as data on-disk has the potential to be permanently removed or corrupted.\n",  
"This demonstrates an alternate way to obtain a username (compared to the use of `getpass` demonstrated above)."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "5aa99d39-9f1f-4a98-af42-05d1010e5e8e",  
"metadata": {},  
"outputs": [],  
"source": [  
"user = os.getenv(\"USER\")"  
]  
},  
{  
"cell_type": "markdown",  
"id": "8a0a1036-312a-479b-b15b-908a7643eab0",  
"metadata": {},  
"source": [  
"Define the name of the collection.\n",  
"\n",  
"_Note: If you attempt to inject synthetic sources into a collection that already exists, the task will complain that the output data already exist on disk. The name you assign to your collection in `INJECTION_CATALOG_COLLECTION` in the following cell must not have been used before. (This means that if you have run source injection already, you must change the output collection name before running again.)_"  
"> Notice: If an attempt is made to inject synthetic sources into a collection that already exists, the task will complain that the output data already exist on disk. The name assigned to the collection in `INJECTION_CATALOG_COLLECTION` in the following cell must not have been used before. If it has been, choose a new name (or add a unique string, such as a timestamp like `_20240610_1600`, to the end of it) for each rerun."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "172a6e88-d605-438f-9fd0-4e39185be6cc",  
"id": "037b2281-dd1e-4c4d-a4de-0213c9bb9a92",  
"metadata": {},  
"outputs": [],  
"source": [  
"# Get username.\n",  
"user = os.getenv(\"USER\")\n",  
"INJECTION_CATALOG_COLLECTION = f\"u/{user}/test_injection_inputs_2\""  
]  
},  
{  
"cell_type": "markdown",  
"id": "1cb5c620-44da-4c72-be7a-cb1cf0e45b4d",  
"metadata": {},  
"source": [  
"The collection must be registered in order to use it.\n",  
"\n",  
"INJECTION_CATALOG_COLLECTION = f\"u/{user}/test_injection_inputs\"\n",  
"Instantiate a writeable `butler`. Butlers are instantiated in read-only mode by default. By setting the argument `writeable` to `True`, a butler can also be made to be writeable.\n",  
"\n",  
"# Instantiate a writeable butler.\n",  
"> Warning: take care when working with a writeable butler, as data on-disk has the potential to be permanently removed or corrupted."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "172a6e88-d605-438f-9fd0-4e39185be6cc",  
"metadata": {},  
"outputs": [],  
"source": [  
"writeable_butler = Butler(butler_config, writeable=True)"  
]  
},  
Expand Down Expand Up @@ -778,7 +847,6 @@  
"metadata": {},  
"outputs": [],  
"source": [  
"# Load input injection catalogs.\n",  
"injection_refs = butler.registry.queryDatasets(\n",  
" \"injection_catalog\",\n",  
" band=\"g\",\n",  
Expand Down Expand Up @@ -949,7 +1017,7 @@  
"\n",  
"The first two lines below load the default configuration for the `AlardLuptonSubtract` task, and then initialize the task with that configuration. The task requires (1) a template exposure, (2) the science exposure, and (3) the catalog of sources from the science exposure.\n",  
"\n",  
"Load the source catalog (`src`) and run the task:"  
"Load the source catalog (`src`) and run the task."  
]  
},  
{  
Expand All @@ -975,7 +1043,10 @@  
"source": [  
"#### 4.4.3 Compare the original and the difference image\n",  
"\n",  
"Plot the original `calexp`, the injected image, and the difference image side by side:"  
"Plot the original `calexp`, the injected image, and the difference image side by side.\n",  
"\n",  
"Set `xmin`, `xmax`, `ymin`, and `ymax` to zoom in on an arbitrary section of the image.\n",  
"Change the values to zoom in on a different region."  
]  
},  
{  
Expand All @@ -985,8 +1056,6 @@  
"metadata": {},  
"outputs": [],  
"source": [  
"# Zoom in on an arbitrary section of the image.\n",  
"# Change these coordinates to see a different region.\n",  
"xmin, xmax = 500, 2000\n",  
"ymin, ymax = 1000, 2500\n",  
"\n",  
Expand Down  
  
Toggle all file notes Toggle all file annotations

###  0 comments on commit `8d39236`

Please sign in to comment. 

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
