# _Portfolio_

#### By _**Luis Delamora**_

#### _[Portfolio](https://eccos.github.io/portfolio/) to showcase projects and skills_

## Front-end Technologies Used
- React.js
- MUI (Material UI)
- Framer Motion
- JavaScript
- HTML
- CSS

## Installation
### Pre-req
Node 18 installed
1. Download/clone repo
1. `npm i`
1. In "node_modules\react-scripts\config\webpack.config.js", update `svgo: false` to `svgo: true`
1. `npm start`

Step 3 must always be done whenever node_modules is deleted or clean installed whether it's done manually, via `npm ci`, by deleting package-lock.json and running `npm i`, etc.

## Known Issues
- Top nav bar anchor points jump too far down sections. Possible solution is to hide the top nav bar when scrolling down or jumping to sections, and show it when scrolling up