#le_glitch

Just le glitch

##Requirements

Sicherstellen, dass Node.js und Ruby 2.x installiert sind.

###Ruby
Mit ```ruby -v``` in der Konsole prüfen ob Ruby installiert ist. Der Befehl sollte ungefähr folgende ausgabe zurückgeben ```ruby 2.0.0p247 (2013-06-27) [x64-mingw32]```. Sollte dies nicht der Fall sein, dann kann Node.js unter http://rubyinstaller.org/ herunterladen werden.

### Node.js
Mit ```npm -v``` in der Konsole prüfen ob Node.js installiert ist. Der Befehl sollte ungefähr folgende ausgabe zurückgeben ```1.3.11```. Sollte dies nicht der Fall sein, dann kann Node.js unter http://nodejs.org/ herunterladen werden.

###!Achtung
Wenn ihr erst jetzt Ruby und / oder Node.js installiert habt müsst ihr eure Konsole schließen und nochmals starten. Dies ist besonders unter Windows wichtig.

##Arbeitsumgebung vorbereiten

Nachdem alle Anforderungen installiert bzw. verfügbar sind muss über die Kommandozeile noch folegende Packete installiert werden.

### Grunt
Das Konsolenprogramm zu Grunt lässt sich schnell und unkompliziert via ```npm install -g grunt-cli``` installieren. Dabei muss man sich nicht im Projektverzeichnis befinden- Wenn alles richtig installiert wurde wird nach dem ausführen des Befehls ```grunt --version``` ungefähr folgende Ausgabe zurückgegeben ```npm install -g grunt-cli```.

### SASS

Neben Grunt wird auch SASS in diesem Projekt genutzt. Dies ist ganz einfach über folgendem Befehl zu installieren ```gem install sass```. Auch hier muss man sich nicht im Projektverzeichnissbefinden.

### Alle Abhängigkeiten automatisch installieren
Naviergiert ind das Projektverzeichniss, in unserem Fall in das Unterverzeichnis ````web/```. Anschließend wird ```npm install``` ausgeführt um alle in der package.json hinterlegten Abhängikeiten zu installieren.
