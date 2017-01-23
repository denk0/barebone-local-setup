const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');

let directories = new Promise((resolve, reject) => {
	function createDirectory(name) {
		if ( !fs.existsSync(`./${name}`) ) fs.mkdirSync(`./${name}`);
	}
	const directoryNames = ['mysql', 'sites'];
	directoryNames.forEach(name => createDirectory(name));

	let creatingDirectories = fs.rename('install.js', 'sites/install.js', () => {
		console.log('All set to run Docker containers.');
		resolve();
	});
});

let dockerMysqlContainer = new Promise((resolve, reject) => {
	directories.then(() => {
		console.log('Run Mysql container...');
		String.prototype.replaceAll = function(search, replacement) {
		    var target = this;
		    return target.split(search).join(replacement);
		};
		const PWD = __dirname.replace('C:', 'c').replaceAll('\\', '/');
		let dockerMysql = exec(`docker run --name mysql -v /${PWD}/mysql:/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=root -d mysql:latest`);
		dockerMysql.stderr.on('data', (data) => {
			console.log(`${data}`);
		});
		dockerMysql.on('close', (code) => {
			if (code === 0) {
				console.log(`Docker: Mysql container created successfully!`);
				resolve();
			} else {
				console.log(`Docker: Mysql container hasn't created!`);
				reject();
				process.exit();
			}
		});
	});
});

let dockerPhpmyadminContainer = new Promise((resolve, reject) => {
	dockerMysqlContainer.then(() => {
		console.log('Waiting 10 seconds and run PhpMyAdmin container...');
		setTimeout(function() {
			let dockerPhpmyadmin = exec(`docker run --name phpmyadmin -d --link mysql:db -p 8888:80 phpmyadmin/phpmyadmin`);
			dockerPhpmyadmin.stderr.on('data', (data) => {
				console.log(`${data}`);
			});
			dockerPhpmyadmin.on('close', (code) => {
				if (code === 0) {
					console.log(`Docker: Phpmyadmin container created successfully!`);
					resolve();
				} else {
					console.log(`Docker: Phpmyadmin container hasn't created!`);
					reject();
					process.exit();
				}
			});
		}, 10000);
	});
});