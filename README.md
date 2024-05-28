# shmoo-todo
TODO App webbased for Desktop and mobile. 

Die Shmoon sind Wesen aus dem Comic [Li'l Aber](https://de.m.wikipedia.org/wiki/Li%E2%80%99l_Abner) von Al Capp. Sie stehen 
für das, was in Deutschland unter einer eierlegenden Wollmilchsau verstanden wird. Das einzelne Wesen heißt Shmoo, genau wie diese App. Wenn ein Shmoo von einem hungrigen Menschen betrachtet wird, stirb es sogleich voller Freude damit es verzehrt werden kann. Wollen wir hoffen, dass diese App auch so gut wird. 

Meinen aktuellen Recherchen nach zu urteilen, lassen sich aktuell mittels Elektron am einfachsten Plattformübergreifende Desktopanwendungen erstellen. Mittels Capacitor sollten sich Progressive Webanwendungen auf mobile und Elektron Plattformen bereitstellen lassen. Somit dürfte es möglich sein, auf Basis eines Repositories alle Plattformen zu bedienen. 

Da die Anwendungen auf mobilen Geräten in einem Browser bzw. einer View ausgeführt werden, ist beim Zugriff auf externe URLs mit CORS Problemen zu rechnen. Unter Elektron bestünde die Möglichkeit diese Zugriffe im Main Prozess (im Gegensatz zum Render Prozess) zu realisieren und so die CORS Problematik zu umgehen. Ich vermute aber, dass Capacitor hier eine einfache Transformation durchführen wird, welche ebenso auch auf der Elektron Plattform CORS Probleme erzeugen wird. 

Aus dieser technologischen Begrenzung heraus muss die Anwendung also möglichst ohne Zugriff auf externe URLs auskommen. 

Für die Speicherung der Daten ist eine verteilte Datenbank, die im Browser lauffähig ist, angedacht: z.B. Orbit DB. 

Alle Daten sollen verschlüsselt abgelegt werden und die Autorisierung soll rein über FIDO2 realisiert werden. 


