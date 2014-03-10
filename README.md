mockups-getfedora
=================

Test Mockups for a potential new getfedora site

### Building the Site

1. Install the following packages with yum:

    sudo yum install npm nodejs-grunt nodejs-grunt-cli

2. Clone the git repo, and change into the directory, and install the node modules required.

    git clone https://github.com/ryanlerch/mockups-getfedora.git
    cd mockups-getfedora/
    npm install

3. Build the site. the Built site will be in the `build/` directory:

    grunt 

4. (optional) use `grunt watch` and the livereload [chrome]() or [firefox]() plugin to see your changes to to source dir show up in the build dir

    


