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

Write image to home directory 

Browse files Browse the repository at this point in the history

  * Loading branch information



jeffcarlin committed Jun 13, 2024

1 parent a79fa14 commit a27b6c5

Showing **1 changed file** with **17 additions** and **22 deletions**. 

  * Whitespace
  * Ignore whitespace



  * Split
  * Unified



##  There are no files selected for viewing 

39 changes: 17 additions & 22 deletions  39  DP02_14_Injecting_Synthetic_Sources.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -124,6 +124,7 @@  
"import astropy.units as u\n",  
"from astropy.table import Table, vstack\n",  
"from astropy.coordinates import SkyCoord\n",  
"import getpass\n",  
"\n",  
"import lsst.afw.display as afwDisplay\n",  
"import lsst.afw.geom as afwGeom\n",  
Expand Down Expand Up @@ -491,8 +492,7 @@  
" 'dec': [-36.488],\n",  
" 'source_type': ['Stamp'],\n",  
" 'mag': [14.8],\n",  
" 'stamp': ['PGC_038749_I_g_bbl2011.fits'],\n",  
" 'stamp_prefix': ['data/'],\n",  
" 'stamp': ['data/PGC_038749_I_g_bbl2011.fits'],\n",  
" }\n",  
")"  
]  
Expand Down Expand Up @@ -526,8 +526,6 @@  
"\n",  
"If you would like to apply a rotation to the postage stamp image before injecting it into the `calexp`, the \"rotateExposure\" function created above will do that for you. Here we will read the image, apply a rotation to it, then write it out as a new image. Then we will follow the same steps as the previous section to add it to the injection catalog.\n",  
"\n",  
"_Note: This subsection will not work if you are executing the notebook in the read-only \"~/notebooks/tutorial_notebooks\" directory. To run it, you will need to copy the notebook to a different directory so that you can save the modified image. (You could also just skip Sec. 3.2.2, and everything will run fine.)_\n",  
"\n",  
"First, read the postage stamp image using the `afwImage` package (it's OK to ignore the warning that will pop up):"  
]  
},  
Expand Down Expand Up @@ -618,7 +616,7 @@  
"id": "f3e476fa-b40e-4d3b-a9c8-f0d0a05f99c1",  
"metadata": {},  
"source": [  
"Write the rotated stamp to an output file in the \"data/\" directory:"  
"Write the rotated stamp to an output file in your home directory:"  
]  
},  
{  
Expand All @@ -628,7 +626,8 @@  
"metadata": {},  
"outputs": [],  
"source": [  
"stamp_img_rotated.writeFits('data/stamp_rotated.fits')"  
"home_directory = '/home/' + getpass.getuser() + '/'\n",  
"stamp_img_rotated.writeFits(home_directory+'stamp_rotated.fits')"  
]  
},  
{  
Expand All @@ -653,8 +652,7 @@  
" 'dec': [-36.488],\n",  
" 'source_type': ['Stamp'],\n",  
" 'mag': [14.8],\n",  
" 'stamp': ['stamp_rotated.fits'],\n",  
" 'stamp_prefix': ['data/'],\n",  
" 'stamp': [home_directory+'stamp_rotated.fits'],\n",  
" }\n",  
")"  
]  
Expand All @@ -669,16 +667,6 @@  
"inject_cat = vstack([inject_cat, my_injection_catalog_rotated_stamp])"  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "720d83e7-96a8-4711-889d-d440ac3346af",  
"metadata": {},  
"outputs": [],  
"source": [  
"inject_cat"  
]  
},  
{  
"cell_type": "markdown",  
"id": "0d9960aa-0c91-4752-a5d9-a58b51c16a82",  
Expand Down Expand Up @@ -714,7 +702,7 @@  
"# Get username.\n",  
"user = os.getenv(\"USER\")\n",  
"\n",  
"INJECTION_CATALOG_COLLECTION = f\"u/{user}/test_injection_inputs_10jun2024\"\n",  
"INJECTION_CATALOG_COLLECTION = f\"u/{user}/test_injection_inputs\"\n",  
"\n",  
"# Instantiate a writeable butler.\n",  
"writeable_butler = Butler(butler_config, writeable=True)"  
Expand Down Expand Up @@ -808,7 +796,7 @@  
"source": [  
"### 4.2 Instantiate the injection classes\n",  
"\n",  
"First, instantiate the `VisitInjectConfig` class. The `VisitInjectConfig` class is where configuration of the injection task occurs, allowing for modifications to be made to how the task operates. Here, change the \"stamp_prefix\" configuration option to \"data/\" so that `source_injection` knows to look for the image in the `data/` folder.\n",  
"First, instantiate the `VisitInjectConfig` class. The `VisitInjectConfig` class is where configuration of the injection task occurs, allowing for modifications to be made to how the task operates.\n",  
"\n",  
"Then instantiate the `VisitInjectTask`, using `inject_config` as the configuration argument.\n",  
"\n",  
Expand All @@ -829,7 +817,6 @@  
"outputs": [],  
"source": [  
"inject_config = VisitInjectConfig()\n",  
"inject_config.stamp_prefix = 'data/'\n",  
"\n",  
"inject_task = VisitInjectTask(config=inject_config)"  
]  
Expand Down Expand Up @@ -1034,7 +1021,7 @@  
"id": "3d5af646-bb96-48c1-9343-8979f93fa40d",  
"metadata": {},  
"source": [  
"# 6. Exercises for the learner\n",  
"# 5. Exercises for the learner\n",  
"\n",  
"Further explorations could include:\n",  
"\n",  
Expand All @@ -1043,6 +1030,14 @@  
"3\. Injecting variable objects into multiple calexp images and testing their recoverability.\n",  
"4\. Running detection and measurement tasks from the LSST Science Pipelines to test the recovery and measurement accuracy of injected sources (e.g., following DP0.2 tutorial [Notebook 05: Introduction to Source Detection](https://github.com/rubin-dp0/tutorial-notebooks/blob/main/DP02_05_Introduction_to_Source_Detection.ipynb))."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "098ae337-1e58-409c-88ba-114ca4ba3a1b",  
"metadata": {},  
"outputs": [],  
"source": []  
}  
],  
"metadata": {  
Expand Down  
  
Toggle all file notes Toggle all file annotations

###  0 comments on commit `a27b6c5`

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
