ts_salobj

  * Forum
  * Docs
  * LSST.org â



### Navigation

  * next » 
  * ts_salobj » 



# lsst.ts.salobjÂ¶

Object-oriented Python interface to Service Abstraction Layer (SAL) components that uses asyncio for asynchronous communication. `ts_salobj` SAL communication uses the dds Python library, which is part of Vortex OpenSplice. You may use the free community edition or the licensed edition of OpenSplice.

## Using lsst.ts.salobjÂ¶

  * Configuring ts_salobj
    * Environment Variables
    * Other Configuration
  * Installation
    * Install ADLink OpenSplice
    * Configure ADLink OpenSplice
    * Install ts_salobj
  * salobj CSCs
    * Writing a CSC
    * Basic Development
    * CSC Details
    * Indexed CSCs
    * Configurable CSC Details
    * Standard State Transition Commands
    * Unit Testing your CSC
    * Externally Commandable CSCs
    * Running a CSC
    * Simulation Mode
    * External Connections
    * Telemetry Loop Example
  * SAL Scripts
  * Script Packages
  * Python SAL Scripts
    * Python Script File
    * Python Script Implementation
    * Python Unit Test



### Important ClassesÂ¶

  * `BaseCsc` and `ConfigurableCsc` are subclasses of `Controller` that supports the standard CSC summary states and state transition commands. The latter also supports configuration via yaml files that are validated against a schema. See Writing a CSC for more information. It is important to call `BaseCsc.close` when done with the CSC; `BaseCsc.amain` does this automatically, but in other cases see Cleanup for more information.

  * `Controller` provides the capability to output SAL telemetry and event topics and receive SAL commands. Every Python SAL component that is not a Commandable SAL Component (CSC) should be a subclass of `Controller`. See Writing a Controller for more information. Note that it is important to close the `Controller` when you are finished. See Cleanup for more information.

  * `Remote` supports listening to other SAL components; it can receive events and telemetry and issue commands. If your SAL component needs to do this then it should create one `Remote` for each SAL component it wants to interact with. See the example above.

  * `Domain` contains the dds domain participant (which includes a cache of topic data) and quality of service objects for the various categories. There should be only one `Domain` per process or unit test method, if practical, though some unit tests create a few more. `Controller` creates and manages a `Domain`, but if you have no controller and wish to construct one or more `Remote`s then you will have to create and manage a `Domain` yourself. See Cleanup for more information.

  * `BaseScript` is a base class for Python SAL Scripts.

  * `AsyncS3Bucket` is a class for asynchronously uploading and downloading files to/from s3 buckets.




Examples:

  * `TestCsc` is an example of a fairly simple SAL CSC, though it is slightly unusual because it is intended for use in unit tests. In particular, it does not output telemetry at regular intervals.

  * `TestScript` is an example of a trivial Python SAL Script.




### CleanupÂ¶

It is important to call `Controller.close` or `Domain.close` when done with any controller or domain you construct, unless your process is exiting. Note that closing a `Domain` automatically cleans up the resources used by all `Remote`s constructed using that domain.

Both `Controller` and `Domain` can be used as asynchronous context managers to call `close` automatically. For example:

> 
>     # If you have a controller or CSC:
>     async with TestCsc(index=1) as csc:
>         dome = Remote(domain=csc.domain, name="Test", index=0)
>     
>     # If you don't have a controller or CSC:
>     async with Domain() as domain:
>         dome = Remote(domain=domain, name="Test", index=1)
>     

## ContributingÂ¶

`lsst.ts.salobj` is developed at https://github.com/lsst-ts/ts_salobj. You can find Jira issues for this module using project=DM and labels=ts_salobj.

## Python API referenceÂ¶

### lsst.ts.salobj PackageÂ¶

#### FunctionsÂ¶

`as_salRetCode`(value)

Convert an int (or SalRetCode) to a SalRetCode.  
  
`as_state`(value)

Convert an int (or State) to a State.  
  
`assertRaisesAckError`([ack,Â error,Â ...])

Assert that code raises a salobj.AckError  
  
`assertRaisesAckTimeoutError`([ack,Â error])

Assert that code raises a salobj.AckTimeoutError  
  
`command_test_csc`()

Command the CSC Commander from the command line.  
  
`get_dds_version`([dds_file])

Get the version of OpenSplice dds library.  
  
`get_expected_summary_states`(initial_state,Â ...)

Return all summary states expected when transitioning from one state to another.  
  
`get_opensplice_version`()

Get the version of OpenSplice as a string.  
  
`get_user_host`()

Get the username and host as user@host  
  
`hierarchical_update`(main,Â override,Â ...[,Â ...])

Hierarchically update one dict with values from another.  
  
`make_mock_write_topics`(name,Â attr_names[,Â index])

Make a struct of mock write topics for unit testing data clients.  
  
`make_state_transition_dict`()

Make a dict of state transition commands and states  
  
`name_to_name_index`(name)

Parse a SAL component name of the form name[:index].  
  
`parse_idl`(name,Â idl_path)

Parse the SAL-generated IDL file.  
  
`run_test_csc`()

Run the Test CSC from the command line.  
  
`set_random_lsst_dds_partition_prefix`()

Set a random value for environment variable LSST_DDS_PARTITION_PREFIX  
  
`set_summary_state`(remote,Â state[,Â override,Â ...])

Put a CSC into the specified summary state.  
  
`stream_as_generator`(stream[,Â exit_str])

Await lines of text from stdin or another text input stream.  
  
#### ClassesÂ¶

`AckCmdDataType`([private_revCode,Â ...])

AckCmd topic data type, for type annotations.  
  
`AckError`(msg,Â ackcmd)

Exception raised if a command fails.  
  
`AckTimeoutError`(msg,Â ackcmd)

Exception raised if waiting for a command acknowledgement times out.  
  
`AsyncS3Bucket`(name,Â *[,Â create,Â profile,Â domock])

Asynchronous interface to an Amazon Web Services s3 bucket.  
  
`BaseConfigTestCase`()

Base class for testing configuration files.  
  
`BaseCsc`(name[,Â index,Â check_if_duplicate,Â ...])

Base class for a Commandable SAL Component (CSC)  
  
`BaseCscTestCase`()

Base class for CSC tests.  
  
`BaseDdsDataType`

alias of `BaseMsgType`  
  
`BaseMsgType`([private_revCode,Â ...])

Base DDS sample data type, for type annotations.  
  
`BaseScript`(index,Â descr[,Â help])

Abstract base class for SAL Scripts.  
  
`ConfigurableCsc`(name,Â index,Â config_schema)

Base class for a configurable Commandable SAL Component (CSC)  
  
`Controller`(name[,Â index,Â do_callbacks,Â ...])

A class that receives commands for a SAL component and sends telemetry and events from that component.  
  
`CscCommander`(name[,Â index,Â enable,Â exclude,Â ...])

Command a CSC from the command line.  
  
`DefaultingValidator`(schema,Â typing.Any],Â ...)

A wrapper for jsonschema validators that applies default values.  
  
`Domain`()

dds domain participant and quality of service information.  
  
`ExpectedError`

Report an error that does not benefit from a traceback.  
  
`FieldMetadata`(name,Â description,Â units,Â ...)

Information about a field.  
  
`IdlMetadata`(name,Â idl_path,Â sal_version,Â ...)

Information about SAL topics in an IDL file.  
  
`QosSet`(qos_path,Â profile_name)

QoS profiles for topic, reader and writer.  
  
`Remote`(domain,Â name[,Â index,Â readonly,Â ...])

A class that issues commands to a SAL component and receives telemetry and events from that component.  
  
`SalInfo`(domain,Â name[,Â index,Â write_only])

DDS information for one SAL component and its DDS partition  
  
`SalLogHandler`(controller)

Log handler that outputs an event topic.  
  
`SalRetCode`(value[,Â names,Â module,Â qualname,Â ...])

SAL return codes.  
  
`State`(value[,Â names,Â module,Â qualname,Â ...])

CSC summaryState constants.  
  
`TestCsc`(index[,Â config_dir,Â ...])

A simple CSC intended for unit testing.  
  
`TestCscCommander`(index[,Â enable])

Control a Test CSC from the command line.  
  
`TestScript`(index[,Â descr])

Test script to allow testing BaseScript.  
  
`TopicMetadata`(sal_name,Â version_hash,Â ...)

Metadata about a topic.  
  
#### Class Inheritance DiagramÂ¶

Inheritance diagram of lsst.ts.salobj.type_hints.AckCmdDataType, lsst.ts.salobj.base.AckError, lsst.ts.salobj.base.AckTimeoutError, lsst.ts.salobj.async_s3_bucket.AsyncS3Bucket, lsst.ts.salobj.base_config_test_case.BaseConfigTestCase, lsst.ts.salobj.base_csc.BaseCsc, lsst.ts.salobj.base_csc_test_case.BaseCscTestCase, lsst.ts.salobj.type_hints.BaseMsgType, lsst.ts.salobj.type_hints.BaseMsgType, lsst.ts.salobj.base_script.BaseScript, lsst.ts.salobj.configurable_csc.ConfigurableCsc, lsst.ts.salobj.controller.Controller, lsst.ts.salobj.csc_commander.CscCommander, lsst.ts.salobj.validator.DefaultingValidator, lsst.ts.salobj.domain.Domain, lsst.ts.salobj.base.ExpectedError, lsst.ts.salobj.idl_metadata.FieldMetadata, lsst.ts.salobj.idl_metadata.IdlMetadata, lsst.ts.salobj.domain.QosSet, lsst.ts.salobj.remote.Remote, lsst.ts.salobj.sal_info.SalInfo, lsst.ts.salobj.sal_log_handler.SalLogHandler, lsst.ts.salobj.sal_enums.SalRetCode, lsst.ts.salobj.sal_enums.State, lsst.ts.salobj.testcsc.TestCsc, lsst.ts.salobj.testcsccommander.TestCscCommander, lsst.ts.salobj.testscript.TestScript, lsst.ts.salobj.idl_metadata.TopicMetadata

### lsst.ts.salobj.topics PackageÂ¶

#### ClassesÂ¶

`AckCmdReader`(salinfo[,Â queue_len])

ackcmd (command acknowledgement) topic reader.  
  
`AckCmdWriter`(salinfo)

ackcmd (command acknowledgement) topic writer.  
  
`BaseTopic`(*,Â salinfo,Â attr_name)

Base class for topics.  
  
`CommandInfo`(remote_command,Â seq_num,Â wait_done)

Struct to hold information about a command.  
  
`ControllerCommand`(salinfo,Â name[,Â queue_len])

Read a specified command topic.  
  
`ControllerEvent`(salinfo,Â name)

Write a specific event topic.  
  
`ControllerTelemetry`(salinfo,Â name)

Write a specific telemetry topic.  
  
`MockWriteTopic`(*,Â salinfo,Â attr_name[,Â ...])

A version of WriteTopic that records every message written instead of actually writing it.  
  
`QueueCapacityChecker`(descr,Â log,Â queue_len)

Log warnings for a fixed-length queue that should contain no more than one item.  
  
`ReadTopic`(*,Â salinfo,Â attr_name,Â max_history)

Base class for reading a topic.  
  
`RemoteCommand`(salinfo,Â name)

Issue a specific command topic and wait for acknowldgement.  
  
`RemoteEvent`(salinfo,Â name[,Â max_history,Â ...])

Read a specific event topic.  
  
`RemoteTelemetry`(salinfo,Â name[,Â queue_len])

Read a specific telemetry topic.  
  
`SetWriteResult`(did_change,Â was_written,Â data)

Result from set_write.  
  
`WriteTopic`(*,Â salinfo,Â attr_name[,Â ...])

Base class for topics that are written.  
  
#### Class Inheritance DiagramÂ¶

Inheritance diagram of lsst.ts.salobj.topics.remote_command.AckCmdReader, lsst.ts.salobj.topics.controller_command.AckCmdWriter, lsst.ts.salobj.topics.base_topic.BaseTopic, lsst.ts.salobj.topics.remote_command.CommandInfo, lsst.ts.salobj.topics.controller_command.ControllerCommand, lsst.ts.salobj.topics.controller_event.ControllerEvent, lsst.ts.salobj.topics.controller_telemetry.ControllerTelemetry, lsst.ts.salobj.topics.mock_write_topic.MockWriteTopic, lsst.ts.salobj.topics.read_topic.QueueCapacityChecker, lsst.ts.salobj.topics.read_topic.ReadTopic, lsst.ts.salobj.topics.remote_command.RemoteCommand, lsst.ts.salobj.topics.remote_event.RemoteEvent, lsst.ts.salobj.topics.remote_telemetry.RemoteTelemetry, lsst.ts.salobj.topics.write_topic.SetWriteResult, lsst.ts.salobj.topics.write_topic.WriteTopic

## Version HistoryÂ¶

  * Version History



### On this page

  * lsst.ts.salobj
    * Using lsst.ts.salobj
      * Important Classes
      * Cleanup
    * Contributing
    * Python API reference
      * lsst.ts.salobj Package
        * Functions
        * Classes
        * Class Inheritance Diagram
      * lsst.ts.salobj.topics Package
        * Classes
        * Class Inheritance Diagram
    * Version History



Back to Top

Last built Mar 25, 2024. 

Created using Sphinx 5.3.0. Page design is based on Astropy's bootstrap-astropy theme in astropy-helpers.   
LSST documentation is proudly served through the Fastly CDN. 

© Copyright 2015-2024 LSST contributors.  


Financial support for LSST comes from the National Science Foundation (NSF) through Cooperative Agreement No. 1258333, the Department of Energy (DOE) Office of Science under Contract No. DE-AC02-76SF00515, and private funding raised by the LSST Corporation. The NSF-funded LSST Project Office for construction was established as an operating center under management of the Association of Universities for Research in Astronomy (AURA). The DOE-funded effort to build the LSST camera is managed by the SLAC National Accelerator Laboratory (SLAC). 
