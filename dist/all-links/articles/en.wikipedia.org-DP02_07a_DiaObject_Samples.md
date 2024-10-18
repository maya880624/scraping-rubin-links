Julian day - Wikipedia
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
Terminology
2
Variants
3
History
Toggle History subsection
3.1
Julian Period
3.2
Julian day numbers
4
Julian day number calculation
Toggle Julian day number calculation subsection
4.1
Converting Gregorian calendar date to Julian Day Number
4.2
Converting Julian calendar date to Julian Day Number
4.3
Finding Julian date given Julian day number and time of day
4.4
Finding day of week given Julian day number
4.5
Julian or Gregorian calendar from Julian day number
4.6
Julian Period from indiction, Metonic and solar cycles
5
Julian date calculation
6
See also
7
Notes
8
References
9
Sources
10
External links
Toggle the table of contents
Julian day
45 languages
العربيةAsturianuAzərbaycancaCatalàČeštinaDanskDeutschΕλληνικάEspañolEuskaraفارسیFrançais한국어हिन्दीHrvatskiBahasa IndonesiaItalianoעבריתქართულიMagyarМакедонскиമലയാളംBahasa Melayuမြန်မာဘာသာNederlands日本語Norsk bokmålNorsk nynorskPolskiPortuguêsRomânăРусиньскыйРусскийSimple EnglishSlovenčinaSlovenščinaСрпски / srpskiSrpskohrvatski / српскохрватскиSuomiSvenskaไทยTürkçeУкраїнськаTiếng Việt中文
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
Days since the beginning of the Julian Period
"Julian date" redirects here. For dates in the Julian calendar, see Julian calendar. For numbered day of year, see Ordinal date. For the comic book character Julian Gregory Day, see Calendar Man. For the artist and composer, see Julian Day (artist).
Not to be confused with Julian year (astronomy).
The Julian day is the continuous count of days since the beginning of the Julian period, and is used primarily by astronomers, and in software for easily calculating elapsed days between two events (e.g. food production date and sell by date).[1]
The Julian period is a chronological interval of 7980 years; year 1 of the Julian Period was 4713 BC (−4712).[2] The Julian calendar year 2024 is year 6737 of the current Julian Period. The next Julian Period begins in the year AD 3268. Historians used the period to identify Julian calendar years within which an event occurred when no such year was given in the historical record, or when the year given by previous historians was incorrect.[3]
The Julian day number (JDN) is the integer assigned to a whole solar day in the Julian day count starting from noon Universal Time, with Julian day number 0 assigned to the day starting at noon on Monday, January 1, 4713 BC, proleptic Julian calendar (November 24, 4714 BC, in the proleptic Gregorian calendar),[4][5][6]
a date at which three multi-year cycles started (which are: Indiction, Solar, and Lunar cycles) and which preceded any dates in recorded history.[a] For example, the Julian day number for the day starting at 12:00 UT
(noon) on January 1, 2000, was 2451545.[7]
The Julian date (JD) of any instant is the Julian day number plus the fraction of a day since the preceding noon in Universal Time. Julian dates are expressed as a Julian day number with a decimal fraction added.[8] For example, the Julian Date for 00:30:00.0 UT January 1, 2013, is 2456293.520833.[9] This article was loaded at 2024-08-19 07:33:26 (UTC) – expressed as a Julian date this is 2460541.8148843.
Terminology[edit]
The term Julian date may also refer, outside of astronomy, to the day-of-year number (more properly, the ordinal date) in the Gregorian calendar, especially in computer programming, the military and the food industry,[10] or it may refer to dates in the Julian calendar. For example, if a given "Julian date" is "October 5, 1582", this means that date in the Julian calendar (which was October 15, 1582, in the Gregorian calendar—the date it was first established).
Without an astronomical or historical context, a "Julian date" given as "36" most likely means the 36th day of a given Gregorian year, namely February 5.
Other possible meanings of a "Julian date" of "36" include an astronomical Julian Day Number, or the year AD 36 in the Julian calendar, or a duration of 36 astronomical Julian years).
This is why the terms "ordinal date" or "day-of-year" are preferred.
In contexts where a "Julian date" means simply an ordinal date, calendars of a Gregorian year with formatting for ordinal dates are often called "Julian calendars",[10] but this could also mean that the calendars are of years in the Julian calendar system.
Historically, Julian dates were recorded relative to Greenwich Mean Time (GMT) (later, Ephemeris Time), but since 1997 the International Astronomical Union has recommended that Julian dates be specified in Terrestrial Time.[11] Seidelmann indicates that Julian dates may be used with International Atomic Time (TAI), Terrestrial Time (TT), Barycentric Coordinate Time (TCB), or Coordinated Universal Time (UTC) and that the scale should be indicated when the difference is significant.[12] The fraction of the day is found by converting the number of hours, minutes, and seconds after noon into the equivalent decimal fraction.
Time intervals calculated from differences of Julian Dates specified in non-uniform time scales, such as UTC, may need to be corrected for changes in time scales (e.g. leap seconds).[8]
Variants[edit]
Because the starting point or reference epoch is so long ago, numbers in the Julian day can be quite large and cumbersome. A more recent starting point is sometimes used, for instance by dropping the leading digits, in order to fit into limited computer memory with an adequate amount of precision. In the following table, times are given in 24-hour notation.
In the table below, Epoch refers to the point in time used to set the origin (usually zero, but (1) where explicitly indicated) of the alternative convention being discussed in that row. The date given is a Gregorian calendar date unless otherwise specified. JD stands for Julian Date. 0h is 00:00 midnight, 12h is 12:00 noon, UT unless otherwise specified. Current value is at 07:33, Monday, August 19, 2024 (UTC) and may be cached. [refresh]
Name
Epoch
Calculation
Current value
Notes
Julian date
12:00 January 1, 4713 BC proleptic Julian calendar
JD
2460541.81458
Reduced JD
12:00 November 16, 1858
JD − 2400000
60541.81458
[13][14]
Modified JD
0:00 November 17, 1858
JD − 2400000.5
60541.31458
Introduced by SAO in 1957
Truncated JD
0:00 May 24, 1968
floor (JD − 2440000.5)
20541
Introduced by NASA in 1979
Dublin JD
12:00 December 31, 1899
JD − 2415020
45521.81458
Introduced by the IAU in 1955
CNES JD
0:00 January 1, 1950
JD − 2433282.5
27259.31458
Introduced by the CNES[15]
CCSDS JD
0:00 January 1, 1958
JD − 2436204.5
24337.31458
Introduced by the CCSDS[15]
Lilian date
day 1 = October 15, 1582[b]
floor (JD − 2299159.5)
161382
Count of days of the Gregorian calendar
Rata Die
day 1 = January 1, 1[b] proleptic Gregorian calendar
floor (JD − 1721424.5)
739117
Count of days of the Common Era
Mars Sol Date
12:00 December 29, 1873
(JD − 2405522)/1.02749
53547.7208
Count of Martian days
Unix time
0:00 January 1, 1970
(JD − 2440587.5) × 86400
1724052806
Count of seconds,[16] excluding leap seconds
JavaScript Date
0:00 January 1, 1970
(JD − 2440587.5) × 86400000
1724052806004
Count of milliseconds,[17] excluding leap seconds
EXT4 File Timestamps
0:00 January 1, 1970
(JD − 2440587.5) × 86400000000000
1.7240528060035E+18
Count of nanoseconds,[18] excluding leap seconds
.NET DateTime
0:00 January 1, 1 proleptic Gregorian calendar
(JD − 1721425.5) × 864000000000
638596496060035072
Count of 100-nanosecond ticks, excluding ticks attributable to leap seconds[19]
The Modified Julian Date (MJD) was introduced by the Smithsonian Astrophysical Observatory in 1957 to record the orbit of Sputnik via an IBM 704 (36-bit machine) and using only 18 bits until August 7, 2576. MJD is the epoch of VAX/VMS and its successor OpenVMS, using 63-bit date/time, which allows times to be stored up to July 31, 31086, 02:48:05.47.[20] The MJD has a starting point of midnight on November 17, 1858, and is computed by MJD = JD − 2400000.5 [21]
The Truncated Julian Day (TJD) was introduced by NASA/Goddard in 1979 as part of a parallel grouped binary time code (PB-5) "designed specifically, although not exclusively, for spacecraft applications". TJD was a 4-digit day count from MJD 40000, which was May 24, 1968, represented as a 14-bit binary number. Since this code was limited to four digits, TJD recycled to zero on MJD 50000, or October 10, 1995, "which gives a long ambiguity period of 27.4 years". (NASA codes PB-1–PB-4 used a 3-digit day-of-year count.) Only whole days are represented. Time of day is expressed by a count of seconds of a day, plus optional milliseconds, microseconds and nanoseconds in separate fields. Later PB-5J was introduced which increased the TJD field to 16 bits, allowing values up to 65535, which will occur in the year 2147. There are five digits recorded after TJD 9999.[22][23]
The Dublin Julian Date (DJD) is the number of days that has elapsed since the epoch of the solar and lunar ephemerides used from 1900 through 1983, Newcomb's Tables of the Sun and Ernest W. Brown's Tables of the Motion of the Moon (1919). This epoch was noon UT on January 0, 1900, which is the same as noon UT on December 31, 1899. The DJD was defined by the International Astronomical Union at their meeting in Dublin, Ireland, in 1955.[24]
The Lilian day number is a count of days of the Gregorian calendar and not defined relative to the Julian Date. It is an integer applied to a whole day; day 1 was October 15, 1582, which was the day the Gregorian calendar went into effect. The original paper defining it makes no mention of the time zone, and no mention of time-of-day.[25] It was named for Aloysius Lilius, the principal author of the Gregorian calendar.[26]
Rata Die is a system used in Rexx, Go and Python.[27] Some implementations or options use Universal Time, others use local time. Day 1 is January 1, 1, that is, the first day of the Christian or Common Era in the proleptic Gregorian calendar.[28] In Rexx January 1 is Day 0.[29]
The Heliocentric Julian Day (HJD) is the same as the Julian day, but adjusted to the frame of reference of the Sun, and thus can differ from the Julian day by as much as 8.3 minutes (498 seconds), that being the time it takes light to reach Earth from the Sun.[c]
History[edit]
Julian Period [edit]
The Julian day number is based on the Julian Period proposed by Joseph Scaliger, a classical scholar, in 1583 (one year after the Gregorian calendar reform) as it is the product of three calendar cycles used with the Julian calendar:
28 (solar cycle) × 19 (lunar cycle) × 15 (indiction cycle) = 7980 years
Its epoch occurs when all three cycles (if they are continued backward far enough) were in their first year together. Years of the Julian Period are counted from this year, 4713 BC, as year 1, which was chosen to be before any historical record.[30]
Scaliger corrected chronology by assigning each year a tricyclic "character", three numbers indicating that year's position in the 28-year solar cycle, the 19-year lunar cycle, and the 15-year indiction cycle. One or more of these numbers often appeared in the historical record alongside other pertinent facts without any mention of the Julian calendar year. The character of every year in the historical record was unique – it could only belong to one year in the 7980-year Julian Period. Scaliger determined that 1 BC or year 0 was Julian Period (JP) 4713. He knew that 1 BC or 0 had the character 9 of the solar cycle, 1 of the lunar cycle, and 3 of the indiction cycle. By inspecting a 532-year Paschal cycle with 19 solar cycles (each of 28 years, each year numbered 1–28) and 28 lunar cycles (each of 19 years, each year numbered 1–19), he determined that the first two numbers, 9 and 1, occurred at its year 457. He then calculated via remainder division that he needed to add eight 532-year Paschal cycles totaling 4256 years before the cycle containing 1 BC or 0 in order for its year 457 to be indiction 3. The sum 4256 + 457 was thus JP 4713.[31]
A formula for determining the year of the Julian Period given its character involving three four-digit numbers was published by Jacques de Billy in 1665 in the Philosophical Transactions of the Royal Society (its first year).[32] John F. W. Herschel gave the same formula using slightly different wording in his 1849 Outlines of Astronomy.[33]
Multiply the Solar Cycle by 4845, and the Lunar, by 4200, and that of the Indiction, by 6916. Then divide the Sum of the products by 7980, which is the Julian Period: The Remainder of the Division, without regard to the Quotient, shall be the year enquired after.— Jacques de Billy
Carl Friedrich Gauss introduced the modulo operation in 1801, restating de Billy's formula as:
Julian Period year = (6916a + 4200b + 4845c) MOD 15×19×28
where a is the year of the indiction cycle, b of the lunar cycle, and c of the solar cycle.[34][35]
John Collins described the details of how these three numbers were calculated in 1666, using many trials.[36] A summary of Collin's description is in a footnote.[37]
Reese, Everett and Craun reduced the dividends in the Try column from 285, 420, 532 to 5, 2, 7 and changed remainder to modulo, but apparently still required many trials.[38]
The specific cycles used by Scaliger to form his tricyclic Julian Period were, first, the indiction cycle with a first year of 313.[d][39] Then he chose the dominant 19-year Alexandrian lunar cycle with a first year of 285, the Era of Martyrs and the Diocletian Era epoch,[40] or a first year of 532 according to Dionysius Exiguus.[41] Finally, Scaliger chose the post-Bedan solar cycle with a first year of 776, when its first quadrennium of concurrents, 1 2 3 4, began in sequence.[e][42][43][44] Although not their intended use, the equations of de Billy or Gauss can be used to determined the first year of any 15-, 19-, and 28-year tricyclic period given any first years of their cycles. For those of the Julian Period, the result is AD 3268, because both remainder and modulo usually return the lowest positive result. Thus 7980 years must be subtracted from it to yield the first year of the present Julian Period, −4712 or 4713 BC, when all three of its sub-cycles are in their first years.
Scaliger got the idea of using a tricyclic period from "the Greeks of Constantinople" as Herschel stated in his quotation below in Julian day numbers.[45] Specifically, the monk and priest Georgios wrote in 638/39 that the Byzantine year 6149 AM (640/41) had indiction 14, lunar cycle 12, and solar cycle 17, which places the first year of the Byzantine Era in 5509/08 BC, the Byzantine Creation.[46] Dionysius Exiguus called the Byzantine lunar cycle his "lunar cycle" in argumentum 6, in contrast with the Alexandrian lunar cycle which he called his "nineteen-year cycle" in argumentum 5.[41]
Although many references say that the Julian in "Julian Period" refers to Scaliger's father, Julius Scaliger, at the beginning of Book V of his Opus de Emendatione Temporum ("Work on the Emendation of Time") he states, "Iulianam vocauimus: quia ad annum Iulianum accomodata",[47][48] which Reese, Everett and Craun translate as "We have termed it Julian because it fits the Julian year."[38] Thus Julian refers to the Julian calendar.
Julian day numbers[edit]
Julian days were first used by Ludwig Ideler for the first days of the Nabonassar and Christian eras in his 1825 Handbuch der mathematischen und technischen Chronologie.[49][50] John F. W. Herschel then developed them for astronomical use in his 1849 Outlines of Astronomy, after acknowledging that Ideler was his guide.[51]
The period thus arising of 7980 Julian years, is called the Julian period, and it has been found so useful, that the most competent authorities have not hesitated to declare that, through its employment, light and order were first introduced into chronology.[52] We owe its invention or revival to Joseph Scaliger, who is said to have received it from the Greeks of Constantinople. The first year of the current Julian period, or that of which the number in each of the three subordinate cycles is 1, was the year 4713 BC, and the noon of January 1 of that year, for the meridian of Alexandria, is the chronological epoch, to which all historical eras are most readily and intelligibly referred, by computing the number of integer days intervening between that epoch and the noon (for Alexandria) of the day, which is reckoned to be the first of the particular era in question. The meridian of Alexandria is chosen as that to which Ptolemy refers the commencement of the era of Nabonassar, the basis of all his calculations.[45]
At least one mathematical astronomer adopted Herschel's "days of the Julian period" immediately. Benjamin Peirce of Harvard University used over 2,800 Julian days in his Tables of the Moon, begun in 1849 but not published until 1853, to calculate the lunar ephemerides in the new American Ephemeris and Nautical Almanac from 1855 to 1888. The days are specified for "Washington mean noon", with Greenwich defined as 18h 51m 48s west of Washington (282°57′W, or Washington 77°3′W of Greenwich). A table with 197 Julian days ("Date in Mean Solar Days", one per century mostly) was included for the years –4713 to 2000 with no year 0, thus "–" means BC, including decimal fractions for hours, minutes and seconds.[53] The same table appears in Tables of Mercury by Joseph Winlock, without any other Julian days.[54]
The national ephemerides started to include a multi-year table of Julian days, under various names, for either every year or every leap year beginning with the French Connaissance des Temps in 1870 for 2,620 years, increasing in 1899 to 3,000 years.[55] The British Nautical Almanac began in 1879 with 2,000 years.[56] The Berliner Astronomisches Jahrbuch began in 1899 with 2,000 years.[57] The American Ephemeris was the last to add a multi-year table, in 1925 with 2,000 years.[58] However, it was the first to include any mention of Julian days with one for the year of issue beginning in 1855, as well as later scattered sections with many days in the year of issue. It was also the first to use the name "Julian day number" in 1918. The Nautical Almanac began in 1866 to include a Julian day for every day in the year of issue. The Connaissance des Temps began in 1871 to include a Julian day for every day in the year of issue.
The French mathematician and astronomer Pierre-Simon Laplace first expressed the time of day as a decimal fraction added to calendar dates in his book, Traité de Mécanique Céleste, in 1823.[59] Other astronomers added fractions of the day to the Julian day number to create Julian Dates, which are typically used by astronomers to date astronomical observations, thus eliminating the complications resulting from using standard calendar periods like eras, years, or months. They were first introduced into variable star work in 1860 by the English astronomer Norman Pogson, which he stated was at the suggestion of John Herschel.[60] They were popularized for variable stars by Edward Charles Pickering, of the Harvard College Observatory, in 1890.[61]
Julian days begin at noon because when Herschel recommended them, the astronomical day began at noon. The astronomical day had begun at noon ever since Ptolemy chose to begin the days for his astronomical observations at noon. He chose noon because the transit of the Sun across the observer's meridian occurs at the same apparent time every day of the year, unlike sunrise or sunset, which vary by several hours. Midnight was not even considered because it could not be accurately determined using water clocks. Nevertheless, he double-dated most nighttime observations with both Egyptian days beginning at sunrise and Babylonian days beginning at sunset.[62] Medieval Muslim astronomers used days beginning at sunset, so astronomical days beginning at noon did produce a single date for an entire night. Later medieval European astronomers used Roman days beginning at midnight so astronomical days beginning at noon also allow observations during an entire night to use a single date. When all astronomers decided to start their astronomical days at midnight to conform to the beginning of the civil day, on January 1, 1925, it was decided to keep Julian days continuous with previous practice, beginning at noon.
During this period, usage of Julian day numbers as a neutral intermediary when converting a date in one calendar into a date in another calendar also occurred. An isolated use was by Ebenezer Burgess in his 1860 translation of the Surya Siddhanta wherein he stated that the beginning of the Kali Yuga era occurred at midnight at the meridian of Ujjain at the end of the 588,465th day and the beginning of the 588,466th day (civil reckoning) of the Julian Period, or between February 17 and 18 JP 1612 or 3102 BC.[63][64] Robert Schram was notable beginning with his 1882 Hilfstafeln für Chronologie.[65] Here he used about 5,370 "days of the Julian Period". He greatly expanded his usage of Julian days in his 1908 Kalendariographische und Chronologische Tafeln containing over 530,000 Julian days, one for the zeroth day of every month over thousands of years in many calendars. He included over 25,000 negative Julian days, given in a positive form by adding 10,000,000 to each. He called them "day of the Julian Period", "Julian day", or simply "day" in his discussion, but no name was used in the tables.[66] Continuing this tradition, in his book "Mapping Time: The Calendar and Its History" British physics educator and programmer Edward Graham Richards uses Julian day numbers to convert dates from one calendar into another using algorithms rather than tables.[67]
Julian day number calculation[edit]
The Julian day number can be calculated using the following formulas (integer division rounding towards zero is used exclusively, that is, positive values are rounded down and negative values are rounded up):[f]
The months January to December are numbered 1 to 12. For the year, astronomical year numbering is used, thus 1 BC is 0, 2 BC is −1, and 4713 BC is −4712. JDN is the Julian Day Number. Use the previous day of the month if trying to find the JDN of an instant before midday UT.
Converting Gregorian calendar date to Julian Day Number[edit]
The algorithm is valid for all (possibly proleptic) Gregorian calendar dates after November 23, −4713.
Divisions are integer divisions towards zero; fractional parts are ignored.[68]
JDN = (1461 × (Y + 4800 + (M − 14)/12))/4 +(367 × (M − 2 − 12 × ((M − 14)/12)))/12 − (3 × ((Y + 4900 + (M - 14)/12)/100))/4 + D − 32075
Converting Julian calendar date to Julian Day Number[edit]
The algorithm[69] is valid for all (possibly proleptic) Julian calendar years ≥ −4712, that is, for all JDN ≥ 0.
Divisions are integer divisions, fractional parts are ignored.
JDN = 367 × Y − (7 × (Y + 5001 + (M − 9)/7))/4 + (275 × M)/9 + D + 1729777
Finding Julian date given Julian day number and time of day[edit]
For the full Julian Date of a moment after 12:00 UT one can use the following. Divisions are real numbers.
J
D
=
J
D
N
+
hour
−
12
24
+
minute
1440
+
second
86400
{\displaystyle {\begin{matrix}J\!D&=&J\!D\!N+{\frac {{\text{hour}}-12}{24}}+{\frac {\text{minute}}{1440}}+{\frac {\text{second}}{86400}}\end{matrix}}}
So, for example, January 1, 2000, at 18:00:00 UT corresponds to JD = 2451545.25 and January 1, 2000, at 6:00:00 UT corresponds to JD = 2451544.75.
Finding day of week given Julian day number[edit]
Because a Julian day starts at noon while a civil day starts at midnight, the Julian day number needs to be adjusted to find the day of week: for a point in time in a given Julian day after midnight UT and before 12:00 UT, add 1 or use the JDN of the next afternoon.
The US day of the week W1 (for an afternoon or evening UT) can be determined from the Julian Day Number J with the expression:
W1 = mod(J + 1, 7)[70]
W1
0
1
2
3
4
5
6
Day of the week
Sun
Mon
Tue
Wed
Thu
Fri
Sat
If the moment in time is after midnight UT (and before 12:00 UT), then one is already in the next day of the week.
The ISO day of the week W0 can be determined from the Julian Day Number J with the expression:
W0 = mod (J, 7) + 1
W0
1
2
3
4
5
6
7
Day of the week
Mon
Tue
Wed
Thu
Fri
Sat
Sun
Julian or Gregorian calendar from Julian day number[edit]
This is an algorithm by Edward Graham Richards to convert a Julian Day Number, J, to a date in the Gregorian calendar (proleptic, when applicable). Richards states the algorithm is valid for Julian day numbers greater than or equal to 0.[71][72] All variables are integer values, and the notation "a div b" indicates integer division, and "mod(a,b)" denotes the modulus operator.
Algorithm parameters for Gregorian calendar
variable
value
variable
value
y
4716
v
3
j
1401
u
5
m
2
s
153
n
12
w
2
r
4
B
274277
p
1461
C
−38
For Julian calendar:
f =
J + j
For Gregorian calendar:
f =
J + j + (((4 × J + B) div 146097) × 3) div 4 + C
For Julian or Gregorian, continue:
e = r × f + vg = mod(e, p) div rh = u × g + wD = (mod(h, s)) div u + 1M = mod(h div s + m, n) + 1Y = (e div p) - y + (n + m - M) div n
D, M, and Y are the numbers of the day, month, and year respectively for the afternoon at the beginning of the given Julian day.
Julian Period from indiction, Metonic and solar cycles[edit]
Let Y be the year BC or AD and i, m and s respectively its positions in the indiction, Metonic and solar cycles.
Divide 6916i + 4200m + 4845s by 7980 and call the remainder r.
If r>4713, Y = (r − 4713) and is a year AD.
If r<4714, Y = (4714 − r) and is a year BC.
Example
i = 8, m = 2, s = 8.
What is the year?
(6916 × 8) = 55328; (4200 × 2) = 8400: (4845 × 8) = 38760.
55328 + 8400 + 38760 = 102488.
102488/7980 = 12 remainder 6728.
Y = (6728 − 4713) = AD 2015.[73]
Julian date calculation[edit]
As stated above, the Julian date (JD) of any instant is the Julian day number for the preceding noon in Universal Time plus the fraction of the day since that instant. Ordinarily calculating the fractional portion of the JD is straightforward; the number of seconds that have elapsed in the day divided by the number of seconds in a day, 86,400. But if the UTC timescale is being used, a day containing a positive leap second contains 86,401 seconds (or in the unlikely event of a negative leap second, 86,399 seconds). One authoritative source, the Standards of Fundamental Astronomy (SOFA), deals with this issue by treating days containing a leap second as having a different length (86,401 or 86,399 seconds, as required). SOFA refers to the result of such a calculation as "quasi-JD".[74]
See also[edit]
5th millennium BC
Barycentric Julian Date
Dual dating
Decimal time
Epoch (astronomy)
Epoch (reference date)
Era
J2000 – the epoch that starts on JD 2451545.0 (TT), the standard epoch used in astronomy since 1984
Julian year (calendar)
Lunation Number (similar concept)
Ordinal date
Time
Time standards
Zeller's congruence
Notes[edit]
^ Both of these dates are years of the Anno Domini or Common Era (which has no year 0 between 1 BC and AD 1). Astronomical calculations generally include a year 0, so these dates should be adjusted accordingly (i.e. the year 4713 BC becomes astronomical year number −4712, etc.). In this article, dates before October 15, 1582, are in the (possibly proleptic) Julian calendar and dates on or after October 15, 1582, are in the Gregorian calendar, unless otherwise labelled.
^ a b This is an epoch starting with day 1 instead of 0. Conventions vary as to whether this is based on UT or local time.
^ To illustrate the ambiguity that could arise from conflating Heliocentric time and Terrestrial time, consider the two separate astronomical measurements of an astronomical object from the Earth: Assume that three objects—the Earth, the Sun, and the astronomical object targeted, that is whose distance is to be measured—happen to be in a straight line for both measures. However, for the first measurement, the Earth is between the Sun and the targeted object, and for the second, the Earth is on the opposite side of the Sun from that object. Then, the two measurements would differ by about 1000 light-seconds: For the first measurement, the Earth is roughly 500 light seconds closer to the target than the Sun, and roughly 500 light seconds further from the target astronomical object than the Sun for the second measure.
An error of about 1000 light-seconds is over 1% of a light-day, which can be a significant error when measuring temporal phenomena for short period astronomical objects over long time intervals. To clarify this issue, the ordinary Julian day is sometimes referred to as the Geocentric Julian Day (GJD) in order to distinguish it from HJD.
^ All years in this paragraph are those of the Anno Domini Era at the time of Easter
^ The concurrent of any Julian year is the weekday of its March 24, numbered from Sunday=1.
^ Doggett in Seidenmann 1992, p. 603, indicates the algorithms are inspired by Fliegel & Van Flanderen 1968. That paper gives algorithms in Fortran. The Fortran computer language performs integer division by truncating, which is functionally equivalent to rounding toward zero.
References[edit]
^ "Julian date" n.d.
^ Astronomical Almanac for the year 2017 p. B4, which states 2017 is year 6730 of the Julian Period.
^ Grafton 1975
^ Dershowitz & Reingold 2008, 15.
^ Seidelman 2013, 15.
^ "Astronomical Almanac Online" 2016, Glossary, s.v. Julian date. Various timescales may be used with Julian date, such as Terrestrial Time (TT) or Universal Time (UT); in precise work the timescale should be specified.
^ McCarthy & Guinot 2013, 91–2
^ a b "Resolution B1" 1997.
^ US Naval Observatory 2005
^ a b USDA c. 1963.
^ Resolution B1 on the use of Julian Dates of the XXIIIrd International Astronomical Union General Assembly, Kyoto, Japan, 1997
^ Seidelmann 2013, p. 15.
^ Hopkins 2013, p. 257.
^ Pallé, Esteban 2014.
^ a b Theveny 2001.
^ Astronomical almanac for the year 2001, 2000, p. K2
^ "ECMAScript® 2025 Language Specification".
^ "2. Data Structures and Algorithms — the Linux Kernel documentation".
^ "System.DateTime.Ticks documentation". Microsoft. n.d. Retrieved January 14, 2022. The value of this property represents the number of 100-nanosecond intervals that have elapsed since 12:00:00 midnight, January 1, 0001 in the Gregorian calendar,
^ "38 Why Is Wednesday November 17, 1858 The Base Time For VAX/VMS?". Digital Equipment Corporation-Customer Support Center. Colorado Springs. June 6, 2007. Archived from the original on June 6, 2007.
^ Winkler n. d.
^ Chi 1979.
^ SPD Toolkit Time Notes 2014.
^ Ransom c. 1988
^ Ohms 1986
^ IBM 2004.
^ "datetime — Basic date and time types — date Objects" (December 5, 2021). The Python Standard Library.
^ Dershowitz & Reingold 2008, 10, 351, 353, Appendix B.
^ "Chapter 3. Functions — DATE — Base" (September 29, 2022). z/VM: 7.1 REXX/VM Reference
^ Richards 2013, pp. 591–592.
^ Grafton 1975, p. 184
^ de Billy 1665
^ Herschel 1849
^ Gauss 1966
^ Gauss 1801
^ Collins 1666
^
Calculation of 4845, 4200, 6916
by Collins
Try 2+ until
⁠7980/28⁠ = 19×15 = 285
⁠285×Try/28⁠ =
remainder 1
285×17 = 19×15×17 = 4845
⁠7980/19⁠ = 28×15 =
420
⁠420×Try/19⁠ =
remainder 1
420×10 = 28×15×10 = 4200
⁠7980/15⁠ = 28×19 = 532
⁠532×Try/15⁠ =
remainder 1
532×13 = 28×19×13 = 6916
^ a b Reese, Everett and Craun 1981
^ Depuydt 1987
^ Neugebauer 2016, pp. 72–77, 109–114
^ a b Dionysius Exiguus 2003/525
^ De argumentis lunæ libellus, col. 705
^ Blackburn and Holford-Strevens, p. 821
^ Mosshammer 2008, pp. 80–85
^ a b Herschel 1849, p. 634
^ Diekamp 44, 45, 50
^ Scaliger 1629, p. 361
^ Scaliger used these words in his 1629 edition on p. 361 and in his 1598 edition on p. 339. In 1583 he used "Iulianam vocauimus: quia ad annum Iulianum duntaxat accomodata est" on p. 198.
^ Ideler 1825, pp. 102–106
^ The Nabonassar day was elapsed with a typo – it was correctly printed later as 1448638. The Christian day (1721425) was current, not elapsed.
^ Herschel, 1849, p. 632 note
^ Ideler 1825, p. 77
^ Peirce 1853
^ Winlock 1864
^ Connaissance des Temps 1870, pp. 419–424; 1899, pp. 718–722
^ Nautical Almanac and Astronomical Ephemeris 1879, p. 494
^ Berliner Astronomisches Jahrbuch 1899, pp. 390–391
^ American Ephemeris 1925, pp. 746–749
^ Laplace 1823
^ Pogson 1860
^ Furness 1915.
^ Ptolemy c. 150, p. 12
^ Burgess 1860
^ Burgess was furnished these Julian days by US Nautical Alamanac Office.
^ Schram 1882
^ Schram 1908
^ Richards 1998, pp. 287–342
^ L. E. Doggett, Ch. 12, "Calendars", p. 604, in Seidelmann 1992. "These algorithms are valid for all Gregorian calendar dates corresponding to JD >= 0, i.e, dates after −4713 November 23."
^ L. E. Doggett, Ch. 12, "Calendars", p. 606, in Seidelmann 1992
^ Richards 2013, pp. 592, 618.
^ Richards 2013, 617–9
^ Richards 1998, 316
^ Heath 1760, p. 160.
^ "SOFA Time Scale and Calendar Tools" 2016, p. 20
Sources[edit]
Alsted, Johann Heinrich 1649 [1630]. Encyclopaedia (in Latin), Tome 4, Page 122.
American Ephemeris and Nautical Almanac, Washington, 1855–1980, Hathi Trust
Astronomical almanac for the year 2001. (2000). U.S. Nautical Almanac Office and Her Majesty's Nautical Almanac Office. ISBN 9780117728431.
Astronomical almanac for the year 2017. (2016). U.S. Naval Observatory and Her Majesty's Nautical Almanac Office. ISBN 978-0-7077-41666.
Astronomical Almanac Online Archived December 24, 2016, at the Wayback Machine. (2016). U.S. Nautical Almanac Office and Her Majesty's Nautical Almanac Office.
Bede: The Reckoning of Time, tr. Faith Wallis, 725/1999, pp. 392–404, ISBN 0-85323-693-3. Also Appendix 2 (Beda Venerabilis' Paschal table.
Blackburn, Bonnie; Holford-Strevens, Leofranc. (1999) The Oxford Companion to the Year, Oxford University Press, ISBN 0-19-214231-3.
Burgess, Ebenezer, translator. 1860. Translation of the Surya Siddhanta. Journal of the American Oriental Society 6 (1858–1860) 141–498, p. 161.
Berliner astronomisches Jahrbuch, Berlin, 1776–1922, Hathi Trust
Chi, A. R. (December 1979). "A Grouped Binary Time Code for Telemetry and Space Application" (NASA Technical Memorandum 80606). Retrieved from NASA Technical Reports Server April 24, 2015.
Collins, John (1666–1667). "A method for finding the number of the Julian Period for any year assign'd", Philosophical Transactions of the Royal Society, series 1665–1678, volume 2, pp. 568–575.
Connaissance des Temps 1689–1922, Hathi Trust table of contents at end of book
Chronicon Paschale 284–628 AD, tr. Michael Whitby, Mary Whitby, 1989, p. 10, ISBN 978-0-85323-096-0.
"CS 1063 Introduction to Programming: Explanation of Julian Day Number Calculation." Archived December 3, 2020, at the Wayback Machine (2011). Computer Science Department, University of Texas at San Antonio.
"Date." (n.d.). IBM Knowledge Center. Retrieved September 28, 2019.
"De argumentis lunæ libellus" in Patrologia Latina, 90: 701–28, col. 705D (in Latin).
de Billy (1665–1666). "A problem for finding the year of the Julian Period by a new and very easie method", Philosophical Transactions of the Royal Society, series 1665–1678, volume 1, page 324.
Leo Depuydt, "AD 297 as the first indiction cycle",The bulletin of the American Society of Papyrologists, 24 (1987), 137–139.
Dershowitz, N. & Reingold, E. M. (2008). Calendrical Calculations 3rd ed. Cambridge University Press.
ISBN 978-0-521-70238-6.
Franz Diekamp, "Der Mönch und Presbyter Georgios, ein unbekannter Schriftsteller des 7. Jahrhunderts", Byzantinische Zeitschrift 9 (1900) 14–51 (in German and Greek).
Digital Equipment Corporation. Why is Wednesday, November 17, 1858, the base time for VAX/VMS? Modified Julian Day explanation
Dionysius Exiguus, 1863 [525], Cyclus Decemnovennalis Dionysii, Patrologia Latina vol. 67, cols. 493–508 (in Latin).
Dionysius Exiguus, 2003 [525], tr. Michael Deckers, Nineteen year cycle of Dionysius, Argumentum 5 (in Latin and English).
Explanatory Supplement to the Astronomical Ephemeris and the American Ephemeris and Nautical Almanac, Her Majesty's Stationery Office, 1961, pp. 21, 71, 97, 100, 264, 351, 365, 376, 386–9, 392, 431, 437–41, 489.
Fliegel, Henry F. & Van Flanderen, Thomas C. (October 1968). "A machine algorithm for processing calendar dates". Communications of the Association for Computing Machinery Vol. 11 No. 10, p. 657.
Furness, Caroline Ellen (1915). An introduction to the study of variable stars. Boston: Houghton-Mifflin. Vassar Semi-Centennial Series.
Gauss, Carl Frederich (1966). Clarke, Arthur A., translator. Disquisitiones Arithmeticae. Article 36. pp. 16–17. Yale University Press. (in English)
Gauss, Carl Frederich (1801). Disquisitiones Arithmeticae. Article 36. pp. 25–26. (in Latin)
Grafton, Anthony T. (May 1975) "Joseph Scaliger and historical chronology: The rise and fall of a discipline", History and Theory 14/2 pp. 156–185. JSTOR 2504611
Grafton, Anthony T. (1994) Joseph Scaliger: A Study in the History of Classical Scholarship. Volume II: Historical Chronology (Oxford-Warburg Studies).
Venance Grumel, La chronologie, 1958, 31–55 (in French).
Heath, B. (1760). Astronomia accurata; or the royal astronomer and navigator. London: author. [Google Books version.
Herschel, John F. W. (1849), Outlines of Astronomy (2nd ed.), London, hdl:2027/njp.32101032311266. Herschel's words remained the same in all editions, even while the page varied.
Hopkins, Jeffrey L. (2013). Using Commercial Amateur Astronomical Spectrographs, p. 257, Springer Science & Business Media, ISBN 9783319014425
HORIZONS System. (April 4, 2013). NASA.
Ideler, Ludwig. Handbuch der mathematischen und technischen Chronologie, vol. 1, 1825, pp. 102–106 (in German).
IBM 2004. "CEEDATE—convert Lilian date to character format". COBOL for AIX (2.0): Programming Guide.
Information Bulletin No. 81. (January 1998). International Astronomical Union.
"Julian Date". (n.d.). Defit's Definitions of Information Technology Terms. Brainsoft.
Julian Date Converter Archived October 6, 2007, at the Wayback Machine (March 20, 2013). US Naval Observatory. Retrieved September 16, 2013.
Kempler, Steve. (2011). Day of Year Calendar. Goddard Earth Sciences Data and Information Services Center.
Laplace (1823). Traité de Mécanique Céleste vol. 5 p. 348 (in French)
McCarthy, D. & Guinot, B. (2013). Time. In S. E. Urban & P. K. Seidelmann, eds. Explanatory Supplement to the Astronomical Almanac, 3rd ed. (pp. 76–104). Mill Valley, Calif.: University Science Books. ISBN 978-1-89138-985-6
Meeus Jean. Astronomical Algorithms (1998), 2nd ed, ISBN 0-943396-61-1
Mosshammer, Alden A. (2008), The Easter Computus and the Origins of the Christian Era, Oxford University Press, pp. 278, 281, ISBN 978-0-19-954312-0
Moyer, Gordon. (April 1981). "The Origin of the Julian Day System", Sky and Telescope 61 311−313.
Nautical Almanac and Astronomical Ephemeris, London, 1767–1923, Hathi Trust
Otto Neugebauer, Ethiopic Astronomy and Computus, Red Sea Press, 2016, pp. 22, 93, 111, 183, ISBN 978-1-56902-440-9. Page references in text, footnotes, and index are six greater than the page numbers in this edition.
Noerdlinger, P. (April 1995 revised May 1996). Metadata Issues in the EOSDIS Science Data Processing Tools for Time Transformations and Geolocation. NASA Goddard Space Flight Center.
Nothaft, C. Philipp E., Scandalous Error: Calendar Reform and Calendrical Astronomy in Medieval Europe, Oxford University Press, 2018, pp. 57–58, ISBN 978-0-19-879955-9.
Ohms, B. G. (1986). Computer processing of dates outside the twentieth century. IBM Systems Journal 25, 244–251. doi:10.1147/sj.252.0244
Pallé, Pere L., Esteban, Cesar. (2014). Asteroseismology, p. 185, Cambridge University Press, ISBN 9781107470620
Pogson, Norman R. (1860), "Notes on certain variable stars of unknown or doubtful periods", Monthly Notices of the Royal Astronomical Society, xx (7): 283–285, Bibcode:1860MNRAS..20..283P, doi:10.1093/mnras/20.7.283
Peirce, Benjamin (1865) [1853], Tables of the Moon, Washington{{citation}}:
CS1 maint: location missing publisher (link)
Ptolemy (1998) [c. 150], Ptolemy's Almagest, translated by Gingerich, Owen, Princeton University Press, p. 12, ISBN 0-691-00260-6
Ransom, D. H. Jr. (c. 1988) ASTROCLK Astronomical Clock and Celestial Tracking Program pages 69–143, "Dates and the Gregorian calendar" pages 106–111. Retrieved September 10, 2009.
Reese, Ronald Lane; Everett, Steven M.; Craun, Edwin D. (1981). "The origin of the Julian Period: An application of congruences and the Chinese Remainder Theorem", American Journal of Physics, volume 49, pages 658–661.
"Resolution B1". (1997). XXIIIrd General Assembly (Kyoto, Japan). International Astronomical Union, p. 7.
Richards, E. G. (2013). Calendars. In S. E. Urban & P. K. Seidelmann, eds. Explanatory Supplement to the Astronomical Almanac, 3rd ed. (pp. 585–624). Mill Valley, Calif.: University Science Books. ISBN 978-1-89138-985-6
Richards, E. G. (1998). Mapping Time: The Calendar and its History. Oxford University Press. ISBN 978-0192862051
Scaliger, Joseph (1583), Opvs Novvum de Emendatione Temporvm, p. 198
Scaliger, Joseph (1629), Opvs de Emendatione Temporvm, typis Rouerianis, p. 361
Schram, Robert (1882), "Hilfstafeln für Chronologie", Denkschriften der Kaiserlichen Akademie der Wissenschaften, Mathematisch-Naturwissenschafteliche Classe, 45: 289–358
Schram, Robert (1908), Kalendariographische und Chronologische Tafeln, Leipzig: J. C. Hinrichs
"SDP Toolkit Time Notes". (July 21, 2014). In SDP Toolkit / HDF-EOS. NASA.
Seidelmann, P. Kenneth (ed.) (1992). Explanatory Supplement to the Astronomical Almanac pages 55 & 603–606. University Science Books, ISBN 0-935702-68-7.
Seidelmann, P. Kenneth. (2013). "Introduction to Positional Astronomy" in Sean Urban and P. Kenneth Seidelmann (eds.) Explanatory supplement to the Astronomical Almanac' (3rd ed.) pp. 1–44. Mill Valley, CA: University Science Books. ISBN 978-1-891389-85-6
"SOFA Time Scale and Calendar Tools". (June 14, 2016). International Astronomical Union.
Theveny, Pierre-Michel. (September 10, 2001). "Date Format" The TPtime Handbook. Media Lab.
Tøndering, Claus. (2014). "The Julian Period" in Frequently Asked Questions about Calendars. author.
USDA. (c. 1963). Julian date calendar.
US Naval Observatory. (2005, last updated July 2, 2011). Multiyear Interactive Computer Almanac 1800–2050 (ver. 2.2.2). Richmond VA: Willmann-Bell, ISBN 0-943396-84-0.
Winkler, M. R. (n. d.). "Modified Julian Date". US Naval Observatory. Retrieved April 24, 2015.
Winlock, Joseph (1864) [in type since 1852], Tables of Mercury, Washington, pp. introduction 8, 3–5{{citation}}:
CS1 maint: location missing publisher (link)
External links[edit]
"Julian Date Converter". US Naval Observatory. Retrieved August 30, 2023.
vteTime measurement and standards
Chronometry
Orders of magnitude
Metrology
International standards
Coordinated Universal Time
offset
UT
ΔT
DUT1
International Earth Rotation and Reference Systems Service
ISO 31-1
ISO 8601
International Atomic Time
12-hour clock
24-hour clock
Barycentric Coordinate Time
Barycentric Dynamical Time
Civil time
Daylight saving time
Geocentric Coordinate Time
International Date Line
IERS Reference Meridian
Leap second
Solar time
Terrestrial Time
Time zone
180th meridian
Obsolete standards
Ephemeris time
Greenwich Mean Time
Prime meridian
Time in physics
Absolute space and time
Spacetime
Chronon
Continuous signal
Coordinate time
Cosmological decade
Discrete time and continuous time
Proper time
Theory of relativity
Time dilation
Gravitational time dilation
Time domain
Time-translation symmetry
T-symmetry
Horology
Clock
Astrarium
Atomic clock
Complication
History of timekeeping devices
Hourglass
Marine chronometer
Marine sandglass
Radio clock
Watch
stopwatch
Water clock
Sundial
Dialing scales
Equation of time
History of sundials
Sundial markup schema
Calendar
Gregorian
Hebrew
Hindu
Holocene
Islamic (lunar Hijri)
Julian
Solar Hijri
Astronomical
Dominical letter
Epact
Equinox
Intercalation
Julian day
Leap year
Lunar
Lunisolar
Solar
Solstice
Tropical year
Weekday determination
Weekday names
Archaeology and geology
Chronological dating
Geologic time scale
International Commission on Stratigraphy
Astronomical chronology
Galactic year
Nuclear timescale
Precession
Sidereal time
Other units of time
Instant
Flick
Shake
Jiffy
Second
Minute
Moment
Hour
Day
Week
Fortnight
Month
Year
Olympiad
Lustrum
Decade
Century
Saeculum
Millennium
Related topics
Chronology
Duration
music
Mental chronometry
Decimal time
Metric time
System time
Time metrology
Time value of money
Timekeeper
Retrieved from "https://en.wikipedia.org/w/index.php?title=Julian_day&oldid=1237712946"
Categories: Calendar algorithmsCalendaring standardsCelestial mechanicsChronologyTime in astronomyHidden categories: Articles containing Latin-language textArticles with short descriptionShort description matches WikidataUse mdy dates from January 2023Articles containing French-language textArticles with Latin-language sources (la)Webarchive template wayback linksCS1 maint: location missing publisher
This page was last edited on 31 July 2024, at 04:05 (UTC).
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