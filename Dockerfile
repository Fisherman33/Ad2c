		FROM centos:latest
		MAINTAINER Name Here <ad2c@localhost>
		RUN rpm -Uvh http://mirror.pnl.gov/epel/7/x86_64/e/epel-release-7-5.noarch.rpm1
		RUN yum install nodejs npm -y 
		COPY ./
		RUN cd / ; npm install
		EXPOSE 8080
		CMD ["node index.js", "/index.js"]
