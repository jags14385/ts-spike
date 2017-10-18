- For the features & step definitions to be auto detected they have to be in a certain folder structure.

Folder structure looks like this

features
     - steps
        -- steps.js or steps.ts
    - simple.feature

After transpiling the code : 
    - the feature files are not included in the output Directory
    - so, made a shell script file to copy those feature files in the right place
      "make.sh" 
    - then all one has to do is "npm t"

Next Steps:
    - Evaluate if I should use something like makeFile instead of the make.sh
    - Gulp or bower for tasks execution
    - Add a UI Test
    - Add a API Test
    - Figure out how to use cucumber.js profile (check cucumber cli)
    - Does it make sense to move the step definitions out of the features directory 
      for coding and then, ensure the structure is maintained in runtime
        - because then the code structure can be maintained independently of the
          runtime requirements. More flexibilty
        - Is there a way I can use  "cucumberOpts" for it.
    - Async support    

One way to use the cli afer transpiling

    -- ./node_modules/.bin/cucumber-js tmp/ --format-options '{"colorsEnabled": true}'

Can I use a file to specify the options ??
