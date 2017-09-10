# cce-app-gateway

This is an example Application Gateway for use with Cisco PCCE 11.6. It is built
on the ged-145-server library, and provides a way for ICM routing scripts to
perform arbitrary operations to manipulate/return call variables.

In this example we retrieve sample data from a REST call and return part of the
JSON data back to ICM in Peripheral Variable 10.

## Return Data Format
The return data format can be found on the ged-145-server library page at
https://gitlab.com/ccondry/ged-145-server/blob/master/test-data.js
