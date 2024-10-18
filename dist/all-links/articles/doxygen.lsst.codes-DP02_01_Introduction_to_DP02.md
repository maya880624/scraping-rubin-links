LSST Applications: lsst::skymap;
sky pixelization
LSST Applications
21.0.0-172-gfb10e10a+18fedfabac,22.0.0+297cba6710,22.0.0+80564b0ff1,22.0.0+8d77f4f51a,22.0.0+a28f4c53b1,22.0.0+dcf3732eb2,22.0.1-1-g7d6de66+2a20fdde0d,22.0.1-1-g8e32f31+297cba6710,22.0.1-1-geca5380+7fa3b7d9b6,22.0.1-12-g44dc1dc+2a20fdde0d,22.0.1-15-g6a90155+515f58c32b,22.0.1-16-g9282f48+790f5f2caa,22.0.1-2-g92698f7+dcf3732eb2,22.0.1-2-ga9b0f51+7fa3b7d9b6,22.0.1-2-gd1925c9+bf4f0e694f,22.0.1-24-g1ad7a390+a9625a72a8,22.0.1-25-g5bf6245+3ad8ecd50b,22.0.1-25-gb120d7b+8b5510f75f,22.0.1-27-g97737f7+2a20fdde0d,22.0.1-32-gf62ce7b1+aa4237961e,22.0.1-4-g0b3f228+2a20fdde0d,22.0.1-4-g243d05b+871c1b8305,22.0.1-4-g3a563be+32dcf1063f,22.0.1-4-g44f2e3d+9e4ab0f4fa,22.0.1-42-gca6935d93+ba5e5ca3eb,22.0.1-5-g15c806e+85460ae5f3,22.0.1-5-g58711c4+611d128589,22.0.1-5-g75bb458+99c117b92f,22.0.1-6-g1c63a23+7fa3b7d9b6,22.0.1-6-g50866e6+84ff5a128b,22.0.1-6-g8d3140d+720564cf76,22.0.1-6-gd805d02+cc5644f571,22.0.1-8-ge5750ce+85460ae5f3,master-g6e05de7fdc+babf819c66,master-g99da0e417a+8d77f4f51a,w.2021.48
LSST Data Management Base Package
LSST Documentation
lsst::skymap; sky pixelization
Introduction
A sky map describes a pixelization of image data that covers most or all of the sky.
The imaging data is arranged as a sequence of overlapping rectangular "tracts". Each tract is, in essence, a single large exposure. However, tracts are typically too large to fit into memory, so tracts are subdivided into rectangular, possibly overlapping "patches". The patch size is chosen to easily fit into memory.
Tracts contain an inner region described by a collection of vertices. The inner regions exactly tile the portion of sky covered by the sky map. All pixels beyond the inner region provide overlap with neighboring tracts.
Patches contain rectangular inner and outer regions. The inner regions exactly tile the tract, and all patches in a tract have the same inner dimensions. Each patch has a border around the inner region to provide some overlap with adjacent patches, but there is no border on patch edges that lie against tract boundaries.
Imaging data is saved as one FITS file per patch. To access a patch the butler requires the tract ID and patch index. BaseSkyMap.findTract(coord) finds a tract and returns its TractInfo, given a coord. TractInfo.findPatch(coord) finds a patch and returns its PatchInfo.
Classes available from Python include:
BaseSkyMap: abstract base class for sky maps. Each subclass acts as an iterable collection of TractInfo.
DodecaSkyMap: tracts are arranged as the faces of a dodecahedron covering the whole sky.
EquatSkyMap: tracts are arranged in a band described by a declination range.
DiscreteSkyMap: tracts are placed at explicitly defined positions (e.g., for deep fields).
RingsSkyMap: square tracts are arranged in declination rings with polar caps.
HealpixSkyMap: tracts are arranged as HEALPixels (requires the healpy package).
TractInfo: information about a tract, including a bounding box, WCS, vertices describing the inner region, and a collection of PatchInfo.
PatchInfo: information about a patch, including index, inner and outer bounding boxes.
Generated on Fri Nov 26 2021 10:16:08 for LSST Applications by  1.9.1