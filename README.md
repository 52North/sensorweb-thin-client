# Helgoland

## Description

### Web-Based Visualization of Observation Data

**Enabling exploration, analysis and visualization of sensor web data**

This lightweight web application enables the exploration, visualization and analysis of sensor web data in various fields of use, e.g. hydrology, meteorology, environmental monitoring, traffic management. You can:

- explore stations or mobile sensor platforms in a map,
- select time series by a list selection,
- visualize and navigate through time series data, trajectory data, profile measurements,
- create favorites of selected time series,
- export visualized data as CSV files.

The application can connect to different Sensor Web endpoints (via 52°North Helgoland API). These endpoints provide a thin access layer to sensor data (e.g. offered by SOS servers'databases) via RESTful Web binding with different output formats.

This software component is based on the Helgoland Toolbox. It integrates the different toolbox modules into a viewing applications that can be easily customized to the requirements of specific users.

**Features:**

- access to SOS instances via REST-APIs (supports OGC SOS spec...)
- diagram view of multiple time series, temporal zooming & panning...
- data export (CSV)
  <!-- * Combination w/ R... -->

**Key Technologies:**

- [JavaScript](https://www.javascript.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Angular](https://angular.io/)
- [Leaflet](https://leafletjs.com/)
- [d3](https://d3js.org/)

**Benefits:**
- Lightweight, web-based visualization of observation data
- Exploration of Sensor Web data sources (SOS, SensorThings API)
- Support of different types of obsevation data (time sereis, trajectories, profiles)
- Data download (CSV)

## Quick Start (Configuration)

Download the latest version of [Helgoland](https://github.com/52North/helgoland/releases).

- Deploy the war-file of the client in your favorite web container (e.g. tomcat)
- Or a war-file can be build with the command `npm run bundle-war` of the current development
- Deploy as a static web page in a web server (e.g. apache)

Configure your client in the settings.json in the root folder. The main parameters are:

- `defaultProvider` - this is the default selected provider, when the user starts the client
- `datasetApis` - this is a list of all supported providers by the client

## References

The software is in operational use by the following organizations or within the following projects.
- [Federal Maritime and Hydrographic Agency (BSH)](https://www.bsh.de/)
- [Wupperverband](https://www.wupperverband.de/)
- [SeaDataCloud](https://www.seadatanet.org/About-us/SeaDataCloud)
- [WaCoDiS](https://wacodis.fbg-hsbo.de/)
- [MuDak-WRM](https://www.mudak-wrm.kit.edu/)

## Funding organizations/projects

The development of this client implementations was supported by several organizations and projects. Among other we would like to thank the following organisations and projects:

| Project/Logo | Description |
| :-------------: | :------------- |
| <a target="_blank" href="https://bmbf.de/"><img alt="BMBF" align="middle" width="172" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/bmbf_logo_en.png"/></a><a target="_blank" href="http://tamis.kn.e-technik.tu-dortmund.de/"><img alt="TaMIS - Das Talsperren-Mess-Informations-System" align="middle"  src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/TaMIS_Logo_small.png"/></a> |  The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="https://www.bmbf.de/"> German Federal Ministry of Education and Research</a> research project <a target="_blank" href="http://tamis.kn.e-technik.tu-dortmund.de/">TaMIS</a> (co-funded by the German Federal Ministry of Education and Research, programme Geotechnologien, under grant agreement no. 03G0854[A-D]) |
| <a target="_blank" href="https://www.jerico-ri.eu/"><img alt="JERICO-S3 - Science - Services- Sustainability" align="middle" width="172" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/jerico_s3.png" /></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="https://ec.europa.eu/programmes/horizon2020/">European Union’s Horizon 2020</a> research project <a target="_blank" href="https://www.jerico-ri.eu/">JERICO-S3</a> (co-funded by the European Commission under the grant agreement n&deg;871153) |
| <a target="_blank" href="http://www.nexosproject.eu/"><img alt="NeXOS - Next generation, Cost-effective, Compact, Multifunctional Web Enabled Ocean Sensor Systems Empowering Marine, Maritime and Fisheries Management" align="middle" width="172" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_nexos.png" /></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="http://cordis.europa.eu/fp7/home_en.html">European FP7</a> research project <a target="_blank" href="http://www.nexosproject.eu/">NeXOS</a> (co-funded by the European Commission under the grant agreement n&deg;614102) |
| <a target="_blank" href="https://bmbf.de/"><img alt="BMBF" align="middle"  src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/bmbf_logo_en.png"/></a><a target="_blank" href="https://colabis.de/"><img alt="COLABIS - Collaborative Early Warning Information Systems for Urban Infrastructures" align="middle"  src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/colabis.png"/></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="https://www.bmbf.de/"> German Federal Ministry of Education and Research</a> research project <a target="_blank" href="https://colabis.de/">COLABIS</a> (co-funded by the German Federal Ministry of Education and Research, programme Geotechnologien, under grant agreement no. 03G0852A) |
| <a target="_blank" href="https://www.bmvi.de/"><img alt="BMVI" align="middle" width="100" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/bmvi-logo-en.png"/></a><a target="_blank" href="https://www.bmvi.de/DE/Themen/Digitales/mFund/Ueberblick/ueberblick.html"><img alt="mFund" align="middle" width="100" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/mFund.jpg"/></a><a target="_blank" href="http://wacodis.fbg-hsbo.de/"><img alt="WaCoDis - Water management Copernicus services for the determination of substance inputs into waters and dams within the framework of environmental monitoring" align="middle" width="126" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/wacodis-logo.png"/></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="https://www.bmvi.de/"> German Federal Ministry of of Transport and Digital Infrastructure</a> research project <a target="_blank" href="http://wacodis.fbg-hsbo.de/">WaCoDis</a> (co-funded by the German Federal Ministry of Transport and Digital Infrastructure, programme mFund) |
| <a target="_blank" href="https://bmbf.de/"><img alt="BMBF" align="middle" width="100" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/bmbf_logo_neu_eng.png"/></a><a target="_blank" href="https://www.fona.de/"><img alt="FONA" align="middle" width="100" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/fona.png"/></a><a target="_blank" href="https://www.mudak-wrm.kit.edu/"><img alt="Multidisciplinary data acquisition as the key for a globally applicable water resource management (MuDak-WRM)" align="middle" width="100" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/mudak_wrm_logo.png"/></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="https://www.bmbf.de/"> German Federal Ministry of Education and Research</a> research project <a target="_blank" href="http://www.mudak-wrm.kit.edu/">MuDak-WRM</a> (co-funded by the German Federal Ministry of Education and Research, programme FONA) |
| <a target="_blank" href="https://www.seadatanet.org/About-us/SeaDataCloud/"><img alt="SeaDataCloud" align="middle" width="156" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/LOGO_SDC_Layer_opengraphimage.png"/></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="https://ec.europa.eu/programmes/horizon2020/">Horizon 2020</a> research project <a target="_blank" href="https://www.seadatanet.org/About-us/SeaDataCloud/">SeaDataCloud</a> (co-funded by the European Commission under the grant agreement n&deg;730960) |
| <a target="_blank" href="http://www.odip.org"><img alt="ODIP II - Ocean Data Interoperability Platform" align="middle" width="100" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/odip-logo.png"/></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="https://ec.europa.eu/programmes/horizon2020/">Horizon 2020</a> research project <a target="_blank" href="http://www.odip.org/">ODIP II</a> (co-funded by the European Commission under the grant agreement n&deg;654310) |
| <a target="_blank" href="http://www.wupperverband.de"><img alt="Wupperverband" align="middle" width="196" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_wv.jpg"/></a> | The <a target="_blank" href="http://www.wupperverband.de/">Wupperverband</a> for water, humans and the environment (Germany) |
| <a target="_blank" href="http://www.irceline.be/en"><img alt="Belgian Interregional Environment Agency (IRCEL - CELINE)" align="middle" width="130" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_irceline_no_text.png"/></a> | The <a href="http://www.irceline.be/en" target="_blank" title="Belgian Interregional Environment Agency (IRCEL - CELINE)">Belgian Interregional Environment Agency (IRCEL - CELINE)</a> is active in the domain of air quality (modelling, forecasts, informing the public on the state of their air quality, e-reporting to the EU under the air quality directives, participating in scientific research on air quality, etc.). IRCEL &mdash; CELINE is a permanent cooperation between three regional environment agencies: <a href="http://www.awac.be/" title="Agence wallonne de l&#39Air et du Climat (AWAC)">Agence wallonne de l'Air et du Climat (AWAC)</a>, <a href="http://www.ibgebim.be/" title="Bruxelles Environnement - Leefmilieu Brussel">Bruxelles Environnement - Leefmilieu Brussel</a> and <a href="http://www.vmm.be/" title="Vlaamse Milieumaatschappij (VMM)">Vlaamse Milieumaatschappij (VMM)</a>. |
| <a target="_blank" href="http://www.geowow.eu/"><img alt="GEOWOW - GEOSS interoperability for Weather, Ocean and Water" align="middle" width="172" src="https://raw.githubusercontent.com/52North/sos/develop/spring/views/src/main/webapp/static/images/funding/logo_geowow.png"/></a> | The development of this version of the 52&deg;North SOS was supported by the <a target="_blank" href="http://cordis.europa.eu/fp7/home_en.html">European FP7</a> research project <a href="https://cordis.europa.eu/project/id/282915" title="GEOWOW">GEOWOW</a> (co-funded by the European Commission under the grant agreement n&deg;282915) |

## Contact

<a href="https://github.com/janschulte">
  <img src="https://avatars1.githubusercontent.com/u/3830314?v=3&s=140" alt="Webpack and Angular 2" width="48" height="48"/>
</a>

<!-- ## Credits -->

## License

Helgoland is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

## How to contribute

This is a frontend component of the repository [sensorweb-client-core](https://github.com/52North/sensorweb-client-core).

It comprises:

- the styling files for the client
- the templates to define the html structure
- the images and fonts which are used in this client

### Requirements to develop or build the client

- git
- [nodejs](https://nodejs.org) and [npm](https://www.npmjs.com/)

### Get ready to start

#### Clone and install

- `git clone` this repository
- run `npm install` to get all dependencies

#### Start the client in the development mode

- `npm start` starts the client on [localhost:4200](http://localhost:4200).

#### Build the client

- `npm run build` bundles the client to the `dist/timeseries` folder. The content of this folder can be deployed on a web server.
<!-- - `npm run build` will also generates a war-file in `build`-folder. -->

<!--#### How to develop-->

<!-- See [here](https://github.com/52North/sensorweb-client-core#how-to-develop) for more informations. -->

<!--#### Configuration-->

<!-- See [here](https://github.com/52North/sensorweb-client-core#configuration) -->

<!--## Extensions (Backends, etc., z.B. SOS )
## Road Map/development plans (features, focus…)
## Architecture/Design
## JavaDoc
not needed
## XML Schemata
## contributor
see Github...

## Requirements-->


