# web-dev
full stack web dev study

## Set up

`npm init -y`

use npm for managing packages

`npm run test`

use scripts in package.json 

devDependencies show packages that are required to build the application

package-lock.json show detailed version of each package 

`npm install --save-dev prettier`

for better formatting 

## VScode Prettier setup 
make settings.json file inside .vscode 
`
{
    "[javascript]": {
        "editor.formatOnSave": true, 
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
`
create .prettierrc file 
`
{
  "semi": false,
  "singleQuote": true
}

`
