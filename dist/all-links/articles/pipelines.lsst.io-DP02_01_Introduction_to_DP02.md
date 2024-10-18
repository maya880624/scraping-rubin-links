lsst.afw.display — LSST Science Pipelines
LSST Science Pipelines
Forum
Docs
LSST.org →
Navigation
next »
« previous
|
LSST Science Pipelines
»
lsst.afw.display
lsst.afw.display¶
Contributing¶
lsst.afw.display is developed at https://github.com/lsst/afw.
You can find Jira issues for this module under the afw component.
Python API reference¶
lsst.afw.display Package¶
Application Framework code to display images.
Functions¶
computeIntensity(imageR[, imageG, imageB])
Return a naive total intensity from the red, blue, and green intensities
delAllDisplays()
Delete and close all known displays.
displayRGB(rgb[, show])
Display an rgb image using matplotlib
getDefaultBackend()
getDefaultFrame()
Get the default frame for display.
getDisplay([frame, backend, create, verbose])
Return a specific Display, creating it if need be.
getZScale(*args, **kwargs)
Overloaded function.
h_callback(k, x, y)
incrDefaultFrame()
Increment the default frame for display.
makeRGB(imageR[, imageG, imageB, minimum, ...])
Make a set of three images into an RGB image using an asinh stretch and optionally write it to disk
noop_callback(k, x, y)
Callback function
replaceSaturatedPixels(rim, gim, bim[, ...])
setDefaultBackend(backend)
setDefaultFrame([frame])
setDefaultMaskPlaneColor([name, color])
Set the default mapping from mask plane names to colors.
setDefaultMaskTransparency([...])
writeFitsImage(*args, **kwargs)
Overloaded function.
writeRGB(fileName, rgbImage)
Write an RGB image to disk
Classes¶
AsinhMapping(minimum, dataRange[, Q])
A mapping for an asinh stretch (preserving colours independent of brightness)
AsinhZScaleMapping(image[, Q, pedestal])
A mapping for an asinh stretch, estimating the linear stretch by zscale
Display([frame, backend])
Create an object able to display images and overplot glyphs.
Event(k[, x, y])
A class to handle events such as key presses in image display windows.
LinearMapping([minimum, maximum, image])
A linear map of red, blue, green intensities into uint8 values
Mapping([minimum, image])
Base class to map red, blue, green intensities into uint8 values
Mosaic([gutter, background, mode])
A class to handle mosaics of one or more identically-sized images (or Mask or MaskedImage)
ZScaleMapping(image[, nSamples, contrast])
A mapping for a linear stretch chosen by the zscale algorithm (preserving colours independent of brightness)
On this page
lsst.afw.display
Contributing
Python API reference
lsst.afw.display Package
Functions
Classes
Back to Top
Last built Aug 06, 2024.
Created using Sphinx 6.2.1. Page design is based on Astropy's bootstrap-astropy theme in astropy-helpers.
LSST documentation is proudly served through the Fastly CDN.
© Copyright 2015-2024 LSST contributors.
Financial support for LSST comes from the National Science Foundation (NSF) through Cooperative Agreement No. 1258333, the Department of Energy (DOE) Office of Science under Contract No. DE-AC02-76SF00515, and private funding raised by the LSST Corporation. The NSF-funded LSST Project Office for construction was established as an operating center under management of the Association of Universities for Research in Astronomy (AURA). The DOE-funded effort to build the LSST camera is managed by the SLAC National Accelerator Laboratory (SLAC).