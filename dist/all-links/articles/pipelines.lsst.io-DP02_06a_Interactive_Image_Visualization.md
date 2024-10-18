lsst.daf.butler — LSST Science Pipelines
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
lsst.daf.butler
lsst.daf.butler¶
Changes¶
Butler 27.0.0 2024-05-28
Butler v26.0.0 2023-09-22
Butler v25.0.0 2023-02-27
Butler v24.0.0 2022-08-26
Butler v23.0.0 2021-12-10
Butler v22.0 2021-04-01
Using the Butler¶
Configuring a Butler
Datastore Configuration
Storage Classes, Storage Class Delegates, and Formatters
Organizing and identifying datasets
Querying datasets
Using the Butler in unit tests
This module provides an abstracted data access interface, known as the Butler.
It can be used to read and write data without having to know the details of file formats or locations.
The Dimensions System¶
Overview
Dimension Relationships and Containers
Data IDs
Spatial and Temporal Dimensions
Dimension Universe Change History
Concrete Storage Classes¶
DataFrame
Butler Command-Line Reference¶
Specifying Command-Line Options from a File
Controlling Log Output from Command-Line Tooling
butler
Design and Development¶
lsst.daf.butler is developed at https://github.com/lsst/daf_butler.
You can find Jira issues for this module under the daf_butler component.
Design notes for DataCoordinate
Butler Command Line Interface Development¶
The Butler Command
Butler Command Line Interface Utilities
Adding Butler Subcommands
Writing Other Commands
Python API reference¶
lsst.daf.butler Package¶
Functions¶
addDimensionForeignKey(tableSpec, dimension, ...)
Add a field and possibly a foreign key to a table specification.
is_timespan_column(tag)
Test whether a column tag is a timespan.
Classes¶
AmbiguousDatasetError
Raised when a DatasetRef is not resolved but should be.
Butler([config, collections, run, ...])
Interface for data butler and factory for Butler instances.
ButlerCollections()
Methods for working with collections stored in the Butler.
ButlerConfig([other, searchPaths, ...])
Contains the configuration for a Butler.
ButlerLogRecords([root])
Class representing a collection of ButlerLogRecord.
ButlerRepoIndex()
Index of all known butler repositories.
ButlerUserError(detail)
Base class for Butler exceptions that contain a user-facing error message.
CalibrationLookupError
Exception raised for failures to look up a calibration dataset.
CollectionCycleError
Raised when an operation would cause a chained collection to be a child of itself.
CollectionType(value[, names, module, ...])
Enumeration used to label different types of collections.
CollectionTypeError(detail)
Exception raised when type of a collection is incorrect.
ColumnCategorization(dimension_keys, ...)
Split an iterable of ColumnTag objects by type.
ColumnTypeInfo(timespan_cls, universe, ...)
A struct that aggregates information about column types that can differ across data repositories due to Registry and dimension configuration.
Config([other])
Implements a datatype that is used by Butler for configuration.
ConfigSubset([other, validate, ...])
Config representing a subset of a more general configuration.
DataCoordinate()
A validated data ID.
DataCoordinateIterable()
An abstract base class for homogeneous iterables of data IDs.
DataCoordinateSequence(dataIds[, graph, ...])
Iterable supporting the full Sequence interface.
DataCoordinateSet(dataIds[, graph, ...])
Iterable iteration that is set-like.
DatabaseDimension(name, *, required, ...)
A Dimension class that maps directly to a database table or query.
DatabaseDimensionCombination(name, *, ...)
A combination class that maps directly to a database table or query.
DatabaseDimensionElement(name, *, implied, ...)
An intermediate base class for DimensionElement database classes.
DatabaseTopologicalFamily(name, space, *, ...)
Database topological family implementation.
DatasetAssociation(ref, collection, timespan)
Class representing the membership of a dataset in a single collection.
DatasetColumnTag(dataset_type, column)
An identifier for Relation columns that represent columns from a dataset query or subquery.
DatasetComponent(name, storageClass, component)
Component of a dataset and associated information.
DatasetExistence(value[, names, module, ...])
Flags representing the different states that a dataset can have in a Butler repository.
DatasetId
alias of UUID
DatasetIdFactory()
Factory for dataset IDs (UUIDs).
DatasetIdGenEnum(value[, names, module, ...])
Enum used to specify dataset ID generation options.
DatasetNotFoundError
The requested dataset could not be found.
DatasetRef(datasetType, dataId, run, *[, ...])
Reference to a Dataset in a Registry.
DatasetType(name, dimensions, storageClass)
A named category of Datasets.
DatasetTypeNotSupportedError
A DatasetType is not handled by this routine.
Datastore(config, bridgeManager)
Datastore interface.
DeferredDatasetHandle(butler, ref, parameters)
Proxy class that provides deferred loading of datasets from a butler.
Dimension()
A dimension.
DimensionCombination()
Element with extra information.
DimensionConfig([other, validate, searchPaths])
Configuration that defines a DimensionUniverse.
DimensionElement()
A label and/or metadata in the dimensions system.
DimensionGraph(*args, **kwargs)
An immutable, dependency-complete collection of dimensions.
DimensionGroup(universe[, names, _conform])
An immutable, dependency-complete collection of dimensions.
DimensionKeyColumnTag(dimension)
An identifier for Relation columns that represent a dimension primary key value.
DimensionNameError
Exception raised when a dimension specified in a data ID does not exist or required dimension is not provided.
DimensionPacker(fixed, dimensions)
Class for going from DataCoordinate to packed integer ID and back.
DimensionRecord(**kwargs)
Base class for the Python representation of database records.
DimensionRecordColumnTag(element, column)
An identifier for Relation columns that represent non-key columns in a dimension or dimension element record.
DimensionRecordFactory(*args, **kwargs)
Protocol for a callback that can be used to create a dimension record to add to a DimensionRecordSet when a search for an existing one fails.
DimensionRecordSchema(element)
A description of the columns in a dimension element's records.
DimensionRecordSet(element[, records, ...])
A mutable set-like container specialized for DimensionRecord objects.
DimensionRecordTable([element, records, ...])
A table-like container for DimensionRecord objects.
DimensionRecordsAccumulator()
Class used to accumulate dimension records for serialization.
DimensionUniverse([config, version, ...])
Self-consistent set of dimensions.
EmptyQueryResultError(reasons)
Exception raised when query methods return an empty result and explain flag is set.
FileDataset(path, refs, *[, formatter])
A struct that represents a dataset exported to a file.
FileDescriptor(location, storageClass[, ...])
Describes a particular file.
Formatter(fileDescriptor, dataId[, ...])
Interface for reading and writing Datasets.
FormatterFactory()
Factory for Formatter instances.
GovernorDimension(name, *, metadata_columns, ...)
Governor dimension.
LabeledButlerFactory([repositories])
Factory for efficiently instantiating Butler instances from the repository index file.
LimitedButler()
A minimal butler interface that is sufficient to back PipelineTask execution.
Location(datastoreRootUri, path, *[, ...])
Identifies a location within the Datastore.
LocationFactory(datastoreRoot)
Factory for Location instances.
LookupKey([name, dimensions, dataId, universe])
Representation of key that can be used to lookup information.
MissingCollectionError(detail)
Exception raised when an operation attempts to use a collection that does not exist.
MissingDatasetTypeError
Exception raised when a dataset type does not exist.
NameMappingSetView(mapping)
A lightweight implementation of NamedValueAbstractSet.
NamedKeyDict(*args)
Dictionary wrapper for named keys.
NamedKeyMapping()
Custom mapping class.
NamedValueAbstractSet()
Custom sets with named elements.
NamedValueMutableSet()
Mutable variant of NamedValueAbstractSet.
NamedValueSet([elements])
Custom mutable set class.
NoDefaultCollectionError
Exception raised when a collection is needed, but collection argument is not provided and default collection is not defined in registry.
Progress(name[, level])
Public interface for reporting incremental progress in the butler and related tools.
Quantum(*[, taskName, taskClass, dataId, ...])
Class representing a discrete unit of work.
QuantumBackedButler(predicted_inputs, ...[, ...])
An implementation of LimitedButler intended to back execution of a single Quantum.
QuantumProvenanceData(*, predicted_inputs, ...)
A serializable struct for per-quantum provenance information and datastore records.
Registry()
Abstract Registry interface.
RepoExportContext(registry, datastore, ...)
Public interface for exporting a subset of a data repository.
SerializedDataCoordinate(*, dataId[, records])
Simplified model for serializing a DataCoordinate.
SerializedDatasetRef(*, id[, datasetType, ...])
Simplified model of a DatasetRef suitable for serialization.
SerializedDatasetType(*, name[, ...])
Simplified model of a DatasetType suitable for serialization.
SerializedDimensionGraph(*, names)
Simplified model of a DimensionGraph suitable for serialization.
SerializedDimensionRecord(*, definition, record)
Simplified model for serializing a DimensionRecord.
SerializedQuantum(*[, taskName, dataId, ...])
Simplified model of a Quantum suitable for serialization.
SkyPixDimension(system, level)
Special dimension for sky pixelizations.
SkyPixSystem(name, *, maxLevel, ...)
Class for hierarchical pixelization of the sky.
StorageClass([name, pytype, components, ...])
Class describing how a label maps to a particular Python type.
StorageClassConfig([other, validate, ...])
Configuration class for defining Storage Classes.
StorageClassDelegate(storageClass)
Delegate class for StorageClass components and parameters.
StorageClassFactory()
Factory for StorageClass instances.
Timespan(begin, end[, padInstantaneous, _nsec])
A half-open time interval with nanosecond precision.
TopologicalFamily(name, space)
A grouping of TopologicalRelationshipEndpoint objects.
TopologicalRelationshipEndpoint()
Representation of a logical table that can participate in overlap joins.
TopologicalSpace(value[, names, module, ...])
Enumeration of continuous-variable relationships for dimensions.
ValidationError
Some sort of validation error has occurred.
YamlRepoExportBackend(stream, universe)
A repository export implementation that saves to a YAML file.
YamlRepoImportBackend(stream, registry)
A repository import implementation that reads from a YAML file.
Class Inheritance Diagram¶
digraph inheritance3133b50196 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"AmbiguousDatasetError" [URL="../../../py-api/lsst.daf.butler.AmbiguousDatasetError.html#lsst.daf.butler.AmbiguousDatasetError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Raised when a `DatasetRef` is not resolved but should be."];
"BaseModel" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Usage docs: https://docs.pydantic.dev/2.5/concepts/models/"];
"Butler" [URL="../../../py-api/lsst.daf.butler.Butler.html#lsst.daf.butler.Butler",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for data butler and factory for Butler instances."];
"LimitedButler" -> "Butler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerCollections" [URL="../../../py-api/lsst.daf.butler.ButlerCollections.html#lsst.daf.butler.ButlerCollections",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Methods for working with collections stored in the Butler."];
"ABC" -> "ButlerCollections" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerConfig" [URL="../../../py-api/lsst.daf.butler.ButlerConfig.html#lsst.daf.butler.ButlerConfig",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Contains the configuration for a `Butler`."];
"Config" -> "ButlerConfig" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerLogRecords" [URL="../../../py-api/lsst.daf.butler.logging.ButlerLogRecords.html#lsst.daf.butler.logging.ButlerLogRecords",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class representing a collection of `ButlerLogRecord`."];
"_ButlerLogRecords" -> "ButlerLogRecords" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerRepoIndex" [URL="../../../py-api/lsst.daf.butler.ButlerRepoIndex.html#lsst.daf.butler.ButlerRepoIndex",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Index of all known butler repositories."];
"ButlerUserError" [URL="../../../py-api/lsst.daf.butler.ButlerUserError.html#lsst.daf.butler.ButlerUserError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Base class for Butler exceptions that contain a user-facing error"];
"CalibrationLookupError" [URL="../../../py-api/lsst.daf.butler.CalibrationLookupError.html#lsst.daf.butler.CalibrationLookupError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised for failures to look up a calibration dataset."];
"ButlerUserError" -> "CalibrationLookupError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Collection" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Sized" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Iterable" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionCycleError" [URL="../../../py-api/lsst.daf.butler.CollectionCycleError.html#lsst.daf.butler.CollectionCycleError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Raised when an operation would cause a chained collection to be a child"];
"ButlerUserError" -> "CollectionCycleError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Exception raised for collection-related errors."];
"RegistryError" -> "CollectionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionType" [URL="../../../py-api/lsst.daf.butler.CollectionType.html#lsst.daf.butler.CollectionType",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Enumeration used to label different types of collections."];
"IntEnum" -> "CollectionType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionTypeError" [URL="../../../py-api/lsst.daf.butler.CollectionTypeError.html#lsst.daf.butler.CollectionTypeError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when type of a collection is incorrect."];
"CollectionError" -> "CollectionTypeError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerUserError" -> "CollectionTypeError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ColumnCategorization" [URL="../../../py-api/lsst.daf.butler.ColumnCategorization.html#lsst.daf.butler.ColumnCategorization",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Split an iterable of ColumnTag objects by type."];
"ColumnTypeInfo" [URL="../../../py-api/lsst.daf.butler.ColumnTypeInfo.html#lsst.daf.butler.ColumnTypeInfo",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A struct that aggregates information about column types that can differ"];
"Config" [URL="../../../py-api/lsst.daf.butler.Config.html#lsst.daf.butler.Config",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Implements a datatype that is used by `Butler` for configuration."];
"MutableMapping" -> "Config" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ConfigSubset" [URL="../../../py-api/lsst.daf.butler.ConfigSubset.html#lsst.daf.butler.ConfigSubset",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Config representing a subset of a more general configuration."];
"Config" -> "ConfigSubset" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"DataCoordinate" [URL="../../../py-api/lsst.daf.butler.DataCoordinate.html#lsst.daf.butler.DataCoordinate",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A validated data ID."];
"NamedKeyMapping" -> "DataCoordinate" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataCoordinateIterable" [URL="../../../py-api/lsst.daf.butler.DataCoordinateIterable.html#lsst.daf.butler.DataCoordinateIterable",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract base class for homogeneous iterables of data IDs."];
"Iterable" -> "DataCoordinateIterable" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataCoordinateSequence" [URL="../../../py-api/lsst.daf.butler.DataCoordinateSequence.html#lsst.daf.butler.DataCoordinateSequence",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Iterable supporting the full Sequence interface."];
"_DataCoordinateCollectionBase" -> "DataCoordinateSequence" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Sequence" -> "DataCoordinateSequence" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataCoordinateSet" [URL="../../../py-api/lsst.daf.butler.DataCoordinateSet.html#lsst.daf.butler.DataCoordinateSet",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Iterable iteration that is set-like."];
"_DataCoordinateCollectionBase" -> "DataCoordinateSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataIdError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Exception raised for incorrect data IDs, this is a base class for other"];
"RegistryError" -> "DataIdError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseDimension" [URL="../../../py-api/lsst.daf.butler.DatabaseDimension.html#lsst.daf.butler.DatabaseDimension",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A `Dimension` class that maps directly to a database table or query."];
"Dimension" -> "DatabaseDimension" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseDimensionElement" -> "DatabaseDimension" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseDimensionCombination" [URL="../../../py-api/lsst.daf.butler.DatabaseDimensionCombination.html#lsst.daf.butler.DatabaseDimensionCombination",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A combination class that maps directly to a database table or query."];
"DimensionCombination" -> "DatabaseDimensionCombination" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseDimensionElement" -> "DatabaseDimensionCombination" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseDimensionElement" [URL="../../../py-api/lsst.daf.butler.DatabaseDimensionElement.html#lsst.daf.butler.DatabaseDimensionElement",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An intermediate base class for `DimensionElement` database classes."];
"DimensionElement" -> "DatabaseDimensionElement" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseTopologicalFamily" [URL="../../../py-api/lsst.daf.butler.DatabaseTopologicalFamily.html#lsst.daf.butler.DatabaseTopologicalFamily",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Database topological family implementation."];
"TopologicalFamily" -> "DatabaseTopologicalFamily" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetAssociation" [URL="../../../py-api/lsst.daf.butler.DatasetAssociation.html#lsst.daf.butler.DatasetAssociation",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class representing the membership of a dataset in a single collection."];
"DatasetColumnTag" [URL="../../../py-api/lsst.daf.butler.DatasetColumnTag.html#lsst.daf.butler.DatasetColumnTag",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An identifier for `~lsst.daf.relation.Relation` columns that represent"];
"_BaseColumnTag" -> "DatasetColumnTag" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetComponent" [URL="../../../py-api/lsst.daf.butler.DatasetComponent.html#lsst.daf.butler.DatasetComponent",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Component of a dataset and associated information."];
"DatasetExistence" [URL="../../../py-api/lsst.daf.butler.DatasetExistence.html#lsst.daf.butler.DatasetExistence",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Flags representing the different states that a dataset can have"];
"Flag" -> "DatasetExistence" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetIdFactory" [URL="../../../py-api/lsst.daf.butler.DatasetIdFactory.html#lsst.daf.butler.DatasetIdFactory",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Factory for dataset IDs (UUIDs)."];
"DatasetIdGenEnum" [URL="../../../py-api/lsst.daf.butler.DatasetIdGenEnum.html#lsst.daf.butler.DatasetIdGenEnum",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Enum used to specify dataset ID generation options."];
"Enum" -> "DatasetIdGenEnum" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetNotFoundError" [URL="../../../py-api/lsst.daf.butler.DatasetNotFoundError.html#lsst.daf.butler.DatasetNotFoundError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="The requested dataset could not be found."];
"ButlerUserError" -> "DatasetNotFoundError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetRef" [URL="../../../py-api/lsst.daf.butler.DatasetRef.html#lsst.daf.butler.DatasetRef",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Reference to a Dataset in a `Registry`."];
"DatasetType" [URL="../../../py-api/lsst.daf.butler.DatasetType.html#lsst.daf.butler.DatasetType",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A named category of Datasets."];
"DatasetTypeError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Exception raised for problems with dataset types."];
"RegistryError" -> "DatasetTypeError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetTypeNotSupportedError" [URL="../../../py-api/lsst.daf.butler.DatasetTypeNotSupportedError.html#lsst.daf.butler.DatasetTypeNotSupportedError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A `DatasetType` is not handled by this routine."];
"Datastore" [URL="../../../py-api/lsst.daf.butler.Datastore.html#lsst.daf.butler.Datastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Datastore interface."];
"DeferredDatasetHandle" [URL="../../../py-api/lsst.daf.butler.DeferredDatasetHandle.html#lsst.daf.butler.DeferredDatasetHandle",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Proxy class that provides deferred loading of datasets from a butler."];
"Dimension" [URL="../../../py-api/lsst.daf.butler.Dimension.html#lsst.daf.butler.Dimension",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A dimension."];
"DimensionElement" -> "Dimension" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionCombination" [URL="../../../py-api/lsst.daf.butler.DimensionCombination.html#lsst.daf.butler.DimensionCombination",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Element with extra information."];
"DimensionElement" -> "DimensionCombination" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionConfig" [URL="../../../py-api/lsst.daf.butler.DimensionConfig.html#lsst.daf.butler.DimensionConfig",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Configuration that defines a `DimensionUniverse`."];
"ConfigSubset" -> "DimensionConfig" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionElement" [URL="../../../py-api/lsst.daf.butler.DimensionElement.html#lsst.daf.butler.DimensionElement",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A label and/or metadata in the dimensions system."];
"TopologicalRelationshipEndpoint" -> "DimensionElement" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionGraph" [URL="../../../py-api/lsst.daf.butler.DimensionGraph.html#lsst.daf.butler.DimensionGraph",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An immutable, dependency-complete collection of dimensions."];
"DimensionGroup" [URL="../../../py-api/lsst.daf.butler.DimensionGroup.html#lsst.daf.butler.DimensionGroup",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An immutable, dependency-complete collection of dimensions."];
"DimensionKeyColumnTag" [URL="../../../py-api/lsst.daf.butler.DimensionKeyColumnTag.html#lsst.daf.butler.DimensionKeyColumnTag",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An identifier for `~lsst.daf.relation.Relation` columns that represent"];
"_BaseColumnTag" -> "DimensionKeyColumnTag" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionNameError" [URL="../../../py-api/lsst.daf.butler.DimensionNameError.html#lsst.daf.butler.DimensionNameError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a dimension specified in a data ID does not exist"];
"DataIdError" -> "DimensionNameError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerUserError" -> "DimensionNameError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionPacker" [URL="../../../py-api/lsst.daf.butler.DimensionPacker.html#lsst.daf.butler.DimensionPacker",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class for going from `DataCoordinate` to packed integer ID and back."];
"DimensionRecord" [URL="../../../py-api/lsst.daf.butler.DimensionRecord.html#lsst.daf.butler.DimensionRecord",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Base class for the Python representation of database records."];
"DimensionRecordColumnTag" [URL="../../../py-api/lsst.daf.butler.DimensionRecordColumnTag.html#lsst.daf.butler.DimensionRecordColumnTag",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An identifier for `~lsst.daf.relation.Relation` columns that represent"];
"_BaseColumnTag" -> "DimensionRecordColumnTag" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionRecordFactory" [URL="../../../py-api/lsst.daf.butler.DimensionRecordFactory.html#lsst.daf.butler.DimensionRecordFactory",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Protocol for a callback that can be used to create a dimension record"];
"Protocol" -> "DimensionRecordFactory" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionRecordSchema" [URL="../../../py-api/lsst.daf.butler.DimensionRecordSchema.html#lsst.daf.butler.DimensionRecordSchema",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A description of the columns in a dimension element's records."];
"DimensionRecordSet" [URL="../../../py-api/lsst.daf.butler.DimensionRecordSet.html#lsst.daf.butler.DimensionRecordSet",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A mutable set-like container specialized for `DimensionRecord` objects."];
"Collection" -> "DimensionRecordSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionRecordTable" [URL="../../../py-api/lsst.daf.butler.DimensionRecordTable.html#lsst.daf.butler.DimensionRecordTable",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A table-like container for `DimensionRecord` objects."];
"DimensionRecordsAccumulator" [URL="../../../py-api/lsst.daf.butler.DimensionRecordsAccumulator.html#lsst.daf.butler.DimensionRecordsAccumulator",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class used to accumulate dimension records for serialization."];
"DimensionUniverse" [URL="../../../py-api/lsst.daf.butler.DimensionUniverse.html#lsst.daf.butler.DimensionUniverse",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Self-consistent set of dimensions."];
"EmptyQueryResultError" [URL="../../../py-api/lsst.daf.butler.EmptyQueryResultError.html#lsst.daf.butler.EmptyQueryResultError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when query methods return an empty result and `explain`"];
"Enum" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Create a collection of name/value pairs."];
"FileDataset" [URL="../../../py-api/lsst.daf.butler.FileDataset.html#lsst.daf.butler.FileDataset",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A struct that represents a dataset exported to a file."];
"FileDescriptor" [URL="../../../py-api/lsst.daf.butler.FileDescriptor.html#lsst.daf.butler.FileDescriptor",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Describes a particular file."];
"Flag" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Support for flags"];
"Enum" -> "Flag" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Formatter" [URL="../../../py-api/lsst.daf.butler.Formatter.html#lsst.daf.butler.Formatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Datasets."];
"FormatterFactory" [URL="../../../py-api/lsst.daf.butler.FormatterFactory.html#lsst.daf.butler.FormatterFactory",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Factory for `Formatter` instances."];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"GovernorDimension" [URL="../../../py-api/lsst.daf.butler.GovernorDimension.html#lsst.daf.butler.GovernorDimension",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Governor dimension."];
"Dimension" -> "GovernorDimension" [arrowsize=0.5,style="setlinewidth(0.5)"];
"IntEnum" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Enum where members are also (and must be) ints"];
"ReprEnum" -> "IntEnum" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Iterable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"LabeledButlerFactory" [URL="../../../py-api/lsst.daf.butler.LabeledButlerFactory.html#lsst.daf.butler.LabeledButlerFactory",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Factory for efficiently instantiating Butler instances from the"];
"LimitedButler" [URL="../../../py-api/lsst.daf.butler.LimitedButler.html#lsst.daf.butler.LimitedButler",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A minimal butler interface that is sufficient to back"];
"ABC" -> "LimitedButler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Location" [URL="../../../py-api/lsst.daf.butler.Location.html#lsst.daf.butler.Location",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Identifies a location within the `Datastore`."];
"LocationFactory" [URL="../../../py-api/lsst.daf.butler.LocationFactory.html#lsst.daf.butler.LocationFactory",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Factory for `Location` instances."];
"LookupKey" [URL="../../../py-api/lsst.daf.butler.LookupKey.html#lsst.daf.butler.LookupKey",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Representation of key that can be used to lookup information."];
"Mapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A Mapping is a generic container for associating key/value"];
"Collection" -> "Mapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MissingCollectionError" [URL="../../../py-api/lsst.daf.butler.MissingCollectionError.html#lsst.daf.butler.MissingCollectionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when an operation attempts to use a collection that"];
"CollectionError" -> "MissingCollectionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerUserError" -> "MissingCollectionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MissingDatasetTypeError" [URL="../../../py-api/lsst.daf.butler.MissingDatasetTypeError.html#lsst.daf.butler.MissingDatasetTypeError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a dataset type does not exist."];
"DatasetTypeError" -> "MissingDatasetTypeError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerUserError" -> "MissingDatasetTypeError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MutableMapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A MutableMapping is a generic container for associating"];
"Mapping" -> "MutableMapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MutableSet" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A mutable set is a finite, iterable container."];
"Set" -> "MutableSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NameMappingSetView" [URL="../../../py-api/lsst.daf.butler.NameMappingSetView.html#lsst.daf.butler.NameMappingSetView",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A lightweight implementation of `NamedValueAbstractSet`."];
"NamedValueAbstractSet" -> "NameMappingSetView" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NamedKeyDict" [URL="../../../py-api/lsst.daf.butler.NamedKeyDict.html#lsst.daf.butler.NamedKeyDict",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Dictionary wrapper for named keys."];
"NamedKeyMutableMapping" -> "NamedKeyDict" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NamedKeyMapping" [URL="../../../py-api/lsst.daf.butler.NamedKeyMapping.html#lsst.daf.butler.NamedKeyMapping",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Custom mapping class."];
"Mapping" -> "NamedKeyMapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NamedKeyMutableMapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="An abstract base class that adds mutation to `NamedKeyMapping`."];
"NamedKeyMapping" -> "NamedKeyMutableMapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MutableMapping" -> "NamedKeyMutableMapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NamedValueAbstractSet" [URL="../../../py-api/lsst.daf.butler.NamedValueAbstractSet.html#lsst.daf.butler.NamedValueAbstractSet",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Custom sets with named elements."];
"Set" -> "NamedValueAbstractSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NamedValueMutableSet" [URL="../../../py-api/lsst.daf.butler.NamedValueMutableSet.html#lsst.daf.butler.NamedValueMutableSet",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Mutable variant of `NamedValueAbstractSet`."];
"NamedValueAbstractSet" -> "NamedValueMutableSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MutableSet" -> "NamedValueMutableSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NamedValueSet" [URL="../../../py-api/lsst.daf.butler.NamedValueSet.html#lsst.daf.butler.NamedValueSet",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Custom mutable set class."];
"NameMappingSetView" -> "NamedValueSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NamedValueMutableSet" -> "NamedValueSet" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NoDefaultCollectionError" [URL="../../../py-api/lsst.daf.butler.registry.NoDefaultCollectionError.html#lsst.daf.butler.registry.NoDefaultCollectionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a collection is needed, but collection argument"];
"CollectionError" -> "NoDefaultCollectionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Progress" [URL="../../../py-api/lsst.daf.butler.progress.Progress.html#lsst.daf.butler.progress.Progress",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Public interface for reporting incremental progress in the butler and"];
"Protocol" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for protocol classes."];
"Generic" -> "Protocol" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Quantum" [URL="../../../py-api/lsst.daf.butler.Quantum.html#lsst.daf.butler.Quantum",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class representing a discrete unit of work."];
"QuantumBackedButler" [URL="../../../py-api/lsst.daf.butler.QuantumBackedButler.html#lsst.daf.butler.QuantumBackedButler",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An implementation of `LimitedButler` intended to back execution of a"];
"LimitedButler" -> "QuantumBackedButler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"QuantumProvenanceData" [URL="../../../py-api/lsst.daf.butler.QuantumProvenanceData.html#lsst.daf.butler.QuantumProvenanceData",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A serializable struct for per-quantum provenance information and"];
"BaseModel" -> "QuantumProvenanceData" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Registry" [URL="../../../py-api/lsst.daf.butler.Registry.html#lsst.daf.butler.Registry",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Abstract Registry interface."];
"ABC" -> "Registry" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RegistryError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for many exception classes produced by Registry methods."];
"RepoExportBackend" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="An abstract interface for data repository export implementations."];
"ABC" -> "RepoExportBackend" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RepoExportContext" [URL="../../../py-api/lsst.daf.butler.RepoExportContext.html#lsst.daf.butler.RepoExportContext",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Public interface for exporting a subset of a data repository."];
"RepoImportBackend" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="An abstract interface for data repository import implementations."];
"ABC" -> "RepoImportBackend" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ReprEnum" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Only changes the repr(), leaving str() and format() to the mixed-in type."];
"Enum" -> "ReprEnum" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Reversible" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Iterable" -> "Reversible" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RootModel" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Usage docs: https://docs.pydantic.dev/2.5/concepts/models/#rootmodel-and-custom-root-types"];
"BaseModel" -> "RootModel" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" -> "RootModel" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Sequence" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="All the operations on a read-only sequence."];
"Reversible" -> "Sequence" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Collection" -> "Sequence" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SerializedDataCoordinate" [URL="../../../py-api/lsst.daf.butler.SerializedDataCoordinate.html#lsst.daf.butler.SerializedDataCoordinate",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Simplified model for serializing a `DataCoordinate`."];
"BaseModel" -> "SerializedDataCoordinate" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SerializedDatasetRef" [URL="../../../py-api/lsst.daf.butler.SerializedDatasetRef.html#lsst.daf.butler.SerializedDatasetRef",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Simplified model of a `DatasetRef` suitable for serialization."];
"BaseModel" -> "SerializedDatasetRef" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SerializedDatasetType" [URL="../../../py-api/lsst.daf.butler.SerializedDatasetType.html#lsst.daf.butler.SerializedDatasetType",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Simplified model of a `DatasetType` suitable for serialization."];
"BaseModel" -> "SerializedDatasetType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SerializedDimensionGraph" [URL="../../../py-api/lsst.daf.butler.SerializedDimensionGraph.html#lsst.daf.butler.SerializedDimensionGraph",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Simplified model of a `DimensionGraph` suitable for serialization."];
"BaseModel" -> "SerializedDimensionGraph" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SerializedDimensionRecord" [URL="../../../py-api/lsst.daf.butler.SerializedDimensionRecord.html#lsst.daf.butler.SerializedDimensionRecord",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Simplified model for serializing a `DimensionRecord`."];
"BaseModel" -> "SerializedDimensionRecord" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SerializedQuantum" [URL="../../../py-api/lsst.daf.butler.SerializedQuantum.html#lsst.daf.butler.SerializedQuantum",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Simplified model of a `Quantum` suitable for serialization."];
"BaseModel" -> "SerializedQuantum" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Set" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A set is a finite, iterable container."];
"Collection" -> "Set" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Sized" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"SkyPixDimension" [URL="../../../py-api/lsst.daf.butler.SkyPixDimension.html#lsst.daf.butler.SkyPixDimension",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Special dimension for sky pixelizations."];
"Dimension" -> "SkyPixDimension" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SkyPixSystem" [URL="../../../py-api/lsst.daf.butler.SkyPixSystem.html#lsst.daf.butler.SkyPixSystem",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class for hierarchical pixelization of the sky."];
"TopologicalFamily" -> "SkyPixSystem" [arrowsize=0.5,style="setlinewidth(0.5)"];
"StorageClass" [URL="../../../py-api/lsst.daf.butler.StorageClass.html#lsst.daf.butler.StorageClass",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class describing how a label maps to a particular Python type."];
"StorageClassConfig" [URL="../../../py-api/lsst.daf.butler.StorageClassConfig.html#lsst.daf.butler.StorageClassConfig",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Configuration class for defining Storage Classes."];
"ConfigSubset" -> "StorageClassConfig" [arrowsize=0.5,style="setlinewidth(0.5)"];
"StorageClassDelegate" [URL="../../../py-api/lsst.daf.butler.StorageClassDelegate.html#lsst.daf.butler.StorageClassDelegate",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Delegate class for StorageClass components and parameters."];
"StorageClassFactory" [URL="../../../py-api/lsst.daf.butler.StorageClassFactory.html#lsst.daf.butler.StorageClassFactory",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Factory for `StorageClass` instances."];
"Timespan" [URL="../../../py-api/lsst.daf.butler.Timespan.html#lsst.daf.butler.Timespan",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A half-open time interval with nanosecond precision."];
"BaseModel" -> "Timespan" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TopologicalFamily" [URL="../../../py-api/lsst.daf.butler.TopologicalFamily.html#lsst.daf.butler.TopologicalFamily",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A grouping of `TopologicalRelationshipEndpoint` objects."];
"ABC" -> "TopologicalFamily" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TopologicalRelationshipEndpoint" [URL="../../../py-api/lsst.daf.butler.TopologicalRelationshipEndpoint.html#lsst.daf.butler.TopologicalRelationshipEndpoint",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Representation of a logical table that can participate in overlap joins."];
"ABC" -> "TopologicalRelationshipEndpoint" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TopologicalSpace" [URL="../../../py-api/lsst.daf.butler.TopologicalSpace.html#lsst.daf.butler.TopologicalSpace",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Enumeration of continuous-variable relationships for dimensions."];
"Enum" -> "TopologicalSpace" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ValidationError" [URL="../../../py-api/lsst.daf.butler.ValidationError.html#lsst.daf.butler.ValidationError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Some sort of validation error has occurred."];
"YamlRepoExportBackend" [URL="../../../py-api/lsst.daf.butler.YamlRepoExportBackend.html#lsst.daf.butler.YamlRepoExportBackend",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A repository export implementation that saves to a YAML file."];
"RepoExportBackend" -> "YamlRepoExportBackend" [arrowsize=0.5,style="setlinewidth(0.5)"];
"YamlRepoImportBackend" [URL="../../../py-api/lsst.daf.butler.YamlRepoImportBackend.html#lsst.daf.butler.YamlRepoImportBackend",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A repository import implementation that reads from a YAML file."];
"RepoImportBackend" -> "YamlRepoImportBackend" [arrowsize=0.5,style="setlinewidth(0.5)"];
"_BaseColumnTag" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"_ButlerLogRecords" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"RootModel" -> "_ButlerLogRecords" [arrowsize=0.5,style="setlinewidth(0.5)"];
"_DataCoordinateCollectionBase" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A partial iterable implementation backed by native Python collection."];
"DataCoordinateIterable" -> "_DataCoordinateCollectionBase" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
Example datastores¶
lsst.daf.butler.datastores.chainedDatastore Module¶
Classes¶
ChainedDatastore(config, bridgeManager, ...)
Chained Datastores to allow read and writes from multiple datastores.
Class Inheritance Diagram¶
digraph inheritance4b7a2f1168 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ChainedDatastore" [URL="../../../py-api/lsst.daf.butler.datastores.chainedDatastore.ChainedDatastore.html#lsst.daf.butler.datastores.chainedDatastore.ChainedDatastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Chained Datastores to allow read and writes from multiple datastores."];
"Datastore" -> "ChainedDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Datastore" [URL="../../../py-api/lsst.daf.butler.Datastore.html#lsst.daf.butler.Datastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Datastore interface."];
}
lsst.daf.butler.datastores.inMemoryDatastore Module¶
Classes¶
StoredMemoryItemInfo(timestamp, ...)
Internal InMemoryDatastore Metadata associated with a stored DatasetRef.
InMemoryDatastore(config, bridgeManager)
Basic Datastore for writing to an in memory cache.
Class Inheritance Diagram¶
digraph inheritance2bbcfaf103 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"Datastore" [URL="../../../py-api/lsst.daf.butler.Datastore.html#lsst.daf.butler.Datastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Datastore interface."];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"GenericBaseDatastore" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Methods useful for most implementations of a `Datastore`."];
"Datastore" -> "GenericBaseDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" -> "GenericBaseDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
"InMemoryDatastore" [URL="../../../py-api/lsst.daf.butler.datastores.inMemoryDatastore.InMemoryDatastore.html#lsst.daf.butler.datastores.inMemoryDatastore.InMemoryDatastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Basic Datastore for writing to an in memory cache."];
"GenericBaseDatastore" -> "InMemoryDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
"StoredDatastoreItemInfo" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Internal information associated with a stored dataset in a `Datastore`."];
"StoredMemoryItemInfo" [URL="../../../py-api/lsst.daf.butler.datastores.inMemoryDatastore.StoredMemoryItemInfo.html#lsst.daf.butler.datastores.inMemoryDatastore.StoredMemoryItemInfo",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Internal InMemoryDatastore Metadata associated with a stored"];
"StoredDatastoreItemInfo" -> "StoredMemoryItemInfo" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.datastores.fileDatastore Module¶
Classes¶
FileDatastore(config, bridgeManager, root, ...)
Generic Datastore for file-based implementations.
Class Inheritance Diagram¶
digraph inheritance1a23f71dcc {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"Datastore" [URL="../../../py-api/lsst.daf.butler.Datastore.html#lsst.daf.butler.Datastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Datastore interface."];
"FileDatastore" [URL="../../../py-api/lsst.daf.butler.datastores.fileDatastore.FileDatastore.html#lsst.daf.butler.datastores.fileDatastore.FileDatastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Generic Datastore for file-based implementations."];
"GenericBaseDatastore" -> "FileDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"GenericBaseDatastore" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Methods useful for most implementations of a `Datastore`."];
"Datastore" -> "GenericBaseDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" -> "GenericBaseDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
Example formatters¶
lsst.daf.butler.formatters.file Module¶
Classes¶
FileFormatter(fileDescriptor, dataId[, ...])
Interface for reading and writing files on a POSIX file system.
Class Inheritance Diagram¶
digraph inheritance9adc112707 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"FileFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.file.FileFormatter.html#lsst.daf.butler.formatters.file.FileFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing files on a POSIX file system."];
"Formatter" -> "FileFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Formatter" [URL="../../../py-api/lsst.daf.butler.Formatter.html#lsst.daf.butler.Formatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Datasets."];
}
lsst.daf.butler.formatters.json Module¶
Classes¶
JsonFormatter(fileDescriptor, dataId[, ...])
Formatter implementation for JSON files.
Class Inheritance Diagram¶
digraph inheritance9ddf09a94a {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"FileFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.file.FileFormatter.html#lsst.daf.butler.formatters.file.FileFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing files on a POSIX file system."];
"Formatter" -> "FileFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Formatter" [URL="../../../py-api/lsst.daf.butler.Formatter.html#lsst.daf.butler.Formatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Datasets."];
"JsonFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.json.JsonFormatter.html#lsst.daf.butler.formatters.json.JsonFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Formatter implementation for JSON files."];
"FileFormatter" -> "JsonFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.formatters.matplotlib Module¶
Classes¶
MatplotlibFormatter(fileDescriptor, dataId)
Interface for writing matplotlib figures.
Class Inheritance Diagram¶
digraph inheritancea1daa26c61 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"FileFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.file.FileFormatter.html#lsst.daf.butler.formatters.file.FileFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing files on a POSIX file system."];
"Formatter" -> "FileFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Formatter" [URL="../../../py-api/lsst.daf.butler.Formatter.html#lsst.daf.butler.Formatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Datasets."];
"MatplotlibFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.matplotlib.MatplotlibFormatter.html#lsst.daf.butler.formatters.matplotlib.MatplotlibFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for writing matplotlib figures."];
"FileFormatter" -> "MatplotlibFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.formatters.parquet Module¶
Functions¶
arrow_to_pandas(arrow_table)
Convert a pyarrow table to a pandas DataFrame.
arrow_to_astropy(arrow_table)
Convert a pyarrow table to an astropy.Table.
arrow_to_numpy(arrow_table)
Convert a pyarrow table to a structured numpy array.
arrow_to_numpy_dict(arrow_table)
Convert a pyarrow table to a dict of numpy arrays.
pandas_to_arrow(dataframe[, default_length])
Convert a pandas dataframe to an arrow table.
pandas_to_astropy(dataframe)
Convert a pandas dataframe to an astropy table, preserving indexes.
astropy_to_arrow(astropy_table)
Convert an astropy table to an arrow table.
numpy_to_arrow(np_array)
Convert a numpy array table to an arrow table.
numpy_to_astropy(np_array)
Convert a numpy table to an astropy table.
numpy_dict_to_arrow(numpy_dict)
Convert a dict of numpy arrays to an arrow table.
arrow_schema_to_pandas_index(schema)
Convert an arrow schema to a pandas index/multiindex.
compute_row_group_size(schema[, target_size])
Compute approximate row group size for a given arrow schema.
Classes¶
ParquetFormatter(fileDescriptor, dataId[, ...])
Interface for reading and writing Arrow Table objects to and from Parquet files.
DataFrameSchema(dataframe)
Wrapper class for a schema for a pandas DataFrame.
ArrowAstropySchema(astropy_table)
Wrapper class for a schema for an astropy table.
ArrowNumpySchema(numpy_dtype)
Wrapper class for a schema for a numpy ndarray.
Class Inheritance Diagram¶
digraph inheritance5e54559d0f {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ArrowAstropySchema" [URL="../../../py-api/lsst.daf.butler.formatters.parquet.ArrowAstropySchema.html#lsst.daf.butler.formatters.parquet.ArrowAstropySchema",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Wrapper class for a schema for an astropy table."];
"ArrowNumpySchema" [URL="../../../py-api/lsst.daf.butler.formatters.parquet.ArrowNumpySchema.html#lsst.daf.butler.formatters.parquet.ArrowNumpySchema",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Wrapper class for a schema for a numpy ndarray."];
"DataFrameSchema" [URL="../../../py-api/lsst.daf.butler.formatters.parquet.DataFrameSchema.html#lsst.daf.butler.formatters.parquet.DataFrameSchema",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Wrapper class for a schema for a pandas DataFrame."];
"Formatter" [URL="../../../py-api/lsst.daf.butler.Formatter.html#lsst.daf.butler.Formatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Datasets."];
"ParquetFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.parquet.ParquetFormatter.html#lsst.daf.butler.formatters.parquet.ParquetFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Arrow Table objects to and from"];
"Formatter" -> "ParquetFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.formatters.pickle Module¶
Classes¶
PickleFormatter(fileDescriptor, dataId[, ...])
Interface for reading and writing Python objects to and from pickle files.
Class Inheritance Diagram¶
digraph inheritancee122dea2ec {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"FileFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.file.FileFormatter.html#lsst.daf.butler.formatters.file.FileFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing files on a POSIX file system."];
"Formatter" -> "FileFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Formatter" [URL="../../../py-api/lsst.daf.butler.Formatter.html#lsst.daf.butler.Formatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Datasets."];
"PickleFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.pickle.PickleFormatter.html#lsst.daf.butler.formatters.pickle.PickleFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Python objects to and from pickle"];
"FileFormatter" -> "PickleFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.formatters.yaml Module¶
Classes¶
YamlFormatter(fileDescriptor, dataId[, ...])
Formatter implementation for YAML files.
Class Inheritance Diagram¶
digraph inheritance10dd44e1e9 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"FileFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.file.FileFormatter.html#lsst.daf.butler.formatters.file.FileFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing files on a POSIX file system."];
"Formatter" -> "FileFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Formatter" [URL="../../../py-api/lsst.daf.butler.Formatter.html#lsst.daf.butler.Formatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for reading and writing Datasets."];
"YamlFormatter" [URL="../../../py-api/lsst.daf.butler.formatters.yaml.YamlFormatter.html#lsst.daf.butler.formatters.yaml.YamlFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Formatter implementation for YAML files."];
"FileFormatter" -> "YamlFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
Test utilities¶
lsst.daf.butler.tests Package¶
Functions¶
addDataIdValue(butler, dimension, value, ...)
Add the records that back a new data ID to a repository.
addDatasetType(butler, name, dimensions, ...)
Add a new dataset type to a repository.
expandUniqueId(butler, partialId)
Return a complete data ID matching some criterion.
makeTestCollection(repo[, uniqueId])
Create a read/write Butler to a fresh collection.
makeTestRepo(root[, dataIds, config])
Create an empty test repository.
registerMetricsExample(butler)
Modify a repository to support reading and writing MetricsExample objects.
Classes¶
BadNoWriteFormatter(fileDescriptor, dataId)
A formatter that always fails without writing anything.
BadWriteFormatter(fileDescriptor, dataId[, ...])
A formatter that never works but does leave a file behind.
CliCmdTestBase()
A test case base that is used to verify click command functions import and call their respective script functions correctly.
CliLogTestBase()
Tests log initialization, reset, and setting log levels.
DatasetTestHelper()
Helper methods for Datasets.
DatastoreMock()
Mocks a butler datastore.
DatastoreTestHelper()
Helper methods for Datastore tests.
DummyRegistry()
Dummy Registry, for Datastore test purposes.
ListDelegate(storageClass)
Parameter handler for list parameters.
MetricsDelegate(storageClass)
Parameter handler for parameters using Metrics.
MetricsExample([summary, output, data])
Smorgasboard of information that might be the result of some processing.
MetricsExampleDataclass(summary, output, data)
A variant of MetricsExample based on a dataclass.
MetricsExampleModel(*[, summary, output, data])
A variant of MetricsExample based on model.
MultiDetectorFormatter(fileDescriptor, dataId)
A formatter that requires a detector to be specified in the dataID.
Middleware-Internal API¶
Warning
These symbols are used throughout the middleware system and may be used in advanced middleware extensions (e.g. third-party Datastore implementations), but are not considered fully public interfaces in terms of stability guarantees.
Datastore utilities¶
lsst.daf.butler.datastore Package¶
Classes¶
DatasetRefURIs([primaryURI, componentURIs])
Represents the primary and component ResourcePath(s) associated with a DatasetRef.
DatastoreConfig([other, validate, ...])
Configuration for Datastores.
DatastoreOpaqueTable(table_spec, record_class)
Definition of the opaque table which stores datastore records.
DatastoreTransaction([parent])
Keeps a log of Datastore activity and allow rollback.
DatastoreValidationError
There is a problem with the Datastore configuration.
NullDatastore(config, bridgeManager[, ...])
A datastore that implements the Datastore API but always fails when it accepts any request.
Class Inheritance Diagram¶
digraph inheritance693f07a013 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"Collection" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Sized" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Iterable" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Config" [URL="../../../py-api/lsst.daf.butler.Config.html#lsst.daf.butler.Config",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Implements a datatype that is used by `Butler` for configuration."];
"MutableMapping" -> "Config" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ConfigSubset" [URL="../../../py-api/lsst.daf.butler.ConfigSubset.html#lsst.daf.butler.ConfigSubset",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Config representing a subset of a more general configuration."];
"Config" -> "ConfigSubset" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"DatasetRefURIs" [URL="../../../py-api/lsst.daf.butler.datastore.DatasetRefURIs.html#lsst.daf.butler.datastore.DatasetRefURIs",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Represents the primary and component ResourcePath(s) associated with a"];
"Sequence" -> "DatasetRefURIs" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Datastore" [URL="../../../py-api/lsst.daf.butler.Datastore.html#lsst.daf.butler.Datastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Datastore interface."];
"DatastoreConfig" [URL="../../../py-api/lsst.daf.butler.datastore.DatastoreConfig.html#lsst.daf.butler.datastore.DatastoreConfig",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Configuration for Datastores."];
"ConfigSubset" -> "DatastoreConfig" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatastoreOpaqueTable" [URL="../../../py-api/lsst.daf.butler.datastore.DatastoreOpaqueTable.html#lsst.daf.butler.datastore.DatastoreOpaqueTable",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Definition of the opaque table which stores datastore records."];
"DatastoreTransaction" [URL="../../../py-api/lsst.daf.butler.datastore.DatastoreTransaction.html#lsst.daf.butler.datastore.DatastoreTransaction",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Keeps a log of `Datastore` activity and allow rollback."];
"DatastoreValidationError" [URL="../../../py-api/lsst.daf.butler.datastore.DatastoreValidationError.html#lsst.daf.butler.datastore.DatastoreValidationError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="There is a problem with the Datastore configuration."];
"ValidationError" -> "DatastoreValidationError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Iterable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Mapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A Mapping is a generic container for associating key/value"];
"Collection" -> "Mapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MutableMapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A MutableMapping is a generic container for associating"];
"Mapping" -> "MutableMapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NullDatastore" [URL="../../../py-api/lsst.daf.butler.datastore.NullDatastore.html#lsst.daf.butler.datastore.NullDatastore",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A datastore that implements the `Datastore` API but always fails when"];
"Datastore" -> "NullDatastore" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Reversible" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Iterable" -> "Reversible" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Sequence" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="All the operations on a read-only sequence."];
"Reversible" -> "Sequence" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Collection" -> "Sequence" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Sized" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"ValidationError" [URL="../../../py-api/lsst.daf.butler.ValidationError.html#lsst.daf.butler.ValidationError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Some sort of validation error has occurred."];
}
Registry utilities and interfaces¶
lsst.daf.butler.registry Package¶
Classes¶
ArgumentError
Exception raised when method arguments are invalid or inconsistent.
CollectionError
Exception raised for collection-related errors.
CollectionExpressionError
Exception raised for an incorrect collection expression.
CollectionSummary(dataset_types, governors, ...)
A summary of the datasets that can be found in a collection.
CollectionTypeError(detail)
Exception raised when type of a collection is incorrect.
ConflictingDefinitionError
Exception raised when trying to insert a database record when a conflicting record already exists.
DataIdError
Exception raised for incorrect data IDs, this is a base class for other specific error types.
DataIdValueError
Exception raised when a value specified in a data ID does not exist.
DatasetTypeError
Exception raised for problems with dataset types.
DatasetTypeExpressionError
Exception raised for an incorrect dataset type expression.
DimensionNameError
Exception raised when a dimension specified in a data ID does not exist or required dimension is not provided.
InconsistentDataIdError
Exception raised when a data ID contains contradictory key-value pairs, according to dimension relationships.
MissingCollectionError(detail)
Exception raised when an operation attempts to use a collection that does not exist.
MissingDatasetTypeError
Exception raised when a dataset type does not exist.
MissingSpatialOverlapError
Exception raised when a spatial overlap relationship needed by a query has not been precomputed and cannot be computed on-the-fly.
NoDefaultCollectionError
Exception raised when a collection is needed, but collection argument is not provided and default collection is not defined in registry.
OrphanedRecordError
Exception raised when trying to remove or modify a database record that is still being used in some other table.
RegistryConfig([other, validate, ...])
Configuration specific to a butler Registry.
RegistryConsistencyError
Exception raised when an internal registry consistency check fails, usually means bug in the Regitry itself.
RegistryDefaults([collections, run, infer])
A struct used to provide the default collections searched or written to by a Registry or Butler instance.
RegistryError
Base class for many exception classes produced by Registry methods.
SerializedCollectionSummary(*, ...)
Serialized version of CollectionSummary.
UnsupportedIdGeneratorError
Exception raised when an unsupported DatasetIdGenEnum option is used for insert/import.
UserExpressionError
Exception raised for problems with user expression.
UserExpressionSyntaxError
Exception raised when a user query expression cannot be parsed.
Class Inheritance Diagram¶
digraph inheritance80f588f8eb {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ArgumentError" [URL="../../../py-api/lsst.daf.butler.registry.ArgumentError.html#lsst.daf.butler.registry.ArgumentError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when method arguments are invalid or inconsistent."];
"RegistryError" -> "ArgumentError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"BaseModel" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Usage docs: https://docs.pydantic.dev/2.5/concepts/models/"];
"Collection" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Sized" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Iterable" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Exception raised for collection-related errors."];
"RegistryError" -> "CollectionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionExpressionError" [URL="../../../py-api/lsst.daf.butler.registry.CollectionExpressionError.html#lsst.daf.butler.registry.CollectionExpressionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised for an incorrect collection expression."];
"CollectionError" -> "CollectionExpressionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionSummary" [URL="../../../py-api/lsst.daf.butler.registry.CollectionSummary.html#lsst.daf.butler.registry.CollectionSummary",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A summary of the datasets that can be found in a collection."];
"Config" [URL="../../../py-api/lsst.daf.butler.Config.html#lsst.daf.butler.Config",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Implements a datatype that is used by `Butler` for configuration."];
"MutableMapping" -> "Config" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ConfigSubset" [URL="../../../py-api/lsst.daf.butler.ConfigSubset.html#lsst.daf.butler.ConfigSubset",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Config representing a subset of a more general configuration."];
"Config" -> "ConfigSubset" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ConflictingDefinitionError" [URL="../../../py-api/lsst.daf.butler.registry.ConflictingDefinitionError.html#lsst.daf.butler.registry.ConflictingDefinitionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when trying to insert a database record when a"];
"RegistryError" -> "ConflictingDefinitionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"DataIdError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Exception raised for incorrect data IDs, this is a base class for other"];
"RegistryError" -> "DataIdError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataIdValueError" [URL="../../../py-api/lsst.daf.butler.registry.DataIdValueError.html#lsst.daf.butler.registry.DataIdValueError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a value specified in a data ID does not exist."];
"DataIdError" -> "DataIdValueError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetTypeExpressionError" [URL="../../../py-api/lsst.daf.butler.registry.DatasetTypeExpressionError.html#lsst.daf.butler.registry.DatasetTypeExpressionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised for an incorrect dataset type expression."];
"RegistryError" -> "DatasetTypeExpressionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"InconsistentDataIdError" [URL="../../../py-api/lsst.daf.butler.registry.InconsistentDataIdError.html#lsst.daf.butler.registry.InconsistentDataIdError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a data ID contains contradictory key-value pairs,"];
"DataIdError" -> "InconsistentDataIdError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Iterable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Mapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A Mapping is a generic container for associating key/value"];
"Collection" -> "Mapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MissingSpatialOverlapError" [URL="../../../py-api/lsst.daf.butler.registry.MissingSpatialOverlapError.html#lsst.daf.butler.registry.MissingSpatialOverlapError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a spatial overlap relationship needed by a query"];
"RegistryError" -> "MissingSpatialOverlapError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MutableMapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A MutableMapping is a generic container for associating"];
"Mapping" -> "MutableMapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NoDefaultCollectionError" [URL="../../../py-api/lsst.daf.butler.registry.NoDefaultCollectionError.html#lsst.daf.butler.registry.NoDefaultCollectionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a collection is needed, but collection argument"];
"CollectionError" -> "NoDefaultCollectionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"OrphanedRecordError" [URL="../../../py-api/lsst.daf.butler.registry.OrphanedRecordError.html#lsst.daf.butler.registry.OrphanedRecordError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when trying to remove or modify a database record"];
"RegistryError" -> "OrphanedRecordError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RegistryConfig" [URL="../../../py-api/lsst.daf.butler.registry.RegistryConfig.html#lsst.daf.butler.registry.RegistryConfig",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Configuration specific to a butler Registry."];
"ConfigSubset" -> "RegistryConfig" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RegistryConsistencyError" [URL="../../../py-api/lsst.daf.butler.registry.RegistryConsistencyError.html#lsst.daf.butler.registry.RegistryConsistencyError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when an internal registry consistency check fails,"];
"RegistryError" -> "RegistryConsistencyError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RegistryDefaults" [URL="../../../py-api/lsst.daf.butler.registry.RegistryDefaults.html#lsst.daf.butler.registry.RegistryDefaults",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A struct used to provide the default collections searched or written to"];
"RegistryError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for many exception classes produced by Registry methods."];
"SerializedCollectionSummary" [URL="../../../py-api/lsst.daf.butler.registry.SerializedCollectionSummary.html#lsst.daf.butler.registry.SerializedCollectionSummary",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Serialized version of CollectionSummary."];
"BaseModel" -> "SerializedCollectionSummary" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Sized" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"UnsupportedIdGeneratorError" [URL="../../../py-api/lsst.daf.butler.registry.UnsupportedIdGeneratorError.html#lsst.daf.butler.registry.UnsupportedIdGeneratorError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when an unsupported `DatasetIdGenEnum` option is"];
"UserExpressionError" [URL="../../../py-api/lsst.daf.butler.registry.UserExpressionError.html#lsst.daf.butler.registry.UserExpressionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised for problems with user expression."];
"RegistryError" -> "UserExpressionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"UserExpressionSyntaxError" [URL="../../../py-api/lsst.daf.butler.registry.UserExpressionSyntaxError.html#lsst.daf.butler.registry.UserExpressionSyntaxError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a user query expression cannot be parsed."];
"UserExpressionError" -> "UserExpressionSyntaxError" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.registry.interfaces Package¶
Classes¶
ButlerAttributeExistsError
Exception raised when trying to update existing attribute without specifying force option.
ButlerAttributeManager(*[, ...])
An interface for managing butler attributes in a Registry.
ChainedCollectionRecord(key, name, *, children)
A subclass of CollectionRecord that adds the list of child collections in a CHAINED collection.
CollectionManager(*[, registry_schema_version])
An interface for managing the collections (including runs) in a Registry.
CollectionRecord(key, name, type)
A struct used to represent a collection in internal Registry APIs.
Database(*, origin, engine[, namespace, ...])
An abstract interface that represents a particular database engine's representation of a single schema/namespace/database.
DatabaseConflictError
Exception raised when database content (row values or schema entities) are inconsistent with what this client expects.
DatabaseInsertMode(value[, names, module, ...])
Mode options available for inserting database records.
DatasetRecordStorage(datasetType)
An interface that manages the records associated with a particular DatasetType.
DatasetRecordStorageManager(*[, ...])
An interface that manages the tables that describe datasets.
DatastoreRegistryBridge(datastoreName)
An abstract base class that defines the interface that a Datastore uses to communicate with a Registry.
DatastoreRegistryBridgeManager(*, opaque, ...)
An abstract base class that defines the interface between Registry and Datastore when a new Datastore is constructed.
DimensionRecordStorageManager(*, universe[, ...])
An interface for managing the dimension records in a Registry.
FakeDatasetRef(id)
A fake DatasetRef that can be used internally by butler where only the dataset ID is available.
IncompatibleVersionError
Exception raised when extension implemention is not compatible with schema version defined in database.
ObsCoreTableManager(*[, registry_schema_version])
An interface for populating ObsCore tables(s).
OpaqueTableStorage(name)
An interface that manages the records associated with a particular opaque table in a Registry.
OpaqueTableStorageManager(*[, ...])
An interface that manages the opaque tables in a Registry.
ReadOnlyDatabaseError
Exception raised when a write operation is called on a read-only Database.
RunRecord(key, name, *[, host, timespan])
A subclass of CollectionRecord that adds execution information and an interface for updating it.
SchemaAlreadyDefinedError
Exception raised when trying to initialize database schema when some tables already exist.
StaticTablesContext(db, connection)
Helper class used to declare the static schema for a registry layer in a database.
VersionTuple(major, minor, patch)
Class representing a version number.
VersionedExtension(*[, registry_schema_version])
Interface for extension classes with versions.
Class Inheritance Diagram¶
digraph inheritance577f1e36dc {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"ButlerAttributeExistsError" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.ButlerAttributeExistsError.html#lsst.daf.butler.registry.interfaces.ButlerAttributeExistsError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when trying to update existing attribute without"];
"ButlerAttributeManager" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.ButlerAttributeManager.html#lsst.daf.butler.registry.interfaces.ButlerAttributeManager",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for managing butler attributes in a `Registry`."];
"VersionedExtension" -> "ButlerAttributeManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ChainedCollectionRecord" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.ChainedCollectionRecord.html#lsst.daf.butler.registry.interfaces.ChainedCollectionRecord",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A subclass of `CollectionRecord` that adds the list of child collections"];
"CollectionRecord" -> "ChainedCollectionRecord" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionManager" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.CollectionManager.html#lsst.daf.butler.registry.interfaces.CollectionManager",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for managing the collections (including runs) in a"];
"Generic" -> "CollectionManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"VersionedExtension" -> "CollectionManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CollectionRecord" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.CollectionRecord.html#lsst.daf.butler.registry.interfaces.CollectionRecord",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A struct used to represent a collection in internal `Registry` APIs."];
"Generic" -> "CollectionRecord" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ConflictingDefinitionError" [URL="../../../py-api/lsst.daf.butler.registry.ConflictingDefinitionError.html#lsst.daf.butler.registry.ConflictingDefinitionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when trying to insert a database record when a"];
"RegistryError" -> "ConflictingDefinitionError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Database" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.Database.html#lsst.daf.butler.registry.interfaces.Database",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract interface that represents a particular database engine's"];
"ABC" -> "Database" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseConflictError" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.DatabaseConflictError.html#lsst.daf.butler.registry.interfaces.DatabaseConflictError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when database content (row values or schema entities)"];
"ConflictingDefinitionError" -> "DatabaseConflictError" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseInsertMode" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.DatabaseInsertMode.html#lsst.daf.butler.registry.interfaces.DatabaseInsertMode",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Mode options available for inserting database records."];
"Enum" -> "DatabaseInsertMode" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetRecordStorage" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.DatasetRecordStorage.html#lsst.daf.butler.registry.interfaces.DatasetRecordStorage",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface that manages the records associated with a particular"];
"ABC" -> "DatasetRecordStorage" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetRecordStorageManager" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.DatasetRecordStorageManager.html#lsst.daf.butler.registry.interfaces.DatasetRecordStorageManager",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface that manages the tables that describe datasets."];
"VersionedExtension" -> "DatasetRecordStorageManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatastoreRegistryBridge" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.DatastoreRegistryBridge.html#lsst.daf.butler.registry.interfaces.DatastoreRegistryBridge",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract base class that defines the interface that a `Datastore`"];
"ABC" -> "DatastoreRegistryBridge" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatastoreRegistryBridgeManager" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.DatastoreRegistryBridgeManager.html#lsst.daf.butler.registry.interfaces.DatastoreRegistryBridgeManager",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract base class that defines the interface between `Registry`"];
"VersionedExtension" -> "DatastoreRegistryBridgeManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionRecordStorageManager" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.DimensionRecordStorageManager.html#lsst.daf.butler.registry.interfaces.DimensionRecordStorageManager",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for managing the dimension records in a `Registry`."];
"VersionedExtension" -> "DimensionRecordStorageManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Enum" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Create a collection of name/value pairs."];
"FakeDatasetRef" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.FakeDatasetRef.html#lsst.daf.butler.registry.interfaces.FakeDatasetRef",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A fake `DatasetRef` that can be used internally by butler where"];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"IncompatibleVersionError" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.IncompatibleVersionError.html#lsst.daf.butler.registry.interfaces.IncompatibleVersionError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when extension implemention is not compatible with"];
"ObsCoreTableManager" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.ObsCoreTableManager.html#lsst.daf.butler.registry.interfaces.ObsCoreTableManager",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for populating ObsCore tables(s)."];
"VersionedExtension" -> "ObsCoreTableManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"OpaqueTableStorage" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.OpaqueTableStorage.html#lsst.daf.butler.registry.interfaces.OpaqueTableStorage",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface that manages the records associated with a particular"];
"ABC" -> "OpaqueTableStorage" [arrowsize=0.5,style="setlinewidth(0.5)"];
"OpaqueTableStorageManager" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.OpaqueTableStorageManager.html#lsst.daf.butler.registry.interfaces.OpaqueTableStorageManager",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface that manages the opaque tables in a `Registry`."];
"VersionedExtension" -> "OpaqueTableStorageManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ReadOnlyDatabaseError" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.ReadOnlyDatabaseError.html#lsst.daf.butler.registry.interfaces.ReadOnlyDatabaseError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when a write operation is called on a read-only"];
"RegistryError" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for many exception classes produced by Registry methods."];
"RunRecord" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.RunRecord.html#lsst.daf.butler.registry.interfaces.RunRecord",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A subclass of `CollectionRecord` that adds execution information and"];
"CollectionRecord" -> "RunRecord" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SchemaAlreadyDefinedError" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.SchemaAlreadyDefinedError.html#lsst.daf.butler.registry.interfaces.SchemaAlreadyDefinedError",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Exception raised when trying to initialize database schema when some"];
"StaticTablesContext" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.StaticTablesContext.html#lsst.daf.butler.registry.interfaces.StaticTablesContext",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Helper class used to declare the static schema for a registry layer"];
"VersionTuple" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.VersionTuple.html#lsst.daf.butler.registry.interfaces.VersionTuple",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class representing a version number."];
"VersionedExtension" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.VersionedExtension.html#lsst.daf.butler.registry.interfaces.VersionedExtension",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for extension classes with versions."];
"ABC" -> "VersionedExtension" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.registry.queries Package¶
Classes¶
ChainedDatasetQueryResults(chain[, doomed_by])
A DatasetQueryResults implementation that simply chains together other results objects, each for a different parent dataset type.
DataCoordinateQueryResults(query)
An enhanced implementation of DataCoordinateIterable that represents data IDs retrieved from a database query.
DataCoordinateReader()
Base class and factory for reader objects that extract DataCoordinate instances from query result rows.
DatabaseDimensionRecordQueryResults(query, ...)
Implementation of DimensionRecordQueryResults using database query.
DatasetQueryResults()
An interface for objects that represent the results of queries for datasets.
DatasetRefReader(dataset_type, *[, full, ...])
Reader class that extracts DatasetRef objects from query result rows.
DimensionRecordQueryResults()
An interface for objects that represent the results of queries for dimension records.
DimensionRecordReader(element)
Read dimension records.
ParentDatasetQueryResults(query, dataset_type)
An object that represents results from a query for datasets with a single parent DatasetType.
QueryBackend()
An interface for constructing and evaluating the Relation objects that comprise registry queries.
QueryBuilder(summary, backend[, context, ...])
A builder for potentially complex queries that join tables based on dimension relationships.
QueryContext()
A context manager interface for query operations that require some connection-like state.
QuerySummary(requested, *, column_types[, ...])
A struct that holds and categorizes the dimensions involved in a query.
SqlQueryBackend(db, managers, ...)
An implementation of QueryBackend for SqlRegistry.
SqlQueryContext(db, column_types[, ...])
An implementation of sql.QueryContext for SqlRegistry.
Class Inheritance Diagram¶
digraph inheritancef61259fc94 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"AbstractContextManager" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="An abstract base class for context managers."];
"ABC" -> "AbstractContextManager" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ChainedDatasetQueryResults" [URL="../../../py-api/lsst.daf.butler.registry.queries.ChainedDatasetQueryResults.html#lsst.daf.butler.registry.queries.ChainedDatasetQueryResults",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A `DatasetQueryResults` implementation that simply chains together"];
"DatasetQueryResults" -> "ChainedDatasetQueryResults" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataCoordinateIterable" [URL="../../../py-api/lsst.daf.butler.DataCoordinateIterable.html#lsst.daf.butler.DataCoordinateIterable",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract base class for homogeneous iterables of data IDs."];
"Iterable" -> "DataCoordinateIterable" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataCoordinateQueryResults" [URL="../../../py-api/lsst.daf.butler.registry.queries.DataCoordinateQueryResults.html#lsst.daf.butler.registry.queries.DataCoordinateQueryResults",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An enhanced implementation of `DataCoordinateIterable` that represents"];
"DataCoordinateIterable" -> "DataCoordinateQueryResults" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataCoordinateReader" [URL="../../../py-api/lsst.daf.butler.registry.queries.DataCoordinateReader.html#lsst.daf.butler.registry.queries.DataCoordinateReader",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Base class and factory for reader objects that extract `DataCoordinate`"];
"ABC" -> "DataCoordinateReader" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatabaseDimensionRecordQueryResults" [URL="../../../py-api/lsst.daf.butler.registry.queries.DatabaseDimensionRecordQueryResults.html#lsst.daf.butler.registry.queries.DatabaseDimensionRecordQueryResults",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Implementation of DimensionRecordQueryResults using database query."];
"DimensionRecordQueryResults" -> "DatabaseDimensionRecordQueryResults" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetQueryResults" [URL="../../../py-api/lsst.daf.butler.registry.queries.DatasetQueryResults.html#lsst.daf.butler.registry.queries.DatasetQueryResults",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for objects that represent the results of queries for"];
"Iterable" -> "DatasetQueryResults" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DatasetRefReader" [URL="../../../py-api/lsst.daf.butler.registry.queries.DatasetRefReader.html#lsst.daf.butler.registry.queries.DatasetRefReader",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Reader class that extracts `DatasetRef` objects from query result rows."];
"DimensionRecordQueryResults" [URL="../../../py-api/lsst.daf.butler.registry.queries.DimensionRecordQueryResults.html#lsst.daf.butler.registry.queries.DimensionRecordQueryResults",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for objects that represent the results of queries for"];
"Iterable" -> "DimensionRecordQueryResults" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DimensionRecordReader" [URL="../../../py-api/lsst.daf.butler.registry.queries.DimensionRecordReader.html#lsst.daf.butler.registry.queries.DimensionRecordReader",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Read dimension records."];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"Iterable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"ParentDatasetQueryResults" [URL="../../../py-api/lsst.daf.butler.registry.queries.ParentDatasetQueryResults.html#lsst.daf.butler.registry.queries.ParentDatasetQueryResults",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An object that represents results from a query for datasets with a"];
"DatasetQueryResults" -> "ParentDatasetQueryResults" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Processor" [URL="../../../py-api/lsst.daf.relation.Processor.html#lsst.daf.relation.Processor",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An inheritable framework for processing multi-engine relation trees."];
"ABC" -> "Processor" [arrowsize=0.5,style="setlinewidth(0.5)"];
"QueryBackend" [URL="../../../py-api/lsst.daf.butler.registry.queries.QueryBackend.html#lsst.daf.butler.registry.queries.QueryBackend",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for constructing and evaluating the"];
"Generic" -> "QueryBackend" [arrowsize=0.5,style="setlinewidth(0.5)"];
"QueryBuilder" [URL="../../../py-api/lsst.daf.butler.registry.queries.QueryBuilder.html#lsst.daf.butler.registry.queries.QueryBuilder",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A builder for potentially complex queries that join tables based"];
"QueryContext" [URL="../../../py-api/lsst.daf.butler.registry.queries.QueryContext.html#lsst.daf.butler.registry.queries.QueryContext",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A context manager interface for query operations that require some"];
"Processor" -> "QueryContext" [arrowsize=0.5,style="setlinewidth(0.5)"];
"AbstractContextManager" -> "QueryContext" [arrowsize=0.5,style="setlinewidth(0.5)"];
"QuerySummary" [URL="../../../py-api/lsst.daf.butler.registry.queries.QuerySummary.html#lsst.daf.butler.registry.queries.QuerySummary",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A struct that holds and categorizes the dimensions involved in a query."];
"SqlQueryBackend" [URL="../../../py-api/lsst.daf.butler.registry.queries.SqlQueryBackend.html#lsst.daf.butler.registry.queries.SqlQueryBackend",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An implementation of `QueryBackend` for `SqlRegistry`."];
"QueryBackend" -> "SqlQueryBackend" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SqlQueryContext" [URL="../../../py-api/lsst.daf.butler.registry.queries.SqlQueryContext.html#lsst.daf.butler.registry.queries.SqlQueryContext",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An implementation of `sql.QueryContext` for `SqlRegistry`."];
"QueryContext" -> "SqlQueryContext" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.registry.wildcards Module¶
Classes¶
CategorizedWildcard(strings, patterns, items)
The results of preprocessing a wildcard expression to separate match patterns from strings.
CollectionWildcard([strings, patterns])
A validated wildcard for collection names.
DatasetTypeWildcard(values, ...)
A validated expression that resolves to one or more dataset types.
Class Inheritance Diagram¶
digraph inheritance8f13d25426 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"CategorizedWildcard" [URL="../../../py-api/lsst.daf.butler.registry.wildcards.CategorizedWildcard.html#lsst.daf.butler.registry.wildcards.CategorizedWildcard",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="The results of preprocessing a wildcard expression to separate match"];
"CollectionWildcard" [URL="../../../py-api/lsst.daf.butler.registry.wildcards.CollectionWildcard.html#lsst.daf.butler.registry.wildcards.CollectionWildcard",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A validated wildcard for collection names."];
"DatasetTypeWildcard" [URL="../../../py-api/lsst.daf.butler.registry.wildcards.DatasetTypeWildcard.html#lsst.daf.butler.registry.wildcards.DatasetTypeWildcard",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A validated expression that resolves to one or more dataset types."];
}
Database backends¶
lsst.daf.butler.registry.databases.sqlite Module¶
Classes¶
SqliteDatabase(*, engine, origin[, ...])
An implementation of the Database interface for SQLite3.
Class Inheritance Diagram¶
digraph inheritance0cea70700f {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"Database" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.Database.html#lsst.daf.butler.registry.interfaces.Database",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract interface that represents a particular database engine's"];
"ABC" -> "Database" [arrowsize=0.5,style="setlinewidth(0.5)"];
"SqliteDatabase" [URL="../../../py-api/lsst.daf.butler.registry.databases.sqlite.SqliteDatabase.html#lsst.daf.butler.registry.databases.sqlite.SqliteDatabase",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An implementation of the `Database` interface for SQLite3."];
"Database" -> "SqliteDatabase" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.registry.databases.postgresql Module¶
Classes¶
PostgresqlDatabase(*, engine, origin[, ...])
An implementation of the Database interface for PostgreSQL.
Class Inheritance Diagram¶
digraph inheritancef3c9d51478 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"Database" [URL="../../../py-api/lsst.daf.butler.registry.interfaces.Database.html#lsst.daf.butler.registry.interfaces.Database",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract interface that represents a particular database engine's"];
"ABC" -> "Database" [arrowsize=0.5,style="setlinewidth(0.5)"];
"PostgresqlDatabase" [URL="../../../py-api/lsst.daf.butler.registry.databases.postgresql.PostgresqlDatabase.html#lsst.daf.butler.registry.databases.postgresql.PostgresqlDatabase",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An implementation of the `Database` interface for PostgreSQL."];
"Database" -> "PostgresqlDatabase" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
General utilities¶
lsst.daf.butler.arrow_utils Module¶
Classes¶
ToArrow()
An abstract interface for converting objects to an Arrow field of the appropriate type.
RegionArrowType()
An Arrow extension type for lsst.sphgeom.Region.
RegionArrowScalar
An Arrow scalar type for lsst.sphgeom.Region.
TimespanArrowType()
An Arrow extension type for lsst.daf.butler.Timespan.
TimespanArrowScalar
An Arrow scalar type for lsst.daf.butler.Timespan.
DateTimeArrowType()
An Arrow extension type for astropy.time.Time, stored as TAI nanoseconds since 1970-01-01.
DateTimeArrowScalar
An Arrow scalar type for astropy.time.Time, stored as TAI nanoseconds since 1970-01-01.
UUIDArrowType()
An Arrow extension type for astropy.time.Time, stored as TAI nanoseconds since 1970-01-01.
UUIDArrowScalar
An Arrow scalar type for uuid.UUID.
Class Inheritance Diagram¶
digraph inheritance25cebcc713 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"BaseExtensionType" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Concrete base class for extension types."];
"DataType" -> "BaseExtensionType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DataType" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="DataType()"];
"_Weakrefable" -> "DataType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DateTimeArrowScalar" [URL="../../../py-api/lsst.daf.butler.arrow_utils.DateTimeArrowScalar.html#lsst.daf.butler.arrow_utils.DateTimeArrowScalar",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow scalar type for `astropy.time.Time`, stored as TAI"];
"ExtensionScalar" -> "DateTimeArrowScalar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"DateTimeArrowType" [URL="../../../py-api/lsst.daf.butler.arrow_utils.DateTimeArrowType.html#lsst.daf.butler.arrow_utils.DateTimeArrowType",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow extension type for `astropy.time.Time`, stored as TAI"];
"ExtensionType" -> "DateTimeArrowType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ExtensionScalar" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Concrete class for Extension scalars."];
"Scalar" -> "ExtensionScalar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ExtensionType" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="ExtensionType(DataType storage_type, extension_name)"];
"BaseExtensionType" -> "ExtensionType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RegionArrowScalar" [URL="../../../py-api/lsst.daf.butler.arrow_utils.RegionArrowScalar.html#lsst.daf.butler.arrow_utils.RegionArrowScalar",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow scalar type for `lsst.sphgeom.Region`."];
"ExtensionScalar" -> "RegionArrowScalar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RegionArrowType" [URL="../../../py-api/lsst.daf.butler.arrow_utils.RegionArrowType.html#lsst.daf.butler.arrow_utils.RegionArrowType",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow extension type for lsst.sphgeom.Region."];
"ExtensionType" -> "RegionArrowType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Scalar" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Scalar()"];
"_Weakrefable" -> "Scalar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TimespanArrowScalar" [URL="../../../py-api/lsst.daf.butler.arrow_utils.TimespanArrowScalar.html#lsst.daf.butler.arrow_utils.TimespanArrowScalar",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow scalar type for `lsst.daf.butler.Timespan`."];
"ExtensionScalar" -> "TimespanArrowScalar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TimespanArrowType" [URL="../../../py-api/lsst.daf.butler.arrow_utils.TimespanArrowType.html#lsst.daf.butler.arrow_utils.TimespanArrowType",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow extension type for lsst.daf.butler.Timespan."];
"ExtensionType" -> "TimespanArrowType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ToArrow" [URL="../../../py-api/lsst.daf.butler.arrow_utils.ToArrow.html#lsst.daf.butler.arrow_utils.ToArrow",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An abstract interface for converting objects to an Arrow field of the"];
"ABC" -> "ToArrow" [arrowsize=0.5,style="setlinewidth(0.5)"];
"UUIDArrowScalar" [URL="../../../py-api/lsst.daf.butler.arrow_utils.UUIDArrowScalar.html#lsst.daf.butler.arrow_utils.UUIDArrowScalar",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow scalar type for `uuid.UUID`."];
"ExtensionScalar" -> "UUIDArrowScalar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"UUIDArrowType" [URL="../../../py-api/lsst.daf.butler.arrow_utils.UUIDArrowType.html#lsst.daf.butler.arrow_utils.UUIDArrowType",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An Arrow extension type for `astropy.time.Time`, stored as TAI"];
"ExtensionType" -> "UUIDArrowType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"_Weakrefable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
}
lsst.daf.butler.column_spec Module¶
Classes¶
IntColumnSpec(*, name[, doc, type, nullable])
Description of an integer column.
StringColumnSpec(*, name[, doc, type, nullable])
Description of a string column.
HashColumnSpec(*, name[, doc, type, nullable])
Description of a hash digest.
FloatColumnSpec(*, name[, doc, type, nullable])
Description of a float column.
BoolColumnSpec(*, name[, doc, type, nullable])
Description of a bool column.
UUIDColumnSpec(*, name[, doc, type, nullable])
Description of a UUID column.
RegionColumnSpec(*[, name, doc, type, ...])
Description of a region column.
TimespanColumnSpec(*[, name, doc, type, ...])
Description of a timespan column.
Class Inheritance Diagram¶
digraph inheritanceef78db2551 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"BaseModel" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Usage docs: https://docs.pydantic.dev/2.5/concepts/models/"];
"BoolColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.BoolColumnSpec.html#lsst.daf.butler.column_spec.BoolColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of a bool column."];
"_BaseColumnSpec" -> "BoolColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"FloatColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.FloatColumnSpec.html#lsst.daf.butler.column_spec.FloatColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of a float column."];
"_BaseColumnSpec" -> "FloatColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"HashColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.HashColumnSpec.html#lsst.daf.butler.column_spec.HashColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of a hash digest."];
"_BaseColumnSpec" -> "HashColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"IntColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.IntColumnSpec.html#lsst.daf.butler.column_spec.IntColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of an integer column."];
"_BaseColumnSpec" -> "IntColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RegionColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.RegionColumnSpec.html#lsst.daf.butler.column_spec.RegionColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of a region column."];
"_BaseColumnSpec" -> "RegionColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"StringColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.StringColumnSpec.html#lsst.daf.butler.column_spec.StringColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of a string column."];
"_BaseColumnSpec" -> "StringColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TimespanColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.TimespanColumnSpec.html#lsst.daf.butler.column_spec.TimespanColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of a timespan column."];
"_BaseColumnSpec" -> "TimespanColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"UUIDColumnSpec" [URL="../../../py-api/lsst.daf.butler.column_spec.UUIDColumnSpec.html#lsst.daf.butler.column_spec.UUIDColumnSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Description of a UUID column."];
"_BaseColumnSpec" -> "UUIDColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"_BaseColumnSpec" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for descriptions of table columns."];
"BaseModel" -> "_BaseColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ABC" -> "_BaseColumnSpec" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.ddl Module¶
Classes¶
TableSpec(fields, *[, unique, indexes, ...])
A data class used to define a table or table-like query interface.
FieldSpec(name, dtype[, length, nbytes, ...])
A data class for defining a column in a logical Registry table.
ForeignKeySpec(table, source, target[, ...])
Definition of a foreign key constraint in a logical Registry table.
IndexSpec(*columns, **kwargs)
Specification of an index on table columns.
Base64Bytes([nbytes])
A SQLAlchemy custom type for Python bytes.
Base64Region([nbytes])
A SQLAlchemy custom type for Python lsst.sphgeom.Region.
AstropyTimeNsecTai(*args, **kwargs)
A SQLAlchemy custom type for Python astropy.time.Time.
GUID(*args, **kwargs)
Platform-independent GUID type.
Class Inheritance Diagram¶
digraph inheritancef08a19f489 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"AstropyTimeNsecTai" [URL="../../../py-api/lsst.daf.butler.ddl.AstropyTimeNsecTai.html#lsst.daf.butler.ddl.AstropyTimeNsecTai",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A SQLAlchemy custom type for Python `astropy.time.Time`."];
"TypeDecorator" -> "AstropyTimeNsecTai" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Base64Bytes" [URL="../../../py-api/lsst.daf.butler.ddl.Base64Bytes.html#lsst.daf.butler.ddl.Base64Bytes",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A SQLAlchemy custom type for Python `bytes`."];
"TypeDecorator" -> "Base64Bytes" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Base64Region" [URL="../../../py-api/lsst.daf.butler.ddl.Base64Region.html#lsst.daf.butler.ddl.Base64Region",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A SQLAlchemy custom type for Python `lsst.sphgeom.Region`."];
"Base64Bytes" -> "Base64Region" [arrowsize=0.5,style="setlinewidth(0.5)"];
"EventTarget" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="represents an event target, that is, something we can listen on"];
"ExternalType" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="mixin that defines attributes and behaviors specific to third-party"];
"TypeEngineMixin" -> "ExternalType" [arrowsize=0.5,style="setlinewidth(0.5)"];
"FieldSpec" [URL="../../../py-api/lsst.daf.butler.ddl.FieldSpec.html#lsst.daf.butler.ddl.FieldSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A data class for defining a column in a logical `Registry` table."];
"ForeignKeySpec" [URL="../../../py-api/lsst.daf.butler.ddl.ForeignKeySpec.html#lsst.daf.butler.ddl.ForeignKeySpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Definition of a foreign key constraint in a logical `Registry` table."];
"GUID" [URL="../../../py-api/lsst.daf.butler.ddl.GUID.html#lsst.daf.butler.ddl.GUID",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Platform-independent GUID type."];
"TypeDecorator" -> "GUID" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"IndexSpec" [URL="../../../py-api/lsst.daf.butler.ddl.IndexSpec.html#lsst.daf.butler.ddl.IndexSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Specification of an index on table columns."];
"SchemaEventTarget" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for elements that are the targets of :class:`.DDLEvents`"];
"EventTarget" -> "SchemaEventTarget" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TableSpec" [URL="../../../py-api/lsst.daf.butler.ddl.TableSpec.html#lsst.daf.butler.ddl.TableSpec",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A data class used to define a table or table-like query interface."];
"TypeDecorator" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Allows the creation of types which add additional functionality"];
"SchemaEventTarget" -> "TypeDecorator" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ExternalType" -> "TypeDecorator" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TypeEngine" -> "TypeDecorator" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TypeEngine" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="The ultimate base class for all SQL datatypes."];
"Visitable" -> "TypeEngine" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" -> "TypeEngine" [arrowsize=0.5,style="setlinewidth(0.5)"];
"TypeEngineMixin" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="classes which subclass this can act as \"mixin\" classes for"];
"Visitable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for visitable objects."];
}
lsst.daf.butler.json Module¶
Functions¶
to_json_generic(self[, minimal])
Convert this class to JSON form.
from_json_generic(cls, json_str[, universe, ...])
Return new class from JSON string.
to_json_pydantic(self[, minimal])
Convert this class to JSON assuming that the to_simple() returns a pydantic model.
from_json_pydantic(cls_, json_str[, ...])
Convert from JSON to a pydantic model.
lsst.daf.butler.logging Module¶
Classes¶
ButlerMDC()
Handle setting and unsetting of global MDC records.
ButlerLogRecords([root])
Class representing a collection of ButlerLogRecord.
ButlerLogRecordHandler()
Python log handler that accumulates records.
ButlerLogRecord(*, name, asctime, message, ...)
A model representing a logging.LogRecord.
JsonLogFormatter([fmt, datefmt, style, ...])
Format a LogRecord in JSON format.
Class Inheritance Diagram¶
digraph inheritance6226ee4643 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"BaseModel" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Usage docs: https://docs.pydantic.dev/2.5/concepts/models/"];
"ButlerLogRecord" [URL="../../../py-api/lsst.daf.butler.logging.ButlerLogRecord.html#lsst.daf.butler.logging.ButlerLogRecord",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A model representing a `logging.LogRecord`."];
"BaseModel" -> "ButlerLogRecord" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerLogRecordHandler" [URL="../../../py-api/lsst.daf.butler.logging.ButlerLogRecordHandler.html#lsst.daf.butler.logging.ButlerLogRecordHandler",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Python log handler that accumulates records."];
"StreamHandler" -> "ButlerLogRecordHandler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerLogRecords" [URL="../../../py-api/lsst.daf.butler.logging.ButlerLogRecords.html#lsst.daf.butler.logging.ButlerLogRecords",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Class representing a collection of `ButlerLogRecord`."];
"_ButlerLogRecords" -> "ButlerLogRecords" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ButlerMDC" [URL="../../../py-api/lsst.daf.butler.logging.ButlerMDC.html#lsst.daf.butler.logging.ButlerMDC",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Handle setting and unsetting of global MDC records."];
"Filterer" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A base class for loggers and handlers which allows them to share"];
"Formatter" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Formatter instances are used to convert a LogRecord to text."];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"Handler" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Handler instances dispatch logging events to specific destinations."];
"Filterer" -> "Handler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"JsonLogFormatter" [URL="../../../py-api/lsst.daf.butler.logging.JsonLogFormatter.html#lsst.daf.butler.logging.JsonLogFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Format a `LogRecord` in JSON format."];
"Formatter" -> "JsonLogFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
"RootModel" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Usage docs: https://docs.pydantic.dev/2.5/concepts/models/#rootmodel-and-custom-root-types"];
"BaseModel" -> "RootModel" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" -> "RootModel" [arrowsize=0.5,style="setlinewidth(0.5)"];
"StreamHandler" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A handler class which writes logging records, appropriately formatted,"];
"Handler" -> "StreamHandler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"_ButlerLogRecords" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"RootModel" -> "_ButlerLogRecords" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.mapping_factory Module¶
Classes¶
MappingFactory(refType)
Register the mapping of some key to a python type and retrieve instances.
Class Inheritance Diagram¶
digraph inheritance08c3ef1933 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"MappingFactory" [URL="../../../py-api/lsst.daf.butler.mapping_factory.MappingFactory.html#lsst.daf.butler.mapping_factory.MappingFactory",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Register the mapping of some key to a python type and retrieve"];
}
lsst.daf.butler.nonempty_mapping Module¶
Classes¶
NonemptyMapping(default_factory)
A Mapping that implicitly adds values (like defaultdict) but treats any that evaluate to False as not present.
Class Inheritance Diagram¶
digraph inheritance1ec4b222e2 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"Collection" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Sized" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Iterable" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" -> "Collection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Container" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Iterable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Mapping" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A Mapping is a generic container for associating key/value"];
"Collection" -> "Mapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"NonemptyMapping" [URL="../../../py-api/lsst.daf.butler.nonempty_mapping.NonemptyMapping.html#lsst.daf.butler.nonempty_mapping.NonemptyMapping",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A `Mapping` that implicitly adds values (like"];
"Mapping" -> "NonemptyMapping" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Sized" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
}
lsst.daf.butler.persistence_context Module¶
Classes¶
PersistenceContextVars()
Helper class for deserializing butler data structures.
Class Inheritance Diagram¶
digraph inheritance89bf6aecb2 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"PersistenceContextVars" [URL="../../../py-api/lsst.daf.butler.persistence_context.PersistenceContextVars.html#lsst.daf.butler.persistence_context.PersistenceContextVars",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Helper class for deserializing butler data structures."];
}
lsst.daf.butler.progress Module¶
Classes¶
Progress(name[, level])
Public interface for reporting incremental progress in the butler and related tools.
ProgressBar(*args, **kwargs)
A structural interface for progress bars that wrap iterables.
ProgressHandler()
An interface for objects that can create progress bars.
Class Inheritance Diagram¶
digraph inheritance8e379e89bb {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
"Iterable" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled"];
"Progress" [URL="../../../py-api/lsst.daf.butler.progress.Progress.html#lsst.daf.butler.progress.Progress",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Public interface for reporting incremental progress in the butler and"];
"ProgressBar" [URL="../../../py-api/lsst.daf.butler.progress.ProgressBar.html#lsst.daf.butler.progress.ProgressBar",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A structural interface for progress bars that wrap iterables."];
"Iterable" -> "ProgressBar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Protocol" -> "ProgressBar" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ProgressHandler" [URL="../../../py-api/lsst.daf.butler.progress.ProgressHandler.html#lsst.daf.butler.progress.ProgressHandler",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for objects that can create progress bars."];
"ABC" -> "ProgressHandler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Protocol" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Base class for protocol classes."];
"Generic" -> "Protocol" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.pydantic_utils Module¶
Functions¶
get_universe_from_context(context)
Extract the dimension universe from a Pydantic validation context dictionary.
Classes¶
DeferredValidation(data)
A base class whose subclasses define a wrapper for a Pydantic-aware type that defers validation but declares the same JSON schema.
Class Inheritance Diagram¶
digraph inheritanced4e1ca3ad4 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"DeferredValidation" [URL="../../../py-api/lsst.daf.butler.pydantic_utils.DeferredValidation.html#lsst.daf.butler.pydantic_utils.DeferredValidation",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A base class whose subclasses define a wrapper for a Pydantic-aware type"];
"Generic" -> "DeferredValidation" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Generic" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Abstract base class for generic types."];
}
lsst.daf.butler.repo_relocation Module¶
Functions¶
replaceRoot(configRoot, butlerRoot)
Update a configuration root with the butler root location.
Variables¶
BUTLER_ROOT_TAG
The special string to be used in configuration files to indicate that the butler root location should be used.
lsst.daf.butler.time_utils Module¶
Classes¶
TimeConverter()
A singleton for mapping TAI times to integer nanoseconds.
Class Inheritance Diagram¶
digraph inheritance014186c442 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"TimeConverter" [URL="../../../py-api/lsst.daf.butler.time_utils.TimeConverter.html#lsst.daf.butler.time_utils.TimeConverter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A singleton for mapping TAI times to integer nanoseconds."];
}
lsst.daf.butler.timespan_database_representation Module¶
Classes¶
TimespanDatabaseRepresentation()
An interface for representing a timespan in a database.
Class Inheritance Diagram¶
digraph inheritance322d2b3355 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"TimespanDatabaseRepresentation" [URL="../../../py-api/lsst.daf.butler.timespan_database_representation.TimespanDatabaseRepresentation.html#lsst.daf.butler.timespan_database_representation.TimespanDatabaseRepresentation",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for representing a timespan in a database."];
"ABC" -> "TimespanDatabaseRepresentation" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.utils Module¶
Functions¶
stripIfNotNone(s)
Strip leading and trailing whitespace if the given object is not None.
transactional(func)
Decorate a method and makes it transactional.
Command-Line Interface Utilities¶
lsst.daf.butler.cli.butler Module¶
Functions¶
main()
Return main entry point for command-line.
Classes¶
LoaderCLI(*args, **kwargs)
Extends click.MultiCommand, which dispatches to subcommands, to load subcommands at runtime.
ButlerCLI(*args, **kwargs)
Specialized command loader implementing the butler command.
Class Inheritance Diagram¶
digraph inheritancee921228f93 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"BaseCommand" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="The base command implements the minimal API contract of commands."];
"ButlerCLI" [URL="../../../py-api/lsst.daf.butler.cli.butler.ButlerCLI.html#lsst.daf.butler.cli.butler.ButlerCLI",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Specialized command loader implementing the ``butler`` command."];
"LoaderCLI" -> "ButlerCLI" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Command" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Commands are the basic building block of command line interfaces in"];
"BaseCommand" -> "Command" [arrowsize=0.5,style="setlinewidth(0.5)"];
"LoaderCLI" [URL="../../../py-api/lsst.daf.butler.cli.butler.LoaderCLI.html#lsst.daf.butler.cli.butler.LoaderCLI",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Extends `click.MultiCommand`, which dispatches to subcommands, to load"];
"MultiCommand" -> "LoaderCLI" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ABC" -> "LoaderCLI" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MultiCommand" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A multi command is the basic implementation of a command that"];
"Command" -> "MultiCommand" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.cli.cmd Package¶
Variables¶
associate
Add existing datasets to a tagged collection; searches for datasets with the options and adds them to the named COLLECTION.
butler_import
Import data into a butler repository.
certify_calibrations
Certify calibrations in a repository.
create
Create an empty Gen3 Butler repository.
collection_chain
Define a collection chain.
config_dump
Dump either a subset or full Butler configuration to standard output.
config_validate
Validate the configuration files for a Gen3 Butler repository.
export_calibs
Export calibrations from the butler for import elsewhere.
ingest_files
Ingest files from table file.
prune_datasets
Query for and remove one or more datasets from a collection and/or storage.
query_collections
Get the collections whose names match an expression.
query_data_ids
List the data IDs in a repository.
query_dataset_types
Get the dataset types in a repository.
query_datasets
List the datasets in a repository.
query_dimension_records
Query for dimension information.
register_dataset_type
Register a new dataset type with this butler repository.
retrieve_artifacts
Retrieve file artifacts associated with datasets in a repository.
remove_collections
Remove one or more non-RUN collections.
remove_runs
Remove one or more RUN collections.
remove_dataset_type
Remove the dataset type definitions from a repository.
transfer_datasets
Transfer datasets from a source butler to a destination butler.
lsst.daf.butler.cli.opt Package¶
Classes¶
CollectionTypeCallback()
Helper class for handling different collection types.
query_datasets_options([repo, showUri, ...])
A collection of options common to querying datasets.
Variables¶
collection_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
collection_type_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
collections_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
collections_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
components_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
config_file_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
config_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
confirm_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
dataset_type_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
datasets_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
destination_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
dimensions_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
directory_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
element_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
glob_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
limit_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
locations_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
log_file_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
log_label_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
log_level_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
log_tty_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
long_log_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
offset_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
options_file_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
order_by_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
processes_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
regex_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
register_dataset_types_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
repo_argument
Wraps the click.argument decorator to enable shared arguments to be declared.
run_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
transfer_dimensions_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
transfer_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
transfer_option_no_short
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
verbose_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
where_option
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
Class Inheritance Diagram¶
digraph inheritance9eadadba36 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"CollectionTypeCallback" [URL="../../../py-api/lsst.daf.butler.cli.opt.CollectionTypeCallback.html#lsst.daf.butler.cli.opt.CollectionTypeCallback",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Helper class for handling different collection types."];
"OptionGroup" [URL="../../../py-api/lsst.daf.butler.cli.utils.OptionGroup.html#lsst.daf.butler.cli.utils.OptionGroup",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Base class for an option group decorator. Requires the option group"];
"query_datasets_options" [URL="../../../py-api/lsst.daf.butler.cli.opt.query_datasets_options.html#lsst.daf.butler.cli.opt.query_datasets_options",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A collection of options common to querying datasets."];
"OptionGroup" -> "query_datasets_options" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.cli.utils Module¶
Functions¶
astropyTablesToStr(tables)
Render astropy tables to string as they are displayed in the CLI.
printAstropyTables(tables)
Print astropy tables to be displayed in the CLI.
textTypeStr(multiple)
Get the text type string for CLI help documentation.
clickResultMsg(result)
Get a standard assert message from a click result.
command_test_env(runner, commandModule, ...)
Context manager that creates (and then cleans up) an environment that provides a CLI plugin command with the given name.
addArgumentHelp(doc, helpText)
Add a Click argument's help message to a function's documentation.
split_commas(context, param, values)
Process a tuple of values, where each value may contain comma-separated values, and return a single list of all the passed-in values.
split_kv(context, param, values, *[, ...])
Process a tuple of values that are key-value pairs separated by a given separator.
to_upper(context, param, value)
Convert a value to upper case.
unwrap(val)
Remove newlines and leading whitespace from a multi-line string with a consistent indentation level.
yaml_presets(ctx, param, value)
Read additional values from the supplied YAML file.
sortAstropyTable(table, dimensions[, sort_first])
Sort an astropy table.
catch_and_exit(func)
Catch all exceptions, prints an exception traceback and signals click to exit.
Classes¶
LogCliRunner([charset, env, echo_stdin, ...])
A test runner to use when the logging system will be initialized by code under test, calls CliLog.resetLog(), which undoes any logging setup that was done with the CliLog interface.
option_section(sectionText)
Decorator to add a section label between options in the help text of a command.
MWPath([exists, file_okay, dir_okay, ...])
Overrides click.Path to implement file-does-not-exist checking.
MWOption([param_decls, show_default, ...])
Overrides click.Option with desired behaviors.
MWArgument(param_decls[, required])
Overrides click.Argument with desired behaviors.
OptionSection(sectionName, sectionText)
Implements an Option that prints a section label in the help text and does not pass any value to the command function.
MWOptionDecorator(*param_decls, **kwargs)
Wraps the click.option decorator to enable shared options to be declared and allows inspection of the shared option.
MWArgumentDecorator(*param_decls, **kwargs)
Wraps the click.argument decorator to enable shared arguments to be declared.
MWCommand(*args, **kwargs)
Command subclass that stores a copy of the args list for use by the command.
ButlerCommand(*args, **kwargs)
Command subclass with butler-command specific overrides.
OptionGroup()
Base class for an option group decorator.
MWCtxObj()
Helper object for managing the click.Context.obj parameter, allows obj data to be managed in a consistent way.
Class Inheritance Diagram¶
digraph inheritancedc7a27e047 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"Argument" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Arguments are positional parameters to a command.
They generally"];
"Parameter" -> "Argument" [arrowsize=0.5,style="setlinewidth(0.5)"];
"BaseCommand" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="The base command implements the minimal API contract of commands."];
"ButlerCommand" [URL="../../../py-api/lsst.daf.butler.cli.utils.ButlerCommand.html#lsst.daf.butler.cli.utils.ButlerCommand",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Command subclass with butler-command specific overrides."];
"MWCommand" -> "ButlerCommand" [arrowsize=0.5,style="setlinewidth(0.5)"];
"CliRunner" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="The CLI runner provides functionality to invoke a Click command line"];
"Command" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Commands are the basic building block of command line interfaces in"];
"BaseCommand" -> "Command" [arrowsize=0.5,style="setlinewidth(0.5)"];
"LogCliRunner" [URL="../../../py-api/lsst.daf.butler.cli.utils.LogCliRunner.html#lsst.daf.butler.cli.utils.LogCliRunner",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A test runner to use when the logging system will be initialized by code"];
"CliRunner" -> "LogCliRunner" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MWArgument" [URL="../../../py-api/lsst.daf.butler.cli.utils.MWArgument.html#lsst.daf.butler.cli.utils.MWArgument",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Overrides click.Argument with desired behaviors."];
"Argument" -> "MWArgument" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MWArgumentDecorator" [URL="../../../py-api/lsst.daf.butler.cli.utils.MWArgumentDecorator.html#lsst.daf.butler.cli.utils.MWArgumentDecorator",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Wraps the click.argument decorator to enable shared arguments to be"];
"MWCommand" [URL="../../../py-api/lsst.daf.butler.cli.utils.MWCommand.html#lsst.daf.butler.cli.utils.MWCommand",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Command subclass that stores a copy of the args list for use by the"];
"Command" -> "MWCommand" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MWCtxObj" [URL="../../../py-api/lsst.daf.butler.cli.utils.MWCtxObj.html#lsst.daf.butler.cli.utils.MWCtxObj",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Helper object for managing the `click.Context.obj` parameter, allows"];
"MWOption" [URL="../../../py-api/lsst.daf.butler.cli.utils.MWOption.html#lsst.daf.butler.cli.utils.MWOption",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Overrides click.Option with desired behaviors."];
"Option" -> "MWOption" [arrowsize=0.5,style="setlinewidth(0.5)"];
"MWOptionDecorator" [URL="../../../py-api/lsst.daf.butler.cli.utils.MWOptionDecorator.html#lsst.daf.butler.cli.utils.MWOptionDecorator",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Wraps the click.option decorator to enable shared options to be declared"];
"MWPath" [URL="../../../py-api/lsst.daf.butler.cli.utils.MWPath.html#lsst.daf.butler.cli.utils.MWPath",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Overrides click.Path to implement file-does-not-exist checking."];
"Path" -> "MWPath" [arrowsize=0.5,style="setlinewidth(0.5)"];
"Option" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Options are usually optional values on the command line and"];
"Parameter" -> "Option" [arrowsize=0.5,style="setlinewidth(0.5)"];
"OptionGroup" [URL="../../../py-api/lsst.daf.butler.cli.utils.OptionGroup.html#lsst.daf.butler.cli.utils.OptionGroup",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Base class for an option group decorator. Requires the option group"];
"OptionSection" [URL="../../../py-api/lsst.daf.butler.cli.utils.OptionSection.html#lsst.daf.butler.cli.utils.OptionSection",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Implements an Option that prints a section label in the help text and"];
"MWOption" -> "OptionSection" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ParamType" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Represents the type of a parameter. Validates and converts values"];
"Parameter" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="A parameter to a command comes in two versions: they are either"];
"Path" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="The ``Path`` type is similar to the :class:`File` type, but"];
"ParamType" -> "Path" [arrowsize=0.5,style="setlinewidth(0.5)"];
"option_section" [URL="../../../py-api/lsst.daf.butler.cli.utils.option_section.html#lsst.daf.butler.cli.utils.option_section",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Decorator to add a section label between options in the help text of a"];
}
lsst.daf.butler.cli.cliLog Module¶
Classes¶
PrecisionLogFormatter([fmt, datefmt, style, ...])
A log formatter that issues accurate timezone-aware timestamps.
CliLog()
Interface for managing python logging and lsst.log.
Class Inheritance Diagram¶
digraph inheritance4b44efbe25 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"CliLog" [URL="../../../py-api/lsst.daf.butler.cli.cliLog.CliLog.html#lsst.daf.butler.cli.cliLog.CliLog",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="Interface for managing python logging and ``lsst.log``."];
"Formatter" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Formatter instances are used to convert a LogRecord to text."];
"PrecisionLogFormatter" [URL="../../../py-api/lsst.daf.butler.cli.cliLog.PrecisionLogFormatter.html#lsst.daf.butler.cli.cliLog.PrecisionLogFormatter",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A log formatter that issues accurate timezone-aware timestamps."];
"Formatter" -> "PrecisionLogFormatter" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
lsst.daf.butler.cli.progress Module¶
Classes¶
ClickProgressHandler(**kwargs)
A ProgressHandler implementation that delegates to click.progressbar.
Class Inheritance Diagram¶
digraph inheritanceb0e8f03353 {
bgcolor=transparent;
rankdir=LR;
size="8.0, 12.0";
"ABC" [fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",tooltip="Helper class that provides a standard way to create an ABC using"];
"ClickProgressHandler" [URL="../../../py-api/lsst.daf.butler.cli.progress.ClickProgressHandler.html#lsst.daf.butler.cli.progress.ClickProgressHandler",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="A `ProgressHandler` implementation that delegates to"];
"ProgressHandler" -> "ClickProgressHandler" [arrowsize=0.5,style="setlinewidth(0.5)"];
"ProgressHandler" [URL="../../../py-api/lsst.daf.butler.progress.ProgressHandler.html#lsst.daf.butler.progress.ProgressHandler",fillcolor=white,fontname="Vera Sans, DejaVu Sans, Liberation Sans, Arial, Helvetica, sans",fontsize=10,height=0.25,shape=box,style="setlinewidth(0.5),filled",target="_top",tooltip="An interface for objects that can create progress bars."];
"ABC" -> "ProgressHandler" [arrowsize=0.5,style="setlinewidth(0.5)"];
}
On this page
lsst.daf.butler
Changes
Using the Butler
The Dimensions System
Concrete Storage Classes
Butler Command-Line Reference
Design and Development
Butler Command Line Interface Development
Python API reference
lsst.daf.butler Package
Functions
Classes
Class Inheritance Diagram
Example datastores
lsst.daf.butler.datastores.chainedDatastore Module
Classes
Class Inheritance Diagram
lsst.daf.butler.datastores.inMemoryDatastore Module
Classes
Class Inheritance Diagram
lsst.daf.butler.datastores.fileDatastore Module
Classes
Class Inheritance Diagram
Example formatters
lsst.daf.butler.formatters.file Module
Classes
Class Inheritance Diagram
lsst.daf.butler.formatters.json Module
Classes
Class Inheritance Diagram
lsst.daf.butler.formatters.matplotlib Module
Classes
Class Inheritance Diagram
lsst.daf.butler.formatters.parquet Module
Functions
Classes
Class Inheritance Diagram
lsst.daf.butler.formatters.pickle Module
Classes
Class Inheritance Diagram
lsst.daf.butler.formatters.yaml Module
Classes
Class Inheritance Diagram
Test utilities
lsst.daf.butler.tests Package
Functions
Classes
Middleware-Internal API
Datastore utilities
lsst.daf.butler.datastore Package
Classes
Class Inheritance Diagram
Registry utilities and interfaces
lsst.daf.butler.registry Package
Classes
Class Inheritance Diagram
lsst.daf.butler.registry.interfaces Package
Classes
Class Inheritance Diagram
lsst.daf.butler.registry.queries Package
Classes
Class Inheritance Diagram
lsst.daf.butler.registry.wildcards Module
Classes
Class Inheritance Diagram
Database backends
lsst.daf.butler.registry.databases.sqlite Module
Classes
Class Inheritance Diagram
lsst.daf.butler.registry.databases.postgresql Module
Classes
Class Inheritance Diagram
General utilities
lsst.daf.butler.arrow_utils Module
Classes
Class Inheritance Diagram
lsst.daf.butler.column_spec Module
Classes
Class Inheritance Diagram
lsst.daf.butler.ddl Module
Classes
Class Inheritance Diagram
lsst.daf.butler.json Module
Functions
lsst.daf.butler.logging Module
Classes
Class Inheritance Diagram
lsst.daf.butler.mapping_factory Module
Classes
Class Inheritance Diagram
lsst.daf.butler.nonempty_mapping Module
Classes
Class Inheritance Diagram
lsst.daf.butler.persistence_context Module
Classes
Class Inheritance Diagram
lsst.daf.butler.progress Module
Classes
Class Inheritance Diagram
lsst.daf.butler.pydantic_utils Module
Functions
Classes
Class Inheritance Diagram
lsst.daf.butler.repo_relocation Module
Functions
Variables
lsst.daf.butler.time_utils Module
Classes
Class Inheritance Diagram
lsst.daf.butler.timespan_database_representation Module
Classes
Class Inheritance Diagram
lsst.daf.butler.utils Module
Functions
Command-Line Interface Utilities
lsst.daf.butler.cli.butler Module
Functions
Classes
Class Inheritance Diagram
lsst.daf.butler.cli.cmd Package
Variables
lsst.daf.butler.cli.opt Package
Classes
Variables
Class Inheritance Diagram
lsst.daf.butler.cli.utils Module
Functions
Classes
Class Inheritance Diagram
lsst.daf.butler.cli.cliLog Module
Classes
Class Inheritance Diagram
lsst.daf.butler.cli.progress Module
Classes
Class Inheritance Diagram
Back to Top
Last built Aug 06, 2024.
Created using Sphinx 6.2.1. Page design is based on Astropy's bootstrap-astropy theme in astropy-helpers.
LSST documentation is proudly served through the Fastly CDN.
© Copyright 2015-2024 LSST contributors.
Financial support for LSST comes from the National Science Foundation (NSF) through Cooperative Agreement No. 1258333, the Department of Energy (DOE) Office of Science under Contract No. DE-AC02-76SF00515, and private funding raised by the LSST Corporation. The NSF-funded LSST Project Office for construction was established as an operating center under management of the Association of Universities for Research in Astronomy (AURA). The DOE-funded effort to build the LSST camera is managed by the SLAC National Accelerator Laboratory (SLAC).