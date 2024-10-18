ts_ATDome

  * Forum
  * Docs
  * LSST.org â



### Navigation

  * next » 
  * ts_ATDome » 



# lsst.ts.ATDomeÂ¶

## OverviewÂ¶

ATDome controls the Vera C. Rubin Observatory Auxiliary Telescope Dome.

The Auxiliary Telescope Dome is a 30 foot diameter Ash Dome with azimuth rotation and two shutter doors. The azimuth axis has no rotation limits. The top shutter door gives visibility from 30Â° elevation to zenith (90Â°), whereas the bottom shutter gives visibility from the horizon to 30Â° elevation.

## User GuideÂ¶

Start the ATDome CSC as follows:
    
    
    run_atdome.py
    

Stop the CSC by sending it to the OFFLINE state.

See ATDome SAL communication interface for commands, events and telemetry.

For on-sky observing: enable ATDomeTrajectory azimuth following by issuing the ATDomeTrajectory setEnabledMode command command with `enabled=True`. ATDomeTrajectory will automatically command ATDome to follow the telescope azimuth.

To move the dome manually in azimuth: first disable ATDomeTrajectory azimuth following by issuing the ATDomeTrajectory setEnabledMode command command with `enabled=False`. Then issue the ATDome moveAzimuth command to move the dome.

The moveAzimuth command is reported as done as soon as the command is received; use the azimuthState event to track when the move actually finishes.

The door commands are reported done when the doors have finished moving.

The homeAzimuth command is reported done when homing has finished. The low-level controller does not report whether the azimuth axis has been homed, so the CSC only knows the dome has been homed if you run the homeAzimuth command. Thus it will log a warning if issue the moveAzimuth command before the CSC has homed the dome, but still allow the motion.

New commands may be sent at any time, though moveAzimuth and homeAzimuth will be rejected while homing azimuth. If a new door command arrives while the door is moving, the door immediately starts moving to the new position and the old door command is reported as superseded.

### ConfigurationÂ¶

It is unlikely that a user will have to modify the default configuration for ATDome, as it only contains parameters for the connection to the low-level controller.

Configuration is defined by this schema.

Configuration files live in ts_config_attcs/ATDome.

### SimulatorÂ¶

The CSC includes a simulation mode. To run using simulation:
    
    
    run_atdome.py --simulate
    

The simulated azimuth axis and shutter doors move at constant speed, with infinite acceleration.

## Developer GuideÂ¶

  * Developer Guide



## Version HistoryÂ¶

  * Version History



### On this page

  * lsst.ts.ATDome
    * Overview
    * User Guide
      * Configuration
      * Simulator
    * Developer Guide
    * Version History



Back to Top

Last built May 04, 2021. 

Created using Sphinx 3.5.3. Page design is based on Astropy's bootstrap-astropy theme in astropy-helpers.   
LSST documentation is proudly served through the Fastly CDN. 

© Copyright 2015-2021 LSST contributors.  


Financial support for LSST comes from the National Science Foundation (NSF) through Cooperative Agreement No. 1258333, the Department of Energy (DOE) Office of Science under Contract No. DE-AC02-76SF00515, and private funding raised by the LSST Corporation. The NSF-funded LSST Project Office for construction was established as an operating center under management of the Association of Universities for Research in Astronomy (AURA). The DOE-funded effort to build the LSST camera is managed by the SLAC National Accelerator Laboratory (SLAC). 
