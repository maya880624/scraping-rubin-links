GitHub - DarkEnergySurvey/descolors: Standard color scheme for plotting DES/DECam filters
Skip to content
Navigation Menu
Toggle navigation
Sign in
Product
Actions
Automate any workflow
Packages
Host and manage packages
Security
Find and fix vulnerabilities
Codespaces
Instant dev environments
GitHub Copilot
Write better code with AI
Code review
Manage code changes
Issues
Plan and track work
Discussions
Collaborate outside of code
Explore
All features
Documentation
GitHub Skills
Blog
Solutions
By size
Enterprise
Teams
Startups
By industry
Healthcare
Financial services
Manufacturing
By use case
CI/CD & Automation
DevOps
DevSecOps
Resources
Topics
AI
DevOps
Security
Software Development
Explore
Learning Pathways
White papers, Ebooks, Webinars
Customer Stories
Partners
Open Source
GitHub Sponsors
Fund open source developers
The ReadME Project
GitHub community articles
Repositories
Topics
Trending
Collections
Enterprise
Enterprise platform
AI-powered developer platform
Available add-ons
Advanced Security
Enterprise-grade security features
GitHub Copilot
Enterprise-grade AI features
Premium Support
Enterprise-grade 24/7 support
Pricing
Search or jump to...
Search code, repositories, users, issues, pull requests...
Search
Clear
Search syntax tips
Provide feedback
We read every piece of feedback, and take your input very seriously.
Include my email address so I can be contacted
Cancel
Submit feedback
Saved searches
Use saved searches to filter your results more quickly
Name
Query
To see all available qualifiers, see our documentation.
Cancel
Create saved search
Sign in
Sign up
Reseting focus
You signed in with another tab or window. Reload to refresh your session.
You signed out in another tab or window. Reload to refresh your session.
You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert
DarkEnergySurvey
/
descolors
Public
Notifications
You must be signed in to change notification settings
Fork
3
Star
2
Standard color scheme for plotting DES/DECam filters
License
MIT license
2
stars
3
forks
Branches
Tags
Activity
Star
Notifications
You must be signed in to change notification settings
Code
Issues
1
Pull requests
0
Actions
Projects
0
Security
Insights
Additional navigation options
Code
Issues
Pull requests
Actions
Projects
Security
Insights
DarkEnergySurvey/descolors
This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.
masterBranchesTagsGo to fileCodeFolders and filesNameNameLast commit messageLast commit dateLatest commit History23 Commitsdescolorsdescolors  examplesexamples  teststests  .gitattributes.gitattributes  .travis.yml.travis.yml  LICENSELICENSE  MANIFEST.inMANIFEST.in  README.mdREADME.md  setup.cfgsetup.cfg  setup.pysetup.py  versioneer.pyversioneer.py  View all filesRepository files navigationREADMEMIT licenseDES Colors
Standard color scheme for DES.
Installation
The easiest way to install is with pip:
pip install descolors
Usage
See the example in des_colors.ipynb.
from descolors import BAND_COLORS
for name,color in BAND_COLORS.items():
print("%s : %s"%(name,color))
Below is a visual representation of the standard pallet for the DES filter bands. The panel on the left shows the appearance for trichromatic individuals, while the right approximates the appearance for individuals who are protanopic (red-green color blind).
About
Standard color scheme for plotting DES/DECam filters
Resources
Readme
License
MIT license
Activity
Custom properties
Stars
2
stars
Watchers
2
watching
Forks
3
forks
Report repository
Releases
1
v0.1.0
Latest
Nov 10, 2017
Packages
0
No packages published
Languages
Python
100.0%
Footer
© 2024 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
You can’t perform that action at this time.