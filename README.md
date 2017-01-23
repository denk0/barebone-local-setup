<h2>Requirements:</h2>
<ul>
    <li>git 2.9.3+</li>
    <li>node.js 7.4.0+</li>
    <li>Docker 1.12.5+</li>
</ul>
<br>
<h2>Usage</h2>
<ol>
    <li>Create folder for storing all projects.</li>
    <li>Place setup.js (or setup-windows.js) there.</li>
    <li>Place <a target="_blank" href="http://git.beetroot.se/vromanenko/project-local-setup/blob/master/install.js"></a> (or <a target="_blank" href="http://git.beetroot.se/vromanenko/project-local-setup/blob/master/install-windows.js"></a>) there.</li>
    <li>Run `node setup` in your projects folder.</li>
</ol>
<br>
<h2>Structure</h2>
├── setup.js</em>
├── mysql
│   ├── application.php
│   └── environments
│       ├── development.php
│       ├── staging.php
│       └── production.php
└── sites
    ├── install.js
    └── client_project
        ├── wp-admin
        ├── wp-content
        ├── wp-includes
        ├── wp-database
        └── *.* files