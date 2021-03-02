# PwnDoc Minded

A customized version of PwnDoc!! This is a pentest reporting application making it simple and easy to write your findings and generate a customizable Docx report.  
The main goal is to have more time to **Pwn** and less time to **Doc** by mutualizing data like vulnerabilities between users.

# Documentation
- [Installation](https://pwndoc.github.io/pwndoc/#/installation)
- [Data](https://pwndoc.github.io/pwndoc/#/data)
- [Vulnerabilities](https://pwndoc.github.io/pwndoc/#/vulnerabilities)
- [Audits](https://pwndoc.github.io/pwndoc/#/audits)
- [Templating](https://pwndoc.github.io/pwndoc/#/docxtemplate)

# Installazione Rapida
1) git clone https://github.com/c0mix/pwndoc_minded.git
2) cd pwndoc_minded && sudo docker-compose up -d --build
3) aspettare che faccia tutto nel mentre recuperare gli script python dalla folder syncthing "pwnDoc_Utils"
4) verificare che il sw sia in ascolto sulla porta https://localhost:8443 MA NON FARE NULLA!
5) caricare i dati e inizializzare con: python3 datapusher.py first
6) loggarsi al portale con le credenziali di default presenti in script e verificare di avere i dati all'interno del menu "Datas"
7) importare la reference con il comando: python3 referenceImporter.py '/{percorsosyncthing}/pwnDoc_Utils/reference'
8) dall'applicazione WEB, sezione Datas -> Template Caricare il template che serve Es. MAPT (si trovano sempre nella folder syncthing)
9) dall'applicazione WEB, sezione Datas -> Companies Creare il vostro cliente con il suo LOGO
10) creare un nuovo audit per partire con il report!
