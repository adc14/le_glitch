#le_glitch

Just le glitch

##Requirements

Sicherstellen, dass Node.js und Ruby 2.x installiert sind.

###Ruby
Mit ```ruby -v``` in der Konsole prüfen ob Ruby installiert ist. Der Befehl sollte ungefähr folgende Ausgabe zurückgeben ```ruby 2.0.0p247 (2013-06-27) [x64-mingw32]```. Sollte dies nicht der Fall sein, dann kann Node.js unter http://rubyinstaller.org/ heruntergeladen werden.

### Node.js
Mit ```npm -v``` in der Konsole prüfen ob Node.js installiert ist. Der Befehl sollte ungefähr folgende Ausgabe zurückgeben ```1.3.11```. Sollte dies nicht der Fall sein, dann kann Node.js unter http://nodejs.org/ herunterladen werden.

###!Achtung
Wenn ihr erst jetzt Ruby und / oder Node.js installiert habt müsst ihr eure Konsole schließen und nochmals starten. Dies ist besonders unter Windows wichtig.

##Arbeitsumgebung vorbereiten

Nachdem alle Anforderungen installiert bzw. verfügbar sind muss über die Kommandozeile noch folegende Packete installiert werden.

### Grunt
Das Konsolenprogramm zu Grunt lässt sich schnell und unkompliziert via ```npm install -g grunt-cli``` installieren. Dabei muss man sich nicht im Projektverzeichnis befinden- Wenn alles richtig installiert wurde wird nach dem ausführen des Befehls ```grunt --version``` ungefähr folgende Ausgabe zurückgegeben ```npm install -g grunt-cli```.

### Grunt Server
Das Projekt kann mit `grunt serve` initialisiert werden.

### SASS

Neben Grunt wird auch SASS in diesem Projekt genutzt. Dies ist ganz einfach über folgendem Befehl zu installieren ```gem install sass```. Auch hier muss man sich nicht im Projektverzeichniss befinden.

### Alle Abhängigkeiten automatisch installieren
Im Projektverzeichnis wird ```npm install``` ausgeführt um alle in der package.json hinterlegten Abhängigkeiten zu installieren.

##Ordnerstruktur

###Source
Alle Sourcen sind in entsprechende Ordnerstrukturen unterteilt. (siehe Folder ```source/```)

###Build
Der Build entspricht der Ordnerstruktur von ```source/``` mit Außnahme der HTML-Dateien. Diese werden direkt im Root ```build/``` abgelegt.

