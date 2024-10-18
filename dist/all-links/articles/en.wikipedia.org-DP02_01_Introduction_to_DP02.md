AB magnitude - Wikipedia
Jump to content
Main menu
Main menu
move to sidebar
hide
Navigation
Main pageContentsCurrent eventsRandom articleAbout WikipediaContact usDonate
Contribute
HelpLearn to editCommunity portalRecent changesUpload file
Search
Search
Appearance
Create account
Log in
Personal tools
Create account Log in
Pages for logged out editors learn more
ContributionsTalk
Contents
move to sidebar
hide
(Top)
1
Definition
2
Expression in terms of fλ
3
Conversion from other magnitude systems
4
References
5
External links
Toggle the table of contents
AB magnitude
5 languages
العربيةEspañolFrançaisPortuguês中文
Edit links
ArticleTalk
English
ReadEditView history
Tools
Tools
move to sidebar
hide
Actions
ReadEditView history
General
What links hereRelated changesUpload fileSpecial pagesPermanent linkPage informationCite this pageGet shortened URLDownload QR codeWikidata item
Print/export
Download as PDFPrintable version
Appearance
move to sidebar
hide
From Wikipedia, the free encyclopedia
The AB magnitude system is an astronomical magnitude system. Unlike many other magnitude systems, it is based on flux measurements that are calibrated in absolute units, namely spectral flux densities.
Definition[edit]
The monochromatic AB magnitude is defined as the logarithm of a spectral flux density with the usual scaling of astronomical magnitudes and a zero-point of about 3631 janskys (symbol Jy),[1] where 1 Jy = 10−26 W Hz−1 m−2 = 10−23 erg s−1 Hz−1 cm−2 ("about" because the true definition of the zero point is based on magnitudes as shown below). If the spectral flux density is denoted fν, the monochromatic AB magnitude is:
m
AB
≈
−
2.5
log
10
⁡
(
f
ν
3
631
Jy
)
,
{\displaystyle m_{\text{AB}}\approx -2.5\log _{10}\left({\frac {f_{\nu }}{3\,631{\text{ Jy}}}}\right),}
or, with fν still in janskys,
m
AB
=
−
2.5
log
10
⁡
f
ν
+
8.90.
{\displaystyle m_{\text{AB}}=-2.5\log _{10}f_{\nu }+8.90.}
The exact definition is stated relative to the cgs units of erg s−1 cm−2 Hz−1:
m
AB
=
−
2.5
log
10
⁡
f
ν
−
48.60.
{\displaystyle m_{\text{AB}}=-2.5\log _{10}f_{\nu }-48.60.}
Note: there is a sign error in the original Oke & Gunn (1983) equation.
Inverting this leads to the true definition of the numerical value "3631 Jy" often cited:
f
ν
,
0
=
10
48.60
−
2.5
≈
3.631
×
10
−
20
{\displaystyle f_{\nu ,0}=10^{\tfrac {48.60}{-2.5}}\approx 3.631\times 10^{-20}}
erg s−1 cm−2 Hz−1
Actual measurements are always made across some continuous range of wavelengths. The bandpass AB magnitude is defined so that the zero point corresponds to a bandpass-averaged spectral flux density of about 3631 Jy:
m
AB
≈
−
2.5
log
10
⁡
(
∫
f
ν
(
h
ν
)
−
1
e
(
ν
)
d
ν
∫
3
631
Jy
(
h
ν
)
−
1
e
(
ν
)
d
ν
)
,
{\displaystyle m_{\text{AB}}\approx -2.5\log _{10}\left({\frac {\int f_{\nu }{(h\nu )}^{-1}e(\nu )\,\mathrm {d} \nu }{\int 3\,631{\text{ Jy}}\,{(h\nu )}^{-1}e(\nu )\,\mathrm {d} \nu }}\right),}
where e(ν) is the "equal-energy" filter response function and the (hν)−1 term assumes that the detector is a photon-counting device such as a CCD or photomultiplier.[2] (Filter responses are sometimes expressed as quantum efficiencies, that is, in terms of their response per photon, rather than per unit energy. In those cases the (hν)−1 term has been folded into the definition of e(ν) and should not be included.)
The STMAG system is similarly defined, but for constant flux per unit wavelength interval instead.
AB stands for "absolute" in the sense that no relative reference object is used (unlike using Vega as a baseline object).[3] This must not be confused with absolute magnitude in the sense of the apparent brightness of an object if seen from a distance of 10 parsecs.
Expression in terms of fλ[edit]
In some fields, spectral flux densities are expressed per unit wavelength, fλ, rather than per unit frequency, fν. At any specific wavelength,
f
ν
=
λ
2
c
f
λ
,
{\displaystyle f_{\nu }={\frac {\lambda ^{2}}{c}}f_{\lambda },}
where fν is measured per frequency (say, in hertz), and fλ is measured per wavelength (say, in centimeters). If the wavelength unit is ångströms,
f
ν
Jy
=
3.34
×
10
4
(
λ
Å
)
2
f
λ
erg
cm
−
2
s
−
1
Å
−
1
.
{\displaystyle {\frac {f_{\nu }}{\text{Jy}}}=3.34\times 10^{4}\left({\frac {\lambda }{\mathrm {\AA} {}}}\right)^{2}{\frac {f_{\lambda }}{{\text{erg}}{\text{ cm}}^{-2}{\text{ s}}^{-1}\mathrm {\AA} ^{-1}}}.}
This can then be plugged into the equations above.
The "pivot wavelength" of a given bandpass is the value of λ that makes the above conversion exact for observations made in that bandpass. For an equal-energy response function as defined above, it is [4]
λ
piv
=
∫
e
(
λ
)
λ
d
λ
∫
e
(
λ
)
λ
−
1
d
λ
.
{\displaystyle \lambda _{\text{piv}}={\sqrt {\frac {\int e(\lambda )\lambda \,\mathrm {d} \lambda }{\int e(\lambda )\lambda ^{-1}\,\mathrm {d} \lambda }}}.}
For a response function expressed in the quantum-efficiency convention, it is:
λ
piv
=
∫
e
(
λ
)
d
λ
∫
e
(
λ
)
λ
−
2
d
λ
.
{\displaystyle \lambda _{\text{piv}}={\sqrt {\frac {\int e(\lambda )\,\mathrm {d} \lambda }{\int e(\lambda )\lambda ^{-2}\,\mathrm {d} \lambda }}}.}
Conversion from other magnitude systems[edit]
Magnitudes in the AB system can be converted to other systems. However, because all magnitude systems involve integration of some assumed source spectrum over some assumed passband, such conversions are not necessarily trivial to calculate, and precise conversions depend on the actual bandpass of the observations in question. Various authors have computed conversions for standard situations.[5]
References[edit]
^ Oke, J. B. (1983). "Secondary standard stars for absolute spectrophotometry". The Astrophysical Journal. 266: 713–717. Bibcode:1983ApJ...266..713O. doi:10.1086/160817.
^ Tonry, J. L. (2012). "The Pan-STARRS1 Photometric System". The Astrophysical Journal. 750 (2): 99. arXiv:1203.0297. Bibcode:2012ApJ...750...99T. doi:10.1088/0004-637X/750/2/99. S2CID 119266289.
^ Oke, J. B. (1974). "Absolute spectral energy distributions for white dwarfs". Astrophysical Journal Supplement Series. 236 (27): 21–25. Bibcode:1974ApJS...27...21O. doi:10.1086/190287.
^ Tokunaga, A. T.; Vacca (April 2005). "The Mauna Kea Observatories Near-Infrared Filter Set. III. Isophotal Wavelengths and Absolute Calibration". Publications of the Astronomical Society of the Pacific. 117 (830): 421–426. arXiv:astro-ph/0502120. Bibcode:2005PASP..117..421T. doi:10.1086/429382. S2CID 250813406.
^ Blanton, M. R. (2007). "K-Corrections and Filter Transformations in the Ultraviolet, Optical, and Near-Infrared". The Astronomical Journal. 133 (2): 734–754. arXiv:astro-ph/0606170. Bibcode:2007AJ....133..734B. doi:10.1086/510127. S2CID 18561804.
External links[edit]
Conversion from AB magnitudes to Johnson magnitudes
Portals: Astronomy Stars Spaceflight Outer space Solar System
Retrieved from "https://en.wikipedia.org/w/index.php?title=AB_magnitude&oldid=1231771599"
Category: Observational astronomy
This page was last edited on 30 June 2024, at 05:19 (UTC).
Text is available under the Creative Commons Attribution-ShareAlike License 4.0;
additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.
Privacy policy
About Wikipedia
Disclaimers
Contact Wikipedia
Code of Conduct
Developers
Statistics
Cookie statement
Mobile view