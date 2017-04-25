Beetroot projects barebone setup script.
<h2>Requirements:</h2>
<ul>
    <li>git 2.9.3+</li>
    <li>node.js 7.4.0+</li>
    <li>Docker 1.12.5+</li>
</ul>
<h2>Important for Windows:</h2>
<p>Make sure to enable Hyper V in BIOS after installing Docker and share your C disk in shared folders Docker setting.</p>
<br>
<h2>Usage</h2>
<ol>
    <li>Create folder for storing all projects.</li>
    <li>Place <a target="_blank" href="http://git.beetroot.se/vromanenko/barebone-local-setup/raw/master/setup.js">setup.js</a> (or <a href="http://git.beetroot.se/vromanenko/barebone-local-setup/raw/master/setup-windows.js" target="_blank">setup-windows.js</a>) there.</li>
    <li>Place <a target="_blank" href="http://git.beetroot.se/vromanenko/project-local-setup/blob/master/install.js">install.js</a> (or <a target="_blank" href="http://git.beetroot.se/vromanenko/project-local-setup/blob/master/install-windows.js">install-windows.js</a>) there.</li>
    <li>Run <code>node setup</code> (or <code>node setup-windows</code>) in your projects folder.</li>
</ol>
<br>
<h2>Structure (after running setup script)</h2>
<pre style="background-color: #000; color: #fff;">
<code>├── setup.js (setup-windows.js)
├── mysql
│   └── docker container data
└── sites<br>
    ├── install.js (install-windows.js)
    └── client_project
        ├── wp-admin
        ├── wp-content
        ├── wp-includes
        ├── wp-database
        └── *.* files
</code>
</pre>
<br>
<h2>Ports</h2>
<p>Make sure you have these ports available on your machine.</p>
<ul>
    <li>mysql container - 3306 </li>
    <li>phpmyadmin - http://localhost:8888 </li>
    <li>wordpress sites - http://localhost:<8081-8887> (port will be autoincremented for every project. see terminal output after isntalling or check <code>docker ps -a</code>)</li>
</ul>
<br>
<h2>Useful links</h2>
<ul>
    <li><a href="https://www.atlassian.com/git/tutorials" target="_blank">Git documentation</a></li>
    <li><a href="https://docs.docker.com" target="_blank">Docker documentation</a></li>
</ul>