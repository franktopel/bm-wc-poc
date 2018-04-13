# BM Webcomponents Proof of Concept

Das Repository versucht, Fabricator als Asset-Building- und Preview-Umgebung mit StencilJS zusammenzubringen, welches ein Typescript-JSX-basierter Compiler für native Webcomponents ist.

## Steps to install

0. Terminal öffnen und in den Workspace-Folder wechseln
1. `git clone git@github.com:franktopel/bm-wc-poc.git bm-wc-poc` // legt Verzeichnis `/bm-wc-poc` im aktuellen Verzeichnis an
2. `cd bm-wc-poc`
3. `npm i` //  am besten mit Node 6.x
4. Neues Terminalfenster in `bw-wc-poc` öffnen
5. `cd stencil`
6. `npm i` // mindestens mit Node 6.11.1 oder höher

## Steps to run
1. Im Terminal ins Verzeichnis `bm-wc-poc` wechseln
2. `npm start` startet Fabricator unter `http://localhost:3000`
3. Zweites Terminalfenster öffnen und `cd stencil` eingeben
4. `npm run dev` startet den Development Server für StencilJS unter `http://localhost:3333` im ES6-Modus (benötigt Chrome, Safari, Opera oder einen anderen Webkit-basierten Browser)
5. Alternativ kann der Dev-Server ES5 bauen: `npm run dev --es5`
