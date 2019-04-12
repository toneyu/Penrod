# Weather for Penrod
### Web Application for displaying the current weather at all the Penrod Offices: Chicago, Dallas, Minneapolis, Milwaukee
### Made by Tone Yu


# Install and running Instructions
Access project @ https://github.com/toneyu/Penrod 

1. In desired project folder, download repo by entering this command in terminal
```bash
git clone https://github.com/toneyu/Penrod.git
``` 
2. Install dependencies in root directory
```bash
npm install 
```

3. Register on {https://openweathermap.org/api} for an API Key
Create Api-key.js file in src folder to store API key in  

**src/Api-key.js** 
```bash
export default "enter your API key here";
```

4. Runs webpack dev server
```bash
npm run start 
```



# Component Files	

- ## App.jsx
	Main class

- ## Header.jsx
	Website Header

- ## WeatherDetails.jsx
	Displays information about weather details 
	 
- ## Api-key.js
	file holding your private API key 

- ## App.css
	Custom CSS file

