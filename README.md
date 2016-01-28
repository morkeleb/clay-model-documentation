# Clay Domain Model Documentation Generators


> This is an example, that may well be used as a template for actual use.

It takes a models.yaml file and together with clay generates a documentation based on that model.

This generator makes the following assumptions about the model.yaml file.

* It contains Types
* Each Type should have the following
  - a name
  - a list of fields
  - a description field containing markdown of the types description
* Each Type could have the following
  - a Relations property with the name of the types this type is associated with.


This will generate a documentation of the model with the focus of being readable.
The index page will contain a visualization of the domain model, that can be used to navigate and understand the relations in the model.
