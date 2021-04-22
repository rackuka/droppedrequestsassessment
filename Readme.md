# The throttling

This is nodejs implementation of the throttling algorithmic assessment.

The task specification is in [docs/Throttling-Assessment.pdf](docs/Throttling-Assessment.pdf)

## The solution
The solution of the task mentioned is implemented within [src/droppedrequests.js](src/droppedrequests.js)

## How to run. First - Setup

Pre-requesites - you have nodejs and npm installed locally. If not plrease refer to corresponding sites for initial environment setup.

```
git clone https://github.com/rackuka/droppedrequestsassessment
cd droppedrequestsassessment
npm i
```
## Run with predefined data

There are two data presets according to the assignment mentioned above.

data/input1 contains
```
[1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,11,11,11,11]
```

and data/input2 contains

```
[1,1,1,1,2]
```
To run with input1 or input2 do
```
npm run start:input1
```
or
```
npm run start:input2
```
respectively.

## Run with own data
Create an input file, for example, 
```
mydata
```
Then run with the following command
```
npm run start mydata
```
## Run tests
```
npm test
```