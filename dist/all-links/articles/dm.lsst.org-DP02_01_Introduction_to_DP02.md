Data Preview 0.2 Schema | sdm_schemas
Schema Browser
Data Preview 0.2 Schema
Object
Source
ForcedSource
DiaObject
DiaSource
ForcedSourceOnDiaObject
Visit
CcdVisit
CoaddPatches
MatchesTruth
TruthSummary
Data Preview 0.2 Schema
Data Preview 0.2 contains the image and catalog products of the Rubin Science Pipelines v23 processing of the DESC Data Challenge 2 simulation, which covered 300 square degrees of the wide-fast-deep LSST survey region over 5 years.
Object
Properties of the astronomical objects detected and measured on the deep coadded images.
Column Name
Data Type
Unit
Description [UCD]
objectId
long
Unique id. Unique ObjectID [meta.id;src;meta.main]
coord_dec
double
deg
Fiducial ICRS Declination of centroid used for database indexing [pos.eq.dec;meta.main]
coord_ra
double
deg
Fiducial ICRS Right Ascension of centroid used for database indexing [pos.eq.ra;meta.main]
deblend_nChild
int
Number of children this object has (defaults to 0)
deblend_skipped
boolean
Deblender skipped this source
detect_fromBlend
boolean
This source is deblended from a parent with more than one child.
detect_isDeblendedModelSource
boolean
True if source has no children and is in the inner region of a coadd patch and is in the inner region of a coadd tract and is not a sky source and is a deblended child
detect_isDeblendedSource
boolean
True if source has no children and is in the inner region of a coadd patch and is in the inner region of a coadd tract and is not a sky source and is either an unblended isolated source or a deblended child from a parent with
detect_isIsolated
boolean
This source is not a part of a blend.
detect_isPatchInner
boolean
True if source is in the inner region of a coadd patch
detect_isPrimary
boolean
True if source has no children and is in the inner region of a coadd patch and is in the inner region of a coadd tract and is not a sky source
detect_isTractInner
boolean
True if source is in the inner region of a coadd tract
footprintArea
int
pixel
Number of pixels in the source's detection footprint. Reference band.
merge_peak_sky
boolean
Peak detected in filter sky
parentObjectId
long
Unique ID of parent source. Reference band. [meta.id.parent]
patch
long
Skymap patch ID [meta.id.part;obs.field]
refBand
char
Reference band - parameters measured on coadds of this band were used for multi-band forced photometry [meta.id;instr.filter;meta.main]
refExtendedness
double
Set to 1 for extended sources, 0 for point sources. Reference band.
refFwhm
double
Estimated FWHM on the reference band at source center assuming a Gaussian profile
shape_flag
boolean
General failure flag, set if anything went wrong. Reference band.
shape_xx
double
pixel**2
Hirata-Seljak-Mandelbaum (HSM) moments. Reference band.
shape_xy
double
pixel**2
HSM moments. Reference band.
shape_yy
double
pixel**2
HSM moments. Reference band.
sky_object
boolean
No source was detected here. This object exists to characterize properties of the sky background
skymap
char
Name of skymap used for coadd projection
tract
long
Skymap tract ID [meta.id;obs.field]
x
double
pixel
Centroid from SDSS Centroid algorithm. Reference band.
xErr
float
pixel
1-sigma uncertainty on x position. Reference band.
xy_flag
boolean
General Failure Flag. Reference band.
y
double
pixel
Centroid from SDSS Centroid algorithm. Reference band.
yErr
float
pixel
1-sigma uncertainty on y position. Reference band.
g_ap03Flux
double
nJy
Flux within 3.0-pixel aperture. Forced on g-band.
g_ap03FluxErr
double
nJy
Flux uncertainty within 3.0-pixel aperture. Forced on g-band.
g_ap03Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap06Flux
double
nJy
Flux within 6.0-pixel aperture. Forced on g-band.
g_ap06FluxErr
double
nJy
Flux uncertainty within 6.0-pixel aperture. Forced on g-band.
g_ap06Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap09Flux
double
nJy
Flux within 9.0-pixel aperture. Forced on g-band.
g_ap09FluxErr
double
nJy
Flux uncertainty within 9.0-pixel aperture. Forced on g-band.
g_ap09Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap12Flux
double
nJy
Flux within 12.0-pixel aperture. Forced on g-band.
g_ap12FluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Forced on g-band.
g_ap12Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap17Flux
double
nJy
Flux within 17.0-pixel aperture. Forced on g-band.
g_ap17FluxErr
double
nJy
Flux uncertainty within 17.0-pixel aperture. Forced on g-band.
g_ap17Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap25Flux
double
nJy
Flux within 25.0-pixel aperture. Forced on g-band.
g_ap25FluxErr
double
nJy
Flux uncertainty within 25.0-pixel aperture. Forced on g-band.
g_ap25Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap35Flux
double
nJy
Flux within 35.0-pixel aperture. Forced on g-band.
g_ap35FluxErr
double
nJy
Flux uncertainty within 35.0-pixel aperture. Forced on g-band.
g_ap35Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap50Flux
double
nJy
Flux within 50.0-pixel aperture. Forced on g-band.
g_ap50FluxErr
double
nJy
Flux uncertainty within 50.0-pixel aperture. Forced on g-band.
g_ap50Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_ap70Flux
double
nJy
Flux within 70.0-pixel aperture. Forced on g-band.
g_ap70FluxErr
double
nJy
Flux uncertainty within 70.0-pixel aperture. Forced on g-band.
g_ap70Flux_flag
boolean
General Failure Flag. Forced on g-band.
g_apFlux_flag
boolean
General Failure Flag. Measured on g-band.
g_apFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on g-band.
g_apFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on g-band.
g_bdChi2
double
-ln(likelihood) (chi^2) in cmodel fit. Measured on g-band.
g_bdE1
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on g-band.
g_bdE2
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on g-band.
g_bdFluxB
double
nJy
Flux from the de Vaucouleurs fit. Measured on g-band.
g_bdFluxBErr
double
nJy
Flux uncertainty from the de Vaucouleurs fit. Measured on g-band.
g_bdFluxD
double
nJy
Flux from the exponential fit. Measured on g-band.
g_bdFluxDErr
double
nJy
Flux uncertainty from the exponential fit. Measured on g-band.
g_bdReB
double
pixel**2
Half-light ellipse of the de Vaucouleurs fit. Measured on g-band.
g_bdReD
double
pixel**2
Half-light ellipse of the exponential fit. Measured on g-band.
g_blendedness
double
Measure of how much the flux is affected by neighbors, (1 - child_flux/parent_flux).
Operates on the absolute value of the pixels to try to obtain a de-noised value.
See section 4.9.11 of Bosch et al. 2018, PASJ, 70, S5 for details. Measured on g-band.
g_blendedness_flag
boolean
General Failure Flag. Measured on g-band.
g_cModelFlux
double
nJy
Flux from the final cmodel fit. Forced on g-band.
g_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Forced on g-band.
g_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Forced on g-band.
g_cModel_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Forced on g-band.
g_cModel_flag_apCorr
boolean
Set if unable to aperture correct modelfit_CModel. Forced on g-band.
g_calibFlux
double
nJy
Flux within 12.0-pixel aperture. Measured on g-band.
g_calibFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Measured on g-band.
g_calibFlux_flag
boolean
General Failure Flag. Measured on g-band.
g_calibFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on g-band.
g_calibFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on g-band.
g_calib_astrometry_used
boolean
Propagated from sources. Measured on g-band.
g_calib_photometry_reserved
boolean
Propagated from sources. Measured on g-band.
g_calib_photometry_used
boolean
Propagated from sources. Measured on g-band.
g_calib_psf_candidate
boolean
Propagated from sources. Measured on g-band.
g_calib_psf_reserved
boolean
Propagated from sources. Measured on g-band.
g_calib_psf_used
boolean
Propagated from sources. Measured on g-band.
g_centroid_flag
boolean
General Failure Flag. Measured on g-band.
g_centroid_x
double
pixel
Centroid from SDSS Centroid algorithm. Measured on g-band.
g_centroid_xErr
float
pixel
1-sigma uncertainty on x position. Measured on g-band.
g_centroid_y
double
pixel
Centroid from SDSS Centroid algorithm. Measured on g-band.
g_centroid_yErr
float
pixel
1-sigma uncertainty on y position. Measured on g-band.
g_decl
double
deg
Position in Declination. Measured on g-band. [pos.eq.dec]
g_extendedness
double
Set to 1 for extended sources, 0 for point sources. Measured on g-band.
g_extendedness_flag
boolean
Set to 1 for any fatal failure. Measured on g-band.
g_free_cModelFlux
double
nJy
Flux from the final cmodel fit. Measured on g-band.
g_free_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Measured on g-band.
g_free_cModelFlux_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Measured on g-band.
g_free_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Measured on g-band.
g_free_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Measured on g-band.
g_free_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Measured on g-band.
g_free_psfFlux_flag
boolean
General Failure Flag. Measured on g-band.
g_fwhm
double
pixel**2
HSM moments. Measured on g-band.
g_gaap0p5Flux
double
nJy
GaaP flux with 0.5 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap0p5FluxErr
double
nJy
GaaP flux uncertainty with 0.5 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap0p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on g-band.
g_gaap0p7Flux
double
nJy
GaaP flux with 0.7 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap0p7FluxErr
double
nJy
GaaP flux uncertainty with 0.7 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap0p7Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on g-band.
g_gaap1p0Flux
double
nJy
GaaP flux with 1.0 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap1p0FluxErr
double
nJy
GaaP flux uncertainty with 1.0 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap1p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on g-band.
g_gaap1p5Flux
double
nJy
GaaP flux with 1.5 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap1p5FluxErr
double
nJy
GaaP flux uncertainty with 1.5 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap1p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on g-band.
g_gaap2p5Flux
double
nJy
GaaP flux with 2.5 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap2p5FluxErr
double
nJy
GaaP flux uncertainty with 2.5 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap2p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on g-band.
g_gaap3p0Flux
double
nJy
GaaP flux with 3.0 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap3p0FluxErr
double
nJy
GaaP flux uncertainty with 3.0 aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaap3p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on g-band.
g_gaapFlux_flag
boolean
Set for any fatal failure. Forced on g-band.
g_gaapFlux_flag_edge
boolean
Source is too close to the edge. Forced on g-band.
g_gaapFlux_flag_gaussianization
boolean
PSF Gaussianization failed when trying to scale by this factor. Forced on g-band.
g_gaapOptimalFlux
double
nJy
GaaP flux with optimal aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaapOptimalFluxErr
double
nJy
GaaP flux uncertainty with optimal aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaapOptimalFlux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on g-band.
g_gaapPsfFlux
double
nJy
GaaP flux with PSF aperture after multiplying the seeing by 1.15. Forced on g-band.
g_gaapPsfFluxErr
double
nJy
GaaP flux uncertainty with PSF aperture after multiplying the seeing by 1.15. Forced on g-band.
g_hsmShapeRegauss_e1
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on g-band.
g_hsmShapeRegauss_e2
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on g-band.
g_hsmShapeRegauss_flag
boolean
General failure flag, set if anything went wrong. Measured on g-band.
g_hsmShapeRegauss_sigma
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on g-band.
g_iDebiasedPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on g-band.
g_iPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on g-band.
g_iRound_flag
double
pixel**2
HSM moments. Measured on g-band.
g_i_flag
boolean
General failure flag, set if anything went wrong. Measured on g-band.
g_inputCount
int
Number of images contributing at center, not including any clipping. Forced on g-band.
g_inputCount_flag
boolean
Set for any fatal failure. Forced on g-band.
g_inputCount_flag_noInputs
boolean
No coadd inputs available. Forced on g-band.
g_ixx
double
pixel**2
HSM moments. Measured on g-band.
g_ixxDebiasedPSF
double
pixel**2
HSM moments. Measured on g-band.
g_ixxPSF
double
pixel**2
HSM moments. Measured on g-band.
g_ixxRound
double
pixel**2
HSM moments. Measured on g-band.
g_ixy
double
pixel**2
HSM moments. Measured on g-band.
g_ixyDebiasedPSF
double
pixel**2
HSM moments. Measured on g-band.
g_ixyPSF
double
pixel**2
HSM moments. Measured on g-band.
g_ixyRound
double
pixel**2
HSM moments. Measured on g-band.
g_iyy
double
pixel**2
HSM moments. Measured on g-band.
g_iyyDebiasedPSF
double
pixel**2
HSM moments. Measured on g-band.
g_iyyPSF
double
pixel**2
HSM moments. Measured on g-band.
g_iyyRound
double
pixel**2
HSM moments. Measured on g-band.
g_kronFlux
double
nJy
Flux from Kron Flux algorithm. Measured on g-band.
g_kronFluxErr
double
nJy
Flux uncertainty from Kron Flux algorithm. Measured on g-band.
g_kronFlux_flag
boolean
General failure flag, set if anything went wrong. Measured on g-band.
g_kronFlux_flag_bad_radius
boolean
Bad Kron radius. Measured on g-band.
g_kronFlux_flag_bad_shape
boolean
Shape for measuring Kron radius is bad; used PSF shape. Measured on g-band.
g_kronFlux_flag_bad_shape_no_psf
boolean
Bad shape and no PSF. Measured on g-band.
g_kronFlux_flag_edge
boolean
Bad measurement due to image edge. Measured on g-band.
g_kronFlux_flag_no_fallback_radius
boolean
No minimum radius and no PSF provided. Measured on g-band.
g_kronFlux_flag_no_minimum_radius
boolean
Minimum radius could not be enforced, no minimum value or PSF. Measured on g-band.
g_kronFlux_flag_small_radius
boolean
Measured Kron radius was smaller than that of the PSF. Measured on g-band.
g_kronFlux_flag_used_minimum_radius
boolean
Used the minimum radius for the Kron aperture. Measured on g-band.
g_kronFlux_flag_used_psf_radius
boolean
Used the PSF Kron radius for the Kron aperture. Measured on g-band.
g_kronRad
float
Kron radius (sqrt(a*b)). Measured on g-band.
g_pixelFlags_bad
boolean
Bad pixel in the Source footprint. Measured on g-band.
g_pixelFlags_clipped
boolean
Source footprint includes CLIPPED pixels. Measured on g-band.
g_pixelFlags_clippedCenter
boolean
Source center is close to CLIPPED pixels. Measured on g-band.
g_pixelFlags_cr
boolean
Cosmic ray in the Source footprint. Measured on g-band.
g_pixelFlags_crCenter
boolean
Cosmic ray in the Source center. Measured on g-band.
g_pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA). Measured on g-band.
g_pixelFlags_inexact_psf
boolean
Source footprint includes INEXACT_PSF pixels. Measured on g-band.
g_pixelFlags_inexact_psfCenter
boolean
Source center is close to INEXACT_PSF pixels. Measured on g-band.
g_pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint. Measured on g-band.
g_pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center. Measured on g-band.
g_pixelFlags_offimage
boolean
Source center is off image. Measured on g-band.
g_pixelFlags_saturated
boolean
Saturated pixel in the Source footprint. Measured on g-band.
g_pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center. Measured on g-band.
g_pixelFlags_sensor_edge
boolean
Source footprint includes SENSOR_EDGE pixels. Measured on g-band.
g_pixelFlags_sensor_edgeCenter
boolean
Source center is close to SENSOR_EDGE pixels. Measured on g-band.
g_pixelFlags_suspect
boolean
Source's footprint includes suspect pixels. Measured on g-band.
g_pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels. Measured on g-band.
g_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Forced on g-band.
g_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Forced on g-band.
g_psfFlux_area
float
pixel
Effective area of PSF. Forced on g-band.
g_psfFlux_flag
boolean
General Failure Flag. Forced on g-band.
g_psfFlux_flag_apCorr
boolean
Set if unable to aperture correct base_PsfFlux. Forced on g-band.
g_psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model. Forced on g-band.
g_psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit. Forced on g-band.
g_ra
double
deg
Position in Right Ascension. Measured on g-band. [pos.eq.ra]
i_ap03Flux
double
nJy
Flux within 3.0-pixel aperture. Forced on i-band.
i_ap03FluxErr
double
nJy
Flux uncertainty within 3.0-pixel aperture. Forced on i-band.
i_ap03Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap06Flux
double
nJy
Flux within 6.0-pixel aperture. Forced on i-band.
i_ap06FluxErr
double
nJy
Flux uncertainty within 6.0-pixel aperture. Forced on i-band.
i_ap06Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap09Flux
double
nJy
Flux within 9.0-pixel aperture. Forced on i-band.
i_ap09FluxErr
double
nJy
Flux uncertainty within 9.0-pixel aperture. Forced on i-band.
i_ap09Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap12Flux
double
nJy
Flux within 12.0-pixel aperture. Forced on i-band.
i_ap12FluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Forced on i-band.
i_ap12Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap17Flux
double
nJy
Flux within 17.0-pixel aperture. Forced on i-band.
i_ap17FluxErr
double
nJy
Flux uncertainty within 17.0-pixel aperture. Forced on i-band.
i_ap17Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap25Flux
double
nJy
Flux within 25.0-pixel aperture. Forced on i-band.
i_ap25FluxErr
double
nJy
Flux uncertainty within 25.0-pixel aperture. Forced on i-band.
i_ap25Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap35Flux
double
nJy
Flux within 35.0-pixel aperture. Forced on i-band.
i_ap35FluxErr
double
nJy
Flux uncertainty within 35.0-pixel aperture. Forced on i-band.
i_ap35Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap50Flux
double
nJy
Flux within 50.0-pixel aperture. Forced on i-band.
i_ap50FluxErr
double
nJy
Flux uncertainty within 50.0-pixel aperture. Forced on i-band.
i_ap50Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_ap70Flux
double
nJy
Flux within 70.0-pixel aperture. Forced on i-band.
i_ap70FluxErr
double
nJy
Flux uncertainty within 70.0-pixel aperture. Forced on i-band.
i_ap70Flux_flag
boolean
General Failure Flag. Forced on i-band.
i_apFlux_flag
boolean
General Failure Flag. Measured on i-band.
i_apFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on i-band.
i_apFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on i-band.
i_bdChi2
double
-ln(likelihood) (chi^2) in cmodel fit. Measured on i-band.
i_bdE1
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on i-band.
i_bdE2
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on i-band.
i_bdFluxB
double
nJy
Flux from the de Vaucouleurs fit. Measured on i-band.
i_bdFluxBErr
double
nJy
Flux uncertainty from the de Vaucouleurs fit. Measured on i-band.
i_bdFluxD
double
nJy
Flux from the exponential fit. Measured on i-band.
i_bdFluxDErr
double
nJy
Flux uncertainty from the exponential fit. Measured on i-band.
i_bdReB
double
pixel**2
Half-light ellipse of the de Vaucouleurs fit. Measured on i-band.
i_bdReD
double
pixel**2
Half-light ellipse of the exponential fit. Measured on i-band.
i_blendedness
double
Measure of how much the flux is affected by neighbors, (1 - child_flux/parent_flux).
Operates on the absolute value of the pixels to try to obtain a de-noised value.
See section 4.9.11 of Bosch et al. 2018, PASJ, 70, S5 for details. Measured on i-band.
i_blendedness_flag
boolean
General Failure Flag. Measured on i-band.
i_cModelFlux
double
nJy
Flux from the final cmodel fit. Forced on i-band.
i_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Forced on i-band.
i_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Forced on i-band.
i_cModel_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Forced on i-band.
i_cModel_flag_apCorr
boolean
Set if unable to aperture correct modelfit_CModel. Forced on i-band.
i_calibFlux
double
nJy
Flux within 12.0-pixel aperture. Measured on i-band.
i_calibFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Measured on i-band.
i_calibFlux_flag
boolean
General Failure Flag. Measured on i-band.
i_calibFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on i-band.
i_calibFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on i-band.
i_calib_astrometry_used
boolean
Propagated from sources. Measured on i-band.
i_calib_photometry_reserved
boolean
Propagated from sources. Measured on i-band.
i_calib_photometry_used
boolean
Propagated from sources. Measured on i-band.
i_calib_psf_candidate
boolean
Propagated from sources. Measured on i-band.
i_calib_psf_reserved
boolean
Propagated from sources. Measured on i-band.
i_calib_psf_used
boolean
Propagated from sources. Measured on i-band.
i_centroid_flag
boolean
General Failure Flag. Measured on i-band.
i_centroid_x
double
pixel
Centroid from SDSS Centroid algorithm. Measured on i-band.
i_centroid_xErr
float
pixel
1-sigma uncertainty on x position. Measured on i-band.
i_centroid_y
double
pixel
Centroid from SDSS Centroid algorithm. Measured on i-band.
i_centroid_yErr
float
pixel
1-sigma uncertainty on y position. Measured on i-band.
i_decl
double
deg
Position in Declination. Measured on i-band. [pos.eq.dec]
i_extendedness
double
Set to 1 for extended sources, 0 for point sources. Measured on i-band.
i_extendedness_flag
boolean
Set to 1 for any fatal failure. Measured on i-band.
i_free_cModelFlux
double
nJy
Flux from the final cmodel fit. Measured on i-band.
i_free_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Measured on i-band.
i_free_cModelFlux_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Measured on i-band.
i_free_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Measured on i-band.
i_free_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Measured on i-band.
i_free_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Measured on i-band.
i_free_psfFlux_flag
boolean
General Failure Flag. Measured on i-band.
i_fwhm
double
pixel**2
HSM moments. Measured on i-band.
i_gaap0p5Flux
double
nJy
GaaP flux with 0.5 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap0p5FluxErr
double
nJy
GaaP flux uncertainty with 0.5 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap0p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on i-band.
i_gaap0p7Flux
double
nJy
GaaP flux with 0.7 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap0p7FluxErr
double
nJy
GaaP flux uncertainty with 0.7 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap0p7Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on i-band.
i_gaap1p0Flux
double
nJy
GaaP flux with 1.0 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap1p0FluxErr
double
nJy
GaaP flux uncertainty with 1.0 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap1p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on i-band.
i_gaap1p5Flux
double
nJy
GaaP flux with 1.5 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap1p5FluxErr
double
nJy
GaaP flux uncertainty with 1.5 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap1p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on i-band.
i_gaap2p5Flux
double
nJy
GaaP flux with 2.5 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap2p5FluxErr
double
nJy
GaaP flux uncertainty with 2.5 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap2p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on i-band.
i_gaap3p0Flux
double
nJy
GaaP flux with 3.0 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap3p0FluxErr
double
nJy
GaaP flux uncertainty with 3.0 aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaap3p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on i-band.
i_gaapFlux_flag
boolean
Set for any fatal failure. Forced on i-band.
i_gaapFlux_flag_edge
boolean
Source is too close to the edge. Forced on i-band.
i_gaapFlux_flag_gaussianization
boolean
PSF Gaussianization failed when trying to scale by this factor. Forced on i-band.
i_gaapOptimalFlux
double
nJy
GaaP flux with optimal aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaapOptimalFluxErr
double
nJy
GaaP flux uncertainty with optimal aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaapOptimalFlux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on i-band.
i_gaapPsfFlux
double
nJy
GaaP flux with PSF aperture after multiplying the seeing by 1.15. Forced on i-band.
i_gaapPsfFluxErr
double
nJy
GaaP flux uncertainty with PSF aperture after multiplying the seeing by 1.15. Forced on i-band.
i_hsmShapeRegauss_e1
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on i-band.
i_hsmShapeRegauss_e2
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on i-band.
i_hsmShapeRegauss_flag
boolean
General failure flag, set if anything went wrong. Measured on i-band.
i_hsmShapeRegauss_sigma
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on i-band.
i_iDebiasedPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on i-band.
i_iPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on i-band.
i_iRound_flag
double
pixel**2
HSM moments. Measured on i-band.
i_i_flag
boolean
General failure flag, set if anything went wrong. Measured on i-band.
i_inputCount
int
Number of images contributing at center, not including any clipping. Forced on i-band.
i_inputCount_flag
boolean
Set for any fatal failure. Forced on i-band.
i_inputCount_flag_noInputs
boolean
No coadd inputs available. Forced on i-band.
i_ixx
double
pixel**2
HSM moments. Measured on i-band.
i_ixxDebiasedPSF
double
pixel**2
HSM moments. Measured on i-band.
i_ixxPSF
double
pixel**2
HSM moments. Measured on i-band.
i_ixxRound
double
pixel**2
HSM moments. Measured on i-band.
i_ixy
double
pixel**2
HSM moments. Measured on i-band.
i_ixyDebiasedPSF
double
pixel**2
HSM moments. Measured on i-band.
i_ixyPSF
double
pixel**2
HSM moments. Measured on i-band.
i_ixyRound
double
pixel**2
HSM moments. Measured on i-band.
i_iyy
double
pixel**2
HSM moments. Measured on i-band.
i_iyyDebiasedPSF
double
pixel**2
HSM moments. Measured on i-band.
i_iyyPSF
double
pixel**2
HSM moments. Measured on i-band.
i_iyyRound
double
pixel**2
HSM moments. Measured on i-band.
i_kronFlux
double
nJy
Flux from Kron Flux algorithm. Measured on i-band.
i_kronFluxErr
double
nJy
Flux uncertainty from Kron Flux algorithm. Measured on i-band.
i_kronFlux_flag
boolean
General failure flag, set if anything went wrong. Measured on i-band.
i_kronFlux_flag_bad_radius
boolean
Bad Kron radius. Measured on i-band.
i_kronFlux_flag_bad_shape
boolean
Shape for measuring Kron radius is bad; used PSF shape. Measured on i-band.
i_kronFlux_flag_bad_shape_no_psf
boolean
Bad shape and no PSF. Measured on i-band.
i_kronFlux_flag_edge
boolean
Bad measurement due to image edge. Measured on i-band.
i_kronFlux_flag_no_fallback_radius
boolean
No minimum radius and no PSF provided. Measured on i-band.
i_kronFlux_flag_no_minimum_radius
boolean
Minimum radius could not be enforced, no minimum value or PSF. Measured on i-band.
i_kronFlux_flag_small_radius
boolean
Measured Kron radius was smaller than that of the PSF. Measured on i-band.
i_kronFlux_flag_used_minimum_radius
boolean
Used the minimum radius for the Kron aperture. Measured on i-band.
i_kronFlux_flag_used_psf_radius
boolean
Used the PSF Kron radius for the Kron aperture. Measured on i-band.
i_kronRad
float
Kron radius (sqrt(a*b)). Measured on i-band.
i_pixelFlags_bad
boolean
Bad pixel in the Source footprint. Measured on i-band.
i_pixelFlags_clipped
boolean
Source footprint includes CLIPPED pixels. Measured on i-band.
i_pixelFlags_clippedCenter
boolean
Source center is close to CLIPPED pixels. Measured on i-band.
i_pixelFlags_cr
boolean
Cosmic ray in the Source footprint. Measured on i-band.
i_pixelFlags_crCenter
boolean
Cosmic ray in the Source center. Measured on i-band.
i_pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA). Measured on i-band.
i_pixelFlags_inexact_psf
boolean
Source footprint includes INEXACT_PSF pixels. Measured on i-band.
i_pixelFlags_inexact_psfCenter
boolean
Source center is close to INEXACT_PSF pixels. Measured on i-band.
i_pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint. Measured on i-band.
i_pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center. Measured on i-band.
i_pixelFlags_offimage
boolean
Source center is off image. Measured on i-band.
i_pixelFlags_saturated
boolean
Saturated pixel in the Source footprint. Measured on i-band.
i_pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center. Measured on i-band.
i_pixelFlags_sensor_edge
boolean
Source footprint includes SENSOR_EDGE pixels. Measured on i-band.
i_pixelFlags_sensor_edgeCenter
boolean
Source center is close to SENSOR_EDGE pixels. Measured on i-band.
i_pixelFlags_suspect
boolean
Source's footprint includes suspect pixels. Measured on i-band.
i_pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels. Measured on i-band.
i_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Forced on i-band.
i_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Forced on i-band.
i_psfFlux_area
float
pixel
Effective area of PSF. Forced on i-band.
i_psfFlux_flag
boolean
General Failure Flag. Forced on i-band.
i_psfFlux_flag_apCorr
boolean
Set if unable to aperture correct base_PsfFlux. Forced on i-band.
i_psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model. Forced on i-band.
i_psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit. Forced on i-band.
i_ra
double
deg
Position in Right Ascension. Measured on i-band. [pos.eq.ra]
r_ap03Flux
double
nJy
Flux within 3.0-pixel aperture. Forced on r-band.
r_ap03FluxErr
double
nJy
Flux uncertainty within 3.0-pixel aperture. Forced on r-band.
r_ap03Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap06Flux
double
nJy
Flux within 6.0-pixel aperture. Forced on r-band.
r_ap06FluxErr
double
nJy
Flux uncertainty within 6.0-pixel aperture. Forced on r-band.
r_ap06Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap09Flux
double
nJy
Flux within 9.0-pixel aperture. Forced on r-band.
r_ap09FluxErr
double
nJy
Flux uncertainty within 9.0-pixel aperture. Forced on r-band.
r_ap09Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap12Flux
double
nJy
Flux within 12.0-pixel aperture. Forced on r-band.
r_ap12FluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Forced on r-band.
r_ap12Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap17Flux
double
nJy
Flux within 17.0-pixel aperture. Forced on r-band.
r_ap17FluxErr
double
nJy
Flux uncertainty within 17.0-pixel aperture. Forced on r-band.
r_ap17Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap25Flux
double
nJy
Flux within 25.0-pixel aperture. Forced on r-band.
r_ap25FluxErr
double
nJy
Flux uncertainty within 25.0-pixel aperture. Forced on r-band.
r_ap25Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap35Flux
double
nJy
Flux within 35.0-pixel aperture. Forced on r-band.
r_ap35FluxErr
double
nJy
Flux uncertainty within 35.0-pixel aperture. Forced on r-band.
r_ap35Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap50Flux
double
nJy
Flux within 50.0-pixel aperture. Forced on r-band.
r_ap50FluxErr
double
nJy
Flux uncertainty within 50.0-pixel aperture. Forced on r-band.
r_ap50Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_ap70Flux
double
nJy
Flux within 70.0-pixel aperture. Forced on r-band.
r_ap70FluxErr
double
nJy
Flux uncertainty within 70.0-pixel aperture. Forced on r-band.
r_ap70Flux_flag
boolean
General Failure Flag. Forced on r-band.
r_apFlux_flag
boolean
General Failure Flag. Measured on r-band.
r_apFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on r-band.
r_apFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on r-band.
r_bdChi2
double
-ln(likelihood) (chi^2) in cmodel fit. Measured on r-band.
r_bdE1
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on r-band.
r_bdE2
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on r-band.
r_bdFluxB
double
nJy
Flux from the de Vaucouleurs fit. Measured on r-band.
r_bdFluxBErr
double
nJy
Flux uncertainty from the de Vaucouleurs fit. Measured on r-band.
r_bdFluxD
double
nJy
Flux from the exponential fit. Measured on r-band.
r_bdFluxDErr
double
nJy
Flux uncertainty from the exponential fit. Measured on r-band.
r_bdReB
double
pixel**2
Half-light ellipse of the de Vaucouleurs fit. Measured on r-band.
r_bdReD
double
pixel**2
Half-light ellipse of the exponential fit. Measured on r-band.
r_blendedness
double
Measure of how much the flux is affected by neighbors, (1 - child_flux/parent_flux).
Operates on the absolute value of the pixels to try to obtain a de-noised value.
See section 4.9.11 of Bosch et al. 2018, PASJ, 70, S5 for details. Measured on r-band.
r_blendedness_flag
boolean
General Failure Flag. Measured on r-band.
r_cModelFlux
double
nJy
Flux from the final cmodel fit. Forced on r-band.
r_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Forced on r-band.
r_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Forced on r-band.
r_cModel_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Forced on r-band.
r_cModel_flag_apCorr
boolean
Set if unable to aperture correct modelfit_CModel. Forced on r-band.
r_calibFlux
double
nJy
Flux within 12.0-pixel aperture. Measured on r-band.
r_calibFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Measured on r-band.
r_calibFlux_flag
boolean
General Failure Flag. Measured on r-band.
r_calibFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on r-band.
r_calibFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on r-band.
r_calib_astrometry_used
boolean
Propagated from sources. Measured on r-band.
r_calib_photometry_reserved
boolean
Propagated from sources. Measured on r-band.
r_calib_photometry_used
boolean
Propagated from sources. Measured on r-band.
r_calib_psf_candidate
boolean
Propagated from sources. Measured on r-band.
r_calib_psf_reserved
boolean
Propagated from sources. Measured on r-band.
r_calib_psf_used
boolean
Propagated from sources. Measured on r-band.
r_centroid_flag
boolean
General Failure Flag. Measured on r-band.
r_centroid_x
double
pixel
Centroid from SDSS Centroid algorithm. Measured on r-band.
r_centroid_xErr
float
pixel
1-sigma uncertainty on x position. Measured on r-band.
r_centroid_y
double
pixel
Centroid from SDSS Centroid algorithm. Measured on r-band.
r_centroid_yErr
float
pixel
1-sigma uncertainty on y position. Measured on r-band.
r_decl
double
deg
Position in Declination. Measured on r-band. [pos.eq.dec]
r_extendedness
double
Set to 1 for extended sources, 0 for point sources. Measured on r-band.
r_extendedness_flag
boolean
Set to 1 for any fatal failure. Measured on r-band.
r_free_cModelFlux
double
nJy
Flux from the final cmodel fit. Measured on r-band.
r_free_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Measured on r-band.
r_free_cModelFlux_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Measured on r-band.
r_free_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Measured on r-band.
r_free_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Measured on r-band.
r_free_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Measured on r-band.
r_free_psfFlux_flag
boolean
General Failure Flag. Measured on r-band.
r_fwhm
double
pixel**2
HSM moments. Measured on r-band.
r_gaap0p5Flux
double
nJy
GaaP flux with 0.5 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap0p5FluxErr
double
nJy
GaaP flux uncertainty with 0.5 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap0p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on r-band.
r_gaap0p7Flux
double
nJy
GaaP flux with 0.7 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap0p7FluxErr
double
nJy
GaaP flux uncertainty with 0.7 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap0p7Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on r-band.
r_gaap1p0Flux
double
nJy
GaaP flux with 1.0 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap1p0FluxErr
double
nJy
GaaP flux uncertainty with 1.0 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap1p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on r-band.
r_gaap1p5Flux
double
nJy
GaaP flux with 1.5 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap1p5FluxErr
double
nJy
GaaP flux uncertainty with 1.5 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap1p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on r-band.
r_gaap2p5Flux
double
nJy
GaaP flux with 2.5 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap2p5FluxErr
double
nJy
GaaP flux uncertainty with 2.5 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap2p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on r-band.
r_gaap3p0Flux
double
nJy
GaaP flux with 3.0 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap3p0FluxErr
double
nJy
GaaP flux uncertainty with 3.0 aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaap3p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on r-band.
r_gaapFlux_flag
boolean
Set for any fatal failure. Forced on r-band.
r_gaapFlux_flag_edge
boolean
Source is too close to the edge. Forced on r-band.
r_gaapFlux_flag_gaussianization
boolean
PSF Gaussianization failed when trying to scale by this factor. Forced on r-band.
r_gaapOptimalFlux
double
nJy
GaaP flux with optimal aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaapOptimalFluxErr
double
nJy
GaaP flux uncertainty with optimal aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaapOptimalFlux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on r-band.
r_gaapPsfFlux
double
nJy
GaaP flux with PSF aperture after multiplying the seeing by 1.15. Forced on r-band.
r_gaapPsfFluxErr
double
nJy
GaaP flux uncertainty with PSF aperture after multiplying the seeing by 1.15. Forced on r-band.
r_hsmShapeRegauss_e1
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on r-band.
r_hsmShapeRegauss_e2
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on r-band.
r_hsmShapeRegauss_flag
boolean
General failure flag, set if anything went wrong. Measured on r-band.
r_hsmShapeRegauss_sigma
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on r-band.
r_iDebiasedPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on r-band.
r_iPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on r-band.
r_iRound_flag
double
pixel**2
HSM moments. Measured on r-band.
r_i_flag
boolean
General failure flag, set if anything went wrong. Measured on r-band.
r_inputCount
int
Number of images contributing at center, not including any clipping. Forced on r-band.
r_inputCount_flag
boolean
Set for any fatal failure. Forced on r-band.
r_inputCount_flag_noInputs
boolean
No coadd inputs available. Forced on r-band.
r_ixx
double
pixel**2
HSM moments. Measured on r-band.
r_ixxDebiasedPSF
double
pixel**2
HSM moments. Measured on r-band.
r_ixxPSF
double
pixel**2
HSM moments. Measured on r-band.
r_ixxRound
double
pixel**2
HSM moments. Measured on r-band.
r_ixy
double
pixel**2
HSM moments. Measured on r-band.
r_ixyDebiasedPSF
double
pixel**2
HSM moments. Measured on r-band.
r_ixyPSF
double
pixel**2
HSM moments. Measured on r-band.
r_ixyRound
double
pixel**2
HSM moments. Measured on r-band.
r_iyy
double
pixel**2
HSM moments. Measured on r-band.
r_iyyDebiasedPSF
double
pixel**2
HSM moments. Measured on r-band.
r_iyyPSF
double
pixel**2
HSM moments. Measured on r-band.
r_iyyRound
double
pixel**2
HSM moments. Measured on r-band.
r_kronFlux
double
nJy
Flux from Kron Flux algorithm. Measured on r-band.
r_kronFluxErr
double
nJy
Flux uncertainty from Kron Flux algorithm. Measured on r-band.
r_kronFlux_flag
boolean
General failure flag, set if anything went wrong. Measured on r-band.
r_kronFlux_flag_bad_radius
boolean
Bad Kron radius. Measured on r-band.
r_kronFlux_flag_bad_shape
boolean
Shape for measuring Kron radius is bad; used PSF shape. Measured on r-band.
r_kronFlux_flag_bad_shape_no_psf
boolean
Bad shape and no PSF. Measured on r-band.
r_kronFlux_flag_edge
boolean
Bad measurement due to image edge. Measured on r-band.
r_kronFlux_flag_no_fallback_radius
boolean
No minimum radius and no PSF provided. Measured on r-band.
r_kronFlux_flag_no_minimum_radius
boolean
Minimum radius could not be enforced, no minimum value or PSF. Measured on r-band.
r_kronFlux_flag_small_radius
boolean
Measured Kron radius was smaller than that of the PSF. Measured on r-band.
r_kronFlux_flag_used_minimum_radius
boolean
Used the minimum radius for the Kron aperture. Measured on r-band.
r_kronFlux_flag_used_psf_radius
boolean
Used the PSF Kron radius for the Kron aperture. Measured on r-band.
r_kronRad
float
Kron radius (sqrt(a*b)). Measured on r-band.
r_pixelFlags_bad
boolean
Bad pixel in the Source footprint. Measured on r-band.
r_pixelFlags_clipped
boolean
Source footprint includes CLIPPED pixels. Measured on r-band.
r_pixelFlags_clippedCenter
boolean
Source center is close to CLIPPED pixels. Measured on r-band.
r_pixelFlags_cr
boolean
Cosmic ray in the Source footprint. Measured on r-band.
r_pixelFlags_crCenter
boolean
Cosmic ray in the Source center. Measured on r-band.
r_pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA). Measured on r-band.
r_pixelFlags_inexact_psf
boolean
Source footprint includes INEXACT_PSF pixels. Measured on r-band.
r_pixelFlags_inexact_psfCenter
boolean
Source center is close to INEXACT_PSF pixels. Measured on r-band.
r_pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint. Measured on r-band.
r_pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center. Measured on r-band.
r_pixelFlags_offimage
boolean
Source center is off image. Measured on r-band.
r_pixelFlags_saturated
boolean
Saturated pixel in the Source footprint. Measured on r-band.
r_pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center. Measured on r-band.
r_pixelFlags_sensor_edge
boolean
Source footprint includes SENSOR_EDGE pixels. Measured on r-band.
r_pixelFlags_sensor_edgeCenter
boolean
Source center is close to SENSOR_EDGE pixels. Measured on r-band.
r_pixelFlags_suspect
boolean
Source's footprint includes suspect pixels. Measured on r-band.
r_pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels. Measured on r-band.
r_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Forced on r-band.
r_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Forced on r-band.
r_psfFlux_area
float
pixel
Effective area of PSF. Forced on r-band.
r_psfFlux_flag
boolean
General Failure Flag. Forced on r-band.
r_psfFlux_flag_apCorr
boolean
Set if unable to aperture correct base_PsfFlux. Forced on r-band.
r_psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model. Forced on r-band.
r_psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit. Forced on r-band.
r_ra
double
deg
Position in Right Ascension. Measured on r-band. [pos.eq.ra]
u_ap03Flux
double
nJy
Flux within 3.0-pixel aperture. Forced on u-band.
u_ap03FluxErr
double
nJy
Flux uncertainty within 3.0-pixel aperture. Forced on u-band.
u_ap03Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap06Flux
double
nJy
Flux within 6.0-pixel aperture. Forced on u-band.
u_ap06FluxErr
double
nJy
Flux uncertainty within 6.0-pixel aperture. Forced on u-band.
u_ap06Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap09Flux
double
nJy
Flux within 9.0-pixel aperture. Forced on u-band.
u_ap09FluxErr
double
nJy
Flux uncertainty within 9.0-pixel aperture. Forced on u-band.
u_ap09Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap12Flux
double
nJy
Flux within 12.0-pixel aperture. Forced on u-band.
u_ap12FluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Forced on u-band.
u_ap12Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap17Flux
double
nJy
Flux within 17.0-pixel aperture. Forced on u-band.
u_ap17FluxErr
double
nJy
Flux uncertainty within 17.0-pixel aperture. Forced on u-band.
u_ap17Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap25Flux
double
nJy
Flux within 25.0-pixel aperture. Forced on u-band.
u_ap25FluxErr
double
nJy
Flux uncertainty within 25.0-pixel aperture. Forced on u-band.
u_ap25Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap35Flux
double
nJy
Flux within 35.0-pixel aperture. Forced on u-band.
u_ap35FluxErr
double
nJy
Flux uncertainty within 35.0-pixel aperture. Forced on u-band.
u_ap35Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap50Flux
double
nJy
Flux within 50.0-pixel aperture. Forced on u-band.
u_ap50FluxErr
double
nJy
Flux uncertainty within 50.0-pixel aperture. Forced on u-band.
u_ap50Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_ap70Flux
double
nJy
Flux within 70.0-pixel aperture. Forced on u-band.
u_ap70FluxErr
double
nJy
Flux uncertainty within 70.0-pixel aperture. Forced on u-band.
u_ap70Flux_flag
boolean
General Failure Flag. Forced on u-band.
u_apFlux_flag
boolean
General Failure Flag. Measured on u-band.
u_apFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on u-band.
u_apFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on u-band.
u_bdChi2
double
-ln(likelihood) (chi^2) in cmodel fit. Measured on u-band.
u_bdE1
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on u-band.
u_bdE2
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on u-band.
u_bdFluxB
double
nJy
Flux from the de Vaucouleurs fit. Measured on u-band.
u_bdFluxBErr
double
nJy
Flux uncertainty from the de Vaucouleurs fit. Measured on u-band.
u_bdFluxD
double
nJy
Flux from the exponential fit. Measured on u-band.
u_bdFluxDErr
double
nJy
Flux uncertainty from the exponential fit. Measured on u-band.
u_bdReB
double
pixel**2
Half-light ellipse of the de Vaucouleurs fit. Measured on u-band.
u_bdReD
double
pixel**2
Half-light ellipse of the exponential fit. Measured on u-band.
u_blendedness
double
Measure of how much the flux is affected by neighbors, (1 - child_flux/parent_flux).
Operates on the absolute value of the pixels to try to obtain a de-noised value.
See section 4.9.11 of Bosch et al. 2018, PASJ, 70, S5 for details. Measured on u-band.
u_blendedness_flag
boolean
General Failure Flag. Measured on u-band.
u_cModelFlux
double
nJy
Flux from the final cmodel fit. Forced on u-band.
u_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Forced on u-band.
u_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Forced on u-band.
u_cModel_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Forced on u-band.
u_cModel_flag_apCorr
boolean
Set if unable to aperture correct modelfit_CModel. Forced on u-band.
u_calibFlux
double
nJy
Flux within 12.0-pixel aperture. Measured on u-band.
u_calibFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Measured on u-band.
u_calibFlux_flag
boolean
General Failure Flag. Measured on u-band.
u_calibFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on u-band.
u_calibFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on u-band.
u_calib_astrometry_used
boolean
Propagated from sources. Measured on u-band.
u_calib_photometry_reserved
boolean
Propagated from sources. Measured on u-band.
u_calib_photometry_used
boolean
Propagated from sources. Measured on u-band.
u_calib_psf_candidate
boolean
Propagated from sources. Measured on u-band.
u_calib_psf_reserved
boolean
Propagated from sources. Measured on u-band.
u_calib_psf_used
boolean
Propagated from sources. Measured on u-band.
u_centroid_flag
boolean
General Failure Flag. Measured on u-band.
u_centroid_x
double
pixel
Centroid from SDSS Centroid algorithm. Measured on u-band.
u_centroid_xErr
float
pixel
1-sigma uncertainty on x position. Measured on u-band.
u_centroid_y
double
pixel
Centroid from SDSS Centroid algorithm. Measured on u-band.
u_centroid_yErr
float
pixel
1-sigma uncertainty on y position. Measured on u-band.
u_decl
double
deg
Position in Declination. Measured on u-band. [pos.eq.dec]
u_extendedness
double
Set to 1 for extended sources, 0 for point sources. Measured on u-band.
u_extendedness_flag
boolean
Set to 1 for any fatal failure. Measured on u-band.
u_free_cModelFlux
double
nJy
Flux from the final cmodel fit. Measured on u-band.
u_free_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Measured on u-band.
u_free_cModelFlux_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Measured on u-band.
u_free_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Measured on u-band.
u_free_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Measured on u-band.
u_free_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Measured on u-band.
u_free_psfFlux_flag
boolean
General Failure Flag. Measured on u-band.
u_fwhm
double
pixel**2
HSM moments. Measured on u-band.
u_gaap0p5Flux
double
nJy
GaaP flux with 0.5 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap0p5FluxErr
double
nJy
GaaP flux uncertainty with 0.5 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap0p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on u-band.
u_gaap0p7Flux
double
nJy
GaaP flux with 0.7 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap0p7FluxErr
double
nJy
GaaP flux uncertainty with 0.7 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap0p7Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on u-band.
u_gaap1p0Flux
double
nJy
GaaP flux with 1.0 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap1p0FluxErr
double
nJy
GaaP flux uncertainty with 1.0 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap1p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on u-band.
u_gaap1p5Flux
double
nJy
GaaP flux with 1.5 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap1p5FluxErr
double
nJy
GaaP flux uncertainty with 1.5 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap1p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on u-band.
u_gaap2p5Flux
double
nJy
GaaP flux with 2.5 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap2p5FluxErr
double
nJy
GaaP flux uncertainty with 2.5 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap2p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on u-band.
u_gaap3p0Flux
double
nJy
GaaP flux with 3.0 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap3p0FluxErr
double
nJy
GaaP flux uncertainty with 3.0 aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaap3p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on u-band.
u_gaapFlux_flag
boolean
Set for any fatal failure. Forced on u-band.
u_gaapFlux_flag_edge
boolean
Source is too close to the edge. Forced on u-band.
u_gaapFlux_flag_gaussianization
boolean
PSF Gaussianization failed when trying to scale by this factor. Forced on u-band.
u_gaapOptimalFlux
double
nJy
GaaP flux with optimal aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaapOptimalFluxErr
double
nJy
GaaP flux uncertainty with optimal aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaapOptimalFlux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on u-band.
u_gaapPsfFlux
double
nJy
GaaP flux with PSF aperture after multiplying the seeing by 1.15. Forced on u-band.
u_gaapPsfFluxErr
double
nJy
GaaP flux uncertainty with PSF aperture after multiplying the seeing by 1.15. Forced on u-band.
u_hsmShapeRegauss_e1
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on u-band.
u_hsmShapeRegauss_e2
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on u-band.
u_hsmShapeRegauss_flag
boolean
General failure flag, set if anything went wrong. Measured on u-band.
u_hsmShapeRegauss_sigma
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on u-band.
u_iDebiasedPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on u-band.
u_iPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on u-band.
u_iRound_flag
double
pixel**2
HSM moments. Measured on u-band.
u_i_flag
boolean
General failure flag, set if anything went wrong. Measured on u-band.
u_inputCount
int
Number of images contributing at center, not including any clipping. Forced on u-band.
u_inputCount_flag
boolean
Set for any fatal failure. Forced on u-band.
u_inputCount_flag_noInputs
boolean
No coadd inputs available. Forced on u-band.
u_ixx
double
pixel**2
HSM moments. Measured on u-band.
u_ixxDebiasedPSF
double
pixel**2
HSM moments. Measured on u-band.
u_ixxPSF
double
pixel**2
HSM moments. Measured on u-band.
u_ixxRound
double
pixel**2
HSM moments. Measured on u-band.
u_ixy
double
pixel**2
HSM moments. Measured on u-band.
u_ixyDebiasedPSF
double
pixel**2
HSM moments. Measured on u-band.
u_ixyPSF
double
pixel**2
HSM moments. Measured on u-band.
u_ixyRound
double
pixel**2
HSM moments. Measured on u-band.
u_iyy
double
pixel**2
HSM moments. Measured on u-band.
u_iyyDebiasedPSF
double
pixel**2
HSM moments. Measured on u-band.
u_iyyPSF
double
pixel**2
HSM moments. Measured on u-band.
u_iyyRound
double
pixel**2
HSM moments. Measured on u-band.
u_kronFlux
double
nJy
Flux from Kron Flux algorithm. Measured on u-band.
u_kronFluxErr
double
nJy
Flux uncertainty from Kron Flux algorithm. Measured on u-band.
u_kronFlux_flag
boolean
General failure flag, set if anything went wrong. Measured on u-band.
u_kronFlux_flag_bad_radius
boolean
Bad Kron radius. Measured on u-band.
u_kronFlux_flag_bad_shape
boolean
Shape for measuring Kron radius is bad; used PSF shape. Measured on u-band.
u_kronFlux_flag_bad_shape_no_psf
boolean
Bad shape and no PSF. Measured on u-band.
u_kronFlux_flag_edge
boolean
Bad measurement due to image edge. Measured on u-band.
u_kronFlux_flag_no_fallback_radius
boolean
No minimum radius and no PSF provided. Measured on u-band.
u_kronFlux_flag_no_minimum_radius
boolean
Minimum radius could not be enforced, no minimum value or PSF. Measured on u-band.
u_kronFlux_flag_small_radius
boolean
Measured Kron radius was smaller than that of the PSF. Measured on u-band.
u_kronFlux_flag_used_minimum_radius
boolean
Used the minimum radius for the Kron aperture. Measured on u-band.
u_kronFlux_flag_used_psf_radius
boolean
Used the PSF Kron radius for the Kron aperture. Measured on u-band.
u_kronRad
float
Kron radius (sqrt(a*b)). Measured on u-band.
u_pixelFlags_bad
boolean
Bad pixel in the Source footprint. Measured on u-band.
u_pixelFlags_clipped
boolean
Source footprint includes CLIPPED pixels. Measured on u-band.
u_pixelFlags_clippedCenter
boolean
Source center is close to CLIPPED pixels. Measured on u-band.
u_pixelFlags_cr
boolean
Cosmic ray in the Source footprint. Measured on u-band.
u_pixelFlags_crCenter
boolean
Cosmic ray in the Source center. Measured on u-band.
u_pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA). Measured on u-band.
u_pixelFlags_inexact_psf
boolean
Source footprint includes INEXACT_PSF pixels. Measured on u-band.
u_pixelFlags_inexact_psfCenter
boolean
Source center is close to INEXACT_PSF pixels. Measured on u-band.
u_pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint. Measured on u-band.
u_pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center. Measured on u-band.
u_pixelFlags_offimage
boolean
Source center is off image. Measured on u-band.
u_pixelFlags_saturated
boolean
Saturated pixel in the Source footprint. Measured on u-band.
u_pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center. Measured on u-band.
u_pixelFlags_sensor_edge
boolean
Source footprint includes SENSOR_EDGE pixels. Measured on u-band.
u_pixelFlags_sensor_edgeCenter
boolean
Source center is close to SENSOR_EDGE pixels. Measured on u-band.
u_pixelFlags_suspect
boolean
Source's footprint includes suspect pixels. Measured on u-band.
u_pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels. Measured on u-band.
u_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Forced on u-band.
u_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Forced on u-band.
u_psfFlux_area
float
pixel
Effective area of PSF. Forced on u-band.
u_psfFlux_flag
boolean
General Failure Flag. Forced on u-band.
u_psfFlux_flag_apCorr
boolean
Set if unable to aperture correct base_PsfFlux. Forced on u-band.
u_psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model. Forced on u-band.
u_psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit. Forced on u-band.
u_ra
double
deg
Position in Right Ascension. Measured on u-band. [pos.eq.ra]
y_ap03Flux
double
nJy
Flux within 3.0-pixel aperture. Forced on y-band.
y_ap03FluxErr
double
nJy
Flux uncertainty within 3.0-pixel aperture. Forced on y-band.
y_ap03Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap06Flux
double
nJy
Flux within 6.0-pixel aperture. Forced on y-band.
y_ap06FluxErr
double
nJy
Flux uncertainty within 6.0-pixel aperture. Forced on y-band.
y_ap06Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap09Flux
double
nJy
Flux within 9.0-pixel aperture. Forced on y-band.
y_ap09FluxErr
double
nJy
Flux uncertainty within 9.0-pixel aperture. Forced on y-band.
y_ap09Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap12Flux
double
nJy
Flux within 12.0-pixel aperture. Forced on y-band.
y_ap12FluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Forced on y-band.
y_ap12Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap17Flux
double
nJy
Flux within 17.0-pixel aperture. Forced on y-band.
y_ap17FluxErr
double
nJy
Flux uncertainty within 17.0-pixel aperture. Forced on y-band.
y_ap17Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap25Flux
double
nJy
Flux within 25.0-pixel aperture. Forced on y-band.
y_ap25FluxErr
double
nJy
Flux uncertainty within 25.0-pixel aperture. Forced on y-band.
y_ap25Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap35Flux
double
nJy
Flux within 35.0-pixel aperture. Forced on y-band.
y_ap35FluxErr
double
nJy
Flux uncertainty within 35.0-pixel aperture. Forced on y-band.
y_ap35Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap50Flux
double
nJy
Flux within 50.0-pixel aperture. Forced on y-band.
y_ap50FluxErr
double
nJy
Flux uncertainty within 50.0-pixel aperture. Forced on y-band.
y_ap50Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_ap70Flux
double
nJy
Flux within 70.0-pixel aperture. Forced on y-band.
y_ap70FluxErr
double
nJy
Flux uncertainty within 70.0-pixel aperture. Forced on y-band.
y_ap70Flux_flag
boolean
General Failure Flag. Forced on y-band.
y_apFlux_flag
boolean
General Failure Flag. Measured on y-band.
y_apFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on y-band.
y_apFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on y-band.
y_bdChi2
double
-ln(likelihood) (chi^2) in cmodel fit. Measured on y-band.
y_bdE1
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on y-band.
y_bdE2
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on y-band.
y_bdFluxB
double
nJy
Flux from the de Vaucouleurs fit. Measured on y-band.
y_bdFluxBErr
double
nJy
Flux uncertainty from the de Vaucouleurs fit. Measured on y-band.
y_bdFluxD
double
nJy
Flux from the exponential fit. Measured on y-band.
y_bdFluxDErr
double
nJy
Flux uncertainty from the exponential fit. Measured on y-band.
y_bdReB
double
pixel**2
Half-light ellipse of the de Vaucouleurs fit. Measured on y-band.
y_bdReD
double
pixel**2
Half-light ellipse of the exponential fit. Measured on y-band.
y_blendedness
double
Measure of how much the flux is affected by neighbors, (1 - child_flux/parent_flux).
Operates on the absolute value of the pixels to try to obtain a de-noised value.
See section 4.9.11 of Bosch et al. 2018, PASJ, 70, S5 for details. Measured on y-band.
y_blendedness_flag
boolean
General Failure Flag. Measured on y-band.
y_cModelFlux
double
nJy
Flux from the final cmodel fit. Forced on y-band.
y_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Forced on y-band.
y_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Forced on y-band.
y_cModel_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Forced on y-band.
y_cModel_flag_apCorr
boolean
Set if unable to aperture correct modelfit_CModel. Forced on y-band.
y_calibFlux
double
nJy
Flux within 12.0-pixel aperture. Measured on y-band.
y_calibFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Measured on y-band.
y_calibFlux_flag
boolean
General Failure Flag. Measured on y-band.
y_calibFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on y-band.
y_calibFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on y-band.
y_calib_astrometry_used
boolean
Propagated from sources. Measured on y-band.
y_calib_photometry_reserved
boolean
Propagated from sources. Measured on y-band.
y_calib_photometry_used
boolean
Propagated from sources. Measured on y-band.
y_calib_psf_candidate
boolean
Propagated from sources. Measured on y-band.
y_calib_psf_reserved
boolean
Propagated from sources. Measured on y-band.
y_calib_psf_used
boolean
Propagated from sources. Measured on y-band.
y_centroid_flag
boolean
General Failure Flag. Measured on y-band.
y_centroid_x
double
pixel
Centroid from SDSS Centroid algorithm. Measured on y-band.
y_centroid_xErr
float
pixel
1-sigma uncertainty on x position. Measured on y-band.
y_centroid_y
double
pixel
Centroid from SDSS Centroid algorithm. Measured on y-band.
y_centroid_yErr
float
pixel
1-sigma uncertainty on y position. Measured on y-band.
y_decl
double
deg
Position in Declination. Measured on y-band. [pos.eq.dec]
y_extendedness
double
Set to 1 for extended sources, 0 for point sources. Measured on y-band.
y_extendedness_flag
boolean
Set to 1 for any fatal failure. Measured on y-band.
y_free_cModelFlux
double
nJy
Flux from the final cmodel fit. Measured on y-band.
y_free_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Measured on y-band.
y_free_cModelFlux_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Measured on y-band.
y_free_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Measured on y-band.
y_free_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Measured on y-band.
y_free_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Measured on y-band.
y_free_psfFlux_flag
boolean
General Failure Flag. Measured on y-band.
y_fwhm
double
pixel**2
HSM moments. Measured on y-band.
y_gaap0p5Flux
double
nJy
GaaP flux with 0.5 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap0p5FluxErr
double
nJy
GaaP flux uncertainty with 0.5 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap0p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on y-band.
y_gaap0p7Flux
double
nJy
GaaP flux with 0.7 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap0p7FluxErr
double
nJy
GaaP flux uncertainty with 0.7 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap0p7Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on y-band.
y_gaap1p0Flux
double
nJy
GaaP flux with 1.0 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap1p0FluxErr
double
nJy
GaaP flux uncertainty with 1.0 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap1p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on y-band.
y_gaap1p5Flux
double
nJy
GaaP flux with 1.5 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap1p5FluxErr
double
nJy
GaaP flux uncertainty with 1.5 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap1p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on y-band.
y_gaap2p5Flux
double
nJy
GaaP flux with 2.5 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap2p5FluxErr
double
nJy
GaaP flux uncertainty with 2.5 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap2p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on y-band.
y_gaap3p0Flux
double
nJy
GaaP flux with 3.0 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap3p0FluxErr
double
nJy
GaaP flux uncertainty with 3.0 aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaap3p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on y-band.
y_gaapFlux_flag
boolean
Set for any fatal failure. Forced on y-band.
y_gaapFlux_flag_edge
boolean
Source is too close to the edge. Forced on y-band.
y_gaapFlux_flag_gaussianization
boolean
PSF Gaussianization failed when trying to scale by this factor. Forced on y-band.
y_gaapOptimalFlux
double
nJy
GaaP flux with optimal aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaapOptimalFluxErr
double
nJy
GaaP flux uncertainty with optimal aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaapOptimalFlux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on y-band.
y_gaapPsfFlux
double
nJy
GaaP flux with PSF aperture after multiplying the seeing by 1.15. Forced on y-band.
y_gaapPsfFluxErr
double
nJy
GaaP flux uncertainty with PSF aperture after multiplying the seeing by 1.15. Forced on y-band.
y_hsmShapeRegauss_e1
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on y-band.
y_hsmShapeRegauss_e2
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on y-band.
y_hsmShapeRegauss_flag
boolean
General failure flag, set if anything went wrong. Measured on y-band.
y_hsmShapeRegauss_sigma
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on y-band.
y_iDebiasedPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on y-band.
y_iPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on y-band.
y_iRound_flag
double
pixel**2
HSM moments. Measured on y-band.
y_i_flag
boolean
General failure flag, set if anything went wrong. Measured on y-band.
y_inputCount
int
Number of images contributing at center, not including any clipping. Forced on y-band.
y_inputCount_flag
boolean
Set for any fatal failure. Forced on y-band.
y_inputCount_flag_noInputs
boolean
No coadd inputs available. Forced on y-band.
y_ixx
double
pixel**2
HSM moments. Measured on y-band.
y_ixxDebiasedPSF
double
pixel**2
HSM moments. Measured on y-band.
y_ixxPSF
double
pixel**2
HSM moments. Measured on y-band.
y_ixxRound
double
pixel**2
HSM moments. Measured on y-band.
y_ixy
double
pixel**2
HSM moments. Measured on y-band.
y_ixyDebiasedPSF
double
pixel**2
HSM moments. Measured on y-band.
y_ixyPSF
double
pixel**2
HSM moments. Measured on y-band.
y_ixyRound
double
pixel**2
HSM moments. Measured on y-band.
y_iyy
double
pixel**2
HSM moments. Measured on y-band.
y_iyyDebiasedPSF
double
pixel**2
HSM moments. Measured on y-band.
y_iyyPSF
double
pixel**2
HSM moments. Measured on y-band.
y_iyyRound
double
pixel**2
HSM moments. Measured on y-band.
y_kronFlux
double
nJy
Flux from Kron Flux algorithm. Measured on y-band.
y_kronFluxErr
double
nJy
Flux uncertainty from Kron Flux algorithm. Measured on y-band.
y_kronFlux_flag
boolean
General failure flag, set if anything went wrong. Measured on y-band.
y_kronFlux_flag_bad_radius
boolean
Bad Kron radius. Measured on y-band.
y_kronFlux_flag_bad_shape
boolean
Shape for measuring Kron radius is bad; used PSF shape. Measured on y-band.
y_kronFlux_flag_bad_shape_no_psf
boolean
Bad shape and no PSF. Measured on y-band.
y_kronFlux_flag_edge
boolean
Bad measurement due to image edge. Measured on y-band.
y_kronFlux_flag_no_fallback_radius
boolean
No minimum radius and no PSF provided. Measured on y-band.
y_kronFlux_flag_no_minimum_radius
boolean
Minimum radius could not be enforced, no minimum value or PSF. Measured on y-band.
y_kronFlux_flag_small_radius
boolean
Measured Kron radius was smaller than that of the PSF. Measured on y-band.
y_kronFlux_flag_used_minimum_radius
boolean
Used the minimum radius for the Kron aperture. Measured on y-band.
y_kronFlux_flag_used_psf_radius
boolean
Used the PSF Kron radius for the Kron aperture. Measured on y-band.
y_kronRad
float
Kron radius (sqrt(a*b)). Measured on y-band.
y_pixelFlags_bad
boolean
Bad pixel in the Source footprint. Measured on y-band.
y_pixelFlags_clipped
boolean
Source footprint includes CLIPPED pixels. Measured on y-band.
y_pixelFlags_clippedCenter
boolean
Source center is close to CLIPPED pixels. Measured on y-band.
y_pixelFlags_cr
boolean
Cosmic ray in the Source footprint. Measured on y-band.
y_pixelFlags_crCenter
boolean
Cosmic ray in the Source center. Measured on y-band.
y_pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA). Measured on y-band.
y_pixelFlags_inexact_psf
boolean
Source footprint includes INEXACT_PSF pixels. Measured on y-band.
y_pixelFlags_inexact_psfCenter
boolean
Source center is close to INEXACT_PSF pixels. Measured on y-band.
y_pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint. Measured on y-band.
y_pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center. Measured on y-band.
y_pixelFlags_offimage
boolean
Source center is off image. Measured on y-band.
y_pixelFlags_saturated
boolean
Saturated pixel in the Source footprint. Measured on y-band.
y_pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center. Measured on y-band.
y_pixelFlags_sensor_edge
boolean
Source footprint includes SENSOR_EDGE pixels. Measured on y-band.
y_pixelFlags_sensor_edgeCenter
boolean
Source center is close to SENSOR_EDGE pixels. Measured on y-band.
y_pixelFlags_suspect
boolean
Source's footprint includes suspect pixels. Measured on y-band.
y_pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels. Measured on y-band.
y_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Forced on y-band.
y_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Forced on y-band.
y_psfFlux_area
float
pixel
Effective area of PSF. Forced on y-band.
y_psfFlux_flag
boolean
General Failure Flag. Forced on y-band.
y_psfFlux_flag_apCorr
boolean
Set if unable to aperture correct base_PsfFlux. Forced on y-band.
y_psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model. Forced on y-band.
y_psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit. Forced on y-band.
y_ra
double
deg
Position in Right Ascension. Measured on y-band. [pos.eq.ra]
z_ap03Flux
double
nJy
Flux within 3.0-pixel aperture. Forced on z-band.
z_ap03FluxErr
double
nJy
Flux uncertainty within 3.0-pixel aperture. Forced on z-band.
z_ap03Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap06Flux
double
nJy
Flux within 6.0-pixel aperture. Forced on z-band.
z_ap06FluxErr
double
nJy
Flux uncertainty within 6.0-pixel aperture. Forced on z-band.
z_ap06Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap09Flux
double
nJy
Flux within 9.0-pixel aperture. Forced on z-band.
z_ap09FluxErr
double
nJy
Flux uncertainty within 9.0-pixel aperture. Forced on z-band.
z_ap09Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap12Flux
double
nJy
Flux within 12.0-pixel aperture. Forced on z-band.
z_ap12FluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Forced on z-band.
z_ap12Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap17Flux
double
nJy
Flux within 17.0-pixel aperture. Forced on z-band.
z_ap17FluxErr
double
nJy
Flux uncertainty within 17.0-pixel aperture. Forced on z-band.
z_ap17Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap25Flux
double
nJy
Flux within 25.0-pixel aperture. Forced on z-band.
z_ap25FluxErr
double
nJy
Flux uncertainty within 25.0-pixel aperture. Forced on z-band.
z_ap25Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap35Flux
double
nJy
Flux within 35.0-pixel aperture. Forced on z-band.
z_ap35FluxErr
double
nJy
Flux uncertainty within 35.0-pixel aperture. Forced on z-band.
z_ap35Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap50Flux
double
nJy
Flux within 50.0-pixel aperture. Forced on z-band.
z_ap50FluxErr
double
nJy
Flux uncertainty within 50.0-pixel aperture. Forced on z-band.
z_ap50Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_ap70Flux
double
nJy
Flux within 70.0-pixel aperture. Forced on z-band.
z_ap70FluxErr
double
nJy
Flux uncertainty within 70.0-pixel aperture. Forced on z-band.
z_ap70Flux_flag
boolean
General Failure Flag. Forced on z-band.
z_apFlux_flag
boolean
General Failure Flag. Measured on z-band.
z_apFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on z-band.
z_apFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on z-band.
z_bdChi2
double
-ln(likelihood) (chi^2) in cmodel fit. Measured on z-band.
z_bdE1
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on z-band.
z_bdE2
double
pixel**2
FracDev-weighted average of exp.ellipse and dev.ellipse. Measured on z-band.
z_bdFluxB
double
nJy
Flux from the de Vaucouleurs fit. Measured on z-band.
z_bdFluxBErr
double
nJy
Flux uncertainty from the de Vaucouleurs fit. Measured on z-band.
z_bdFluxD
double
nJy
Flux from the exponential fit. Measured on z-band.
z_bdFluxDErr
double
nJy
Flux uncertainty from the exponential fit. Measured on z-band.
z_bdReB
double
pixel**2
Half-light ellipse of the de Vaucouleurs fit. Measured on z-band.
z_bdReD
double
pixel**2
Half-light ellipse of the exponential fit. Measured on z-band.
z_blendedness
double
Measure of how much the flux is affected by neighbors, (1 - child_flux/parent_flux).
Operates on the absolute value of the pixels to try to obtain a de-noised value.
See section 4.9.11 of Bosch et al. 2018, PASJ, 70, S5 for details. Measured on z-band.
z_blendedness_flag
boolean
General Failure Flag. Measured on z-band.
z_cModelFlux
double
nJy
Flux from the final cmodel fit. Forced on z-band.
z_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Forced on z-band.
z_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Forced on z-band.
z_cModel_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Forced on z-band.
z_cModel_flag_apCorr
boolean
Set if unable to aperture correct modelfit_CModel. Forced on z-band.
z_calibFlux
double
nJy
Flux within 12.0-pixel aperture. Measured on z-band.
z_calibFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture. Measured on z-band.
z_calibFlux_flag
boolean
General Failure Flag. Measured on z-band.
z_calibFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image. Measured on z-band.
z_calibFlux_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image. Measured on z-band.
z_calib_astrometry_used
boolean
Propagated from sources. Measured on z-band.
z_calib_photometry_reserved
boolean
Propagated from sources. Measured on z-band.
z_calib_photometry_used
boolean
Propagated from sources. Measured on z-band.
z_calib_psf_candidate
boolean
Propagated from sources. Measured on z-band.
z_calib_psf_reserved
boolean
Propagated from sources. Measured on z-band.
z_calib_psf_used
boolean
Propagated from sources. Measured on z-band.
z_centroid_flag
boolean
General Failure Flag. Measured on z-band.
z_centroid_x
double
pixel
Centroid from SDSS Centroid algorithm. Measured on z-band.
z_centroid_xErr
float
pixel
1-sigma uncertainty on x position. Measured on z-band.
z_centroid_y
double
pixel
Centroid from SDSS Centroid algorithm. Measured on z-band.
z_centroid_yErr
float
pixel
1-sigma uncertainty on y position. Measured on z-band.
z_decl
double
deg
Position in Declination. Measured on z-band. [pos.eq.dec]
z_extendedness
double
Set to 1 for extended sources, 0 for point sources. Measured on z-band.
z_extendedness_flag
boolean
Set to 1 for any fatal failure. Measured on z-band.
z_free_cModelFlux
double
nJy
Flux from the final cmodel fit. Measured on z-band.
z_free_cModelFluxErr
double
nJy
Flux uncertainty from the final cmodel fit. Measured on z-band.
z_free_cModelFlux_flag
boolean
Flag set if the final cmodel fit (or any previous fit) failed. Measured on z-band.
z_free_cModelFlux_inner
double
nJy
Flux within the fit region, with no extrapolation. Measured on z-band.
z_free_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Measured on z-band.
z_free_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Measured on z-band.
z_free_psfFlux_flag
boolean
General Failure Flag. Measured on z-band.
z_fwhm
double
pixel**2
HSM moments. Measured on z-band.
z_gaap0p5Flux
double
nJy
GaaP flux with 0.5 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap0p5FluxErr
double
nJy
GaaP flux uncertainty with 0.5 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap0p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on z-band.
z_gaap0p7Flux
double
nJy
GaaP flux with 0.7 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap0p7FluxErr
double
nJy
GaaP flux uncertainty with 0.7 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap0p7Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on z-band.
z_gaap1p0Flux
double
nJy
GaaP flux with 1.0 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap1p0FluxErr
double
nJy
GaaP flux uncertainty with 1.0 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap1p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on z-band.
z_gaap1p5Flux
double
nJy
GaaP flux with 1.5 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap1p5FluxErr
double
nJy
GaaP flux uncertainty with 1.5 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap1p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on z-band.
z_gaap2p5Flux
double
nJy
GaaP flux with 2.5 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap2p5FluxErr
double
nJy
GaaP flux uncertainty with 2.5 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap2p5Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on z-band.
z_gaap3p0Flux
double
nJy
GaaP flux with 3.0 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap3p0FluxErr
double
nJy
GaaP flux uncertainty with 3.0 aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaap3p0Flux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on z-band.
z_gaapFlux_flag
boolean
Set for any fatal failure. Forced on z-band.
z_gaapFlux_flag_edge
boolean
Source is too close to the edge. Forced on z-band.
z_gaapFlux_flag_gaussianization
boolean
PSF Gaussianization failed when trying to scale by this factor. Forced on z-band.
z_gaapOptimalFlux
double
nJy
GaaP flux with optimal aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaapOptimalFluxErr
double
nJy
GaaP flux uncertainty with optimal aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaapOptimalFlux_flag_bigPsf
boolean
The Gaussianized PSF is bigger than the aperture. Forced on z-band.
z_gaapPsfFlux
double
nJy
GaaP flux with PSF aperture after multiplying the seeing by 1.15. Forced on z-band.
z_gaapPsfFluxErr
double
nJy
GaaP flux uncertainty with PSF aperture after multiplying the seeing by 1.15. Forced on z-band.
z_hsmShapeRegauss_e1
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on z-band.
z_hsmShapeRegauss_e2
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on z-band.
z_hsmShapeRegauss_flag
boolean
General failure flag, set if anything went wrong. Measured on z-band.
z_hsmShapeRegauss_sigma
double
PSF-corrected shear using Hirata & Seljak (2003) regaussianization. Measured on z-band.
z_iDebiasedPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on z-band.
z_iPSF_flag
boolean
General failure flag, set if anything went wrong. Measured on z-band.
z_iRound_flag
double
pixel**2
HSM moments. Measured on z-band.
z_i_flag
boolean
General failure flag, set if anything went wrong. Measured on z-band.
z_inputCount
int
Number of images contributing at center, not including any clipping. Forced on z-band.
z_inputCount_flag
boolean
Set for any fatal failure. Forced on z-band.
z_inputCount_flag_noInputs
boolean
No coadd inputs available. Forced on z-band.
z_ixx
double
pixel**2
HSM moments. Measured on z-band.
z_ixxDebiasedPSF
double
pixel**2
HSM moments. Measured on z-band.
z_ixxPSF
double
pixel**2
HSM moments. Measured on z-band.
z_ixxRound
double
pixel**2
HSM moments. Measured on z-band.
z_ixy
double
pixel**2
HSM moments. Measured on z-band.
z_ixyDebiasedPSF
double
pixel**2
HSM moments. Measured on z-band.
z_ixyPSF
double
pixel**2
HSM moments. Measured on z-band.
z_ixyRound
double
pixel**2
HSM moments. Measured on z-band.
z_iyy
double
pixel**2
HSM moments. Measured on z-band.
z_iyyDebiasedPSF
double
pixel**2
HSM moments. Measured on z-band.
z_iyyPSF
double
pixel**2
HSM moments. Measured on z-band.
z_iyyRound
double
pixel**2
HSM moments. Measured on z-band.
z_kronFlux
double
nJy
Flux from Kron Flux algorithm. Measured on z-band.
z_kronFluxErr
double
nJy
Flux uncertainty from Kron Flux algorithm. Measured on z-band.
z_kronFlux_flag
boolean
General failure flag, set if anything went wrong. Measured on z-band.
z_kronFlux_flag_bad_radius
boolean
Bad Kron radius. Measured on z-band.
z_kronFlux_flag_bad_shape
boolean
Shape for measuring Kron radius is bad; used PSF shape. Measured on z-band.
z_kronFlux_flag_bad_shape_no_psf
boolean
Bad shape and no PSF. Measured on z-band.
z_kronFlux_flag_edge
boolean
Bad measurement due to image edge. Measured on z-band.
z_kronFlux_flag_no_fallback_radius
boolean
No minimum radius and no PSF provided. Measured on z-band.
z_kronFlux_flag_no_minimum_radius
boolean
Minimum radius could not be enforced, no minimum value or PSF. Measured on z-band.
z_kronFlux_flag_small_radius
boolean
Measured Kron radius was smaller than that of the PSF. Measured on z-band.
z_kronFlux_flag_used_minimum_radius
boolean
Used the minimum radius for the Kron aperture. Measured on z-band.
z_kronFlux_flag_used_psf_radius
boolean
Used the PSF Kron radius for the Kron aperture. Measured on z-band.
z_kronRad
float
Kron radius (sqrt(a*b)). Measured on z-band.
z_pixelFlags_bad
boolean
Bad pixel in the Source footprint. Measured on z-band.
z_pixelFlags_clipped
boolean
Source footprint includes CLIPPED pixels. Measured on z-band.
z_pixelFlags_clippedCenter
boolean
Source center is close to CLIPPED pixels. Measured on z-band.
z_pixelFlags_cr
boolean
Cosmic ray in the Source footprint. Measured on z-band.
z_pixelFlags_crCenter
boolean
Cosmic ray in the Source center. Measured on z-band.
z_pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA). Measured on z-band.
z_pixelFlags_inexact_psf
boolean
Source footprint includes INEXACT_PSF pixels. Measured on z-band.
z_pixelFlags_inexact_psfCenter
boolean
Source center is close to INEXACT_PSF pixels. Measured on z-band.
z_pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint. Measured on z-band.
z_pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center. Measured on z-band.
z_pixelFlags_offimage
boolean
Source center is off image. Measured on z-band.
z_pixelFlags_saturated
boolean
Saturated pixel in the Source footprint. Measured on z-band.
z_pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center. Measured on z-band.
z_pixelFlags_sensor_edge
boolean
Source footprint includes SENSOR_EDGE pixels. Measured on z-band.
z_pixelFlags_sensor_edgeCenter
boolean
Source center is close to SENSOR_EDGE pixels. Measured on z-band.
z_pixelFlags_suspect
boolean
Source's footprint includes suspect pixels. Measured on z-band.
z_pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels. Measured on z-band.
z_psfFlux
double
nJy
Flux derived from linear least-squares fit of PSF model. Forced on z-band.
z_psfFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model. Forced on z-band.
z_psfFlux_area
float
pixel
Effective area of PSF. Forced on z-band.
z_psfFlux_flag
boolean
General Failure Flag. Forced on z-band.
z_psfFlux_flag_apCorr
boolean
Set if unable to aperture correct base_PsfFlux. Forced on z-band.
z_psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model. Forced on z-band.
z_psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit. Forced on z-band.
z_ra
double
deg
Position in Right Ascension. Measured on z-band. [pos.eq.ra]
Source
Properties of detections on the single-epoch visit images, performed independently of the Object detections on coadded images.
Column Name
Data Type
Unit
Description [UCD]
sourceId
long
Unique id. Unique Source ID. Primary Key. [meta.id;src;meta.main]
coord_ra
double
deg
Fiducial ICRS Right Ascension of centroid used for database indexing [pos.eq.ra;meta.main]
coord_dec
double
deg
Fiducial ICRS Declination of centroid used for database indexing [pos.eq.dec;meta.main]
ccdVisitId
long
Unique ID of CCD and visit where this source was detected and measured. Primary Key of the CcdVisit Table. [meta.id;obs.image]
parentSourceId
long
Unique ID of parent source [meta.id.parent]
x
double
pixel
Centroid from SDSS Centroid algorithm
y
double
pixel
Centroid from SDSS Centroid algorithm
xErr
float
pixel
1-sigma uncertainty on x position
yErr
float
pixel
1-sigma uncertainty on y position
ra
double
deg
Position in Right Ascension [pos.eq.ra]
decl
double
deg
Position in Declination [pos.eq.dec]
calibFlux
double
nJy
Flux within 12.0-pixel aperture
calibFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture
ap03Flux
double
nJy
Flux within 3.0-pixel aperture
ap03FluxErr
double
nJy
Flux uncertainty within 3.0-pixel aperture
ap03Flux_flag
boolean
General Failure Flag
ap06Flux
double
nJy
Flux within 6.0-pixel aperture
ap06FluxErr
double
nJy
Flux uncertainty within 6.0-pixel aperture
ap06Flux_flag
boolean
General Failure Flag
ap09Flux
double
nJy
Flux within 9.0-pixel aperture
ap09FluxErr
double
nJy
Flux uncertainty within 9.0-pixel aperture
ap09Flux_flag
boolean
General Failure Flag
ap12Flux
double
nJy
Flux within 12.0-pixel aperture
ap12FluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture
ap12Flux_flag
boolean
General Failure Flag
ap17Flux
double
nJy
Flux within 17.0-pixel aperture
ap17FluxErr
double
nJy
Flux uncertainty within 17.0-pixel aperture
ap17Flux_flag
boolean
General Failure Flag
ap25Flux
double
nJy
Flux within 25.0-pixel aperture
ap25FluxErr
double
nJy
Flux uncertainty within 25.0-pixel aperture
ap25Flux_flag
boolean
General Failure Flag
ap35Flux
double
nJy
Flux within 35.0-pixel aperture
ap35FluxErr
double
nJy
Flux uncertainty within 35.0-pixel aperture
ap35Flux_flag
boolean
General Failure Flag
ap50Flux
double
nJy
Flux within 50.0-pixel aperture
ap50FluxErr
double
nJy
Flux uncertainty within 50.0-pixel aperture
ap50Flux_flag
boolean
General Failure Flag
ap70Flux
double
nJy
Flux within 70.0-pixel aperture
ap70FluxErr
double
nJy
Flux uncertainty within 70.0-pixel aperture
ap70Flux_flag
boolean
General Failure Flag
sky
double
nJy
Background in annulus around source
skyErr
double
nJy
Background in annulus around source
psfFlux
double
nJy
Flux derived from linear least-squares fit of psf model forced on the calexp
psfFluxErr
double
nJy
Uncertainty on the flux derived from linear least-squares fit of psf model forced on the calexp
ixx
double
pixel**2
HSM moments
iyy
double
pixel**2
HSM moments
ixy
double
pixel**2
HSM moments
ixxPSF
double
pixel**2
HSM moments
iyyPSF
double
pixel**2
HSM moments
ixyPSF
double
pixel**2
HSM moments
gaussianFlux
double
nJy
Flux from Gaussian Flux algorithm
gaussianFluxErr
double
nJy
Flux uncertainty from Gaussian Flux algorithm
extendedness
double
Set to 1 for extended sources, 0 for point sources.
localPhotoCalib
double
Local approximation of the PhotoCalib calibration factor at the location of the src.
localPhotoCalib_flag
boolean
Set for any fatal failure
localPhotoCalibErr
double
Uncertainty on the local approximation of the PhotoCalib calibration factor at the location of the src.
localWcs_flag
boolean
Set for any fatal failure
localWcs_CDMatrix_2_1
double
(2, 1) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians.
localWcs_CDMatrix_1_1
double
(1, 1) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians.
localWcs_CDMatrix_1_2
double
(1, 2) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians.
localWcs_CDMatrix_2_2
double
(2, 2) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians.
blendedness_abs
double
Measure of how much the flux is affected by neighbors, (1 - child_flux/parent_flux).
Operates on the absolute value of the pixels to try to obtain a de-noised value.
See section 4.9.11 of Bosch et al. 2018, PASJ, 70, S5 for details.
blendedness_flag
boolean
General Failure Flag
blendedness_flag_noCentroid
boolean
Object has no centroid
blendedness_flag_noShape
boolean
Object has no shape
apFlux_12_0_flag
boolean
General Failure Flag
apFlux_12_0_flag_apertureTruncated
boolean
Aperture did not fit within measurement image
apFlux_12_0_flag_sincCoeffsTruncated
boolean
Full sinc coefficient image did not fit within measurement image
apFlux_12_0_instFlux
double
count
Flux within 12.0-pixel aperture
apFlux_12_0_instFluxErr
double
count
1-sigma flux uncertainty
apFlux_17_0_flag
boolean
General Failure Flag
apFlux_17_0_instFlux
double
count
Flux within 17.0-pixel aperture
apFlux_17_0_instFluxErr
double
count
1-sigma flux uncertainty
extendedness_flag
boolean
Set to 1 for any fatal failure.
footprintArea_value
int
pixel
Number of pixels in the source's detection footprint.
jacobian_flag
boolean
Set to 1 for any fatal failure
jacobian_value
double
Jacobian correction
localBackground_instFlux
double
count
Background in annulus around source
localBackground_instFluxErr
double
count
1-sigma flux uncertainty
localBackground_flag
boolean
General Failure Flag
localBackground_flag_noGoodPixels
boolean
No good pixels in the annulus
localBackground_flag_noPsf
boolean
No PSF provided
pixelFlags_bad
boolean
Bad pixel in the Source footprint
pixelFlags_cr
boolean
Cosmic ray in the Source footprint
pixelFlags_crCenter
boolean
Cosmic ray in the Source center
pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA)
pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint
pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center
pixelFlags_offimage
boolean
Source center is off image
pixelFlags_saturated
boolean
Saturated pixel in the Source footprint
pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center
pixelFlags_suspect
boolean
Source's footprint includes suspect pixels
pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels
psfFlux_apCorr
double
Aperture correction applied to base_PsfFlux
psfFlux_apCorrErr
double
Standard deviation of aperture correction applied to base_PsfFlux
psfFlux_area
float
pixel
Effective area of PSF
psfFlux_flag
boolean
Failure to derive linear least-squares fit of psf model forced on the calexp
psfFlux_flag_apCorr
boolean
Set if unable to aperture correct base_PsfFlux
psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model
psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit
gaussianFlux_flag
boolean
General Failure Flag
centroid_flag
boolean
General Failure Flag
centroid_flag_almostNoSecondDerivative
boolean
Almost vanishing second derivative
centroid_flag_badError
boolean
Uncertainty on x and/or y position is NaN
centroid_flag_edge
boolean
Object too close to edge
centroid_flag_noSecondDerivative
boolean
Vanishing second derivative
centroid_flag_notAtMaximum
boolean
Object is not at a maximum
centroid_flag_resetToPeak
boolean
Set if CentroidChecker reset the centroid
variance_flag
boolean
Set for any fatal failure
variance_flag_emptyFootprint
boolean
Set to True when the footprint has no usable pixels
variance_value
double
Variance at object position
calib_astrometry_used
boolean
Set if source was used in astrometric calibration
calib_detected
boolean
Source was detected as an image characterization source (icSrc)
calib_photometry_reserved
boolean
Set if source was reserved from photometric calibration
calib_photometry_used
boolean
Set if source was used in photometric calibration
calib_psf_candidate
boolean
Flag set if the source was a candidate for PSF determination, as determined by the star selector.
calib_psf_reserved
boolean
Set if source was reserved from PSF determination
calib_psf_used
boolean
Flag set if the source was actually used for PSF determination, as determined by the
deblend_deblendedAsPsf
boolean
Deblender thought this source looked like a PSF
deblend_hasStrayFlux
boolean
This source was assigned some stray flux
deblend_masked
boolean
Parent footprint was predominantly masked
deblend_nChild
int
Number of children this object has (defaults to 0)
deblend_parentTooBig
boolean
Parent footprint covered too many pixels
deblend_patchedTemplate
boolean
This source was near an image edge and the deblender used patched edge-handling.
deblend_rampedTemplate
boolean
This source was near an image edge and the deblender used ramp edge-handling.
deblend_skipped
boolean
Deblender skipped this source
deblend_tooManyPeaks
boolean
Source had too many peaks; only the brightest were included
hsmPsfMoments_flag
boolean
General failure flag, set if anything went wrong
hsmPsfMoments_flag_no_pixels
boolean
No pixels to measure
hsmPsfMoments_flag_not_contained
boolean
Center not contained in footprint bounding box
hsmPsfMoments_flag_parent_source
boolean
Parent source, ignored
hsmShapeRegauss_flag
boolean
General failure flag, set if anything went wrong
hsmShapeRegauss_flag_galsim
boolean
GalSim failure
hsmShapeRegauss_flag_no_pixels
boolean
No pixels to measure
hsmShapeRegauss_flag_not_contained
boolean
Center not contained in footprint bounding box
hsmShapeRegauss_flag_parent_source
boolean
Parent source, ignored
sky_source
boolean
Sky objects.
detect_isPrimary
boolean
True if Object seed has no children and is in the inner region of a coadd patch and is in the inner region of a coadd tract and is not a sky object
band
char
Name of the band used to take the exposure where this source was measured. Abstract filter that is not associated with a particular instrument
instrument
char
ID of instrument, the entity that produces observations.
detector
long
Detector ID. A detector associated with a particular instrument (not an observation of that detector)
physical_filter
char
ID of physical filter, the filter associated with a particular instrument.
visit_system
long
ID of visit system, the system of self-consistent visit definitions
visit
long
ID of visit, the identifier for an observation within a sequence of observations.
ForcedSource
Forced-photometry measurements on individual single-epoch visit images and difference images, based on and linked to the entries in the Object table. Point-source PSF photometry is performed, based on coordinates from a reference band chosen for each Object and reported in the Object.refBand column.
Column Name
Data Type
Unit
Description [UCD]
forcedSourceId
long
Unique ID of forced source. Primary Key. [meta.id;meta.main]
objectId
long
Unique Object ID. Primary Key of the Object Table [meta.id]
parentObjectId
long
Unique ObjectId of the parent of the ObjectId in context of the deblender. [meta.id.parent]
coord_ra
double
deg
Fiducial ICRS Right Ascension of Object centroid used for database indexing [pos.eq.ra;meta.main]
coord_dec
double
deg
Fiducial ICRS Declination of Object centroid used for database indexing [pos.eq.dec;meta.main]
skymap
char
Name of skymap used for coadd projection
tract
long
Skymap tract ID [meta.id]
patch
long
Skymap patch ID [meta.id.part]
band
char
Abstract filter that is not associated with a particular instrument [meta.id;instr.filter]
ccdVisitId
long
Unique ID of visit and detector for which forced photometry was performed. Primary Key of the CcdVisit Table. [meta.id;obs.image]
detect_isPatchInner
boolean
True if Object seed is in the inner region of a coadd patch [meta.code]
detect_isPrimary
boolean
True if Object seed has no children and is in the inner region of a coadd patch and is in the inner region of a coadd tract and is not a sky object [meta.code.qual]
detect_isTractInner
boolean
True if Object seed is in the inner region of a coadd tract [meta.code]
localBackground_instFluxErr
double
count
1-sigma uncertainty on the background in an annulus around source [stat.error;phot.count]
localBackground_instFlux
double
count
Background in annulus around source [phot.count]
localPhotoCalibErr
double
Uncertainty on the local approximation of the PhotoCalib calibration factor at the location of the src. [stat.error;phot.calib]
localPhotoCalib_flag
boolean
Set for any fatal failure [meta.code.qual]
localPhotoCalib
double
Local approximation of the PhotoCalib calibration factor at the location of the src. [phot.calib]
localWcs_CDMatrix_1_1
double
(1, 1) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_CDMatrix_1_2
double
(1, 2) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_CDMatrix_2_1
double
(2, 1) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_CDMatrix_2_2
double
(2, 2) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_flag
boolean
Set for any fatal failure [meta.code.qual]
pixelFlags_bad
boolean
Bad pixel in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_crCenter
boolean
Cosmic ray in the Source center [meta.code.qual;instr.pixel]
pixelFlags_cr
boolean
Cosmic ray in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA) [meta.code.qual;instr.pixel]
pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center [meta.code.qual;instr.pixel]
pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center [meta.code.qual;instr.pixel]
pixelFlags_saturated
boolean
Saturated pixel in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels [meta.code.qual;instr.pixel]
pixelFlags_suspect
boolean
Source's footprint includes suspect pixels [meta.code.qual;instr.pixel]
psfDiffFluxErr
double
nJy
Uncertainty on the flux derived from linear least-squares fit of psf model forced on the image difference [stat.error;phot.flux]
psfDiffFlux_flag
boolean
Failure to derive linear least-squares fit of psf model forced on the image difference [meta.code.qual]
psfDiffFlux
double
nJy
Flux derived from linear least-squares fit of psf model forced on the image difference [phot.flux]
psfFluxErr
double
nJy
Uncertainty on the flux derived from linear least-squares fit of psf model forced on the calexp [stat.error;phot.flux]
psfFlux_flag
boolean
Failure to derive linear least-squares fit of psf model forced on the calexp [meta.code.qual]
psfFlux
double
nJy
Flux derived from linear least-squares fit of psf model forced on the calexp [phot.flux]
DiaObject
Properties of time-varying astronomical objects based on association of data from one or more spatially-related DiaSource detections on individual single-epoch difference images.
Column Name
Data Type
Unit
Description [UCD]
decl
double
deg
Mean Declination of DIASources in the diaObject [pos.eq.dec;meta.main]
diaObjectId
long
Unique id. [meta.id;meta.main]
gPSFluxChi2
double
Chi^2 statistic for the scatter of gPSFlux around gPSFluxMean
gPSFluxErrMean
double
Mean of the diaSource PSF flux uncertainties
gPSFluxLinearIntercept
double
y-intercept of a linear model fit to diaSource PSF flux vs time
gPSFluxLinearSlope
double
Slope of a linear model fit to diaSource PSF flux vs time
gPSFluxMAD
double
Median absolute deviation of diaSource PSF flux. Does not include scale factor for comparison to sigma
gPSFluxMax
double
Maximum diaSource PSF flux
gPSFluxMaxSlope
double
Maximum ratio of time ordered deltaFlux / deltaTime
gPSFluxMean
double
Weighted mean of diaSource PSF flux
gPSFluxMeanErr
double
Standard error on the weighted mean of diaSource PSF flux
gPSFluxMin
double
Minimum diaSource PSF flux
gPSFluxNdata
double
The number of data points used to compute gPSFluxChi2
gPSFluxPercentile05
double
5th percentile diaSource PSF flux
gPSFluxPercentile25
double
10th percentile diaSource PSF flux
gPSFluxPercentile50
double
Median diaSource PSF flux
gPSFluxPercentile75
double
75th percentile diaSource PSF flux
gPSFluxPercentile95
double
95th percentile diaSource PSF flux
gPSFluxSigma
double
Standard deviation of the distribution of gPSFlux
gPSFluxSkew
double
Skew of diaSource PSF flux
gPSFluxStetsonJ
double
StetsonJ statistic of diaSource PSF flux
gTOTFluxMean
double
Weighted mean of the PSF flux forced photometered at the diaSource position on the calibrated image
gTOTFluxMeanErr
double
Standard error on gTOTFluxMean
gTOTFluxSigma
double
Standard deviation of the PSF flux forced photometered at the diaSource position on the calibrated image
iPSFluxChi2
double
Chi^2 statistic for the scatter of iPSFlux around iPSFluxMean
iPSFluxErrMean
double
Mean of the diaSource PSF flux uncertainties
iPSFluxLinearIntercept
double
y-intercept of a linear model fit to diaSource PSF flux vs time
iPSFluxLinearSlope
double
Slope of a linear model fit to diaSource PSF flux vs time
iPSFluxMAD
double
Median absolute deviation of diaSource PSF flux. Does not include scale factor for comparison to sigma
iPSFluxMax
double
Maximum diaSource PSF flux
iPSFluxMaxSlope
double
Maximum ratio of time ordered deltaFlux / deltaTime
iPSFluxMean
double
Weighted mean of diaSource PSF flux
iPSFluxMeanErr
double
Standard error on the weighted mean of diaSource PSF flux
iPSFluxMin
double
Minimum diaSource PSF flux
iPSFluxNdata
double
The number of data points used to compute iPSFluxChi2
iPSFluxPercentile05
double
5th percentile diaSource PSF flux
iPSFluxPercentile25
double
10th percentile diaSource PSF flux
iPSFluxPercentile50
double
Median diaSource PSF flux
iPSFluxPercentile75
double
75th percentile diaSource PSF flux
iPSFluxPercentile95
double
95th percentile diaSource PSF flux
iPSFluxSigma
double
Standard deviation of the distribution of iPSFlux
iPSFluxSkew
double
Skew of diaSource PSF flux
iPSFluxStetsonJ
double
StetsonJ statistic of diaSource PSF flux
iTOTFluxMean
double
Weighted mean of the PSF flux forced photometered at the diaSource position on the calibrated image
iTOTFluxMeanErr
double
Standard error on iTOTFluxMean
iTOTFluxSigma
double
Standard deviation of the PSF flux forced photometered at the diaSource position on the calibrated image
nDiaSources
long
Number of diaSources associated with this diaObject
pixelId
double
HtmIndex20 of ra, decl coordinate
rPSFluxChi2
double
Chi^2 statistic for the scatter of rPSFlux around rPSFluxMean
rPSFluxErrMean
double
Mean of the diaSource PSF flux uncertainties
rPSFluxLinearIntercept
double
y-intercept of a linear model fit to diaSource PSF flux vs time
rPSFluxLinearSlope
double
Slope of a linear model fit to diaSource PSF flux vs time
rPSFluxMAD
double
Median absolute deviation of diaSource PSF flux. Does not include scale factor for comparison to sigma
rPSFluxMax
double
Maximum diaSource PSF flux
rPSFluxMaxSlope
double
Maximum ratio of time ordered deltaFlux / deltaTime
rPSFluxMean
double
Weighted mean of diaSource PSF flux
rPSFluxMeanErr
double
Standard error on the weighted mean of diaSource PSF flux
rPSFluxMin
double
Minimum diaSource PSF flux
rPSFluxNdata
double
The number of data points used to compute rPSFluxChi2
rPSFluxPercentile05
double
5th percentile diaSource PSF flux
rPSFluxPercentile25
double
10th percentile diaSource PSF flux
rPSFluxPercentile50
double
Median diaSource PSF flux
rPSFluxPercentile75
double
75th percentile diaSource PSF flux
rPSFluxPercentile95
double
95th percentile diaSource PSF flux
rPSFluxSigma
double
Standard deviation of the distribution of rPSFlux
rPSFluxSkew
double
Skew of diaSource PSF flux
rPSFluxStetsonJ
double
StetsonJ statistic of diaSource PSF flux
rTOTFluxMean
double
Weighted mean of the PSF flux forced photometered at the diaSource position on the calibrated image
rTOTFluxMeanErr
double
Standard error on rTOTFluxMean
rTOTFluxSigma
double
Standard deviation of the PSF flux forced photometered at the diaSource position on the calibrated image
ra
double
deg
Mean Right Ascension of DIASources in the diaObject [pos.eq.ra;meta.main]
radecTai
double
Not used in DP0.2
uPSFluxChi2
double
Chi^2 statistic for the scatter of uPSFlux around uPSFluxMean
uPSFluxErrMean
double
Mean of the diaSource PSF flux uncertainties
uPSFluxLinearIntercept
double
y-intercept of a linear model fit to diaSource PSF flux vs time
uPSFluxLinearSlope
double
Slope of a linear model fit to diaSource PSF flux vs time
uPSFluxMAD
double
Median absolute deviation of diaSource PSF flux. Does not include scale factor for comparison to sigma
uPSFluxMax
double
Maximum diaSource PSF flux
uPSFluxMaxSlope
double
Maximum ratio of time ordered deltaFlux / deltaTime
uPSFluxMean
double
Weighted mean of diaSource PSF flux
uPSFluxMeanErr
double
Standard error on the weighted mean of diaSource PSF flux
uPSFluxMin
double
Minimum diaSource PSF flux
uPSFluxNdata
double
The number of data points used to compute uPSFluxChi2
uPSFluxPercentile05
double
5th percentile diaSource PSF flux
uPSFluxPercentile25
double
10th percentile diaSource PSF flux
uPSFluxPercentile50
double
Median diaSource PSF flux
uPSFluxPercentile75
double
75th percentile diaSource PSF flux
uPSFluxPercentile95
double
95th percentile diaSource PSF flux
uPSFluxSigma
double
Standard deviation of the distribution of uPSFlux
uPSFluxSkew
double
Skew of diaSource PSF flux
uPSFluxStetsonJ
double
StetsonJ statistic of diaSource PSF flux
uTOTFluxMean
double
Weighted mean of the PSF flux forced photometered at the diaSource position on the calibrated image
uTOTFluxMeanErr
double
Standard error on uTOTFluxMean
uTOTFluxSigma
double
Standard deviation of the PSF flux forced photometered at the diaSource position on the calibrated image
yPSFluxChi2
double
Chi^2 statistic for the scatter of yPSFlux around yPSFluxMean
yPSFluxErrMean
double
Mean of the diaSource PSF flux uncertainties
yPSFluxLinearIntercept
double
y-intercept of a linear model fit to diaSource PSF flux vs time
yPSFluxLinearSlope
double
Slope of a linear model fit to diaSource PSF flux vs time
yPSFluxMAD
double
Median absolute deviation of diaSource PSF flux. Does not include scale factor for comparison to sigma
yPSFluxMax
double
Maximum diaSource PSF flux
yPSFluxMaxSlope
double
Maximum ratio of time ordered deltaFlux / deltaTime
yPSFluxMean
double
Weighted mean of diaSource PSF flux
yPSFluxMeanErr
double
Standard error on the weighted mean of diaSource PSF flux
yPSFluxMin
double
Minimum diaSource PSF flux
yPSFluxNdata
double
The number of data points used to compute yPSFluxChi2
yPSFluxPercentile05
double
5th percentile diaSource PSF flux
yPSFluxPercentile25
double
10th percentile diaSource PSF flux
yPSFluxPercentile50
double
Median diaSource PSF flux
yPSFluxPercentile75
double
75th percentile diaSource PSF flux
yPSFluxPercentile95
double
95th percentile diaSource PSF flux
yPSFluxSigma
double
Standard deviation of the distribution of yPSFlux
yPSFluxSkew
double
Skew of diaSource PSF flux
yPSFluxStetsonJ
double
StetsonJ statistic of diaSource PSF flux
yTOTFluxMean
double
Weighted mean of the PSF flux forced photometered at the diaSource position on the calibrated image
yTOTFluxMeanErr
double
Standard error on yTOTFluxMean
yTOTFluxSigma
double
Standard deviation of the PSF flux forced photometered at the diaSource position on the calibrated image
zPSFluxChi2
double
Chi^2 statistic for the scatter of zPSFlux around zPSFluxMean
zPSFluxErrMean
double
Mean of the diaSource PSF flux uncertainties
zPSFluxLinearIntercept
double
y-intercept of a linear model fit to diaSource PSF flux vs time
zPSFluxLinearSlope
double
Slope of a linear model fit to diaSource PSF flux vs time
zPSFluxMAD
double
Median absolute deviation of diaSource PSF flux. Does not include scale factor for comparison to sigma
zPSFluxMax
double
Maximum diaSource PSF flux
zPSFluxMaxSlope
double
Maximum ratio of time ordered deltaFlux / deltaTime
zPSFluxMean
double
Weighted mean of diaSource PSF flux
zPSFluxMeanErr
double
Standard error on the weighted mean of diaSource PSF flux
zPSFluxMin
double
Minimum diaSource PSF flux
zPSFluxNdata
double
The number of data points used to compute zPSFluxChi2
zPSFluxPercentile05
double
5th percentile diaSource PSF flux
zPSFluxPercentile25
double
10th percentile diaSource PSF flux
zPSFluxPercentile50
double
Median diaSource PSF flux
zPSFluxPercentile75
double
75th percentile diaSource PSF flux
zPSFluxPercentile95
double
95th percentile diaSource PSF flux
zPSFluxSigma
double
Standard deviation of the distribution of zPSFlux
zPSFluxSkew
double
Skew of diaSource PSF flux
zPSFluxStetsonJ
double
StetsonJ statistic of diaSource PSF flux
zTOTFluxMean
double
Weighted mean of the PSF flux forced photometered at the diaSource position on the calibrated image
zTOTFluxMeanErr
double
Standard error on zTOTFluxMean
zTOTFluxSigma
double
Standard deviation of the PSF flux forced photometered at the diaSource position on the calibrated image
DiaSource
Properties of transient-object detections on the single-epoch difference images.
Column Name
Data Type
Unit
Description [UCD]
apFlux
double
nJy
Flux within 12.0-pixel aperture
apFluxErr
double
nJy
Flux uncertainty within 12.0-pixel aperture
apFlux_flag
boolean
General Failure Flag
apFlux_flag_apertureTruncated
boolean
Aperture did not fit within measurement image
bboxSize
long
Bounding box of diaSource footprint
ccdVisitId
long
Unique ID of CCD and visit where this source was detected and measured. Primary Key of the CcdVisit Table. [meta.id;obs.image]
centroid_flag
boolean
General failure flag, set if anything went wrong
centroid_neg_flag
boolean
Failure flag for negative, set if anything went wrong
centroid_pos_flag
boolean
Failure flag for positive, set if anything went wrong
coord_dec
double
deg
Fiducial ICRS Declination of centroid used for database indexing [pos.eq.dec;meta.main]
coord_ra
double
deg
Fiducial ICRS Right Ascension of centroid used for database indexing [pos.eq.ra;meta.main]
decl
double
deg
Position in Declination [pos.eq.dec]
diaObjectId
long
Unique DiaObject ID. Primary Key of the DIA Object Table [meta.id.assoc;src]
diaSourceId
long
Unique ID [meta.id;src;meta.main]
dipAngle
double
deg
Dipole orientation
dipChi2
double
Chi2 per degree of freedom of dipole fit
dipFluxDiff
double
nJy
Raw flux counts, positive lobe
dipFluxDiffErr
double
nJy
Raw flux uncertainty counts, positive lobe
dipLength
double
pixel
Pixel separation between positive and negative lobes of dipole
dipMeanFlux
double
count
Raw flux counts, positive lobe
dipMeanFluxErr
double
count
Raw flux uncertainty counts, positive lobe
filterName
char
Band used to take this observation
forced_PsfFlux_flag
boolean
Forced PSF flux general failure flag.
forced_PsfFlux_flag_edge
boolean
Forced PSF flux object was too close to the edge of the image to use the full PSF model.
forced_PsfFlux_flag_noGoodPixels
boolean
Forced PSF flux not enough non-rejected pixels in data to attempt the fit.
isDipole
boolean
Flag indicating diaSource is classified as a dipole
ixx
double
arcsec**2
Elliptical Gaussian adaptive moments
ixxPSF
double
arcsec**2
Adaptive moments of the PSF model at the object position
ixy
double
arcsec**2
Elliptical Gaussian adaptive moments
ixyPSF
double
arcsec**2
Adaptive moments of the PSF model at the object position
iyy
double
arcsec**2
Elliptical Gaussian adaptive moments
iyyPSF
double
arcsec**2
Adaptive moments of the PSF model at the object position
midPointTai
double
d
Effective mid-exposure time for this diaSource. [time.epoch;obs.exposure]
parentDiaSourceId
long
Unique ID of parent source
pixelFlags
boolean
General failure flag, set if anything went wrong
pixelFlags_bad
boolean
Bad pixel in the Source footprint
pixelFlags_cr
boolean
Cosmic ray in the Source footprint
pixelFlags_crCenter
boolean
Cosmic ray in the Source center
pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA)
pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint
pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center
pixelFlags_offimage
boolean
Source center is off image
pixelFlags_saturated
boolean
Saturated pixel in the Source footprint
pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center
pixelFlags_suspect
boolean
Source's footprint includes suspect pixels
pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels
pixelId
long
Position in ra/dec
psFlux
double
nJy
Flux derived from linear least-squares fit of PSF model
psFluxErr
double
nJy
Flux uncertainty derived from linear least-squares fit of PSF model
psfFlux_flag
boolean
Failure to derive linear least-squares fit of psf model forced on the calexp
psfFlux_flag_edge
boolean
Object was too close to the edge of the image to use the full PSF model
psfFlux_flag_noGoodPixels
boolean
Not enough non-rejected pixels in data to attempt the fit
ra
double
deg
Position in Right Ascension [pos.eq.ra]
shape_flag
boolean
General Failure Flag
shape_flag_maxIter
boolean
Too many iterations in adaptive moments
shape_flag_psf
boolean
Failure in measuring PSF model shape
shape_flag_shift
boolean
Centroid shifted by more than the maximum allowed amount
shape_flag_unweighted
boolean
Weighted moments converged to an invalid value; using unweighted moments
shape_flag_unweightedBad
boolean
Both weighted and unweighted moments were invalid
snr
double
Ratio of apFlux/apFluxErr
ssObjectId
long
Id of the solar system object (ssObject) this source was associated with, if any. If not, it is set to 0
totFlux
double
nJy
Forced PSF flux measured on the direct image.
totFluxErr
double
nJy
Forced PSF flux uncertainty measured on the direct image.
x
double
pixel
Unweighted first moment centroid, overall centroid
xErr
float
pixel
1-sigma uncertainty on x position
y
double
pixel
Unweighted first moment centroid, overall centroid
yErr
float
pixel
1-sigma uncertainty on y position
ForcedSourceOnDiaObject
Point-source forced-photometry measurements on individual single-epoch visit images and difference images, based on and linked to the entries in the DiaObject table.
Column Name
Data Type
Unit
Description [UCD]
band
char
Abstract filter that is not associated with a particular instrument [meta.id;instr.filter]
ccdVisitId
long
Unique ID of visit and detector for which forced photometry was performed. Primary Key of the CcdVisit Table. [meta.id;obs.image]
coord_dec
double
deg
Fiducial ICRS Declination of DiaObject centroid used for database indexing [pos.eq.dec;meta.main]
coord_ra
double
deg
Fiducial ICRS Right Ascension of DiaObject centroid used for database indexing [pos.eq.ra;meta.main]
diaObjectId
long
Unique DiaObject ID. Primary Key of the DiaObject Table [meta.id;src]
forcedSourceOnDiaObjectId
long
Unique ID of forced source. Primary Key. [meta.id;src;meta.main]
localBackground_instFlux
double
count
Background in annulus around source [phot.count]
localBackground_instFluxErr
double
count
1-sigma uncertainty on the background in an annulus around source [stat.error;phot.count]
localPhotoCalib
double
Local approximation of the PhotoCalib calibration factor at the location of the src. [phot.calib]
localPhotoCalibErr
double
Uncertainty on the local approximation of the PhotoCalib calibration factor at the location of the src. [stat.error;phot.calib]
localPhotoCalib_flag
boolean
Set for any fatal failure [meta.code.qual]
localWcs_CDMatrix_1_1
double
(1, 1) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_CDMatrix_1_2
double
(1, 2) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_CDMatrix_2_1
double
(2, 1) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_CDMatrix_2_2
double
(2, 2) element of the CDMatrix for the linear approximation of the WCS at the src location. Gives units in radians. [pos.wcs.cdmatrix]
localWcs_flag
boolean
Set for any fatal failure [meta.code.qual]
parentObjectId
long
Unique ObjectId of the parent of the ObjectId in context of the deblender. [meta.id.parent]
patch
long
Skymap patch ID [meta.id.part;obs.field]
pixelFlags_bad
boolean
Bad pixel in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_cr
boolean
Cosmic ray in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_crCenter
boolean
Cosmic ray in the Source center [meta.code.qual;instr.pixel]
pixelFlags_edge
boolean
Source is outside usable exposure region (masked EDGE or NO_DATA) [meta.code.qual;instr.pixel]
pixelFlags_interpolated
boolean
Interpolated pixel in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_interpolatedCenter
boolean
Interpolated pixel in the Source center [meta.code.qual;instr.pixel]
pixelFlags_saturated
boolean
Saturated pixel in the Source footprint [meta.code.qual;instr.pixel]
pixelFlags_saturatedCenter
boolean
Saturated pixel in the Source center [meta.code.qual;instr.pixel]
pixelFlags_suspect
boolean
Source's footprint includes suspect pixels [meta.code.qual;instr.pixel]
pixelFlags_suspectCenter
boolean
Source's center is close to suspect pixels [meta.code.qual;instr.pixel]
psfDiffFlux
double
nJy
Flux derived from linear least-squares fit of psf model forced on the image difference [phot.flux]
psfDiffFluxErr
double
nJy
Uncertainty on the flux derived from linear least-squares fit of psf model forced on the image difference [stat.error;phot.flux]
psfDiffFlux_flag
boolean
Failure to derive linear least-squares fit of psf model forced on the image difference [meta.code.qual]
psfFlux
double
nJy
Flux derived from linear least-squares fit of psf model forced on the calexp [phot.flux]
psfFluxErr
double
nJy
Uncertainty on the flux derived from linear least-squares fit of psf model forced on the calexp [stat.error;phot.flux]
psfFlux_flag
boolean
Failure to derive linear least-squares fit of psf model forced on the calexp [meta.code.qual]
skymap
char
Name of skymap used for coadd projection
tract
long
Skymap tract ID [meta.id;obs.field]
Visit
Metadata about the pointings of the DC2 simulated survey, largely associated with the boresight of the entire focal plane.
Column Name
Data Type
Unit
Description [UCD]
visit
long
Unique identifier. [meta.id;obs;meta.main]
physical_filter
char
ID of physical filter, the filter associated with a particular instrument. [meta.id;instr.filter]
band
char
Name of the band used to take the exposure where this source was measured. Abstract filter that is not associated with a particular instrument. [meta.id;instr.bandpass]
ra
double
deg
RA of focal plane center. [pos.eq.ra;meta.main]
decl
double
deg
Declination of focal plane center [pos.eq.dec;meta.main]
skyRotation
double
deg
Sky rotation angle. [pos.posAng]
azimuth
double
deg
Azimuth of focal plane center at the middle of the exposure. [pos.az.azi]
altitude
double
deg
Altitude of focal plane center at the middle of the exposure. [pos.az.alt]
zenithDistance
double
deg
Zenith distance at the middle of the exposure. [pos.az.zd]
airmass
double
Airmass of the observed line of sight. [obs.airMass]
expTime
double
s
Spatially-averaged duration of exposure, accurate to 10ms. [time.duration;obs.exposure]
expMidpt
timestamp
Midpoint time for exposure at the fiducial center of the focal plane array. TAI, accurate to 10ms.
expMidptMJD
double
d
Midpoint time for exposure at the fiducial center of the focal plane array in MJD. TAI, accurate to 10ms. [time.epoch;obs.exposure]
obsStart
timestamp
Start time of the exposure at the fiducial center of the focal plane array, TAI, accurate to 10ms. [time.start;obs.exposure]
obsStartMJD
double
d
Start of the exposure in MJD, TAI, accurate to 10ms. [time.start;obs.exposure]
CcdVisit
Metadata about the 189 individual CCD images for each Visit in the DC2 simulated survey.
Column Name
Data Type
Unit
Description [UCD]
ccdVisitId
long
Primary key (unique identifier). [meta.id;obs.image;meta.main]
visitId
long
Reference to the corresponding entry in the Visit table. [meta.id.parent;obs]
physical_filter
char
ID of physical filter, the filter associated with a particular instrument. [meta.id;instr.filter]
band
char
Name of the band used to take the exposure where this source was measured. Abstract filter that is not associated with a particular instrument. [meta.id;instr.bandpass]
ra
double
deg
RA of CCD center. [pos.eq.ra;meta.main]
decl
double
deg
Declination of CCD center. [pos.eq.dec;meta.main]
zenithDistance
float
deg
Zenith distance at observation mid-point. [pos.az.zd]
zeroPoint
float
mag
Zero-point for the CCD, estimated at CCD center. [arith.zp;instr.calib]
psfSigma
float
pixel
PSF model second-moments determinant radius (center of chip) [stat.stdev;instr.det.psf]
skyBg
float
adu
Average sky background. [instr.skyLevel]
skyNoise
float
adu
RMS noise of the sky background. [stat.rms;instr.skyLevel]
detector
long
Detector ID. A detector associated with a particular instrument (not an observation of that detector) [meta.id.part;instr.det]
seeing
double
arcsec
Mean measured FWHM of the PSF. [instr.obsty.seeing]
skyRotation
double
deg
Sky rotation angle. [pos.posAng]
expMidpt
timestamp
Midpoint for exposure. TAI, accurate to 10ms.
expMidptMJD
double
d
Midpoint for exposure in MJD. TAI, accurate to 10ms. [time.epoch;obs.exposure]
expTime
double
s
Spatially-averaged duration of exposure, accurate to 10ms. [time.duration;obs.exposure]
obsStart
timestamp
Start of the exposure, TAI, accurate to 10ms. [time.start;obs.exposure]
obsStartMJD
double
d
Start of the exposure in MJD, TAI, accurate to 10ms. [time.start;obs.exposure]
darkTime
double
s
Average dark current accumulation time, accurate to 10ms. [time.duration;obs.calib.dark]
xSize
long
pixel
Number of columns in the image. [meta.number;instr.det]
ySize
long
pixel
Number of rows in the image. [meta.number;instr.det]
llcra
double
deg
RA of lower left corner. [pos.eq.ra;pos.outline;obs.field]
llcdec
double
deg
Declination of lower left corner. [pos.eq.dec;pos.outline;obs.field]
ulcra
double
deg
RA of upper left corner. [pos.eq.ra;pos.outline;obs.field]
ulcdec
double
deg
Declination of upper left corner. [pos.eq.dec;pos.outline;obs.field]
urcra
double
deg
RA of upper right corner. [pos.eq.ra;pos.outline;obs.field]
urcdec
double
deg
Declination of upper right corner. [pos.eq.dec;pos.outline;obs.field]
lrcra
double
deg
RA of lower right corner. [pos.eq.ra;pos.outline;obs.field]
lrcdec
double
deg
Declination of lower right corner. [pos.eq.dec;pos.outline;obs.field]
CoaddPatches
Static information about the subset of tracts and patches from the standard LSST skymap that apply to coadds in these catalogs
Column Name
Data Type
Unit
Description [UCD]
lsst_tract
long
ID number of the top level, 'tract', within the standard LSST skymap [meta.id;obs.field]
lsst_patch
long
ID number of the second level, 'patch', within the standard LSST skymap [meta.id.part;obs.field]
s_ra
double
deg
Central Spatial Position in ICRS; Right ascension [pos.eq.ra]
s_dec
double
deg
Central Spatial Position in ICRS; Declination [pos.eq.dec]
s_region
char
Sky region covered by the coadd (expressed in ICRS frame) [pos.outline;obs.field]
MatchesTruth
Match information for TruthSummary objects.
Column Name
Data Type
Unit
Description [UCD]
match_candidate
boolean
True for sources that were selected for matching
match_count
int
Number of candidate object matches within match radius
match_chisq
double
The chi-squared value of the (best) match
match_n_chisq_finite
int
The number of finite columns used to compute the match chisq
id
char
id for TruthSummary source. Potentially non-unique; use id_truth_type for JOINs. [meta.id.assoc]
truth_type
int
Type of TruthSummary source; 1 for galaxies, 2 for stars, and 3 for SNe
match_objectId
long
objectId of matched entry in the Object table, if any [meta.id.assoc]
id_truth_type
char
Combination of TruthSummary id and truth_type fields, used for JOINs. [meta.id.assoc]
TruthSummary
Summary properties of objects from the DESC DC2 truth catalog, as described in arXiv:2101.04855. Includes the noiseless astrometric and photometric parameters.
Column Name
Data Type
Unit
Description [UCD]
id_truth_type
char
Combination of id and truth_type fields, used for JOINs with MatchesTruth. [meta.id]
id
char
Unique object ID [meta.id;meta.main]
host_galaxy
long
ID of the host galaxy for a SN/AGN entry (-1 for other truth types)
ra
double
deg
Right Ascension [pos.eq.ra]
dec
double
deg
Declination [pos.eq.dec]
redshift
float
Redshift
is_variable
int
1 for a variable source
is_pointsource
int
1 for a point source
flux_u
float
nJy
Static flux value in u
flux_g
float
nJy
Static flux value in g
flux_r
float
nJy
Static flux value in r
flux_i
float
nJy
Static flux value in i
flux_z
float
nJy
Static flux value in z
flux_y
float
nJy
Static flux value in y
flux_u_noMW
float
nJy
Static flux value in u, without Milky Way extinction (i.e., dereddened)
flux_g_noMW
float
nJy
Static flux value in g, without Milky Way extinction (i.e., dereddened)
flux_r_noMW
float
nJy
Static flux value in r, without Milky Way extinction (i.e., dereddened)
flux_i_noMW
float
nJy
Static flux value in i, without Milky Way extinction (i.e., dereddened)
flux_z_noMW
float
nJy
Static flux value in z, without Milky Way extinction (i.e., dereddened)
flux_y_noMW
float
nJy
Static flux value in y, without Milky Way extinction (i.e., dereddened)
mag_r
float
mag
Magnitude in r
cosmodc2_hp
long
Healpix ID in cosmoDC2 (for galaxies only; -1 for stars and SNe)
cosmodc2_id
long
Galaxy ID in cosmoDC2 (for galaxies only; -1 for stars and SNe)
truth_type
long
1 for galaxies, 2 for stars, and 3 for SNe
sdm_schemas is maintained by lsst.
This page was generated by GitHub Pages.