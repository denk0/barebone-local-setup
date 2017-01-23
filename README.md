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
    <li>Place <a target="_blank" href="http://git.beetroot.se/vromanenko/project-local-setup/blob/master/install.js">install.js</a> (or <a target="_blank" href="http://git.beetroot.se/vromanenko/project-local-setup/blob/master/install-windows.js">install-windows.js</a>) there.</li>
    <li>Run `node setup` in your projects folder.</li>
</ol>
<br>
<h2>Structure (after running setup script)</h2>
<pre style="background-color: #000; color: #fff;">
<code>├── setup.js
├── mysql
│   └── docker container data
└── sites<br>
    ├── install.js
    └── client_project
        ├── wp-admin
        ├── wp-content
        ├── wp-includes
        ├── wp-database
        └── *.* files
</code>
</pre>