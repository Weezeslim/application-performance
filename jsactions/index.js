const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');
const path = require('path');


try {

(async () => {
const getBenchmarkValue = core.getInput('benchmark');
console.log('benchmark value:', getBenchmarkValue);


 // Wait for a moment to ensure the Django app starts up
 await new Promise(resolve => setTimeout(resolve, 5000));


 // Get the process ID of the running Django application
 const pidCommand = 'pgrep -f \'python manage.py runserver\'';
 const pid = execSync(pidCommand).toString().trim();
 var stringarray = pid.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
 const processId = stringarray[0]

 const path_to_script = path.join(__dirname, 'scripts', 'ramperformance.py');

// Execute the Python script with the input value using the shell command
const getScriptResult = execSync(`python ${path_to_script} ${processId} ${getBenchmarkValue}`).toString().trim();
console.log('Result of ram usage hereee:', getScriptResult);

core.setOutput("performanceresult", getScriptResult);



process.exit(0); // Exit with success status code

})();

} catch (error) {
  core.setFailed(error.message);
}


