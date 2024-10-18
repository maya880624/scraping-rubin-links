cbp

  * Forum
  * Docs
  * LSST.org â



### Navigation

  * next » 
  * cbp » 



# lsst.cbpÂ¶

The `cbp` package provides code for the LSST collimated beam projector (CBP). The primary objects of interest are:

`lsst.cbp.CoordinateConverter`: compute the telescope and CBP pointing that will give you a desired beam arrangement, such as placing beam _b_ at point _p_ on the pupil and point _d_ on a specified detector.

`lsst.cbp.computeHolePositions`: compute hole positions for a CBP mask.

To construct an `lsst.cbp.CoordinateConverter` you will need to learn about configuration:

  * How to Configure an lsst.cbp.CoordinateConverter
    * Basic Configuration
    * Mask Information
    * Camera Geometry



In order to configure and use an `lsst.cbp.CoordinateConverter` it may help to have some understanding of the coordinate systems involved:

  * Coordinate Frames and Planes
    * Base Frame
    * Pupil Frame
    * Internal Azimuth, Altitude and Rotator
    * Observed Azimuth, Altitude and Rotator
    * Focal Plane
    * Pupil Plane
    * Pupil Field Angle
    * Focal Plane Field Angle



## Python API referenceÂ¶

### lsst.cbp PackageÂ¶

#### FunctionsÂ¶

`computeHolePositions`(detectorNames, â¦) Compute hole positions for a CBP mask.  
  
#### ClassesÂ¶

`BeamInfo`(cameraGeom, name, holePos, â¦) Information about a beam at the telescope.  
`CoordinateConverter`(config, maskInfo, cameraGeom) Coordinate conversions for the collimated beam projector (CBP).  
`CoordinateConverterConfig`(*, telPupilOffset, â¦) Configuration for the CoordinateConverter.  
`MaskInfo`(name, defaultHole, holePositions[, â¦]) Information about a CBP mask.  
  
#### Class Inheritance DiagramÂ¶

Inheritance diagram of lsst.cbp.beamInfo.BeamInfo, lsst.cbp.coordinateConverter.CoordinateConverter, lsst.cbp.coordinateConverterConfig.CoordinateConverterConfig, lsst.cbp.maskInfo.MaskInfo

### lsst.cbp.coordUtils ModuleÂ¶

Coordinate conversion functions

#### FunctionsÂ¶

`fieldAngleToVector`(xyrad, flipX) Convert a pupil field angle to a pupil unit vector.  
`vectorToFieldAngle`(vec, flipX) Convert a vector to a pupil field angle.  
`pupilPositionToVector`(xyPos, flipX) Convert a pupil plane position to a 3D vector.  
`computeShiftedPlanePos`(planePos, fieldAngle, â¦) Compute the plane position of a vector on a plane shifted along the optical axis.  
`convertVectorFromBaseToPupil`(vectorBase, â¦) Given a vector in base coordinates and the pupil pointing, compute the vector in pupil coordinates.  
`convertVectorFromPupilToBase`(vectorPupil, â¦) Given a vector in pupil coordinates and the pupil pointing, compute the vector in base coords.  
`computeAzAltFromBasePupil`(vectorBase, â¦) Compute az/alt from a vector in the base frame and the same vector in the pupil frame.  
`getFlippedPos`(xyPos, flipX) Get a 2-dimensional position with the x axis properly flipped.  
`rotate2d`(pos, angle) Rotate a 2-dimensional position by a given angle.  
  
### lsst.cbp.testUtils ModuleÂ¶

SampleCoordinateConverter class: make a CoordinateConverter for tests

#### ClassesÂ¶

`SampleCoordinateConverter`([â¦]) An object containing a CoordinateConverter and the information used to create it.  
  
#### Class Inheritance DiagramÂ¶

Inheritance diagram of lsst.cbp.testUtils.SampleCoordinateConverter

### On this page

  * lsst.cbp
    * Python API reference
      * lsst.cbp Package
        * Functions
        * Classes
        * Class Inheritance Diagram
      * lsst.cbp.coordUtils Module
        * Functions
      * lsst.cbp.testUtils Module
        * Classes
        * Class Inheritance Diagram



Page Source Back to Top

Last built Mar 10, 2020. 

Created using Sphinx 1.7.9. Page design is based on Astropy's bootstrap-astropy theme in astropy-helpers.   
LSST documentation is proudly served through the Fastly CDN. 

© Copyright 2020 LSST contributors.  


Financial support for LSST comes from the National Science Foundation (NSF) through Cooperative Agreement No. 1258333, the Department of Energy (DOE) Office of Science under Contract No. DE-AC02-76SF00515, and private funding raised by the LSST Corporation. The NSF-funded LSST Project Office for construction was established as an operating center under management of the Association of Universities for Research in Astronomy (AURA). The DOE-funded effort to build the LSST camera is managed by the SLAC National Accelerator Laboratory (SLAC). 
