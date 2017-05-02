# commit-message-validator
Git commit-msg validator

This package provides you a binary that you can use as a git hook to validate the commit message.

This package can be used with githook packages such as [husky](https://www.npmjs.com/package/husky).

If you are using **husky**, add `"commitmsg": "commit-message-validator"` to your npm scripts in package.json.

# Installation

This module is distributed via npm which is bundled with node and should be installed as one of your project's devDependencies:

    npm install commit-message-validator

# Usage

1. Install this package as one of your project's devDependencies
2. Install githook [husky](https://www.npmjs.com/package/husky)
3. Config commit-msg hook to run commit-message-validator in package.json

        {
            scripts: {
                "commitmsg": "commit-message-validator"
            }
        }
4. Custom commit-message regex pattern in package.json

        {
            "config": {
                "commit-message-validator": {
                    /* your config here */
                    "pattern": "your regex pattern here"
                }
            }
        }

    Or 

        {
            "config": {
                "commit-message-validator": {
                    /* your config here, pattern can be an array */
                    "pattern": [
                        "pattern1",
                        "pattern2",
                        /* ... */
                        "pattern N"
                    ]
                }
            }
        }
    
    