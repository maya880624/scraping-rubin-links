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

update DP03_04a to use sbpy 

Browse files Browse the repository at this point in the history

  * Loading branch information



galaxyumi committed Jan 29, 2024

1 parent 21c439c commit 02eac9e

Showing **1 changed file** with **38 additions** and **189 deletions**. 

  * Whitespace
  * Ignore whitespace



  * Split
  * Unified



##  There are no files selected for viewing 

227 changes: 38 additions & 189 deletions  227  DP03_04a_Introduction_to_Phase_Curves.ipynb

Show comments 

View file  Edit file  Delete file 

This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters. Learn more about bidirectional Unicode characters

Show hidden characters 

Original file line number Diff line number Diff line change  
Expand Up @@ -9,7 +9,7 @@  
"<br>\n",  
"<b>Phase Curve of Solar System Objects</b> <br>\n",  
"Contact authors: Christina Williams and Yumi Choi<br>\n",  
"Last verified to run: 2023-11-29 <br>\n",  
"Last verified to run: 2024-01-29 <br>\n",  
"LSST Science Piplines version: Weekly 2023_47 <br>\n",  
"Container Size: medium <br>\n",  
"Targeted learning level: intermediate <br>"  
Expand Down Expand Up @@ -53,7 +53,7 @@  
"metadata": {},  
"source": [  
"**Credit:**\n",  
"Inspired by a jupyter notebook developed by Queen's University Belfast Planet Lab (including Brian Rogers, Niall McElroy, and Meg Schwamb). Standalone functions for phase curve computing were developed by Pedro Bernardinelli. References: <a href=\"https://ui.adsabs.harvard.edu/abs/2010Icar..209..542M/abstract\">Muinonen et al. (2010)</a> and <a href=\"http://astronotes.co.uk/blog/2018/05/28/determining-the-h-g-parameters-of-atlas-asteroid-phase-curves.html\">David Young's webpage.</a> Please consider acknowledging them if this notebook is used for the preparation of journal articles, software releases, or other notebooks."  
"Inspired by a jupyter notebook developed by Queen's University Belfast Planet Lab (including Brian Rogers, Niall McElroy, and Meg Schwamb). References: <a href=\"https://ui.adsabs.harvard.edu/abs/2010Icar..209..542M/abstract\">Muinonen et al. (2010)</a> and <a href=\"http://astronotes.co.uk/blog/2018/05/28/determining-the-h-g-parameters-of-atlas-asteroid-phase-curves.html\">David Young's webpage.</a> Please consider acknowledging them if this notebook is used for the preparation of journal articles, software releases, or other notebooks."  
]  
},  
{  
Expand Down Expand Up @@ -103,7 +103,7 @@  
"id": "e3eaef36-ed53-450e-a3d6-5a2573469c50",  
"metadata": {},  
"source": [  
"In order to reveal the intrinsic properties of the asteroid (such as its surface properties and albedo, which helps determine its class of solar system body) we first must turn apparent magnitudes as a function of time (what is measured by LSST data) into \"reduced magnitude\", which takes into account the relative distances between the asteroid and the Sun/Earth (heliocentric/topocentric distances) at each observation. Reduced magnitude is normalized such that it is the brightness of an asteroid as if it is observed at 1 astronomical unit (au) from both the Sun and the Earth (i.e. unit topocentric and heliocentric distance). Note that rotation curves or complex geometry of solar system objects are not included in DP0.3 simulations. Thus, any changes over time in an object’s apparent magnitude are due only to changes in its distance and phase angle. Phase curves can be constructed for each filter.\n",  
"In order to reveal the intrinsic properties of the asteroid (such as its surface properties and albedo, which helps determine its class of solar system body), we first must turn apparent magnitudes as a function of time (what is measured by LSST data) into \"reduced magnitude\", which takes into account the relative distances between the asteroid and the Sun/Earth (heliocentric/topocentric distances) at each observation. Reduced magnitude is normalized such that it is the brightness of an asteroid as if it is observed at 1 astronomical unit (au) from both the Sun and the Earth (i.e. unit topocentric and heliocentric distance). Note that rotation curves or complex geometry of solar system objects are not included in DP0.3 simulations. Thus, any changes over time in an object’s apparent magnitude are due only to changes in its distance and phase angle. Phase curves can be constructed for each filter.\n",  
"\n",  
"Modeling the phase curve (reduced magnitude $H(α)$ as a function of phase angle $α$) enables measurement of the absolute magnitude, $H$, defined as the brightness at 0 phase angle. The functional form can depend on the data quality and type of object targeted. In this tutorial, we will mention three functional forms that are relevant for understanding the DP0.3 data products. These are the `HG_model`, `HG1G2_model`, and `HG12_model`. The `HG_model` is the simplest model (see [Bowell et al. 1989](https://ui.adsabs.harvard.edu/abs/1989aste.conf..524B/abstract)), and has the form:\n",  
"\n",  
Expand Down Expand Up @@ -140,7 +140,9 @@  
"\n",  
"The `lsst.rsp` package provides access to the Table Access Protocol (TAP) service for queries to the DP0 catalogs.\n",  
"\n",  
"The [seaborn](https://seaborn.pydata.org/) package provides statistical data visualization with aesthetic and informative graphics.\n"  
"The [seaborn](https://seaborn.pydata.org/) package provides statistical data visualization with aesthetic and informative graphics.\n",  
"\n",  
"The [sbpy](https://sbpy.org) package is an `Astropy` affiliated package for small-body planetary astronomy."  
]  
},  
{  
Expand All @@ -156,6 +158,7 @@  
"from scipy.interpolate import CubicSpline\n",  
"import matplotlib.pyplot as plt\n",  
"import seaborn as sns\n",  
"from sbpy.photometry import HG12\n",  
"\n",  
"from lsst.rsp import get_tap_service"  
]  
Expand Down Expand Up @@ -271,143 +274,6 @@  
" return q / (1.0 - e)"  
]  
},  
{  
"cell_type": "markdown",  
"id": "92f0179b-c825-4638-b53e-a2ba58c57b2d",  
"metadata": {},  
"source": [  
"The constants used to define the basis functions are pre-defined below with values taken from `sbpy` (https://sbpy.org). We will also initialize the basis functions $Φ_n$ as cubic splines for when we evaluate them later. "  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "4dd93174-a1a4-471a-9732-67e1b590b99c",  
"metadata": {  
"tags": []  
},  
"outputs": [],  
"source": [  
"alpha_12 = np.deg2rad([7.5, 30., 60, 90, 120, 150])\n",  
"\n",  
"phi_1_sp = [7.5e-1, 3.3486016e-1, 1.3410560e-1, 5.1104756e-2, 2.1465687e-2,\n",  
" 3.6396989e-3]\n",  
"phi_1_derivs = [-1.9098593, -9.1328612e-2]\n",  
"\n",  
"phi_2_sp = [9.25e-1, 6.2884169e-1, 3.1755495e-1, 1.2716367e-1, 2.2373903e-2,\n",  
" 1.6505689e-4]\n",  
"phi_2_derivs = [-5.7295780e-1, -8.6573138e-8]\n",  
"\n",  
"alpha_3 = np.deg2rad([0.0, 0.3, 1., 2., 4., 8., 12., 20., 30.])\n",  
"\n",  
"phi_3_sp = [1., 8.3381185e-1, 5.7735424e-1, 4.2144772e-1, 2.3174230e-1,\n",  
" 1.0348178e-1, 6.1733473e-2, 1.6107006e-2, 0.]\n",  
"phi_3_derivs = [-1.0630097, 0]\n",  
"\n",  
"phi_1 = CubicSpline(alpha_12, phi_1_sp,\n",  
" bc_type=((1, phi_1_derivs[0]), (1, phi_1_derivs[1])))\n",  
"phi_2 = CubicSpline(alpha_12, phi_2_sp,\n",  
" bc_type=((1, phi_2_derivs[0]), (1, phi_2_derivs[1])))\n",  
"phi_3 = CubicSpline(alpha_3, phi_3_sp,\n",  
" bc_type=((1, phi_3_derivs[0]), (1, phi_3_derivs[1])))"  
]  
},  
{  
"cell_type": "markdown",  
"id": "02f3510d-e484-46e7-b7f9-5e96b803770d",  
"metadata": {},  
"source": [  
"Define a function to compute `HG1G2_model` phase curve for a given set of parameters. For this parametrization, the phase function becomes linear for $\\\alpha$ < 7.5 degrees, so a mask is added in order to exclude regions where the non-linear terms dominate (see Table 3 of [Muinonen et al. 2010](https://ui.adsabs.harvard.edu/abs/2010Icar..209..542M/abstract)).\n"  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "8b210c8b-7bc4-4fd9-8853-6719913d0500",  
"metadata": {  
"tags": []  
},  
"outputs": [],  
"source": [  
"def HG1G2_model(phase, params):\n",  
" \"\"\"\n",  
" Compute HG1G2 model phase curve for a given set\n",  
" of parameters. This is a 3-parameter model, which works best\n",  
" when sufficiently long phaseangle coverage is available.\n",  
"\n",  
" Parameters\n",  
" \----------\n",  
" phase: ndarray\n",  
" phase angle in radians\n",  
" params: list\n",  
" phase curve parameters [H, G1, G2]\n",  
"\n",  
" Returns\n",  
" \-------\n",  
" computed reduced magnitude: ndarray\n",  
" \"\"\"\n",  
"\n",  
" phi_1_ev = phi_1(phase)\n",  
" phi_2_ev = phi_2(phase)\n",  
" phi_3_ev = phi_3(phase)\n",  
"\n",  
" msk = phase < 7.5 * np.pi/180\n",  
"\n",  
" phi_1_ev[msk] = 1-6 * phase[msk]/np.pi\n",  
" phi_2_ev[msk] = 1-9 * phase[msk]/(5 * np.pi)\n",  
"\n",  
" phi_3_ev[phase > np.pi/6] = 0\n",  
"\n",  
" return params[0] - 2.5 * np.log10(params[1] * phi_1_ev\n",  
" \+ params[2] * phi_2_ev\n",  
" \+ (1-params[1]-params[2]) * phi_3_ev)"  
]  
},  
{  
"cell_type": "markdown",  
"id": "5542a4d4-fa19-4ff4-b1e7-caccdad8083c",  
"metadata": {},  
"source": [  
"Define a function to compute `HG12_model` phase curve for a given set of parameters."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "c70dce96-bc70-4a19-943b-c02dd1afd531",  
"metadata": {  
"tags": []  
},  
"outputs": [],  
"source": [  
"def HG12_model(phase, params):\n",  
" \"\"\"\n",  
" Compute HG12 model phase curve for a given set\n",  
" of parameters. This is a 2-parameter, simplified version\n",  
" of HG1G2 model, which is useful when phaseangle coverage is shorter.\n",  
"\n",  
" Parameters\n",  
" \----------\n",  
" phase: ndarray\n",  
" phase angle in radians\n",  
" params: list\n",  
" phase curve parameters [H, G12]\n",  
"\n",  
" Returns\n",  
" \-------\n",  
" computed reduced magnitude: ndarray\n",  
" \"\"\"\n",  
"\n",  
" if params[1] >= 0.2:\n",  
" G1 = +0.9529*params[1] + 0.02162\n",  
" G2 = -0.6125*params[1] + 0.5572\n",  
" else:\n",  
" G1 = +0.7527*params[1] + 0.06164\n",  
" G2 = -0.9612*params[1] + 0.6270\n",  
"\n",  
" return HG1G2_model(phase, [params[0], G1, G2])"  
]  
},  
{  
"cell_type": "markdown",  
"id": "ec51ac0b",  
Expand Down Expand Up @@ -583,7 +449,7 @@  
"source": [  
"### 2.4 Identify individual mock observations of the solar system bodies in DP0.3 DiaSource and SSSource catalogs \n",  
"\n",  
"While there are unique solar system objects in the `SSObject` and `MPCORB` tables, these objects will be observed many times over the full LSST survey. Individual observations of each unique object in each filter are recorded in the `SSSource` and `diaSource` tables. Below, we query these tables to obtain all of the individual observed time series data (we call `indivObs`) for the solar system bodies that have >2000 observations as selected above. This query usually takes ~30 sec."  
"While there are unique solar system objects in the `SSObject` and `MPCORB` tables, these objects will be observed many times over the full LSST survey. Individual observations of each unique object in each filter are recorded in the `SSSource` and `diaSource` tables. Below, we query these tables to obtain all of the individual observed time series data (we call `indivObs`) for the solar system bodies that have >2000 observations as selected above."  
]  
},  
{  
Expand Down Expand Up @@ -684,13 +550,13 @@  
"\n",  
"It is possible to pick an integer number between 0 and `len(uniqueObj[main_belt_2k])-1` for `iObj` below to explore other objects.\n",  
"\n",  
"The function defined in Section 1 for `HG12_model` is also used to visualize the LSST pipeline phase curve fitting (dashed line). This demonstrates how absolute magnitude `H` is determined in the LSST data products."  
"The `HG12_model`-predicted phase curve is also overplotted to visualize the LSST pipeline phase curve fitting (dashed line). This demonstrates how absolute magnitude `H` is determined in the LSST data products."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "3523f9a4-1773-4731-97c8-8d14c1487846",  
"id": "13275b12-39da-44f4-b51b-0dfeefeef3d3",  
"metadata": {  
"tags": []  
},  
Expand All @@ -711,11 +577,11 @@  
" color=filter_colors[ifilt], alpha=0.5)\n",  
"\n",  
" # Plot HG12 model\n",  
" HG12_mag = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj]])\n",  
" HG12_mag = HG12.evaluate(np.deg2rad(phases), \n",  
" uniqueObj[ifilt+'_H'][main_belt_2k][iObj], \n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj])\n",  
" plt.plot(phases, HG12_mag, color=filter_colors[ifilt], linestyle='--',\n",  
" label='HG12 2-parameter model in %s' % ifilt)\n",  
" label='HG12 2-parameter model in %s' % ifilt) \n",  
"\n",  
"\n",  
"plt.xlim(tmp['phaseAngle'].min()-5, tmp['phaseAngle'].max()+5)\n",  
Expand Down Expand Up @@ -756,9 +622,9 @@  
" color=filter_colors[ifilt], alpha=0.5)\n",  
"\n",  
" # Plot HG12 model\n",  
" HG12_mag = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj]])\n",  
" HG12_mag = HG12.evaluate(np.deg2rad(phases), \n",  
" uniqueObj[ifilt+'_H'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj])\n",  
" plt.plot(phases, HG12_mag, color=filter_colors[ifilt], linestyle='--')\n",  
"\n",  
"\n",  
Expand All @@ -783,9 +649,9 @@  
" color=filter_colors[ifilt], alpha=0.5)\n",  
"\n",  
" # Plot HG12 model\n",  
" HG12_mag = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][JT_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][JT_2k][iObj]])\n",  
" HG12_mag = HG12.evaluate(np.deg2rad(phases),\n",  
" uniqueObj[ifilt+'_H'][JT_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][JT_2k][iObj])\n",  
" plt.plot(phases, HG12_mag, color=filter_colors[ifilt], linestyle='--')\n",  
"\n",  
"\n",  
Expand Down Expand Up @@ -864,36 +730,27 @@  
" yerr=tmp['magErr'][idx], fmt='o',\n",  
" color=filter_colors[ifilt], label=ifilt, zorder=10)\n",  
"\n",  
" HG12_mag_sso = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj]\n",  
" ])\n",  
" HG12_mag_sso = HG12.evaluate(np.deg2rad(phases),\n",  
" uniqueObj[ifilt+'_H'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj])\n",  
" plt.plot(phases, HG12_mag_sso, '--', alpha=0.3, color=filter_colors[ifilt])\n",  
"\n",  
" # Compute min/max values in reduced mag at each phase angle\n",  
" p1 = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][main_belt_2k][iObj]\n",  
" \+ 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj]\n",  
" \+ 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj]])\n",  
"\n",  
" p2 = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][main_belt_2k][iObj]\n",  
" \- 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj]\n",  
" \+ 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj]])\n",  
"\n",  
" p3 = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][main_belt_2k][iObj]\n",  
" \+ 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj]\n",  
" \- 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj]])\n",  
"\n",  
" p4 = HG12_model(np.deg2rad(phases),\n",  
" [uniqueObj[ifilt+'_H'][main_belt_2k][iObj]\n",  
" \- 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj]\n",  
" \- 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj]])\n",  
" p1 = HG12.evaluate(np.deg2rad(phases),\n",  
" uniqueObj[ifilt+'_H'][main_belt_2k][iObj] + 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj] + 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj])\n",  
"\n",  
" p2 = HG12.evaluate(np.deg2rad(phases), \n",  
" uniqueObj[ifilt+'_H'][main_belt_2k][iObj] - 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj] + 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj])\n",  
"\n",  
" p3 = HG12.evaluate(np.deg2rad(phases),\n",  
" uniqueObj[ifilt+'_H'][main_belt_2k][iObj] + 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj] - 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj])\n",  
"\n",  
" p4 = HG12.evaluate(np.deg2rad(phases),\n",  
" uniqueObj[ifilt+'_H'][main_belt_2k][iObj] - 3*uniqueObj[ifilt+'_Herr'][main_belt_2k][iObj],\n",  
" uniqueObj[ifilt+'_G12'][main_belt_2k][iObj] - 3*uniqueObj[ifilt+'_G12err'][main_belt_2k][iObj])\n",  
"\n",  
" HG_magHigh = np.maximum(np.maximum(p1, p2), np.maximum(p3, p4))\n",  
" HG_magLow = np.minimum(np.minimum(p1, p2), np.minimum(p3, p4))\n",  
Expand Down Expand Up @@ -1133,14 +990,6 @@  
"\n",  
"1\. Try out the more advanced companion tutorial notebook 04b on explicitly modeling phase curves and comparing with the `HG12` model parameters stored in the DP0.3."  
]  
},  
{  
"cell_type": "code",  
"execution_count": null,  
"id": "1ffb8ec8-2742-4d06-ba88-16f22b001ec2",  
"metadata": {},  
"outputs": [],  
"source": []  
}  
],  
"metadata": {  
Expand Down  
  
Toggle all file notes Toggle all file annotations

###  0 comments on commit `02eac9e`

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
