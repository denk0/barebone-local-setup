Download setup.sh from this repository and install.sh from http://git.beetroot.se/vromanenko/project-local-setup.<br>
Place them to your folder, where you will store all the projects (something like /your-user/beetroot-projects).<br>
Run `./setup.sh` from terminal.<br>
Run `docker run --name phpmyadmin -d --link mysql:db -p 8888:80 phpmyadmin/phpmyadmin` if you need phpmyadmin, access it on localhost:8888 after running.