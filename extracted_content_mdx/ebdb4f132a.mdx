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

lsst-ts  / **ts_fiberspectrograph ** Public

  * Notifications  You must be signed in to change notification settings
  * Fork 0
  * Star  1




Python API to the Avantes fiber spectrograph and the FiberSpectrograph CSC 

### License

GPL-3.0 license 

1 star  0 forks  Branches Tags Activity

Star 

Notifications  You must be signed in to change notification settings

  * Code
  * Issues 0
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



# lsst-ts/ts_fiberspectrograph

This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository.

develop

BranchesTags

Go to file

Code

## Folders and files

NameName

Last commit message

Last commit date  
  
## Latest commit

## History

217 Commits  
  
bin

bin  
  
conda

conda  
  
doc

doc  
  
python/lsst/ts/fiberspectrograph

python/lsst/ts/fiberspectrograph  
  
tests

tests  
  
ups

ups  
  
.gitignore

.gitignore  
  
.ts_pre_commit_config.yaml

.ts_pre_commit_config.yaml  
  
COPYRIGHT

COPYRIGHT  
  
Jenkinsfile

Jenkinsfile  
  
Jenkinsfile.conda

Jenkinsfile.conda  
  
LICENSE

LICENSE  
  
README.md

README.md  
  
pyproject.toml

pyproject.toml  
  
requirements.txt

requirements.txt  
  
setup.py

setup.py  
  
towncrier.toml

towncrier.toml  
  
View all files  
  
## Repository files navigation

  * README
  * License



# ts_fiberspectrograph

Python-based interface for the Avantes fiber spectrograph and a Configurable Commandable SAL Component (CSC) to control it.

Use of this package requires that `libavs.so.0.2.0` be installed in `/usr/local/lib`.

## Non-root access

By default, `libavs` only allows root access to the USB device; this is common for USB devices on Linux. You add a new udev rule to allow non-root access to the user or group of your choice. To allow access to the device (identified by a vendor and product id that can be found with `lsusb`), create this file:
    
    
    /etc/udev/rules.d/30-avantes-spec-usb.rules
    

containing this single line, setting GROUP to the group you want to grant access to, adding the owner should not be necessary except it appears to be required in order to set the uid correctly.
    
    
    SUBSYSTEM=="usb", ATTR{idVendor}=="1992", ATTR{idProduct}=="0667", ACTION=="add", GROUP="saluser", OWNER="saluser", MODE="0664"
    

and then reload the udev rules:
    
    
    sudo udevadm control --reload-rules && udevadm trigger
    

That should make the device usable by anyone in that specified GROUP, however, the device may need to be unplugged and replugged.

A useful test that the above rule actually triggers when the device is plugged in (i.e. checking for typos) is to run this command (possibly changing the device identifier number at the end to match where your device is attached: use `lsusb` to find that) and look for the above rule in the output:
    
    
    udevadm test /devices/pci0000:00/0000:00:14.0/usb1/1-4
    

You can also try running `udevadm monitor --udev` and plugging and un-plugging the device, but I found this not to be as informative as the above `udevadm test` command was.

One can check that the permissions are correct by looking at the permissions of the device. Note that the first value after usb represents the bus, whereas the second indicates the device, which may need to be changed from the example below:
    
    
    ls -ltr /dev/bus/usb/001/004
    

The proper output should be:
    
    
    crw-rw-r--. 1 saluser saluser 189, 3 Nov 15 03:01 /dev/bus/usb/001/004
    

Note that if the new rule has not been applied, running the udevadm utest command using sudo may as it appears to modify the owner and group help.

## About

Python API to the Avantes fiber spectrograph and the FiberSpectrograph CSC 

### Resources

Readme 

### License

GPL-3.0 license 

Activity

Custom properties

### Stars

**1** star 

### Watchers

**5** watching 

### Forks

**0** forks 

Report repository 

##  Releases 

19 tags

##  Packages 0

No packages published   


##  Contributors 10

  *   *   *   *   *   *   *   *   *   * 


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
