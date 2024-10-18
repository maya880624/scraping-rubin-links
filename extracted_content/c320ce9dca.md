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

ready for w_2024_04 

Browse files Browse the repository at this point in the history

  * Loading branch information



MelissaGraham committed Jan 31, 2024

1 parent ff9de9d commit b23a33f

Show file tree

Hide file tree

Showing **5 changed files** with **15 additions** and **31 deletions**. 

  * Whitespace
  * Ignore whitespace



  * Split
  * Unified



  * DP03_01_Introduction_to_DP03.ipynb DP03_01_Introduction_to_DP03.ipynb 
  * DP03_02_Main_Belt_Asteroids.ipynb DP03_02_Main_Belt_Asteroids.ipynb 
  * DP03_03_Trans-Neptunian_Objects.ipynb DP03_03_Trans-Neptunian_Objects.ipynb 
  * DP03_04a_Introduction_to_Phase_Curves.ipynb DP03_04a_Introduction_to_Phase_Curves.ipynb 
  * DP03_04b_Advanced_Phase_Curve_Modeling.ipynb DP03_04b_Advanced_Phase_Curve_Modeling.ipynb 



##  There are no files selected for viewing 

14 changes: 3 additions & 11 deletions  14  DP03_01_Introduction_to_DP03.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -8,8 +8,8 @@  
"<img align=\"left\" src = https://project.lsst.org/sites/default/files/Rubin-O-Logo_0.png width=250 style=\"padding: 10px\"> \n",  
"<br><b>Introduction to the DP0.3</b> <br>\n",  
"Contact author(s): Bob Abel, Douglas Tucker, and Melissa Graham<br>\n",  
"Last verified to run: 2023-11-29 <br>\n",  
"LSST Science Piplines version: Weekly 2023_47 <br>\n",  
"Last verified to run: 2024-01-31 <br>\n",  
"LSST Science Piplines version: Weekly 2024_04 <br>\n",  
"Container size: medium <br>\n",  
"Targeted learning level: beginner <br>"  
]  
Expand Down Expand Up @@ -1237,14 +1237,6 @@  
"Note that the only simulated cause of photometric changes in DP0.3 objects is the distance from Earth and the phase curve.\n",  
"Correcting for distance, and the applications phase curves, are covered in another tutorial."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "9c039891-fa37-4795-8139-faa137382810",  
"metadata": {},  
"outputs": [],  
"source": []  
}  
],  
"metadata": {  
Expand All @@ -1263,7 +1255,7 @@  
"name": "python",  
"nbconvert_exporter": "python",  
"pygments_lexer": "ipython3",  
"version": "3.11.4"  
"version": "3.11.7"  
}  
},  
"nbformat": 4,  
Expand Down  
  
14 changes: 3 additions & 11 deletions  14  DP03_02_Main_Belt_Asteroids.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -8,8 +8,8 @@  
"<img align=\"left\" src = https://project.lsst.org/sites/default/files/Rubin-O-Logo_0.png width=250 style=\"padding: 10px\"> \n",  
"<br><b>Properties of Main Belt Asteroids in DP0.3</b> <br>\n",  
"Contact author(s): Jeff Carlin <br>\n",  
"Last verified to run: 2023-12-07 <br>\n",  
"LSST Science Pipelines version: Weekly 2023_47 <br>\n",  
"Last verified to run: 2024-01-31 <br>\n",  
"LSST Science Pipelines version: Weekly 2024_04 <br>\n",  
"Container Size: medium <br>\n",  
"Targeted learning level: beginner <br>"  
]  
Expand Down Expand Up @@ -1010,14 +1010,6 @@  
"\n",  
"3\. Compare properties of Main Belt asteroids with those elsewhere in the Solar System."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "48fe925c-5979-4247-8b27-1356b5324253",  
"metadata": {},  
"outputs": [],  
"source": []  
}  
],  
"metadata": {  
Expand All @@ -1036,7 +1028,7 @@  
"name": "python",  
"nbconvert_exporter": "python",  
"pygments_lexer": "ipython3",  
"version": "3.11.4"  
"version": "3.11.7"  
},  
"toc-autonumbering": false  
},  
Expand Down  
  
6 changes: 3 additions & 3 deletions  6  DP03_03_Trans-Neptunian_Objects.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -17,8 +17,8 @@  
"<img align=\"left\" src = https://project.lsst.org/sites/default/files/Rubin-O-Logo_0.png width=250 style=\"padding: 10px\"> \n",  
"<br><b>Trans-Neptunian Objects (TNOs)</b> <br>\n",  
"Contact author(s): Andrés A. Plazas Malagón<br>\n",  
"Last verified to run: 2023-12-12 <br>\n",  
"LSST Science Pipelines version: Weekly 2023_47 <br>\n",  
"Last verified to run: 2024-01-31 <br>\n",  
"LSST Science Pipelines version: Weekly 2024_04 <br>\n",  
"Container Size: medium <br>\n",  
"Targeted learning level: intermediate<br>"  
]  
Expand Down Expand Up @@ -1829,7 +1829,7 @@  
"name": "python",  
"nbconvert_exporter": "python",  
"pygments_lexer": "ipython3",  
"version": "3.11.4"  
"version": "3.11.7"  
}  
},  
"nbformat": 4,  
Expand Down  
  
6 changes: 3 additions & 3 deletions  6  DP03_04a_Introduction_to_Phase_Curves.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -9,8 +9,8 @@  
"<br>\n",  
"<b>Phase Curve of Solar System Objects</b> <br>\n",  
"Contact authors: Christina Williams and Yumi Choi<br>\n",  
"Last verified to run: 2024-01-29 <br>\n",  
"LSST Science Piplines version: Weekly 2023_47 <br>\n",  
"Last verified to run: 2024-01-31 <br>\n",  
"LSST Science Piplines version: Weekly 2024_04 <br>\n",  
"Container Size: medium <br>\n",  
"Targeted learning level: intermediate <br>"  
]  
Expand Down Expand Up @@ -1008,7 +1008,7 @@  
"name": "python",  
"nbconvert_exporter": "python",  
"pygments_lexer": "ipython3",  
"version": "3.11.4"  
"version": "3.11.7"  
},  
"toc-autonumbering": false  
},  
Expand Down  
  
6 changes: 3 additions & 3 deletions  6  DP03_04b_Advanced_Phase_Curve_Modeling.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -9,8 +9,8 @@  
"<br>\n",  
"<b>Phase Curve of Solar System Objects</b> <br>\n",  
"Contact authors: Yumi Choi and Christina Williams<br>\n",  
"Last verified to run: 2024-01-29 <br>\n",  
"LSST Science Piplines version: Weekly 2023_47 <br>\n",  
"Last verified to run: 2024-01-31 <br>\n",  
"LSST Science Piplines version: Weekly 2024_04 <br>\n",  
"Container Size: medium <br>\n",  
"Targeted learning level: advanced <br>"  
]  
Expand Down Expand Up @@ -950,7 +950,7 @@  
"name": "python",  
"nbconvert_exporter": "python",  
"pygments_lexer": "ipython3",  
"version": "3.11.4"  
"version": "3.11.7"  
},  
"toc-autonumbering": false  
},  
Expand Down  
  
Toggle all file notes Toggle all file annotations

###  0 comments on commit `b23a33f`

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
