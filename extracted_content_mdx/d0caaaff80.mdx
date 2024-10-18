ts_dsm

  * Forum
  * Docs
  * LSST.org â



### Navigation

  * next » 
  * ts_dsm » 



# lsst.ts.DSMÂ¶

## OverviewÂ¶

The Dome Seeing Monitor (DSM) CSC is responsible for taking output telemetry files from the Dome Seeing Monitor UI and sending the information via SAL for recording in the EFD. Although the DSM is part of the Environmental Awareness System, it currently runs stand-alone and is not tied in to the EAS in any manner.

As with all CSCs, information on the package, developers and product owners can be found in the Master CSC Table.

Note

If you are interested in viewing other branches of this repository append a `/v` to the end of the url link. For example `https://ts_dsm.lsst.io/v/`

## User GuideÂ¶

The DSM CSC is a support CSC that is used in conjunction with the DSM UI in order to produce seeing measurements along the DSM probes line of sight. The functionality to produce these measurements are contained within the UI and are not described in this document. The UI is also responsible for the interaction with the DSM probe hardware. The operational interaction of these systems and other details are captured in SITCOMTN-001 technical note.

There are two scripts that perform operations of the CSC. They are `run_dsm` and `shutdown_dsm`. The parameters they take can be found by passing `-h` or `--help` to the given script. The `run_dsm` script constructs the CSC optionally sends it to a specified state. We typically want this CSC to be running straight away, in which case specify `--state=enabled`. The CSC can be run in real mode or one of two simulation modes. The simulation modes will be shown in the next section. To run the CSC in real mode, do the following.
    
    
    run_dsm --state=enabled <index>
    

The `<index>` is an integer value. The DSM currently has two indexes (1 and 2) since there are two units in operation.

Since the DSMs are mobile field units, shutting down the CSCs via the ScriptQueue is not always practical from the field. Also, while observing is under way, it may be difficult to get a priority interrupt into the queue to perform the shutdown. To allow for operator independence, a shutdown script is provided. The `shutdown_dsm` script can be used to send the CSC to `STANDBY` or `OFFLINE` state. If the CSC is sent to `OFFLINE`, the process started by the `run_dsm` script will be shutdown and terminated. Since the run script will block the current container terminal, you will have to `docker exec` into the container to run the shutdown script. For `STANDBY` state, run the script this way.
    
    
    shutdown_dsm --state=standby <index>
    

To stop the run script, execute the shutdown script this way.
    
    
    shutdown_dsm --state=offline <index>
    

You must ensure that the index used by the shutdown script is matches the one used by the run script.

### ConfigurationÂ¶

The DSM is a non-configurable CSC.

### SimulatorÂ¶

There are two simulation modes available to the DSM CSC. One mode sends out the telemetry information every second (fast mode) and the other mode sends it out every 30 seconds (slow mode). The telemetry files are generated internally by the CSC so the operation looks very similar to real mode operation, except that the telemetry directory is a generated directory in `/tmp` and requires no special setup. To run the CSC in fast mode, do the following.
    
    
    run_dsm --simulate=1 1
    

To run the CSC is slow mode, do the following.
    
    
    run_dsm --simulate=2 1
    

The above commands will put the CSC into `STANDBY` state. Use the `--state=enabled` flag shown above to put the CSC into `ENABLED` state.

## Developer GuideÂ¶

This area of documentation focuses on the classes used, APIâs, and how to participate to the development of the DSM software packages.

  * DSM Developer Guide



## Version HistoryÂ¶

The version history of the DSM is found at the following link.

  * Version History



### On this page

  * lsst.ts.DSM
    * Overview
    * User Guide
      * Configuration
      * Simulator
    * Developer Guide
    * Version History



Back to Top

Last built Mar 25, 2024. 

Created using Sphinx 5.3.0. Page design is based on Astropy's bootstrap-astropy theme in astropy-helpers.   
LSST documentation is proudly served through the Fastly CDN. 

© Copyright 2015-2024 LSST contributors.  


Financial support for LSST comes from the National Science Foundation (NSF) through Cooperative Agreement No. 1258333, the Department of Energy (DOE) Office of Science under Contract No. DE-AC02-76SF00515, and private funding raised by the LSST Corporation. The NSF-funded LSST Project Office for construction was established as an operating center under management of the Association of Universities for Research in Astronomy (AURA). The DOE-funded effort to build the LSST camera is managed by the SLAC National Accelerator Laboratory (SLAC). 
